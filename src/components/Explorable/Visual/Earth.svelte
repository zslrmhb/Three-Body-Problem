<script>
	import { T } from "@threlte/core";
	import { FakeGlowMaterial } from "@threlte/extras";

	export let position = { x: -3, y: 2 };
</script>

<T.Group position.y={position.y} position.x={position.x}>
	<T.Mesh>
		<T.MeshBasicMaterial color="blue" />
		<T.SphereGeometry args={[2]} />
	</T.Mesh>
	<!-- <T.Mesh>
		<FakeGlowMaterial glowColor="yellow" />
		<T.SphereGeometry args={[9]} />
	</T.Mesh> -->
</T.Group>
