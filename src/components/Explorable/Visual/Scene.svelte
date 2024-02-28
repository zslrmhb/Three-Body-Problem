<script>
	import Intro from "./Intro.svelte";
	import TwoBody from "./TwoBody.svelte";
	import ThreeBody from "./ThreeBody.svelte";
	import { gsap } from "$utils/gsap.js";
	import { onMount } from "svelte";

	let showIntro = false;
	let showTwoBody = false;
	let showThreeBody = false;

	let mounted = false;
	onMount(() => {
		mounted = true;
	});

	$: if (mounted) animate();

	function animate() {
		gsap.set("#title", {
			transformPerspective: 400
		});

		gsap
			.timeline({
				scrollTrigger: {
					trigger: "#title-spacer",
					start: "top top",
					end: "+=2000",
					scrub: 1
				}
			})
			.add("step-1")
			.to("#title", { autoAlpha: 0 }, "step-1");

		gsap.to("#section-1", {
			scrollTrigger: {
				trigger: "#section-1",
				start: "top center",
				end: "bottom center",
				onEnter: () => {
					showIntro = true;
				},
				onLeave: () => {
					showIntro = false;
				},
				onEnterBack: () => {
					showIntro = true;
				},
				onLeaveBack: () => {
					showIntro = false;
				}
			}
		});
		gsap.to("#section-2", {
			scrollTrigger: {
				trigger: "#section-2",
				start: "top center",
				end: "bottom center",
				onEnter: () => {
					showTwoBody = true;
				},
				onLeave: () => {
					showTwoBody = false;
				},
				onEnterBack: () => {
					showTwoBody = true;
				},
				onLeaveBack: () => {
					showTwoBody = false;
				}
			}
		});
		gsap.to("#section-3", {
			scrollTrigger: {
				trigger: "#section-3",
				start: "top center",
				end: "bottom center",
				onEnter: () => {
					showThreeBody = true;
				},
				onLeave: () => {
					showThreeBody = false;
				},
				onEnterBack: () => {
					showThreeBody = true;
				},
				onLeaveBack: () => {
					showThreeBody = false;
				}
			}
		});
	}
</script>

{#if showIntro}
	<Intro type={"static"} />
{/if}
{#if showTwoBody}
	<TwoBody type={"static"} />
{/if}
{#if showThreeBody}
	<ThreeBody type={"static"} />
{/if}
