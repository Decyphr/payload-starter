/// <reference types="vitest" />

import react from "@vitejs/plugin-react";
import path from "node:path";
import "dotenv/config";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vitest/config";

const dirname
  = typeof __dirname !== "undefined"
    ? __dirname
    : path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "~": path.resolve(dirname, "./src"),
      "#tests": path.resolve(dirname, "./tests"),
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
  optimizeDeps: {
    include: ["@storybook/test", "lucide-react"],
    exclude: [],
  },
});
