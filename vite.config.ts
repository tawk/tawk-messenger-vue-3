import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
	build: {
		lib: {
			entry: fileURLToPath(new URL('src/index.ts', import.meta.url)),
			name: 'tawk-messenger-vue-3',
			fileName: (format) => `tawk-messenger-vue-3.${format}.js`
		},
		rollupOptions: {
			external: ['vue'],
			output: {
				globals: {
					vue: 'Vue'
				}
			}
		}
	}
});
