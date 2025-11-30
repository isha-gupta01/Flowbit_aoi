import { test, expect } from "@playwright/test";

test("App loads UI + Map", async ({ page }) => {
  await page.goto("/");

  await expect(page.getByText("Define Area of Interest")).toBeVisible();

  const map = page.locator(".leaflet-container");
  await expect(map).toBeVisible();

  // Tools panel appears
  const toolBtn = page.locator("button").first();
  await expect(toolBtn).toBeVisible();
});
