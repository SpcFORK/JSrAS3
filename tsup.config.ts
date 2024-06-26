import { defineConfig } from 'tsup'

export default defineConfig({
  clean: true,
  bundle: true,
  minify: true,
  outDir: 'dist',
  entry: ['src/'],
  external: [
    'fast-xml-parser'
  ],
  sourcemap: true,
  splitting: false,
  platform: 'browser',
  format: ['esm', 'cjs', 'iife'],
})
