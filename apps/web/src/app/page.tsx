import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Home() {
	return (
		<main className="container mx-auto max-w-5xl px-4 py-10">
			<section className="grid items-center gap-8 md:grid-cols-[1fr_auto_1fr]">
				<div className="relative aspect-[3/4] w-full max-w-sm overflow-hidden rounded-xl">
					<Image
						src="/ash.jpg"
						alt="Ash"
						fill
						priority
						sizes="(max-width: 768px) 50vw, 25vw"
						className="object-cover"
					/>
				</div>
				<div className="flex flex-col items-center gap-4">
					<h1 className="text-center text-3xl font-semibold tracking-tight sm:text-4xl">
						Ashley & Cody
					</h1>
					<p className="text-center text-muted-foreground">
						We're so glad you're here.
					</p>
					<Link href="/details" className={cn(buttonVariants({ size: "lg" }))}>
						Enter
					</Link>
				</div>
				<div className="relative aspect-[3/4] w-full max-w-sm overflow-hidden rounded-xl">
					<Image
						src="/cody.jpg"
						alt="Cody"
						fill
						sizes="(max-width: 768px) 50vw, 25vw"
						className="object-cover"
					/>
				</div>
			</section>
		</main>
	);
}
