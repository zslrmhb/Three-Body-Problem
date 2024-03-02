<script>
	import { gsap, ScrollTrigger } from "$utils/gsap.js";
	import { debug, loaded } from "$stores";
	import Title from "./Explorable/Title.svelte";
	import Article from "./Explorable/Text/Article.svelte";
	import Threlte from "./Explorable/Visual/Threlte.svelte";
	import Footer from "./Explorable/Footer.svelte";
	import Playground from "./Explorable/Visual/Playground.svelte";
	$: if ($loaded) {
		// gsap.set("body", { overflowY: "visible", overflowX: "hidden" });
		ScrollTrigger.refresh();
	}
</script>

<Title />

<article class="relative flex-col hidden lg:flex">
	<div id="canvas-wrapper" class="sticky top-0 min-w-0 h-screen">
		<Threlte />
	</div>
	<div id="article" class="text-5xl flex flex-col items-center w-full h-full">
		<Article />
	</div>
</article>

<Playground />
<Footer />
