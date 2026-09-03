import { expect, test } from "@playwright/test";

test("carrega a home e navega para projetos", async ({ page }) => {
  await page.goto("/");

  await expect(page.getByRole("heading", { level: 1, name: /descomplica dev dan/i })).toBeVisible();
  await page.getByRole("link", { name: /conheça meus projetos/i }).click();

  await expect(page).toHaveURL(/\/projetos$/);
  await expect(page.getByRole("heading", { level: 1, name: /ideias que viram soluções/i })).toBeVisible();
});

test("alterna e persiste o tema escolhido", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator("html")).toHaveAttribute("data-theme", "dark");
  await page.getByRole("button", { name: /ativar tema claro/i }).click();

  await expect(page.locator("html")).toHaveAttribute("data-theme", "light");
  await page.reload();
  await expect(page.locator("html")).toHaveAttribute("data-theme", "light");
});
