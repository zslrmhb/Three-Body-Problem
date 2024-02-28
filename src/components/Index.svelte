<script>
	import { gsap, ScrollTrigger } from "$utils/gsap.js";
	import { debug, loaded, showTitle } from "$stores";
	import Title from "./Explorable/Title.svelte";
	import Article from "./Explorable/Text/Article.svelte";
	import Threlte from "./Explorable/Visual/Threlte.svelte";

	$: if ($loaded) {
		// gsap.set("body", { overflowY: "visible", overflowX: "hidden" });
		ScrollTrigger.refresh();
	}
</script>

{#if $showTitle}
	<Title />
{/if}

<!-- Some loader -->

<article class="relative bg-base-300 hidden lg:flex">
	<div
		id="canvas-wrapper"
		class="sticky top-0 flex-1 min-w-0 h-screen bg-base-300"
	>
		<Threlte />
	</div>
	<Article />
</article>
