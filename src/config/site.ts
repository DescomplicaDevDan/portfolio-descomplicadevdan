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
  title: "Descomplica Dev Dan | Sites e Sistemas Web",
  description:
    "Sites e sistemas web que ajudam negócios a vender, atender e trabalhar melhor. Conheça os projetos de Danilo e converse sobre sua ideia.",
  url: siteUrl,
} as const;
