<script>
	import { T } from "@threlte/core";
	import { OrbitControls } from "@threlte/extras";
	import { Attractor, Collider, RigidBody } from "@threlte/rapier";
	import Sun from "./Sun.svelte";
	import Earth from "./Earth.svelte";

	export let showEarth, showSun, isMoving;

	function getVelocity() {
		return isMoving ? [-5, 0, -40] : [0, 0, 0];
	}

	function getPos() {
		return isMoving ? [50, 0, 0] : [0, 0, 0];
	}
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

{#if showEarth}
	<T.Group position={getPos()}>
		<RigidBody linearVelocity={getVelocity()}>
			<Collider shape="ball" args={[1]} mass={1} />
			<Earth />
			<Attractor
				range={100}
				gravitationalConstant={undefined}
				strength={1}
				gravityType={"static"}
			/>
		</RigidBody>
	</T.Group>
{/if}
{#if showSun}
	<T.Group position={[0, 0, 0]}>
		<RigidBody linearVelocity={[0, 0, 0]}>
			<Collider shape="ball" args={[1]} mass={100000} />
			<Sun />
			<Attractor
				range={100}
				gravitationalConstant={undefined}
				strength={1}
				gravityType={"static"}
			/>
		</RigidBody>
	</T.Group>
{/if}
