'use client';

import {
  Calendar,
  Camera,
  Gift,
  Globe,
  Heart,
  Home,
  Rocket,
  Star,
} from 'lucide-react';
import Image from 'next/image';
import { useCallback, useMemo, useState } from 'react';
import { AnimatedTestimonials } from '@/components/ui/animated-testimonials';
import DomeGallery from '@/components/DomeGallery';
import {
  ArcTimeline,
  type ArcTimelineItem,
} from '@/components/magicui/arc-timeline';
import SectionDivider from '@/components/section-divider';
import RsvpForm from '@/components/rsvp-form';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const RELATIONSHIP_TIMELINE: ArcTimelineItem[] = [
  {
    time: '2020',
    steps: [
      {
        icon: <Heart height={20} width={20} />,
        content:
          'First met through mutual friends at a coffee shop downtown - love at first sight!',
      },
    ],
  },
  {
    time: '2021',
    steps: [
      {
        icon: <Camera height={20} width={20} />,
        content:
          'Our first official date - a romantic dinner followed by stargazing in the park.',
      },
      {
        icon: <Globe height={20} width={20} />,
        content:
          'First vacation together to the mountains - discovered our shared love for adventure.',
      },
    ],
  },
  {
    time: '2022',
    steps: [
      {
        icon: <Home height={20} width={20} />,
        content:
          'Moved in together and adopted our first pet - creating our little family.',
      },
      {
        icon: <Star height={20} width={20} />,
        content:
          "Said 'I love you' for the first time during a sunset walk on the beach.",
      },
    ],
  },
  {
    time: '2023',
    steps: [
      {
        icon: <Rocket height={20} width={20} />,
        content:
          'Started planning our future together and began looking at rings.',
      },
      {
        icon: <Gift height={20} width={20} />,
        content:
          'Celebrated our third anniversary with a surprise weekend getaway.',
      },
    ],
  },
  {
    time: '2024',
    steps: [
      {
        icon: <Heart height={20} width={20} />,
        content:
          'The proposal! A magical moment at our favorite spot where we first met.',
      },
      {
        icon: <Calendar height={20} width={20} />,
        content:
          'Started planning our dream wedding and chose October 26, 2026 as our special date.',
      },
    ],
  },
  {
    time: '2025',
    steps: [
      {
        icon: <Globe height={20} width={20} />,
        content:
          'Engaged bliss - traveling and making memories while planning our big day.',
      },
    ],
  },
  {
    time: '2026',
    steps: [
      {
        icon: <Star height={20} width={20} />,
        content:
          'Our wedding day - celebrating our love story with family and friends!',
      },
    ],
  },
];

// Images for the Dome Gallery
const OUR_PHOTOS = [
  '/us/1.jpg',
  '/us/2.jpg',
  '/us/10.jpg',
  '/us/11.jpg',
  '/us/12.jpg',
  '/us/13.jpg',
  '/us/14.jpg',
  '/us/15.jpg',
  '/us/16.jpg',
  '/us/17.jpg',
  '/us/18.jpg',
  '/us/19.jpg',
  '/us/20.jpg',
  '/us/21.jpg',
];

type Hotel = {
  image: string;
  text: string;
  name: string;
  address: string;
  phone: string;
  website: string;
  blockCode: string;
  rate: string;
  amenities: string[];
  description: string;
};

// Getting there data
type StepId = 1 | 2 | 3;

type AirportOption = {
  code: string;
  name: string;
  country: string;
  distanceKm: number;
  driveTimeMin: number;
  notes: string;
};

type TransportOption = {
  mode: string;
  duration: string;
  cost: string;
  notes: string;
};

const AIRPORTS: AirportOption[] = [
  {
    code: 'LJU',
    name: 'Ljubljana Jože Pučnik',
    country: 'Slovenia',
    distanceKm: 36,
    driveTimeMin: 35,
    notes:
      'Closest airport to Bled. Frequent seasonal connections across Europe.',
  },
  {
    code: 'KLU',
    name: 'Klagenfurt',
    country: 'Austria',
    distanceKm: 80,
    driveTimeMin: 65,
    notes: 'Good regional option. Border crossing via Karawanks tunnel.',
  },
  {
    code: 'ZAG',
    name: 'Zagreb',
    country: 'Croatia',
    distanceKm: 200,
    driveTimeMin: 150,
    notes: 'Major hub in the region with competitive fares.',
  },
  {
    code: 'TRS',
    name: 'Trieste',
    country: 'Italy',
    distanceKm: 170,
    driveTimeMin: 130,
    notes: 'Smaller Italian airport; useful depending on routes.',
  },
  {
    code: 'VCE',
    name: 'Venice Marco Polo',
    country: 'Italy',
    distanceKm: 290,
    driveTimeMin: 200,
    notes: 'Large international airport; longer transfer but many flights.',
  },
];

const FROM_LJU: TransportOption[] = [
  {
    mode: 'Shuttle (shared or private)',
    duration: '30–40 min',
    cost: '≈ €15–€30 pp (shared) / from €90 per car (private)',
    notes: 'Door-to-door. Book ahead for late arrivals.',
  },
  {
    mode: 'Taxi',
    duration: '30–40 min',
    cost: '≈ €60–€90 per car',
    notes: 'Available at terminal. Confirm fare before departure.',
  },
  {
    mode: 'Bus (airport → Bled)',
    duration: '40–60 min',
    cost: '≈ €5–€10 pp',
    notes: 'Direct routes operate regularly; check latest schedules.',
  },
  {
    mode: 'Car rental',
    duration: '30–35 min drive',
    cost: 'Varies by provider/date',
    notes: 'Simple route via A2. Ensure valid motorway vignette.',
  },
];

// Removed city-center table per request

const HUBS: { code: string; city: string; country: string }[] = [
  { code: 'VIE', city: 'Vienna', country: 'Austria' },
  { code: 'MUC', city: 'Munich', country: 'Germany' },
  { code: 'FRA', city: 'Frankfurt', country: 'Germany' },
  { code: 'VCE', city: 'Venice', country: 'Italy' },
];

const SOURCES: { label: string; url: string }[] = [
  { label: 'Bled.si – How to get to Bled', url: 'https://www.bled.si/en/information/how-to-get-to-bled/20190920131934/by-plane/' },
  { label: 'Ljubljana Airport (LJU)', url: 'https://www.lju-airport.si/en' },
  { label: 'Luxury-Travel.info – Airport transfer options', url: 'https://www.luxury-travel.info/ljubljana-to-bled/' },
];

const HOTELS: Hotel[] = [
  {
    image: 'https://picsum.photos/seed/hotel1/800/600',
    text: 'The Grand Plaza',
    name: 'The Grand Plaza Hotel',
    address: '123 Main Street, City, State 12345',
    phone: '(555) 123-4567',
    website: 'grandplaza.com',
    blockCode: 'SMITH-WEDDING',
    rate: '$189/night',
    amenities: [
      'Free WiFi',
      'Pool & Spa',
      'Fitness Center',
      'Restaurant',
      'Valet Parking',
    ],
    description:
      'Elegant downtown hotel featuring spacious rooms with city views, award-winning dining, and premium amenities. Just 5 minutes from the wedding venue.',
  },
  {
    image: 'https://picsum.photos/seed/hotel2/800/600',
    text: 'Garden Inn & Suites',
    name: 'Garden Inn & Suites',
    address: '456 Park Avenue, City, State 12345',
    phone: '(555) 234-5678',
    website: 'gardeninn.com',
    blockCode: 'SMITH-BLOCK',
    rate: '$149/night',
    amenities: [
      'Complimentary Breakfast',
      'Free Parking',
      'Business Center',
      'Pet Friendly',
    ],
    description:
      'Comfortable and modern hotel surrounded by beautiful gardens. Perfect for families and extended stays with spacious suites and excellent amenities.',
  },
  {
    image: 'https://picsum.photos/seed/hotel3/800/600',
    text: 'Riverside Lodge',
    name: 'Riverside Lodge',
    address: '789 River Road, City, State 12345',
    phone: '(555) 345-6789',
    website: 'riversidelodge.com',
    blockCode: 'CODYASH2026',
    rate: '$169/night',
    amenities: [
      'Riverside Views',
      'Outdoor Terrace',
      'Continental Breakfast',
      'Free WiFi',
    ],
    description:
      'Charming boutique lodge overlooking the river with rustic elegance and personalized service. Features cozy rooms and stunning water views.',
  },
  {
    image: 'https://picsum.photos/seed/hotel4/800/600',
    text: 'Historic Manor',
    name: 'The Historic Manor',
    address: '321 Heritage Lane, City, State 12345',
    phone: '(555) 456-7890',
    website: 'historicmanor.com',
    blockCode: 'WEDDING2026',
    rate: '$199/night',
    amenities: [
      'Historic Architecture',
      'Fine Dining',
      'Concierge Service',
      'Spa Services',
    ],
    description:
      'A beautifully restored historic property offering luxury accommodations with old-world charm and modern conveniences.',
  },
];

export default function DetailsPage() {
  const [selectedHotel, setSelectedHotel] = useState<Hotel | null>(HOTELS[0]);
  const [activeStep, setActiveStep] = useState<StepId>(1);

  const handleHotelActiveChange = useCallback((index: number) => {
    setSelectedHotel(HOTELS[index % HOTELS.length]);
  }, []);

  const hotelTestimonials = useMemo(
    () =>
      HOTELS.map((hotel) => ({
        quote: hotel.description,
        name: hotel.name,
        designation: `${hotel.rate} • ${hotel.address}`,
        src: hotel.image,
      })),
    []
  );

  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="relative flex min-h-[600px] flex-col items-center justify-start pt-12 text-center">
        <Image
          alt="Wedding Hero Background"
          className="object-cover"
          fill
          priority
          src="/hero.png"
        />
        <div className="relative z-10 flex flex-col items-center gap-6">
          <div className="font-medium text-lg text-primary tracking-wider">
            – 10.26.2026 –
          </div>
          <h1 className="font-light text-6xl text-primary leading-none md:text-8xl">
            Cody & Ash
          </h1>
          <p className="font-light text-primary text-xl italic">
            are gettin married!
          </p>
        </div>
      </section>

      {/* Details Section */}
      <section className="py-16" id="details">
        <div className="container mx-auto max-w-4xl px-4">
          <h2 className="mb-8 text-center font-light text-4xl text-primary">
            Details
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="text-center">
              <h3 className="mb-4 font-medium text-2xl">When</h3>
              <p className="text-lg">October 26, 2026</p>
              <p className="text-muted-foreground">4:00 PM - 11:00 PM</p>
            </div>
            <div className="text-center">
              <h3 className="mb-4 font-medium text-2xl">Where</h3>
              <p className="text-lg">Venue Name</p>
              <p className="text-muted-foreground">
                123 Wedding Lane
                <br />
                City, State 12345
              </p>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Our Story Timeline Section */}
      <section className="py-16" id="about">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="mb-12 text-center font-light text-4xl text-primary">
            Our Story
          </h2>

          <div className="relative" >
            <ArcTimeline
              arcConfig={{
                circleWidth: 4000,
                angleBetweenMinorSteps: 0.5,
                lineCountFillBetweenSteps: 6,
                boundaryPlaceholderLinesCount: 40,
              }}
              className={
                '[--step-line-active-color:oklch(0.4365_0.1044_156.7556)] dark:[--step-line-active-color:oklch(0.4365_0.1044_156.7556)]' +
                '[--step-line-inactive-color:#b1b1b1] dark:[--step-line-inactive-color:#737373]' +
                '[--placeholder-line-color:#a1a1a1] dark:[--placeholder-line-color:#737373]' +
                '[--icon-active-color:oklch(0.4365_0.1044_156.7556)] dark:[--icon-active-color:oklch(0.4365_0.1044_156.7556)]' +
                '[--icon-inactive-color:#a3a3a3] dark:[--icon-inactive-color:#a3a3a3]' +
                '[--time-active-color:oklch(0.4365_0.1044_156.7556)] dark:[--time-active-color:oklch(0.4365_0.1044_156.7556)]' +
                '[--time-inactive-color:#a3a3a3] dark:[--time-inactive-color:#a3a3a3]' +
                '[--description-color:#555555] dark:[--description-color:#d4d4d4]'
              }
              data={RELATIONSHIP_TIMELINE}
              defaultActiveStep={{ time: '2026', stepIndex: 0 }}
            />
          </div>
        </div>
      </section>

      <div className="relative w-full" style={{ height: '80vh' }}>
        <DomeGallery
          fit={2}
          grayscale={false}
          imageBorderRadius="15px"
          images={OUR_PHOTOS}
          maxRadius={900}
          minRadius={400}
          openedImageBorderRadius="25px"
          openedImageHeight="500px"
          openedImageWidth="500px"
          overlayBlurColor="transparent"
        />
      </div>

      <SectionDivider />

      {/* Getting there Section */}
      <section className="py-16" id="getting-there">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="mb-8 text-center font-light text-4xl text-primary">
            Getting there
          </h2>
          <Card>
            <CardHeader>
              <CardTitle>Travel to Bled, Slovenia</CardTitle>
              <CardDescription>
                Practical ways to reach Bled for the wedding. Times and prices
                are approximate—please check current schedules.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-8 md:grid-cols-[260px_1fr]">
                {/* Stepper */}
                <div className="relative">
                  <div className="absolute left-4 top-6 bottom-6 hidden border-l md:block" />
                  <ol className="space-y-3" role="list">
                    {[1, 2, 3].map((step) => {
                      const label = step === 1 ? 'Get to Europe' : step === 2 ? 'Fly to Ljubljana (LJU)' : 'Get to Bled';
                      const selected = activeStep === step;
                      return (
                        <li className="relative" key={step}>
                          <button
                            aria-current={selected ? 'step' : undefined}
                            className={`flex w-full items-center gap-3 rounded-md px-3 py-2 text-left transition-colors ${selected ? 'bg-primary text-primary-foreground' : 'bg-background hover:bg-accent'}`}
                            onClick={() => setActiveStep(step as StepId)}
                            type="button"
                          >
                            <span className={`grid size-7 place-items-center rounded-full ${selected ? 'bg-primary-foreground text-primary' : 'bg-muted text-foreground'}`}>
                              {step}
                            </span>
                            <span className="font-medium">{label}</span>
                          </button>
                        </li>
                      );
                    })}
                  </ol>
                </div>

                {/* Step content */}
                <div>
                  {activeStep === 1 && (
                    <div>
                      <h3 className="mb-4 font-medium text-2xl">Step 1 – Get to Europe</h3>
                      <p className="mb-4 text-muted-foreground">
                        There are no direct flights from Australia to Bled (Bled doesn’t
                        have a major airport). Most guests will first fly into a
                        large European hub and connect onward.
                      </p>
                      <div className="mb-4 flex flex-wrap gap-2">
                        {HUBS.map((h) => (
                          <span
                            className="rounded-full border px-3 py-1 text-sm"
                            key={h.code}
                          >
                            {h.city} ({h.code}) • {h.country}
                          </span>
                        ))}
                      </div>
                      <p className="text-muted-foreground">
                        Choose the routing with the best schedule and fare. If you plan a
                        European stopover, consider arriving a day early to reduce
                        connection stress and jet lag.
                      </p>
                    </div>
                  )}

                  {activeStep === 2 && (
                    <div>
                      <h3 className="mb-4 font-medium text-2xl">Step 2 – Fly to Ljubljana Jože Pučnik Airport (LJU)</h3>
                      <p className="mb-3 text-muted-foreground">
                        LJU is Slovenia’s main airport and the closest to Bled (~36 km / ~35 min drive).
                        When booking, try to match connections with comfortable layovers—especially after
                        a long-haul sector.
                      </p>
                      <div className="rounded-lg bg-primary/5 p-4 text-sm text-muted-foreground">
                        Tip: If LJU fares are high, look at nearby airports like Vienna (VIE), Munich (MUC),
                        Venice (VCE) or Zagreb (ZAG) and continue to Bled by train/bus/car.
                      </div>
                    </div>
                  )}

                  {activeStep === 3 && (
                    <div>
                      <h3 className="mb-4 font-medium text-2xl">Step 3 – Get to Bled</h3>
                      <p className="mb-6 text-muted-foreground">
                        Once you’re in Slovenia or elsewhere in Europe, these are the most
                        popular ways to reach Bled.
                      </p>

                      <div className="mb-8">
                        <h4 className="mb-2 font-medium">From Ljubljana Airport (LJU) → Bled</h4>
                        <div className="overflow-x-auto">
                          <table className="w-full table-fixed border-collapse text-left">
                            <thead>
                              <tr className="border-b">
                                <th className="py-2 pr-4" scope="col">Travel mode</th>
                                <th className="py-2 pr-4" scope="col">Approx time</th>
                                <th className="py-2 pr-4" scope="col">Notes / cost-efficiency</th>
                              </tr>
                            </thead>
                            <tbody>
                              {FROM_LJU.map((o, idx) => (
                                <tr className="border-b last:border-0" key={idx}>
                                  <td className="py-3 pr-4 font-medium">{o.mode}</td>
                                  <td className="py-3 pr-4">{o.duration}</td>
                                  <td className="py-3 pr-4 text-muted-foreground">{o.notes} {o.cost ? `• ${o.cost}` : ''}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>

                      {/* Removed Ljubljana city table per request */}

                      <div className="rounded-lg bg-muted/40 p-4 text-muted-foreground text-sm">
                        <p className="mb-2 font-medium">Sources & further reading</p>
                        <ul className="list-disc space-y-1 pl-5">
                          {SOURCES.map((s) => (
                            <li key={s.url}>
                              <a className="underline underline-offset-4" href={s.url} rel="noopener noreferrer" target="_blank">
                                {s.label}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Our recommendation */}
          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Our recommendation</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                If you can turn this trip into a longer European holiday, do it.
                Fly into a city you&apos;re excited to visit—Switzerland, Germany,
                Austria, Italy, Croatia or Czechia are all nearby—spend as long
                as you like exploring, then rent a car and drive to Bled. From
                most neighboring regions it&apos;s only a few hours by road, and the
                journey is beautiful.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <SectionDivider />

      {/* Accommodation Section */}
      <section className="py-16" id="accommodation">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="mb-8 text-center font-light text-4xl text-primary">
            Accommodation
          </h2>
          <div className="space-y-8">
            <div className="text-center">
              <h3 className="mb-4 font-medium text-2xl">Recommended Hotels</h3>
   
   
            </div>
            <AnimatedTestimonials
              testimonials={hotelTestimonials}
              autoplay={false}
              onActiveChange={handleHotelActiveChange}
            />

            {/* Hotel Details */}
            {selectedHotel && (
              <div className="mx-auto mt-12 max-w-4xl">
                <div className="rounded-lg border bg-card p-8">
                  <div className="grid gap-8 md:grid-cols-2">
                    <div>
                      <h3 className="mb-4 font-medium text-2xl">
                        {selectedHotel.name}
                      </h3>
                      <p className="mb-4 text-muted-foreground">
                        {selectedHotel.description}
                      </p>

                      <div className="mb-6 space-y-3">
                        <div>
                          <strong className="text-sm">Address:</strong>
                          <p className="text-muted-foreground">
                            {selectedHotel.address}
                          </p>
                        </div>
                        <div>
                          <strong className="text-sm">Phone:</strong>
                          <p className="text-muted-foreground">
                            {selectedHotel.phone}
                          </p>
                        </div>
                        <div>
                          <strong className="text-sm">Website:</strong>
                          <p className="text-muted-foreground">
                            {selectedHotel.website}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="mb-6 rounded-lg bg-primary/5 p-6">
                        <h4 className="mb-2 font-medium">
                          Wedding Block Details
                        </h4>
                        <div className="space-y-2 text-sm">
                          <div>
                            <strong>Block Code:</strong>{' '}
                            {selectedHotel.blockCode}
                          </div>
                          <div>
                            <strong>Rate:</strong> {selectedHotel.rate}
                          </div>
                          <p className="mt-3 text-muted-foreground text-xs">
                            Mention the block code when booking to receive the
                            special wedding rate.
                          </p>
                        </div>
                      </div>

                      <div>
                        <h4 className="mb-3 font-medium">Amenities</h4>
                        <ul className="grid grid-cols-1 gap-2 text-muted-foreground text-sm">
                          {selectedHotel.amenities.map((amenity, index) => (
                            <li className="flex items-center" key={index}>
                              <span className="mr-3 h-2 w-2 rounded-full bg-primary" />
                              {amenity}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* FAQs Section */}
      <section className="py-16" id="faqs">
        <div className="container mx-auto max-w-4xl px-4">
          <h2 className="mb-8 text-center font-light text-4xl text-primary">
            FAQs
          </h2>
          <div className="mx-auto max-w-2xl space-y-8">
            <div>
              <h3 className="mb-2 font-medium text-xl">What should I wear?</h3>
              <p className="text-muted-foreground">
                Dress code information will be provided here.
              </p>
            </div>
            <div>
              <h3 className="mb-2 font-medium text-xl">
                Will there be dancing?
              </h3>
              <p className="text-muted-foreground">
                Information about entertainment and reception activities.
              </p>
            </div>
            <div>
              <h3 className="mb-2 font-medium text-xl">
                Can I bring a plus-one?
              </h3>
              <p className="text-muted-foreground">
                Plus-one policy and RSVP instructions.
              </p>
            </div>
            <div>
              <h3 className="mb-2 font-medium text-xl">
                Are children welcome?
              </h3>
              <p className="text-muted-foreground">
                Information about children at the wedding.
              </p>
            </div>
            <div>
              <h3 className="mb-2 font-medium text-xl">
                What about dietary restrictions?
              </h3>
              <p className="text-muted-foreground">
                How to communicate dietary needs and menu information.
              </p>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* RSVP Section */}
      <section className="py-16" id="rsvp">
        <div className="container mx-auto max-w-4xl px-4">
          <h2 className="mb-4 text-center font-light text-4xl text-primary">RSVP</h2>
          <p className="mx-auto mb-8 max-w-2xl text-center text-lg text-muted-foreground">
            Let us know if you can make it, add a plus one, and request a song!
          </p>
          <div className="mx-auto max-w-2xl rounded-lg border bg-card p-6">
            <RsvpForm />
          </div>
        </div>
      </section>

      {/* Footer spacing */}
      <div className="pb-16" />
    </div>
  );
}
