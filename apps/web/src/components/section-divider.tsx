type SectionDividerProps = {
  className?: string;
};

export default function SectionDivider({
  className = '',
}: SectionDividerProps) {
  return (
    <div className={`flex items-center justify-center py-16 ${className}`}>
      <div className="flex w-full max-w-md items-center gap-4">
        {/* Left ornamental line */}
        <div className="h-px flex-1 bg-gradient-to-r from-transparent to-primary/30" />

        {/* Central ornamental pattern */}
        <div className="flex items-center gap-2 px-4">
          <div className="h-2 w-2 rounded-full bg-primary/40" />
          <div className="h-1 w-1 rounded-full bg-primary/60" />
          <svg
            className="text-primary/50"
            fill="none"
            height="24"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Elegant floral/leaf pattern */}
            <path
              d="M12 2C12 2 8 6 8 12C8 18 12 22 12 22C12 22 16 18 16 12C16 6 12 2 12 2Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
            />
            <path
              d="M12 12C12 12 6 8 6 12C6 16 12 12 12 12C12 12 18 8 18 12C18 16 12 12 12 12Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
            />
          </svg>
          <div className="h-1 w-1 rounded-full bg-primary/60" />
          <div className="h-2 w-2 rounded-full bg-primary/40" />
        </div>

        {/* Right ornamental line */}
        <div className="h-px flex-1 bg-gradient-to-l from-transparent to-primary/30" />
      </div>
    </div>
  );
}
