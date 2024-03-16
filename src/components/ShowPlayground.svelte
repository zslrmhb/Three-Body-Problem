<script>
	import { gsap, ScrollTrigger } from "$utils/gsap.js";
	import { debug, loaded } from "$stores";
    import { Canvas } from "@threlte/core";
	import { World } from "@threlte/rapier";
    import Playground from "./Explorable/Visual/Playground.svelte";
	// import Footer from "./Explorable/Footer.svelte";
	// import Playground from "./Explorable/Visual/Playground.svelte";
	$: if ($loaded) {
		// 	// gsap.set("body", { overflowY: "scroll", overflowX: "visible" });
		ScrollTrigger.refresh();
	}
</script>




<article class="relative flex-col hidden lg:flex">
	<div id="canvas-wrapper" class="sticky top-0 min-w-0 h-screen">
		<Canvas>
            <World gravity={[0, 0, 0]}>
                <Playground />
            </World>
        </Canvas>
	</div>
</article>
