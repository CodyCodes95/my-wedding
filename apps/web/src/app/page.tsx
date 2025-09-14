import Image from 'next/image';
import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export default function Home() {
  return (
    <main className="relative h-screen w-full overflow-hidden">
      {/* Split Image Layout */}
      <div className="flex h-full">
        {/* Ash - Left Half */}
        <div className="relative w-1/2">
          <Image
            alt="Ash"
            className="object-cover"
            fill
            priority
            sizes="50vw"
            src="/ash.jpg"
          />
        </div>

        {/* Cody - Right Half */}
        <div className="relative w-1/2">
          <Image
            alt="Cody"
            className="object-cover"
            fill
            priority
            sizes="50vw"
            src="/cody.jpg"
          />
        </div>
      </div>

      {/* Centered Overlay Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/20">
        <h1 className="text-center font-bold text-5xl text-white tracking-tight drop-shadow-lg sm:text-6xl lg:text-7xl">
          We're getting
          <br />
          married!
        </h1>
        <div className="mt-8">
          <Link
            prefetch={true}
            className={cn(
              buttonVariants({ size: 'lg' }),
              'bg-white text-black hover:bg-white/90'
            )}
            href="/details"
          >
            Enter
          </Link>
        </div>
      </div>
    </main>
  );
}
