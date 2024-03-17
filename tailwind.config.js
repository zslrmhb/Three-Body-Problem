// @ts-check
import { join } from "path";

// 1. Import the Skeleton plugin
import { skeleton } from "@skeletonlabs/tw-plugin";

/** @type {import('tailwindcss').Config} */
export default {
	// 2. Opt for dark mode to be handled via the class method
	darkMode: "class",
	content: [
		"./src/**/*.{html,js,svelte,ts}",
		// 3. Append the path to the Skeleton package
		join(
			require.resolve("@skeletonlabs/skeleton"),
			"../**/*.{html,js,svelte,ts}"
		)
	],
	theme: {
		fontFamily: {
			serif: ["Old Standard TT", "serif"],
			sans: ["Chivo Variable", "sans-serif"],
			sansAlt: ["Bungee Hairline", "sans-serif"],
			// display: ["Bungee Shade", "sans-serif"],
			display: ["Bungee Outline", "sans-serif"],
			displayAlt: ["Bungee Hairline", "sans-serif"]
			// sans: ["Manrope Variable", "sans-serif"]
			// sans: ["Barlow", "sans-serif"]
			// sans: ["sans-serif"]
		},
		extend: {}
	},
	plugins: [
		skeleton({
			themes: { preset: ["crimson"] }
		})
	]
};

