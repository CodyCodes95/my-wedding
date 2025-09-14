"use client";
import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";

export default function Header() {
	const links = [
		{ to: "#details", label: "Details" },
		{ to: "#about", label: "Our Story" },
		{ to: "#travel", label: "Travel" },
		{ to: "#accommodation", label: "Accommodation" },
		{ to: "#faqs", label: "FAQs" },
	];

	return (
		<div className="bg-[#f8f6f3]">
		<div className="flex items-center justify-between px-6 pt-4">
			{/* Left Navigation - Hidden on mobile */}
			<nav className="hidden md:flex gap-6">
				{links.map(({ to, label }) => {
					return (
						<Link
							key={to}
							href={to}
							className="text-sm font-medium text-primary hover:text-primary/80 transition-colors"
						>
							{label}
						</Link>
					);
				})}
			</nav>

			{/* Right Logo + RSVP Button */}
			<div className="flex items-center gap-4 md:ml-0 ml-auto">
					<div className="flex-shrink-0">
						<Image
							src="/outline-no-bg.png"
							alt="Wedding Logo"
							width={140}
							height={10}
							className="object-contain"
						/>
					</div>
					<Link href="#rsvp">
						<Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-2 text-sm font-medium">
							RSVP
						</Button>
					</Link>
				</div>
			</div>
		</div>
	);
}
