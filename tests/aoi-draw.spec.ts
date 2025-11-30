import { test, expect } from "@playwright/test";

test("User can draw polygon AOI", async ({ page }) => {
  await page.goto("/");

  // Select polygon tool (first icon)
  await page.locator("button").nth(0).click();

  const map = page.locator(".leaflet-container");

  await map.click({ position: { x: 250, y: 250 } });
  await map.click({ position: { x: 300, y: 280 } });
  await map.click({ position: { x: 260, y: 330 } });

  await map.dblclick({ position: { x: 260, y: 330 } });

  const polygon = page.locator("path.leaflet-interactive");
  await expect(polygon).toBeVisible();
});
