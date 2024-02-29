
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [react(), dts({
    outDir: 'dist/types',
    include: ["src/hooks/*.{ts,tsx}", "src/context/*.{ts,tsx}", "src/handlers/*.{ts,tsx}", "src/index.ts"],
  })],
  // define: {
  //   'global': {}, // Polyfill for `global`
  // },
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'BrawlWebsocket',
      fileName: (format) => `index.${format}.js`
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      input: 'src/index.ts',
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM'
        },
      },
    },
  }
});