import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

for (const route of ["/", "/projetos"]) {
  test(`não possui violações automáticas graves em ${route}`, async ({ page }) => {
    await page.goto(route);
    const result = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
      .analyze();

    const blockingViolations = result.violations.filter(({ impact }) =>
      impact === "serious" || impact === "critical",
    );

    expect(blockingViolations).toEqual([]);
  });
}
