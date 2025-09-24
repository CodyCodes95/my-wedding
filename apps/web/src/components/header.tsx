'use client';
import Image from 'next/image';
import { Button } from './ui/button';

export default function Header() {
  const links = [
    { to: '#details', label: 'Details' },
    { to: '#about', label: 'Our Story' },
    { to: '#getting-there', label: 'Getting there' },
    { to: '#accommodation', label: 'Accommodation' },
  ];

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();

    // If we're not on the details page, navigate there first
    if (window.location.pathname !== '/details') {
      window.location.href = `/details${targetId}`;
      return;
    }

    // If we're already on the details page, scroll to the target
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      const headerHeight = 80; // Approximate header height
      const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="bg-[#f8f6f3]">
      <div className="flex items-center justify-between px-6 pt-4">
        {/* Left Navigation - Hidden on mobile */}
        <nav className="hidden gap-6 md:flex">
          {links.map(({ to, label }) => {
            return (
              <a
                className="font-medium text-primary text-sm transition-colors hover:text-primary/80 cursor-pointer"
                href={to}
                key={to}
                onClick={(e) => handleSmoothScroll(e, to)}
              >
                {label}
              </a>
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
          <a href="/details#rsvp" onClick={(e) => handleSmoothScroll(e, '#rsvp')}>
            <Button className="bg-primary px-8 py-2 font-medium text-primary-foreground text-sm hover:bg-primary/90">
              RSVP
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}
