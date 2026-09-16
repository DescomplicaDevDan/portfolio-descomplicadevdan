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
test("contato direto abre WhatsApp e oferece e-mail", async ({ page }) => {
  await page.goto("/#contato");
  const link = page.getByRole("link", { name: /conversar com danilo/i }).last();
  await expect(link).toHaveAttribute("href", /https:\/\/wa.me\/5522992090717\?text=/);
  await expect(link).toHaveAttribute("target", "_blank");
  await expect(page.getByRole("link", { name: /enviar e-mail/i })).toHaveAttribute("href", "mailto:descomplicadevdan@gmail.com");
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
