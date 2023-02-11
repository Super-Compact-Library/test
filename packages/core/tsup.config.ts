import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['./index.ts', './bin/index.ts'],
  dts: true,
  format: ['esm'],
  target: 'node16',
  clean: true
})