import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",

  timeout: 30 * 1000,
  expect: {
    timeout: 5000,
  },

  reporter: [["list"], ["html", { open: "never" }]],

  use: {
    headless: true,
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
    actionTimeout: 0,
    screenshot: "only-on-failure",
    video: "retain-on-failure",
    trace: "retain-on-failure",
  },

  webServer: {
    command: "npm run dev",
    port: 5173,
    reuseExistingServer: !process.env.CI,
  },
});
