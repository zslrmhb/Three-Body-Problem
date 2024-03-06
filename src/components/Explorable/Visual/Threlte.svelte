<script>
	import { Canvas } from "@threlte/core";
	import { World } from "@threlte/rapier";
	import Scene from "./Scene.svelte";
</script>

<Canvas>
	<World gravity={[0, 0, 0]}>
		<Scene />
	</World>
</Canvas>
