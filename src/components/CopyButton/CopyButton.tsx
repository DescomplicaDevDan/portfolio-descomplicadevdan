"use client";

import { useEffect, useState, type ReactNode } from "react";

type CopyButtonProps = {
  value: string;
  label: string;
  successLabel?: string;
  className?: string;
  children: ReactNode | ((copied: boolean) => ReactNode);
};

async function copyToClipboard(value: string) {
  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(value);
    return;
  }

  const temporaryField = document.createElement("textarea");
  temporaryField.value = value;
  temporaryField.setAttribute("readonly", "");
  temporaryField.style.position = "fixed";
  temporaryField.style.opacity = "0";
  document.body.appendChild(temporaryField);
  temporaryField.select();
  document.execCommand("copy");
  temporaryField.remove();
}

export function CopyButton({
  value,
  label,
  successLabel = "Copiado!",
  className,
  children,
}: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const timeout = window.setTimeout(() => setCopied(false), 2_000);
    return () => window.clearTimeout(timeout);
  }, [copied]);

  async function handleCopy() {
    await copyToClipboard(value);
    setCopied(true);
  }

  return (
    <button
      type="button"
      className={className}
      onClick={handleCopy}
      aria-label={copied ? successLabel : label}
      data-copied={copied}
    >
      {typeof children === "function" ? children(copied) : children}
      <span className="sr-only" aria-live="polite">{copied ? successLabel : ""}</span>
    </button>
  );
}
