<script>
	import { gsap, ScrollTrigger } from "$utils/gsap.js";
	import { debug, loaded } from "$stores";
	import Title from "./Explorable/Title.svelte";
	import Article from "./Explorable/Text/Article.svelte";
	import Threlte from "./Explorable/Visual/Threlte.svelte";
	// import Footer from "./Explorable/Footer.svelte";
	// import Playground from "./Explorable/Visual/Playground.svelte";
	// import { Canvas } from "@threlte/core";
	// import { World } from "@threlte/rapier";
	import ToPlayground from "./Explorable/ToPlayground.svelte";
	$: if ($loaded) {
		// 	// gsap.set("body", { overflowY: "scroll", overflowX: "visible" });
		ScrollTrigger.refresh();
	}
</script>

<Title />

<article class="relative flex-col hidden lg:flex">
	<div id="canvas-wrapper" class="sticky top-0 min-w-0 h-screen cursor-pointer">
		<Threlte />
	</div>
	<div
		id="article"
		class="text-3xl flex flex-col items-center w-full h-full p-10 cursor-default"
	>
		<Article />
	</div>
</article>


<div class="relative flex-col hidden lg:flex">
	<ToPlayground />
	<!-- <Canvas>
		<World gravity={[0, 0, 0]}>
			<Playground />
		</World>
	</Canvas> -->
	<!-- <Footer /> -->
</div> 
