import { expect, test } from "@playwright/test";

test("carrega a home e navega para projetos", async ({ page }) => {
  await page.goto("/");

  await expect(page.getByRole("heading", { level: 1, name: /crio sites e sistemas web/i })).toBeVisible();
  await page.getByRole("link", { name: /ver projetos/i }).click();

  await expect(page).toHaveURL(/\/projetos$/);
  await expect(page.getByRole("heading", { level: 1, name: /ideias que viram soluções/i })).toBeVisible();
});
