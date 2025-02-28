/// <reference types="vitest" />

import { storybookTest } from "@storybook/experimental-addon-test/vitest-plugin";
import react from "@vitejs/plugin-react";
import path from "node:path";
import "dotenv/config";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vitest/config";

const dirname
  = typeof __dirname !== "undefined"
    ? __dirname
    : path.dirname(fileURLToPath(import.meta.url));

// More info at: https://storybook.js.org/docs/writing-tests/test-addon
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "./src"),
      "#tests": path.resolve(__dirname, "./tests"),
    },
  },
  test: {
    globals: true,
    setupFiles: ["./tests/setup.ts"],
    workspace: [
      {
        extends: true,
        test: {
          environment: "jsdom",
        },
      },
      {
        extends: true,
        plugins: [
          // The plugin will run tests for the stories defined in your Storybook config
          // See options at: https://storybook.js.org/docs/writing-tests/test-addon#storybooktest
          storybookTest({
            configDir: path.join(dirname, ".storybook"),
          }),
        ],
        test: {
          name: "storybook",
          browser: {
            enabled: true,
            headless: true,
            provider: "playwright",
            instances: [
              {
                browser: "chromium",
              },
            ],
          },
          setupFiles: [".storybook/vitest.setup.ts"],
        },
      },
    ],
    include: ["src/**/*.test.tsx", "src/**/*.test.ts"],
    coverage: {
      include: ["src/**/*"],
      exclude: [
        "tests/**",
        "**/*.d.ts",
        "**/*.test.*",
        "**/*.config.*",
        "**/snapshot-tests/**",
        "**/*.solution.tsx",
        "**/coverage/**",
      ],
      all: true,
    },
  },
});
