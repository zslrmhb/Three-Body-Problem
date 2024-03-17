<script>
	import { T } from "@threlte/core";
	import { FakeGlowMaterial } from "@threlte/extras";

	export let position = { x: 0, y: 0 };
</script>

<T.Group position.y={position.y} position.x={position.x}>
	<T.Mesh>
		<T.MeshBasicMaterial color="yellow" />
		<T.SphereGeometry args={[6]} />
	</T.Mesh>
	<T.Mesh>
		<FakeGlowMaterial glowColor="yellow" />
		<T.SphereGeometry args={[10]} />
	</T.Mesh>
</T.Group>
