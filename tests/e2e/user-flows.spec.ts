import { expect, test } from "@playwright/test";

test("menu móvel funciona por teclado e devolve o foco ao fechar", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");

  const menuButton = page.getByRole("button", { name: "Abrir menu" });
  await menuButton.focus();
  await page.keyboard.press("Enter");

  await expect(page.getByRole("button", { name: "Fechar menu" })).toHaveAttribute("aria-expanded", "true");
  await expect.poll(() => page.evaluate(() => document.body.style.overflow)).toBe("hidden");

  await page.keyboard.press("Escape");

  await expect(menuButton).toHaveAttribute("aria-expanded", "false");
  await expect(menuButton).toBeFocused();
  await expect.poll(() => page.evaluate(() => document.body.style.overflow)).toBe("");
});

test("formulário valida os campos e abre o WhatsApp com a mensagem preenchida", async ({ page }) => {
  await page.route("https://wa.me/**", async (route) => {
    await route.fulfill({ status: 200, contentType: "text/html", body: "WhatsApp" });
  });
  await page.goto("/#contato");

  await page.getByRole("button", { name: /enviar mensagem/i }).click();
  await expect(page.getByLabel(/seu nome/i)).toHaveJSProperty("validity.valueMissing", true);

  await page.getByLabel(/seu nome/i).fill("Ana Souza");
  await page.getByLabel(/seu e-mail/i).fill("ana@empresa.com");
  await page.getByLabel(/seu whatsapp/i).fill("(22) 99999-0000");
  await page.getByLabel(/assunto/i).fill("Novo projeto");
  await page.getByLabel(/mensagem/i).fill("Gostaria de conversar sobre um site.");

  await Promise.all([
    page.waitForURL((url) => url.hostname === "wa.me" && url.pathname === "/5522992090717"),
    page.getByRole("button", { name: /enviar mensagem/i }).click(),
  ]);

  const message = decodeURIComponent(new URL(page.url()).searchParams.get("text") ?? "");
  expect(message).toContain("*Assunto:* Novo projeto");
  expect(message).toContain("*Nome:* Ana Souza");
  expect(message).toContain("*E-mail:* ana@empresa.com");
});

test("projetos publicados oferecem destinos reais e seguros", async ({ page }) => {
  await page.goto("/projetos");

  await expect(page.getByRole("heading", { level: 2 })).toHaveCount(3);
  await expect(page.getByRole("link", { name: /visitar site de Nutricomp/i })).toHaveAttribute("href", "https://www.nutricomp.com.br");
  await expect(page.getByRole("link", { name: /visitar site de Motor de Busca/i })).toHaveAttribute("href", "https://motor-busca.vercel.app/");

  for (const link of await page.getByRole("link", { name: /ver código|visitar site/i }).all()) {
    await expect(link).toHaveAttribute("target", "_blank");
    await expect(link).toHaveAttribute("rel", /noopener|noreferrer/);
  }
});
