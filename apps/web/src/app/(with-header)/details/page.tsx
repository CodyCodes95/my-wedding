import Image from "next/image";
import SectionDivider from "@/components/section-divider";
import CircularGallery from "@/components/CircularGallery";

export const dynamic = "force-static";

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

			{/* About Us Section */}
			<section id="about" className="py-16">
				<div className="container mx-auto max-w-4xl px-4">
					<h2 className="text-4xl font-light text-center mb-8 text-primary">About Us</h2>
					<div className="grid md:grid-cols-2 gap-8">
						<div className="text-center">
							<h3 className="text-2xl font-medium mb-4">Cody</h3>
							<p className="text-muted-foreground">
								Tell us about Cody here - his interests, background, 
								and what makes him special. This is where we'll share 
								his story and what he brings to this beautiful partnership.
							</p>
						</div>
						<div className="text-center">
							<h3 className="text-2xl font-medium mb-4">Ash</h3>
							<p className="text-muted-foreground">
								Tell us about Ash here - her interests, background,
								and what makes her special. This is where we'll share
								her story and what she brings to this beautiful partnership.
							</p>
						</div>
					</div>
					<div className="mt-12 text-center max-w-2xl mx-auto">
						<h3 className="text-2xl font-medium mb-4">Our Story</h3>
						<p className="text-muted-foreground">
							Here's where we'll share the story of how Cody and Ash met,
							fell in love, and decided to spend their lives together.
							The journey that brought them to this special day.
						</p>
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


