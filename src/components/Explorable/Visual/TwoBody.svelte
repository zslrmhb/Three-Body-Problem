<script>
	import { T } from "@threlte/core";
	import { OrbitControls, FakeGlowMaterial } from "@threlte/extras";
	import { Attractor, Collider, RigidBody } from "@threlte/rapier";
	import { MeshBasicMaterial, SphereGeometry } from "three";

	const type = "static";
	const geometry = new SphereGeometry(7);
	// const material = new MeshBasicMaterial({ color: "yellow" });
	// const material = new FakeGlowMaterial();

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
>
	<OrbitControls enableZoom={true} target.y={20} />
</T.PerspectiveCamera>

<T.GridHelper args={[100]} />

<T.Group position={[-50, 0, 0]}>
	<RigidBody linearVelocity={[5, -5, 0]}>
		<Collider shape="ball" args={[1]} mass={config[type].strength} />
		<T.Group position.y={2} position.x={-3}>
			<T.Mesh>
				<T.MeshBasicMaterial color="yellow" />
				<T.SphereGeometry args={[5]} />
			</T.Mesh>
			<T.Mesh>
				<FakeGlowMaterial glowColor="yellow" />
				<T.SphereGeometry args={[9]} />
			</T.Mesh>
		</T.Group>
		<Attractor
			range={config[type].range}
			gravitationalConstant={config[type].gravitationalConstant}
			strength={config[type].strength}
			gravityType={type}
		/>
	</RigidBody>
</T.Group>

<RigidBody linearVelocity={[0, 5, 0]}>
	<Collider shape="ball" args={[1]} mass={config[type].strength} />
	<T.Group position.y={2} position.x={-3}>
		<T.Mesh>
			<T.MeshBasicMaterial color="yellow" />
			<T.SphereGeometry args={[5]} />
		</T.Mesh>
		<T.Mesh>
			<FakeGlowMaterial glowColor="yellow" />
			<T.SphereGeometry args={[9]} />
		</T.Mesh>
	</T.Group>
	<Attractor
		range={config[type].range}
		gravitationalConstant={config[type].gravitationalConstant}
		strength={config[type].strength}
		gravityType={type}
	/>
</RigidBody>

<!-- <T.PerspectiveCamera
	makeDefault
	position.y={8}
	position.z={8}
	fov={90}
	on:create={({ ref }) => {
		ref.lookAt(0, 0, 0);
	}}
>
	<OrbitControls enableDamping enablePan={false} enableZoom={false} />
</T.PerspectiveCamera> -->
