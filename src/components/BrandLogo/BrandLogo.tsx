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
        fill="#f3f5f4"
        fontFamily="var(--font-geist-sans), Arial, sans-serif"
        fontSize="22"
        fontWeight="720"
      >
        descomplica
      </text>
      <text x="132" y="31" fill="currentColor" fontFamily="var(--font-geist-sans), Arial, sans-serif" fontSize="22" fontWeight="720">dev dan</text>
    </svg>
  );
}
