import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [vue()],
	server: {
		port: 5174
	},
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
