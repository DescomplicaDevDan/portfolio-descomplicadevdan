function normalizeUrl(value: string) {
  const url = value.startsWith("http") ? value : `https://${value}`;
  return url.replace(/\/$/, "");
}

export const siteUrl = normalizeUrl(
  process.env.NEXT_PUBLIC_SITE_URL ??
    process.env.VERCEL_PROJECT_PRODUCTION_URL ??
    process.env.VERCEL_URL ??
    "http://localhost:3000",
);

export const site = {
  name: "Descomplica Dev Dan",
  title: "Descomplica Dev Dan | Desenvolvedor Web",
  description:
    "Portfólio de Danilo, desenvolvedor web e analista de sistemas, com projetos em React, Next.js, TypeScript e Python.",
  url: siteUrl,
} as const;
