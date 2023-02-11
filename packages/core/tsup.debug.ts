import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['./index.ts', './bin/index.ts'],
  sourcemap: true,
  dts: true,
  format: ['esm'],
  target: 'node16',
  clean: true
})