import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    environment:'jsdom',
    coverage: {
       enabled: true,
       provider: 'istanbul',
       reporter: ['lcov','json-summary', 'html'],
       include: ['src/**/*.{ts,tsx}']
    }
  }
})