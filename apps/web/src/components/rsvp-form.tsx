'use client';

import { useState } from 'react';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import { useMutation } from 'convex/react';
import { api } from '@wedding/backend/convex/_generated/api';
import { AnimatePresence, motion } from 'framer-motion';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

const rsvpSchema = z
  .object({
    attending: z.enum(['yes', 'no'], {
      message: 'Please select if you are attending.',
    }),
    plusOne: z.boolean().default(false),
    plusOneName: z
      .string()
      .trim()
      .max(80, 'Please keep the name under 80 characters.')
      .optional()
      .or(z.literal('')),
    songRequest: z
      .string()
      .trim()
      .max(120, 'Please keep the song request under 120 characters.')
      .optional()
      .or(z.literal('')),
  })
  .superRefine((val, ctx) => {
    if (val.plusOne) {
      const name = (val.plusOneName ?? '').trim();
      if (!name) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Please provide your plus one's name.",
          path: ['plusOneName'],
        });
      }
    }
  });

export default function RsvpForm() {
  const submitRsvp = useMutation(api.rsvps.submit);
  const [attending, setAttending] = useState<'yes' | 'no' | ''>('');
  const [plusOne, setPlusOne] = useState(false);
  const [plusOneName, setPlusOneName] = useState('');
  const [songRequest, setSongRequest] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const parsed = rsvpSchema.safeParse({
      attending: attending || undefined,
      plusOne,
      plusOneName,
      songRequest,
    });

    if (!parsed.success) {
      const first = parsed.error.issues[0];
      toast.error(first.message);
      return;
    }

    try {
      setSubmitting(true);
      await submitRsvp({
        attending: attending === 'yes',
        plusOne,
        plusOneName: plusOne ? plusOneName.trim() || undefined : undefined,
        songRequest: songRequest.trim() || undefined,
      });
      toast.success('Thanks! Your RSVP has been recorded.');
    } catch (error) {
      toast.error('Something went wrong. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  const showDetails = attending === 'yes';

  return (
    <form onSubmit={onSubmit} className="grid gap-6">
      <fieldset className="grid gap-3">
        <legend className="mb-1 font-medium text-sm">Will you attend?</legend>
        <RadioGroup
          aria-invalid={attending === ''}
          className="grid gap-2 sm:grid-cols-2"
          onValueChange={(v) => setAttending(v as 'yes' | 'no')}
          value={attending}
        >
          <div className="flex items-center gap-3 rounded-md border border-input bg-white p-3 transition-colors hover:bg-accent/40">
            <RadioGroupItem id="attend-yes" required value="yes" />
            <Label className="cursor-pointer" htmlFor="attend-yes">
              <span className="text-sm">Yes, I will be there</span>
            </Label>
          </div>
          <div className="flex items-center gap-3 rounded-md border border-input bg-white p-3 transition-colors hover:bg-accent/40">
            <RadioGroupItem id="attend-no" value="no" />
            <Label className="cursor-pointer" htmlFor="attend-no">
              <span className="text-sm">No, I can't make it</span>
            </Label>
          </div>
        </RadioGroup>
      </fieldset>

      <AnimatePresence initial={false} mode="wait">
        {showDetails ? (
          <motion.div
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            initial={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="grid gap-6 overflow-hidden"
            key="details"
          >
            <div className="grid gap-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="plus-one-toggle">Add a plus one?</Label>
                <button
                  aria-controls="plus-one-section"
                  aria-expanded={plusOne}
                  className="rounded-full border border-input bg-background px-3 py-1 text-xs font-medium transition-colors hover:bg-accent/40"
                  id="plus-one-toggle"
                  onClick={(ev) => {
                    ev.preventDefault();
                    setPlusOne((p) => !p);
                  }}
                  type="button"
                >
                  {plusOne ? 'Remove' : 'Add'} plus one
                </button>
              </div>

              <AnimatePresence initial={false} mode="popLayout">
                {plusOne ? (
                  <motion.div
                    aria-hidden={!plusOne}
                    id="plus-one-section"
                    className="grid gap-2"
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Label htmlFor="plusOneName">Plus one name</Label>
                    <Input
                      aria-invalid={plusOne && plusOneName.trim() === ''}
                      id="plusOneName"
                      onChange={(e) => setPlusOneName(e.target.value)}
                      placeholder="Full name"
                      value={plusOneName}
                    />
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </div>

            <div className="grid gap-2">
              <Label htmlFor="songRequest">Song request (optional)</Label>
              <Input
                id="songRequest"
                maxLength={120}
                onChange={(e) => setSongRequest(e.target.value)}
                placeholder="Share a song to get you on the dance floor"
                value={songRequest}
              />
              <p className="text-xs text-muted-foreground">Max 120 characters</p>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <div className="flex justify-end">
        <Button disabled={submitting} type="submit">
          {submitting ? 'Submitting…' : 'Submit RSVP'}
        </Button>
      </div>
    </form>
  );
}


