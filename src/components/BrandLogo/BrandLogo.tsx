type BrandLogoProps = {
  className?: string;
  accessibleLabel?: string;
};

export function BrandLogo({ className, accessibleLabel }: BrandLogoProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 300 48"
      xmlns="http://www.w3.org/2000/svg"
      role={accessibleLabel ? "img" : undefined}
      aria-label={accessibleLabel}
      aria-hidden={accessibleLabel ? undefined : true}
      preserveAspectRatio="xMinYMid meet"
    >
      <text
        x="0"
        y="31"
        fontFamily="var(--font-geist-sans), Arial, sans-serif"
        fontSize="22"
        fontWeight="720"
      >
        <tspan fill="#f3f5f4">descomplica</tspan>
        <tspan dx="4" fill="currentColor">dev dan</tspan>
      </text>
    </svg>
  );
}
