<script>
	import { T, useTask } from "@threlte/core";
	import {
		OrbitControls,
		MeshLineGeometry,
		MeshLineMaterial
	} from "@threlte/extras";
	import { Attractor, Collider, RigidBody } from "@threlte/rapier";
	import { Vector3 } from "three";
	import Sun from "./Sun.svelte";
	import Earth from "./Earth.svelte";

	export let showEarth, showSun, isMoving;

	let body1;
	let body2;
	let body3;

	let updateIndex = 0;
	const MAX_TRAJECTORY_POINTS = 2000;

	let positions = [
		Array.from({ length: MAX_TRAJECTORY_POINTS }, () => new Vector3(0, 0, 0)),
		Array.from({ length: MAX_TRAJECTORY_POINTS }, () => new Vector3(0, 0, 0)),
		Array.from({ length: MAX_TRAJECTORY_POINTS }, () => new Vector3(0, 0, 0))
	];
	let velocities = [
		Array.from({ length: MAX_TRAJECTORY_POINTS }, () => new Vector3(0, 0, 0)),
		Array.from({ length: MAX_TRAJECTORY_POINTS }, () => new Vector3(0, 0, 0)),
		Array.from({ length: MAX_TRAJECTORY_POINTS }, () => new Vector3(0, 0, 0))
	];
	let accelerations = [
		Array.from({ length: MAX_TRAJECTORY_POINTS }, () => new Vector3(0, 0, 0)),
		Array.from({ length: MAX_TRAJECTORY_POINTS }, () => new Vector3(0, 0, 0)),
		Array.from({ length: MAX_TRAJECTORY_POINTS }, () => new Vector3(0, 0, 0))
	];

	let previousVelocity = [
		new Vector3(0, 0, 0),
		new Vector3(0, 0, 0),
		new Vector3(0, 0, 0)
	];
	let times = Array.from({ length: MAX_TRAJECTORY_POINTS }, () => 0);

	function updateBodyData(body, index) {
		if (!body) return;

		const currentVelocity = body.linvel();
		const deltaTime = (Date.now() - times[updateIndex]) / 1000 + 1;

		const acceleration = new Vector3(
			(currentVelocity.x - previousVelocity[index].x) / deltaTime,
			(currentVelocity.y - previousVelocity[index].y) / deltaTime,
			(currentVelocity.z - previousVelocity[index].z) / deltaTime
		);
		// Calculate acceleration

		// Update arrays
		positions[index][updateIndex].copy(body.translation());
		velocities[index][updateIndex].copy(currentVelocity);
		accelerations[index][updateIndex].copy(acceleration);
		previousVelocity[index].copy(currentVelocity);
		positions = positions;
		velocities = velocities;
		accelerations = accelerations;
		console.log(positions);
	}
	useTask(() => {
		times[updateIndex] = Date.now();
		updateBodyData(body1, 0);
		updateBodyData(body2, 1);
		updateBodyData(body3, 2);
		updateIndex = (updateIndex + 1) % MAX_TRAJECTORY_POINTS;
	});
</script>

{#if isMoving}
	<T.Mesh>
		<MeshLineGeometry points={positions[0]} />
		<MeshLineMaterial width={0.05} color="#606060" />
	</T.Mesh>
	<T.Mesh>
		<MeshLineGeometry points={positions[1]} />
		<MeshLineMaterial width={0.05} color="#606060" />
	</T.Mesh>
	<T.Mesh>
		<MeshLineGeometry points={positions[2]} />
		<MeshLineMaterial width={0.05} color="#606060" />
	</T.Mesh>
	<T.Group position={[0, -30, 30]}>
		<T.Mesh>
			<MeshLineGeometry points={velocities[0]} />
			<MeshLineMaterial width={0.05} color="#606060" />
		</T.Mesh>
		<T.Mesh>
			<MeshLineGeometry points={velocities[1]} />
			<MeshLineMaterial width={0.05} color="#606060" />
		</T.Mesh>
	</T.Group>
{/if}

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

<!-- <T.GridHelper args={[100]} /> -->

{#if showSun}
	<T.Group position={isMoving ? [-30, 30, 50] : [50, 0, 0]}>
		<RigidBody
			linearVelocity={isMoving ? [5, 0, 0] : [0, 0, 0]}
			bind:rigidBody={body1}
		>
			<Collider shape="ball" args={[1]} mass={10} />
			<Sun />
			{#if isMoving}
				<Attractor
					range={100}
					gravitationalConstant={undefined}
					strength={3}
					gravityType={"static"}
				/>
			{/if}
		</RigidBody>
	</T.Group>

	<RigidBody
		linearVelocity={isMoving ? [0, 5, -20] : [0, 0, 0]}
		bind:rigidBody={body2}
	>
		<Collider shape="ball" args={[1]} mass={10} />
		<Sun />
		{#if isMoving}
			<Attractor
				range={100}
				gravitationalConstant={undefined}
				strength={3}
				gravityType={"static"}
			/>
		{/if}
	</RigidBody>

	<T.Group position={isMoving ? [30, 30, 50] : [-50, 0, 0]}>
		<RigidBody
			linearVelocity={isMoving ? [-5, 0, 5] : [0, 0, 0]}
			bind:rigidBody={body3}
		>
			<Collider shape="ball" args={[1]} mass={10} />
			<Sun />
			{#if isMoving}
				<Attractor
					range={100}
					gravitationalConstant={undefined}
					strength={3}
					gravityType={"static"}
				/>
			{/if}
		</RigidBody>
	</T.Group>
{/if}

{#if showEarth}
	<RigidBody linearVelocity={isMoving ? [1, 1, 1] : [0, 0, 0]}>
		<Collider shape="ball" args={[1]} mass={0.1} />
		<Earth />
		<Attractor
			range={100}
			gravitationalConstant={undefined}
			strength={3}
			gravityType={"static"}
		/>
	</RigidBody>
{/if}
