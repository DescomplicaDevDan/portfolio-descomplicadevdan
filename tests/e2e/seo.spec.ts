import { expect, test } from "@playwright/test";

test("home publica metadados essenciais para busca e compartilhamento", async ({ page }) => {
  await page.goto("/");

  await expect(page).toHaveTitle(/Descomplica Dev Dan/);
  await expect(page.locator('meta[name="description"]')).toHaveAttribute("content", /desenvolvedor web e analista de sistemas/i);
  await expect(page.locator('meta[property="og:title"]')).toHaveAttribute("content", /Descomplica Dev Dan/i);
  await expect(page.locator('meta[property="og:image"]')).toHaveAttribute("content", /opengraph-image/);
  await expect(page.locator('meta[name="twitter:card"]')).toHaveAttribute("content", "summary_large_image");
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute("href", /^http:\/\/localhost:3000\/?$/);
});

test("projetos possui título, descrição e canonical próprios", async ({ page }) => {
  await page.goto("/projetos");

  await expect(page).toHaveTitle("Projetos | Descomplica Dev Dan");
  await expect(page.locator('meta[name="description"]')).toHaveAttribute("content", /projetos e soluções/i);
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute("href", "http://localhost:3000/projetos");
});

test("robots e sitemap expõem as rotas públicas", async ({ request }) => {
  const robots = await request.get("/robots.txt");
  expect(robots.ok()).toBeTruthy();
  expect(await robots.text()).toContain("Sitemap: http://localhost:3000/sitemap.xml");

  const sitemap = await request.get("/sitemap.xml");
  expect(sitemap.ok()).toBeTruthy();
  const xml = await sitemap.text();
  expect(xml).toContain("<loc>http://localhost:3000</loc>");
  expect(xml).toContain("<loc>http://localhost:3000/projetos</loc>");
});
