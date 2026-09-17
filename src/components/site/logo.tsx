import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: "sm" | "md" | "lg";
  tone?: "dark" | "light";
}

export function Logo({
  className,
  showText = true,
  size = "md",
  tone = "dark",
}: LogoProps) {
  const iconSizes = {
    sm: "size-7",
    md: "size-9",
    lg: "size-11",
  };

  const textSizes = {
    sm: "text-lg",
    md: "text-xl",
    lg: "text-2xl",
  };

  const isLight = tone === "light";

  return (
    <div className={cn("inline-flex items-center gap-3 select-none group", className)}>
      {/* Personalized Geometric Emblem */}
      <div
        className={cn(
          "relative flex items-center justify-center rounded-xl transition-transform duration-200 group-hover:scale-105",
          iconSizes[size],
          isLight
            ? "bg-paper-line/50 text-paper-ink shadow-[0_1px_4px_rgba(0,0,0,0.08)] ring-1 ring-paper-ink/10"
            : "bg-bg-elevated text-fg shadow-[0_2px_12px_rgba(255,107,107,0.12)] ring-1 ring-white/10 group-hover:ring-primary/40",
        )}
      >
        <svg
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="size-full p-1.5"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="mcGrad" x1="4" y1="4" x2="36" y2="36" gradientUnits="userSpaceOnUse">
              <stop stopColor="#ff7b7b" />
              <stop offset="0.5" stopColor="#ff5252" />
              <stop offset="1" stopColor="#f43f5e" />
            </linearGradient>
            <linearGradient id="mcGlow" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
              <stop stopColor="#ff8a8a" stopOpacity="0.8" />
              <stop offset="1" stopColor="#e11d48" stopOpacity="0.2" />
            </linearGradient>
            <filter id="subtleGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="1.5" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Background subtle geometry */}
          <rect
            x="3"
            y="3"
            width="34"
            height="34"
            rx="8"
            fill={isLight ? "#f5f3ef" : "#141514"}
            stroke="url(#mcGlow)"
            strokeWidth="1.2"
            strokeOpacity="0.5"
          />

          {/* Interlocking Monogram: 'M' + 'C' */}
          <path
            d="M10 29V12L16.5 21.5L23 12V29"
            stroke="url(#mcGrad)"
            strokeWidth="2.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          <path
            d="M31 14.8C29.6 12.8 27.2 11.5 24.5 11.5C19.8 11.5 16 15.3 16 20C16 24.7 19.8 28.5 24.5 28.5C27.2 28.5 29.6 27.2 31 25.2"
            stroke={isLight ? "#1c1917" : "#edeae3"}
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeOpacity="0.9"
          />

          <circle cx="20" cy="9.5" r="1.8" fill="#ff7b7b" filter="url(#subtleGlow)" />
        </svg>
      </div>

      {showText && (
        <div className="flex flex-col">
          <span
            className={cn(
              "font-display font-medium tracking-tight leading-none transition-colors duration-150",
              textSizes[size],
              isLight ? "text-paper-ink" : "text-fg group-hover:text-white",
            )}
          >
            Mudasir Chandio
          </span>
          <span className="mt-0.5 font-mono text-[9px] uppercase tracking-[0.18em] text-primary/80 leading-none">
            Systems & Studio
          </span>
        </div>
      )}
    </div>
  );
}
