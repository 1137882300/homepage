import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
	integrations: [tailwind()],
	vite: {
		define: {
			'import.meta.env.HEADER_INJECT': JSON.stringify(`
				<!-- Google tag (gtag.js) -->
				<script async src="https://www.googletagmanager.com/gtag/js?id=G-3N5BFCW78H"></script>
				<script>
					window.dataLayer = window.dataLayer || [];
					function gtag(){dataLayer.push(arguments);}
					gtag('js', new Date());
					gtag('config', 'G-3N5BFCW78H');
				</script>
			`),
		},
	},
});
