import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
	integrations: [tailwind()],
	vite: {
		build: {
			rollupOptions: {
				onwarn(warning, warn) {
					if (warning.code === 'THIS_IS_UNDEFINED') return;
					warn(warning);
				}
			}
		}
	}
});
