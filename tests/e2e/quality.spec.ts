import { expect, test } from "@playwright/test";

test("todos os links internos apontam para destinos existentes", async ({ page }) => {
  await page.goto("/");

  const missingTargets = await page.locator('a[href*="#"]').evaluateAll((anchors) =>
    anchors
      .map((anchor) => anchor.getAttribute("href"))
      .filter((href): href is string => Boolean(href && href !== "#"))
      .map((href) => new URL(href, window.location.href).hash)
      .filter((hash) => hash && !document.querySelector(hash)),
  );

  expect(missingTargets).toEqual([]);
});

test("canais sociais não usam ações provisórias", async ({ page }) => {
  await page.goto("/");

  const hrefs = (
    await Promise.all(
      ["GitHub", "LinkedIn", "WhatsApp"].map((name) =>
        page.getByRole("link", { name, exact: true }).evaluateAll((links) =>
          links.map((link) => link.getAttribute("href")),
        ),
      ),
    )
  ).flat();

  expect(hrefs).not.toContain("#");
  await expect(page.getByRole("link", { name: "Enviar e-mail", exact: true })).toHaveAttribute("href", /^mailto:/);
});

test("título principal cabe na largura de um celular", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");
  await page.waitForTimeout(3_000);

  const rightEdges = await page.locator("h1 > span").evaluateAll((lines) =>
    lines.map((line) => line.getBoundingClientRect().right),
  );

  expect(Math.max(...rightEdges)).toBeLessThanOrEqual(390);
});

test("binários respeitam movimento reduzido e imagens carregam", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  const columns = page.locator('[class*="binary"] span');
  await expect(columns).toHaveCount(18);
  expect(await columns.first().evaluate(el => getComputedStyle(el).animationName)).toBe("none");
  for (const image of await page.locator('main img').all()) {
    await image.scrollIntoViewIfNeeded();
    await expect.poll(() => image.evaluate(el => (el as HTMLImageElement).naturalWidth)).toBeGreaterThan(0);
  }
  for (const width of [360, 390, 768, 1440]) {
    await page.setViewportSize({ width, height: 900 });
    expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBeLessThanOrEqual(width);
  }
});
