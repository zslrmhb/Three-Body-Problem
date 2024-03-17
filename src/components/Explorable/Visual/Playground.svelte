<script>
	import { T } from "@threlte/core";
	import { OrbitControls } from "@threlte/extras";
	import { Attractor, Collider, RigidBody } from "@threlte/rapier";
  	import { Checkbox, Folder, Pane, RadioGrid, Slider } from 'svelte-tweakpane-ui';
	// import { cameraControls, mesh} from './stores';
	import Sun from "./Sun.svelte";
	import Earth from "./Earth.svelte";

	export let type = "static";

	const config = {
		static: {
			type: "static",
			strength: 3,
			range: 100,
			gravitationalConstant: undefined
		}
	};

	let numberOfBodies = 1;
	let showEarth = true;
	let isPlaying = true;
	let massAmt = 5; 

	const positionSun= {
		1: [-50, 0, 60],
		2: [0, 10, -20],
		3: [50, 0, 60]
	};

</script>


<T.PerspectiveCamera
	position.y={20}
	position.z={100}
	makeDefault
	fov={70}
	far={100000}
	on:create={({ ref }) => {
		ref.lookAt(0, -10, 0);
	}}
>
	<OrbitControls enableDamping enablePan={true} enableZoom={true} />
</T.PerspectiveCamera>

<T.GridHelper args={[100]} />

<!-- <Earth /> -->
{#if showEarth}
<RigidBody linearVelocity={[0, 5, 0]}>
	<Collider shape="ball" args={[1]} mass={10} />
	<Earth />
</RigidBody>
{/if}


<!-- Create suns based on the number of bodies -->
{#each Array.from({ length: numberOfBodies }) as _, i}
	<T.Group position={positionSun[i+1]}>
	<RigidBody
		linearVelocity={[Math.random() * 10, Math.random() * 10, 0]}
		position={[Math.random() * 100 - 50, Math.random() * 100 - 50, 0]}>
		<Collider shape="ball" args={[1]} mass={config[type].strength} />
		<Sun />
		<!-- <Attractor
		range={config[type].range}
		gravitationalConstant={config[type].gravitationalConstant}
		strength={config[type].strength}
		gravityType={type}
		/> -->
	</RigidBody>
	</T.Group>
{/each}

<Attractor
  range={config[type].range}
  gravitationalConstant={config[type].gravitationalConstant}
  strength={config[type].strength}
  gravityType={type}
/>

<Pane
	position = 'fixed'
	title = "Playground"
	userExpandable = {true}>
	<Folder 
		userExpandable = {false}
		exanded
		title = 'Number of Bodies'>
	<RadioGrid 
		bind:value={numberOfBodies}
		values={[1,2,3]}/>
	<Checkbox 
		bind:value={showEarth}
		label = 'Show Earth'>
	</Checkbox>
	</Folder>
	<!-- <Slider 
		bind:value = {massAmt}
		min = {1}
		max = {10}
		format = {(v) => v.toFixed(2)}
		label = 'Mass1'/> -->
</Pane>