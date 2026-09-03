import { expect, test } from "@playwright/test";

test("todos os links internos apontam para destinos existentes", async ({ page }) => {
  test.fail(true, "Experiências ainda não existe na página.");
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

  const hrefs = await Promise.all(
    ["GitHub", "LinkedIn", "WhatsApp"].map((name) =>
      page.getByRole("link", { name, exact: true }).getAttribute("href"),
    ),
  );

  expect(hrefs).not.toContain("#");
  await expect(page.getByRole("button", { name: "Copiar e-mail", exact: true })).toBeVisible();
});

test("título principal cabe na largura de um celular", async ({ page }) => {
  test.fail(true, "A animação usa largura em ch e corta 'Descomplica' em 390 px.");
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");
  await page.waitForTimeout(3_000);

  const rightEdges = await page.locator("h1 > span").evaluateAll((lines) =>
    lines.map((line) => line.getBoundingClientRect().right),
  );

  expect(Math.max(...rightEdges)).toBeLessThanOrEqual(390);
});

test("terminal usa aria-label apenas com papel ARIA compatível", async ({ page }) => {
  test.fail(true, "O <pre> do terminal usa aria-label sem declarar um papel ARIA compatível.");
  await page.goto("/");

  const terminal = page.locator('pre[aria-label="Código sendo digitado"]');
  await expect(terminal).toHaveAttribute("role", /.+/);
});
