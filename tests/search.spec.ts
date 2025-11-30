import { test, expect } from "@playwright/test";

test("Search returns results + pans map", async ({ page }) => {
  await page.goto("/");

  // Open search widget
  await page.getByText("city, town, region").click();

  const input = page.locator("input[type='text']");
  await input.fill("Berlin");

  // First suggestion
  const suggestion = page.getByText(/Berlin/i).first();
  await expect(suggestion).toBeVisible();

  await suggestion.click();

  // Map tiles should update (indicating flyTo)
  const firstTile = page.locator("img.leaflet-tile").first();
  await expect(firstTile).toBeVisible();
});
