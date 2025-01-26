/// <reference types="vitest" />

import react from "@vitejs/plugin-react";
import path from "node:path";
import { defineConfig } from "vitest/config";
import "dotenv/config";

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
