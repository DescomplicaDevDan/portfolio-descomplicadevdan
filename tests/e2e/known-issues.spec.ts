import { expect, test } from "@playwright/test";

test("todos os links internos apontam para destinos existentes", async ({ page }) => {
  test.fail(true, "Experiências e Contato ainda não existem na página.");
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

test("links sociais não usam destinos provisórios", async ({ page }) => {
  test.fail(true, "Os quatro links sociais ainda usam href='#'.");
  await page.goto("/");

  const hrefs = await Promise.all(
    ["GitHub", "LinkedIn", "WhatsApp", "E-mail"].map((name) =>
      page.getByRole("link", { name }).getAttribute("href"),
    ),
  );

  expect(hrefs).not.toContain("#");
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
