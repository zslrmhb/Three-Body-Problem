<script>
	import { T } from "@threlte/core";
	import { OrbitControls, Stars } from "@threlte/extras";
</script>

<Stars speed={1} />
<T.PerspectiveCamera
	makeDefault
	position.y={100}
	position.x={100}
	position.z={100}
	fov={100}
	on:create={({ ref }) => {
		ref.lookAt(0, 0, 0);
	}}
>
	<OrbitControls
		enableDamping={true}
		autoRotate={true}
		rotateSpeed={0.1}
		enablePan={false}
		enableZoom={false}
	/>
</T.PerspectiveCamera>
