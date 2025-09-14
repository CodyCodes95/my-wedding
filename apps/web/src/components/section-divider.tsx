type SectionDividerProps = {
	className?: string;
};

export default function SectionDivider({ className = "" }: SectionDividerProps) {
	return (
		<div className={`flex items-center justify-center py-16 ${className}`}>
			<div className="flex items-center gap-4 w-full max-w-md">
				{/* Left ornamental line */}
				<div className="flex-1 h-px bg-gradient-to-r from-transparent to-primary/30" />
				
				{/* Central ornamental pattern */}
				<div className="flex items-center gap-2 px-4">
					<div className="w-2 h-2 rounded-full bg-primary/40" />
					<div className="w-1 h-1 rounded-full bg-primary/60" />
					<svg
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						className="text-primary/50"
					>
						{/* Elegant floral/leaf pattern */}
						<path
							d="M12 2C12 2 8 6 8 12C8 18 12 22 12 22C12 22 16 18 16 12C16 6 12 2 12 2Z"
							stroke="currentColor"
							strokeWidth="1"
							fill="none"
						/>
						<path
							d="M12 12C12 12 6 8 6 12C6 16 12 12 12 12C12 12 18 8 18 12C18 16 12 12 12 12Z"
							stroke="currentColor"
							strokeWidth="1"
							fill="none"
						/>
					</svg>
					<div className="w-1 h-1 rounded-full bg-primary/60" />
					<div className="w-2 h-2 rounded-full bg-primary/40" />
				</div>
				
				{/* Right ornamental line */}
				<div className="flex-1 h-px bg-gradient-to-l from-transparent to-primary/30" />
			</div>
		</div>
	);
}
