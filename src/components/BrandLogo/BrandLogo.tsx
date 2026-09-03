type BrandLogoProps = {
  className?: string;
  accessibleLabel?: string;
};

export function BrandLogo({ className, accessibleLabel }: BrandLogoProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 306 48"
      xmlns="http://www.w3.org/2000/svg"
      role={accessibleLabel ? "img" : undefined}
      aria-label={accessibleLabel}
      aria-hidden={accessibleLabel ? undefined : true}
      preserveAspectRatio="xMinYMid meet"
    >
      <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 9.5 21.5 20 4 30.5" strokeWidth="4.5" />
        <path d="M27.5 31h16" strokeWidth="4.5" />
      </g>
      <text
        x="61"
        y="30"
        fill="currentColor"
        fontFamily="var(--font-geist-mono), 'Courier New', monospace"
        fontSize="21"
        fontWeight="650"
        letterSpacing=".15"
      >
        sudo be_myself
      </text>
    </svg>
  );
}

