import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],
	server: {
		host: true,
	},
	base: "/wedding-invitation/",
	css: {
		modules: {
			localsConvention: "camelCase",
			generateScopedName: "[local]_[hash:base64:2]",
		},
	},
});
