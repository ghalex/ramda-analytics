import { defineConfig } from 'vite'
import * as path from 'path'

const srcDir = path.resolve(__dirname, 'src')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
  ],
  resolve: {
    alias: [
      { find: '@', replacement: srcDir }
    ]
  },
  build: {
    lib: {
      entry: srcDir + '/lib/index.ts',
      name: 'ramda-analytics',
      fileName: (format) => `ramda-analytics.${format}.js`
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: [],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
        }
      }
    }
  }
})
