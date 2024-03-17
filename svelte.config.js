import adapterStatic from "@sveltejs/adapter-static";
import sveltePreprocess from "svelte-preprocess";
import autoprefixer from "autoprefixer";
import sequence from "svelte-sequential-preprocessor";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

const preprocess = sveltePreprocess({
	postcss: {
		plugins: [autoprefixer]
	}
});

const config = {
	preprocess: [sequence([preprocess, vitePreprocess()]), vitePreprocess({})],
	kit: {
		adapter: adapterStatic()
	},
	vitePlugin: {
		// experimental: {
		// 	inspector: { holdMode: true },
		// }
	},
	compileOptions: {
		accessors: true
	}
};

export default config;
