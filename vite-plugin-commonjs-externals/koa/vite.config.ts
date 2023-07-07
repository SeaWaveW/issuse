import { ConfigEnv, defineConfig, UserConfig } from 'vite'
import VitePluginCommonjsExternals from 'vite-plugin-commonjs-externals'
export default defineConfig(({ mode }: ConfigEnv): UserConfig => {
  return {
    build: {
      minify: 'esbuild',
      copyPublicDir: false,
      rollupOptions: {
        input: 'src/main.ts',
        output: {
          entryFileNames: '[name].js',
        },
      }
    },
    plugins: [
      VitePluginCommonjsExternals({
        externals: [
          'assert',
          'events',
          'util',
          'stream',
          'http',
          'async_hooks',
          'path',
          'url',
          'net',
          'querystring',
          'zlib',
          'buffer',
          'crypto',
        ]
      })
    ],
  }
})
