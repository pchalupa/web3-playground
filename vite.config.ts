import { defineConfig, splitVendorChunkPlugin } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import svgr from '@honkhonk/vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		splitVendorChunkPlugin(),
		react(),
		tsconfigPaths(),
		svgr({
			svgrOptions: {
				jsxRuntime: 'automatic',
				icon: true,
			},
		}),
	],
	test: {
		environment: 'jsdom',
		coverage: {
			reporter: ['html', 'lcov', 'text'],
		},
	},
	css: {
		modules: {
			localsConvention: 'dashes',
		},
	},
});
