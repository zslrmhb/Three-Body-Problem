<script>
	import { T, useTask } from "@threlte/core";
	import { OrbitControls } from "@threlte/extras";
	import { MeshLineGeometry, MeshLineMaterial } from "@threlte/extras";
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

	let body1;
	let body2;
	$: bodies = [body1, body2];
	$: trajectory1 = [new Vector3(-3, 0, 0)];
	let trajectory2 = [];

	let previousVelocity = null;
	let previousTime = null;
	let velocityCheckInterval;
	const MAX_TRAJECTORY_POINTS = 500;

	// let points;
	// useTask(() => {
	// 	if (body1 != null) {
	// 		const currentPos = body1.worldCom();
	// 		const positionVector = new Vector3(
	// 			currentPos.x,
	// 			currentPos.y,
	// 			currentPos.z
	// 		);
	// 		if (trajectory1.length < MAX_TRAJECTORY_POINTS) {
	// 			trajectory1.push(positionVector);
	// 		}
	// 	}
	// const curve = new CatmullRomCurve3([
	// 	new Vector3(-3, 0, 0),
	// 	new Vector3(-1, 1, -1),
	// 	new Vector3(1, -1, 1),
	// 	new Vector3(3, 0, 0)
	// ]);
	// trajectory1 = curve.getPoints(10000);
	// 	trajectory1 = trajectory1;
	// });

	import { CatmullRomCurve3, Vector3 } from "three";
</script>

<T.Mesh>
	<MeshLineGeometry bind:points={trajectory1} />
	<MeshLineMaterial width={1} color="#fe3d00" />
</T.Mesh>

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
<!-- <Earth /> -->

<T.Group position={[-20, 0, 0]}>
	<RigidBody linearVelocity={[10, 10, 0]} bind:rigidBody={body1}>
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
<T.Group position={[20, 0, 0]}>
	<RigidBody linearVelocity={[-10, -10, 0]} bind:rigidBody={body2}>
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
