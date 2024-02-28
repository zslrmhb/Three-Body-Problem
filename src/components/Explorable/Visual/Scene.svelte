<script>
	import TwoBody from "./TwoBody.svelte";
	import ThreeBody from "./ThreeBody.svelte";
	import { gsap } from "$utils/gsap.js";
	import { onMount } from "svelte";

	let mounted = false;
	onMount(() => {
		mounted = true;
	});
	$: if (mounted) animate();
	function animate() {
		gsap.set("#title", {
			transformPerspective: 400
		});
		gsap.to("#title-spacer", {
			scrollTrigger: {
				trigger: "#title-spacer",
				start: "top top",
				end: "+=2000"
			}
		});
		gsap.to("#section-1", {
			scrollTrigger: {
				trigger: "#section-1",
				start: "top top",
				end: "+=2000"
			}
		});
		gsap.to("#section-2", {
			scrollTrigger: {
				trigger: "#section-2",
				start: "top top",
				end: "+=2000"
			}
		});
		gsap.to("#section-3", {
			scrollTrigger: {
				trigger: "#section-3",
				start: "top top",
				end: "+=2000"
			}
		});
	}
</script>

<!-- <TwoBody type={"static"} /> -->
<!-- <ThreeBody type={"static"} /> -->
