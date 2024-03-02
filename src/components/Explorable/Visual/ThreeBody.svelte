<script>
	import { onMount } from "svelte";
	import { T } from "@threlte/core";
	import { OrbitControls } from "@threlte/extras";
	import { Attractor, Collider, RigidBody } from "@threlte/rapier";
	import Sun from "./Sun.svelte";

	export let type = "static";

	let body;
	// let previousVelocity = null;
	// let previousTime = null;
	// let velocityCheckInterval;

	// onMount(() => {
	// 	velocityCheckInterval = setInterval(() => {
	// 		if (body) {
	// 			const currentTime = Date.now();
	// 			const currentVelocity = body.linvel();

	// 			// console.log("center of mass", body.worldCom());
	// 			// console.log("translation", body.translation());

	// 			if (previousVelocity && previousTime) {
	// 				const timeInterval = (currentTime - previousTime) / 100;
	// 				const acceleration = {
	// 					x: (currentVelocity.x - previousVelocity.x) / timeInterval,
	// 					y: (currentVelocity.y - previousVelocity.y) / timeInterval,
	// 					z: (currentVelocity.z - previousVelocity.z) / timeInterval
	// 				};
	// 				console.log("Acceleration:", acceleration);
	// 			}

	// 			if (
	// 				!previousVelocity ||
	// 				currentVelocity.x !== previousVelocity.x ||
	// 				currentVelocity.y !== previousVelocity.y ||
	// 				currentVelocity.z !== previousVelocity.z
	// 			) {
	// 				previousVelocity = { ...currentVelocity };
	// 				previousTime = currentTime;
	// 			}
	// 		}
	// 	}, 100);

	// 	return () => {
	// 		if (velocityCheckInterval) {
	// 			clearInterval(velocityCheckInterval);
	// 		}
	// 	};
	// });

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

<T.Group position={[-60, 0, 50]}>
	<RigidBody linearVelocity={[5, 0, 0]} bind:rigidBody={body}>
		<!-- <RigidBody linearVelocity={[5, -5, 0]} bind:rigidBody={body}> -->
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

<RigidBody linearVelocity={[0, 10, -20]}>
	<Collider shape="ball" args={[1]} mass={config[type].strength} />
	<Sun />
	<Attractor
		range={config[type].range}
		gravitationalConstant={config[type].gravitationalConstant}
		strength={config[type].strength}
		gravityType={type}
	/>
</RigidBody>

<T.Group position={[50, 0, 60]}>
	<RigidBody linearVelocity={[-5, 0, 5]}>
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
