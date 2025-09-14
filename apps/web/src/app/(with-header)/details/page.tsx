export const dynamic = "force-static";

export default function DetailsPage() {
	return (
		<main className="container mx-auto max-w-3xl px-4 py-10">
			<h1 className="mb-6 text-3xl font-semibold tracking-tight">Wedding Details</h1>
			<div className="flex flex-col gap-6">
				<section className="rounded-lg border p-4">
					<h2 className="text-xl font-medium">When</h2>
					<p className="text-muted-foreground">Date and time coming soon.</p>
				</section>
				<section className="rounded-lg border p-4">
					<h2 className="text-xl font-medium">Where</h2>
					<p className="text-muted-foreground">Location details coming soon.</p>
				</section>
				<section className="rounded-lg border p-4">
					<h2 className="text-xl font-medium">Schedule</h2>
					<p className="text-muted-foreground">Timeline coming soon.</p>
				</section>
				<section className="rounded-lg border p-4">
					<h2 className="text-xl font-medium">Travel & Stay</h2>
					<p className="text-muted-foreground">Hotel blocks and travel info coming soon.</p>
				</section>
				<section className="rounded-lg border p-4">
					<h2 className="text-xl font-medium">Registry</h2>
					<p className="text-muted-foreground">Links coming soon.</p>
				</section>
				<section className="rounded-lg border p-4">
					<h2 className="text-xl font-medium">FAQ</h2>
					<p className="text-muted-foreground">Answers coming soon.</p>
				</section>
			</div>
		</main>
	);
}


