import { fileURLToPath } from 'node:url'
import { configDefaults, defineConfig, mergeConfig } from 'vitest/config'
import viteConfig from './vite.config'

export default mergeConfig(
  
  viteConfig,
  defineConfig({
    test: {
      environment: 'jsdom', // Use jsdom environment for testing (mimic browser behavior)
      exclude: [...configDefaults.exclude, 'e2e/**'], // Exclude e2e tests
      root: fileURLToPath(new URL('./', import.meta.url)), // Set the root for test files
      globals: true, // Enables global variables (like 'describe', 'it', etc.)
      setupFiles: './setupTests.ts', // Optional: Add a setup file for global configurations before each test
      coverage: {
        provider: 'v8', // Use V8 coverage provider (can also use 'istanbul')
        reporter: ['text', 'html'], // Coverage report options
      },
    },
  })
)
