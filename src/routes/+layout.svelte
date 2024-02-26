<script>
	import "$styles/app.css";
	import "mathbox/mathbox.css";
	import { loaded } from "$stores";
	import { onMount, tick } from "svelte";

	onMount(async () => {
		await tick();
		$loaded = true;
		// console.log("loaded", $loaded);

	});
</script>

<main id="content">
	<slot />
</main>
