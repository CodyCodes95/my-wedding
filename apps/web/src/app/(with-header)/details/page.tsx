import Image from "next/image";

export const dynamic = "force-static";

export default function DetailsPage() {
	return (
		<div>
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

			{/* Details Content */}
			<main className="container mx-auto max-w-3xl px-4 py-10">
				<h2 className="mb-6 text-3xl font-semibold tracking-tight">Wedding Details</h2>
				<div className="flex flex-col gap-6">
					<section className="rounded-lg border p-4">
						<h3 className="text-xl font-medium">When</h3>
						<p className="text-muted-foreground">Date and time coming soon.</p>
					</section>
					<section className="rounded-lg border p-4">
						<h3 className="text-xl font-medium">Where</h3>
						<p className="text-muted-foreground">Location details coming soon.</p>
					</section>
					<section className="rounded-lg border p-4">
						<h3 className="text-xl font-medium">Schedule</h3>
						<p className="text-muted-foreground">Timeline coming soon.</p>
					</section>
					<section className="rounded-lg border p-4">
						<h3 className="text-xl font-medium">Travel & Stay</h3>
						<p className="text-muted-foreground">Hotel blocks and travel info coming soon.</p>
					</section>
					<section className="rounded-lg border p-4">
						<h3 className="text-xl font-medium">Registry</h3>
						<p className="text-muted-foreground">Links coming soon.</p>
					</section>
					<section className="rounded-lg border p-4">
						<h3 className="text-xl font-medium">FAQ</h3>
						<p className="text-muted-foreground">Answers coming soon.</p>
					</section>
				</div>
			</main>
		</div>
	);
}


