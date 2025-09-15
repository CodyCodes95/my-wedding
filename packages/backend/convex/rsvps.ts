import { v } from 'convex/values';
import { mutation } from './_generated/server';

export const submit = mutation({
  args: {
    fullName: v.string(),
    attending: v.boolean(),
    plusOne: v.boolean(),
    plusOneName: v.optional(v.string()),
    songRequest: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const docId = await ctx.db.insert('rsvps', {
      fullName: args.fullName,
      attending: args.attending,
      plusOne: args.plusOne,
      plusOneName: args.plusOneName,
      songRequest: args.songRequest,
      createdAt: Date.now(),
    });
    return { id: docId };
  },
});


