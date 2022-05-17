import path from 'path'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
	build : {
		lib : {
			entry : path.resolve(__dirname, 'src/index.js'),
			name : 'tawk-messenger-vue-3',
			fileName : (format) => `tawk-messenger-vue-3.${format}.js`
		},
		rollupOptions : {
			external : ['vue'],
			output : {
				globals : {
					vue: 'Vue'
				}
			}
		}
	}
})
