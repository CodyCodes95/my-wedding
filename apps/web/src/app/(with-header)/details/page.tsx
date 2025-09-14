import Image from "next/image";
import SectionDivider from "@/components/section-divider";
import CircularGallery from "@/components/CircularGallery";
import { ArcTimeline, type ArcTimelineItem } from "@/components/magicui/arc-timeline";
import {
	Heart,
	Home,
	Rocket,
	Star,
	Globe,
	Calendar,
	Camera,
	Gift,
} from "lucide-react";

export const dynamic = "force-static";

const RELATIONSHIP_TIMELINE: ArcTimelineItem[] = [
	{
		time: "2020",
		steps: [
			{
				icon: <Heart width={20} height={20} />,
				content: "First met through mutual friends at a coffee shop downtown - love at first sight!",
			},
		],
	},
	{
		time: "2021",
		steps: [
			{
				icon: <Camera width={20} height={20} />,
				content: "Our first official date - a romantic dinner followed by stargazing in the park.",
			},
			{
				icon: <Globe width={20} height={20} />,
				content: "First vacation together to the mountains - discovered our shared love for adventure.",
			},
		],
	},
	{
		time: "2022",
		steps: [
			{
				icon: <Home width={20} height={20} />,
				content: "Moved in together and adopted our first pet - creating our little family.",
			},
			{
				icon: <Star width={20} height={20} />,
				content: "Said 'I love you' for the first time during a sunset walk on the beach.",
			},
		],
	},
	{
		time: "2023",
		steps: [
			{
				icon: <Rocket width={20} height={20} />,
				content: "Started planning our future together and began looking at rings.",
			},
			{
				icon: <Gift width={20} height={20} />,
				content: "Celebrated our third anniversary with a surprise weekend getaway.",
			},
		],
	},
	{
		time: "2024",
		steps: [
			{
				icon: <Heart width={20} height={20} />,
				content: "The proposal! A magical moment at our favorite spot where we first met.",
			},
			{
				icon: <Calendar width={20} height={20} />,
				content: "Started planning our dream wedding and chose October 26, 2026 as our special date.",
			},
		],
	},
	{
		time: "2025",
		steps: [
			{
				icon: <Globe width={20} height={20} />,
				content: "Engaged bliss - traveling and making memories while planning our big day.",
			},
		],
	},
	{
		time: "2026",
		steps: [
			{
				icon: <Star width={20} height={20} />,
				content: "Our wedding day - celebrating our love story with family and friends!",
			},
		],
	},
];

export default function DetailsPage() {
	return (
		<div className="bg-background">
			{/* Hero Section */}
			<section className="relative min-h-[600px] flex flex-col items-center justify-start pt-12 text-center">
				<Image
					src="/hero.png"
					alt="Wedding Hero Background"
					fill
					priority
					className="object-cover"
				/>
				<div className="relative z-10 flex flex-col items-center gap-6">
					<div className="text-primary text-lg font-medium tracking-wider">
						– 10.26.2026 –
					</div>
					<h1 className="text-6xl md:text-8xl font-light text-primary leading-none">
						Cody & Ash
					</h1>
					<p className="text-xl text-primary font-light italic">
						are gettin married!
					</p>
				</div>
			</section>

			{/* Details Section */}
			<section id="details" className="py-16">
				<div className="container mx-auto max-w-4xl px-4">
					<h2 className="text-4xl font-light text-center mb-8 text-primary">Details</h2>
					<div className="grid md:grid-cols-2 gap-8">
						<div className="text-center">
							<h3 className="text-2xl font-medium mb-4">When</h3>
							<p className="text-lg">October 26, 2026</p>
							<p className="text-muted-foreground">4:00 PM - 11:00 PM</p>
						</div>
						<div className="text-center">
							<h3 className="text-2xl font-medium mb-4">Where</h3>
							<p className="text-lg">Venue Name</p>
							<p className="text-muted-foreground">123 Wedding Lane<br />City, State 12345</p>
						</div>
					</div>
				</div>
			</section>

			<SectionDivider />

			{/* Our Story Timeline Section */}
			<section id="about" className="py-16">
				<div className="container mx-auto max-w-6xl px-4">
					<h2 className="text-4xl font-light text-center mb-12 text-primary">Our Story</h2>

					<div className="relative" style={{ height: '800px' }}>
						<ArcTimeline
							className={
								"[--step-line-active-color:oklch(0.4365_0.1044_156.7556)] dark:[--step-line-active-color:oklch(0.4365_0.1044_156.7556)]" +
								" [--step-line-inactive-color:#b1b1b1] dark:[--step-line-inactive-color:#737373]" +
								" [--placeholder-line-color:#a1a1a1] dark:[--placeholder-line-color:#737373]" +
								" [--icon-active-color:oklch(0.4365_0.1044_156.7556)] dark:[--icon-active-color:oklch(0.4365_0.1044_156.7556)]" +
								" [--icon-inactive-color:#a3a3a3] dark:[--icon-inactive-color:#a3a3a3]" +
								" [--time-active-color:oklch(0.4365_0.1044_156.7556)] dark:[--time-active-color:oklch(0.4365_0.1044_156.7556)]" +
								" [--time-inactive-color:#a3a3a3] dark:[--time-inactive-color:#a3a3a3]" +
								" [--description-color:#555555] dark:[--description-color:#d4d4d4]"
							}
							data={RELATIONSHIP_TIMELINE}
							defaultActiveStep={{ time: "2026", stepIndex: 0 }}
							arcConfig={{
								circleWidth: 4000,
								angleBetweenMinorSteps: 0.5,
								lineCountFillBetweenSteps: 6,
								boundaryPlaceholderLinesCount: 40,
							}}
						/>
					</div>
				</div>
			</section>

			<SectionDivider />

			{/* Travel Details Section */}
			<section id="travel" className="py-16">
				<div className="container mx-auto max-w-4xl px-4">
					<h2 className="text-4xl font-light text-center mb-8 text-primary">Travel Details</h2>
					<div className="grid md:grid-cols-2 gap-8">
						<div>
							<h3 className="text-2xl font-medium mb-4">Getting There</h3>
							<p className="text-muted-foreground mb-4">
								Details about the nearest airports, driving directions,
								and transportation options will be provided here.
							</p>
							<h4 className="text-lg font-medium mb-2">By Air</h4>
							<p className="text-muted-foreground mb-4">
								Nearest airports and transportation from airports.
							</p>
							<h4 className="text-lg font-medium mb-2">By Car</h4>
							<p className="text-muted-foreground">
								Driving directions and parking information.
							</p>
						</div>
						<div>
							<h3 className="text-2xl font-medium mb-4">Local Transportation</h3>
							<p className="text-muted-foreground">
								Information about shuttle services, rideshare options,
								and local transportation will be shared here closer
								to the wedding date.
							</p>
						</div>
					</div>
				</div>
			</section>

			<SectionDivider />

			{/* Accommodation Section */}
			<section id="accommodation" className="py-16">
				<div className="container mx-auto max-w-6xl px-4">
					<h2 className="text-4xl font-light text-center mb-8 text-primary">Accommodation</h2>
					<div className="space-y-8">
						<div className="text-center">
							<h3 className="text-2xl font-medium mb-4">Recommended Hotels</h3>
							<p className="text-muted-foreground mb-8">
								We've reserved room blocks at the following hotels for your convenience. Scroll through to see details on each.
							</p>
						</div>
						<div style={{ height: '600px', position: 'relative' }}>
							<CircularGallery 
								bend={3} 
								textColor="#ffffff" 
								borderRadius={0.05} 
								scrollEase={0.02}
							/>
						</div>
					</div>
				</div>
			</section>

			<SectionDivider />

			{/* FAQs Section */}
			<section id="faqs" className="py-16">
				<div className="container mx-auto max-w-4xl px-4">
					<h2 className="text-4xl font-light text-center mb-8 text-primary">FAQs</h2>
					<div className="space-y-8 max-w-2xl mx-auto">
						<div>
							<h3 className="text-xl font-medium mb-2">What should I wear?</h3>
							<p className="text-muted-foreground">
								Dress code information will be provided here.
							</p>
						</div>
						<div>
							<h3 className="text-xl font-medium mb-2">Will there be dancing?</h3>
							<p className="text-muted-foreground">
								Information about entertainment and reception activities.
							</p>
						</div>
						<div>
							<h3 className="text-xl font-medium mb-2">Can I bring a plus-one?</h3>
							<p className="text-muted-foreground">
								Plus-one policy and RSVP instructions.
							</p>
						</div>
						<div>
							<h3 className="text-xl font-medium mb-2">Are children welcome?</h3>
							<p className="text-muted-foreground">
								Information about children at the wedding.
							</p>
						</div>
						<div>
							<h3 className="text-xl font-medium mb-2">What about dietary restrictions?</h3>
							<p className="text-muted-foreground">
								How to communicate dietary needs and menu information.
							</p>
						</div>
					</div>
				</div>
			</section>

			<SectionDivider />

			{/* RSVP Section */}
			<section id="rsvp" className="py-16">
				<div className="container mx-auto max-w-4xl px-4 text-center">
					<h2 className="text-4xl font-light mb-8 text-primary">RSVP</h2>
					<p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
						Please let us know if you can join us for our special day.
						Your response is requested by [RSVP Date].
					</p>
					<div className="bg-muted/50 rounded-lg p-8 max-w-md mx-auto">
						<p className="text-muted-foreground mb-4">
							RSVP form will be available here closer to the wedding date.
						</p>
						<p className="text-sm text-muted-foreground">
							For now, please save the date!
						</p>
					</div>
				</div>
			</section>

			{/* Footer spacing */}
			<div className="pb-16" />
		</div>
	);
}


