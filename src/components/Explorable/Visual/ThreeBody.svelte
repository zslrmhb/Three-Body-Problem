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

	export let type = "static";
	export let showEarth, showSun, isMoving;

	let body1;
	let body2;
	let body3;
	$: bodies = [body1, body2, body3];
	const MAX_TRAJECTORY_POINTS = 2000;
	let trajectory1 = Array.from(
		{ length: MAX_TRAJECTORY_POINTS },
		() => new Vector3(0, 0, 0)
	);
	let trajectory2 = Array.from(
		{ length: MAX_TRAJECTORY_POINTS },
		() => new Vector3(0, 0, 0)
	);
	let trajectory3 = Array.from(
		{ length: MAX_TRAJECTORY_POINTS },
		() => new Vector3(0, 0, 0)
	);
	$: trajectories = [trajectory1, trajectory2, trajectory3];

	let updateIndex = 0;

	useTask(() => {
		for (let i = 0; i < bodies.length; i++) {
			if (bodies[i] != null) {
				const currentPos = bodies[i].translation();
				trajectories[i][updateIndex].set(
					currentPos.x,
					currentPos.y,
					currentPos.z
				);
			}
		}
		updateIndex = (updateIndex + 1) % MAX_TRAJECTORY_POINTS;

		// Trigger reactivity
		trajectory1 = [...trajectory1];
		trajectory2 = [...trajectory2];
		trajectory3 = [...trajectory3];
	});

	const config = {
		static: {
			type: "static",
			strength: 3,
			range: 100,
			gravitationalConstant: undefined
		}
	};
</script>

{#if isMoving}
	<T.Mesh>
		<MeshLineGeometry points={trajectory1} />
		<MeshLineMaterial width={0.05} color="#606060" />
	</T.Mesh>
	<T.Mesh>
		<MeshLineGeometry points={trajectory2} />
		<MeshLineMaterial width={0.05} color="#606060" />
	</T.Mesh>
	<T.Mesh>
		<MeshLineGeometry points={trajectory3} />
		<MeshLineMaterial width={0.05} color="#606060" />
	</T.Mesh>
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
