'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from './ui/button';

export default function Header() {
  const links = [
    { to: '#details', label: 'Details' },
    { to: '#about', label: 'Our Story' },
    { to: '#getting-there', label: 'Getting there' },
    { to: '#accommodation', label: 'Accommodation' },
    { to: '#faqs', label: 'FAQs' },
  ];

  return (
    <div className="bg-[#f8f6f3]">
      <div className="flex items-center justify-between px-6 pt-4">
        {/* Left Navigation - Hidden on mobile */}
        <nav className="hidden gap-6 md:flex">
          {links.map(({ to, label }) => {
            return (
              <Link
                className="font-medium text-primary text-sm transition-colors hover:text-primary/80"
                href={to}
                key={to}
              >
                {label}
              </Link>
            );
          })}
        </nav>

        {/* Right Logo + RSVP Button */}
        <div className="ml-auto flex items-center gap-4 md:ml-0">
          <div className="flex-shrink-0">
            <Image
              alt="Wedding Logo"
              className="object-contain"
              height={10}
              src="/outline-no-bg.png"
              width={140}
            />
          </div>
          <Link href="/details#rsvp">
            <Button className="bg-primary px-8 py-2 font-medium text-primary-foreground text-sm hover:bg-primary/90">
              RSVP
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
