<script>
	import { debug } from "$stores";
	import Threlte from "./Explorable/Visual/Threlte.svelte";
</script>

<!-- <article class="relative">
	<div
		id="canvas-wrapper"
		class="sticky top-0 flex-1 min-w-0 h-screen {!$debug ? `pointer-events-none` : ``}"
	>
		<Threlte />
	</div>

	<Article />
</article> -->

<!-- <div>
	<Threlte />
</div> -->

<article class="">
	<div id="canvas-wrapper" class=" h-screen">
		<Threlte />
	</div>
</article>
