<script>
	import { T } from "@threlte/core";
	import { OrbitControls } from "@threlte/extras";
	import { Attractor, Collider, RigidBody } from "@threlte/rapier";

	import Sun from "./Sun.svelte";

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
	position.y={50}
	position.z={100}
	makeDefault
	fov={70}
	far={10000}
	on:create={({ ref }) => {
		ref.lookAt(0, 0, 0);
	}}
>
	<!-- <OrbitControls enableDamping enablePan={true} enableZoom={true} /> -->
</T.PerspectiveCamera>

<T.GridHelper args={[100]} />

<T.Group position={[-50, 0, 0]}>
	<RigidBody linearVelocity={[5, -5, 0]}>
		<Collider shape="ball" args={[1]} mass={config[type].strength} />
		<Sun />
		<Attractor
			range={config[type].range}
			gravitationalConstant={config[type].gravitationalConstant}
			strength={config[type].strength}
			gravityType={type}
		/>
	</RigidBody>
</T.Group>

<RigidBody linearVelocity={[0, 50, 0]}>
	<Collider shape="ball" args={[1]} mass={config[type].strength} />
	<Sun />
	<Attractor
		range={config[type].range}
		gravitationalConstant={config[type].gravitationalConstant}
		strength={config[type].strength}
		gravityType={type}
	/>
</RigidBody>

<T.Group position={[50, 0, 0]}>
	<RigidBody linearVelocity={[5, -5, 0]}>
		<Collider shape="ball" args={[1]} mass={config[type].strength} />
		<Sun />
		<Attractor
			range={config[type].range}
			gravitationalConstant={config[type].gravitationalConstant}
			strength={config[type].strength}
			gravityType={type}
		/>
	</RigidBody>
</T.Group>
