import { expect, test } from "@playwright/test";

test("galeria de projetos funciona no desktop e no celular", async ({ page }) => {
  for (const width of [1440, 390]) {
    await page.setViewportSize({ width, height: 900 });
    await page.goto("/projetos");
    await expect(page.locator("article").first()).toContainText("Nutricomp");
    const trigger = page.getByRole("button", { name: "Ver telas" });
    await trigger.click();
    const gallery = page.getByRole("dialog");
    await expect(gallery).toBeVisible();
    await gallery.getByRole("button", { name: "Finalize pelo celular" }).click();
    await expect(gallery.getByRole("heading")).toHaveText("Finalize pelo celular");
    await expect(gallery.getByRole("img")).toBeVisible();
    await page.keyboard.press("Escape");
    await expect(gallery).not.toBeVisible();
    await expect(trigger).toBeFocused();
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
    await page.screenshot({ path: `test-results/projects-${width}.png`, fullPage: true });
  }
});
