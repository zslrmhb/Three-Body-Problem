<script>
	import katex from "katex";
	import { onMount } from "svelte";
	import { gsap } from "$utils/gsap.js";

	export let expr;
	export let display = false;
    
	let texEl;
</script>

<span bind:this={texEl}>
	{@html katex.renderToString(expr, { displayMode: display })}
</span>
