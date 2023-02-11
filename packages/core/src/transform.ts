import * as esbuild from 'esbuild'
import { name as thisModuleName } from '../package.json'
import { outputFolderPath } from './shared'

const transform = async (entrys: string[]) => {
  

  await esbuild.build({
    entryPoints: entrys,
    outdir: outputFolderPath,
    bundle: true,
    external: [thisModuleName],
    platform: 'node',
    format: 'esm',
    outExtension: {
      '.js': '.mjs'
    }
  })
}

export {
  transform
}