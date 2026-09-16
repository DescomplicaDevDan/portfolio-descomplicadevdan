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
    "Danilo cria sites profissionais e sistemas web para apresentar seus serviços, facilitar o contato com clientes e simplificar sua rotina. Conheça os projetos.",
  url: siteUrl,
} as const;
