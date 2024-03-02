<script>
	import { T } from "@threlte/core";
	import { OrbitControls } from "@threlte/extras";
	import { Attractor, Collider, RigidBody } from "@threlte/rapier";

	import Sun from "./Sun.svelte";
	import Earth from "./Earth.svelte";

	export let type = "static";

	const config = {
		static: {
			type: "static",
			strength: 3,
			range: 100,
			gravitationalConstant: undefined
		},
		linear: {
			type: "linear",
			strength: 1,
			range: 100,
			gravitationalConstant: undefined
		},
		newtonian: {
			type: "newtonian",
			strength: 10,
			range: 100,
			gravitationalConstant: 10
		}
	};
</script>

<T.PerspectiveCamera
	position.y={20}
	position.z={100}
	makeDefault
	fov={70}
	far={10000}
	on:create={({ ref }) => {
		ref.lookAt(0, -10, 0);
	}}
>
	<OrbitControls enableDamping enablePan={true} enableZoom={false} />
</T.PerspectiveCamera>

<T.GridHelper args={[100]} />
<Earth />
