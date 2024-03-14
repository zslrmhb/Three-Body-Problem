<script>
	import Hero from "./Hero.svelte";
	import Intro from "./Intro.svelte";
	import TwoBody from "./TwoBody.svelte";
	import ThreeBody from "./ThreeBody.svelte";
	import Playground from "./Playground.svelte";
	import { gsap } from "$utils/gsap.js";
	import { onMount } from "svelte";
	import { showHero, showIntro, showTwoBody, showThreeBody, showPlayground } from "$stores";

	let mounted = false;
	let showEarth = false;
	let showSun = false;
	let isMoving = false;
	onMount(() => {
		mounted = true;
		if (mounted) {
			setupAnimations();
		}
	});

	const partConfigs = {
		"st-1": { showEarth: true, showSun: false, isMoving: false },
		"st-2": { showEarth: false, showSun: true, isMoving: false },
		"st-3": { showEarth: true, showSun: true, isMoving: true },
		"st-4": { showEarth: true, showSun: true, isMoving: true },
		"st-5": { showEarth: true, showSun: true, isMoving: true },
		"st-6": { showEarth: false, showSun: true, isMoving: false },
		"st-7": { showEarth: false, showSun: true, isMoving: false },
		"st-8": { showEarth: false, showSun: true, isMoving: true },
		"st-9": { showEarth: true, showSun: true, isMoving: true },
		"st-10": { showEarth: false, showSun: true, isMoving: false },
		"st-11": { showEarth: false, showSun: true, isMoving: false },
		"st-12": { showEarth: false, showSun: true, isMoving: true },
		"st-13": { showEarth: true, showSun: true, isMoving: true },
		// Add more configurations for other parts...
	};

	const sectionsConfig = [
		{
			id: "intro",
			parts: [],
			store: showIntro,
			partConfigs: {}
		},
		{
			id: "section-1",
			parts: ["st-1", "st-2", "st-3", "st-4", "st-5"],
			store: showIntro,
			partConfigs: partConfigs
		},
		{
			id: "section-2",
			parts: ["st-6", "st-7", "st-8", "st-9"],
			store: showTwoBody,
			partConfigs: partConfigs
		},
		{
			id: "section-3",
			parts: ["st-10", "st-11", "st-12", "st-13"],
			store: showThreeBody,
			partConfigs: partConfigs
		},
		{
			id: "section-4",
			parts: ['st-14'],
			store: showPlayground,
			partConfigs: {}
		}
	];

	const groupScenes = {
		"group-1": ["st-3", "st-4", "st-5"],
		"group-2": ["st-6", "st-7"],
		"group-3": ["st-10", "st-11"]
	};

	function setupAnimations() {
		titleAnimation();
		sectionsConfig.forEach((sectionConfig) => {
			sectionAnimation(sectionConfig);
			sectionConfig.parts.forEach((partId) => {
				if (!isPartOfGroup(partId)) {
					partAnimation(partId, sectionConfig);
					// console.log(partId);
				}
			});
			handleGroupScenes(sectionConfig);
		});
	}

	function isPartOfGroup(partId) {
		return Object.values(groupScenes).some((group) => group.includes(partId));
	}

	function handleGroupScenes(sectionConfig) {
		Object.entries(groupScenes).forEach(([groupId, parts]) => {
			if (parts.some((part) => sectionConfig.parts.includes(part))) {
				groupSceneAnimation(groupId, parts, sectionConfig);
			}
		});
	}

	function groupSceneAnimation(groupId, parts, sectionConfig) {
		const firstPartId = parts[0];
		const lastPartId = parts[parts.length - 1];

		const config = sectionConfig.partConfigs[firstPartId] || {};

		const updateState = (entering) => {
			sectionConfig.store.set(entering);
			if (config) {
				showEarth = entering && config.showEarth;
				showSun = entering && config.showSun;
				isMoving = entering && config.isMoving;
			}
		};

		gsap.fromTo(
			`#${firstPartId}`,
			{ autoAlpha: 0 },
			{
				scrollTrigger: {
					trigger: `#${firstPartId}`,
					start: "top 80%",
					endTrigger: `#${lastPartId}`,
					end: "bottom 20%",
					toggleActions: "play reverse play reverse",
					onEnter: () => updateState(true),
					onLeave: () => updateState(false),
					onEnterBack: () => updateState(true),
					onLeaveBack: () => updateState(false)
				},
				autoAlpha: 1,
				duration: 2
			}
		);
	}

	function sectionAnimation(sectionConfig) {
		gsap.fromTo(
			`#${sectionConfig.id}`,
			{ autoAlpha: 0 },
			{
				scrollTrigger: {
					trigger: `#${sectionConfig.id}`,
					start: "top 80%",
					end: "bottom 20%",
					toggleActions: "play reverse play reverse"
				},
				autoAlpha: 1,
				duration: 2
			}
		);
	}

	function partAnimation(partId, sectionConfig) {
		const config = sectionConfig.partConfigs[partId] || {};

		const updateState = (entering) => {
			sectionConfig.store.set(entering);
			if (config) {
				showEarth = entering && config.showEarth;
				showSun = entering && config.showSun;
				isMoving = entering && config.isMoving;
			}
		};

		gsap.fromTo(
			`#${partId}`,
			{ autoAlpha: 0 },
			{
				scrollTrigger: {
					trigger: `#${partId}`,
					start: "top 80%",
					end: "bottom 20%",
					toggleActions: "play reverse play reverse",
					onEnter: () => updateState(true),
					onLeave: () => updateState(false),
					onEnterBack: () => updateState(true),
					onLeaveBack: () => updateState(false)
				},
				autoAlpha: 1,
				duration: 2
			}
		);
	}

	function titleAnimation() {
		gsap
			.timeline({
				scrollTrigger: {
					trigger: "#title-spacer",
					start: "top top",
					end: "+=1000",
					scrub: 1,
					onLeave: () => showHero.set(false),
					onLeaveBack: () => showHero.set(true)
				}
			})
			.add("step-1")
			.to("#title", { autoAlpha: 0 }, "step-1");
	}
	$:console.log($showPlayground)
</script>

{#if $showHero}
	<Hero />
{/if}
{#if $showIntro}
	<Intro {showEarth} {showSun} {isMoving} />
{/if}
{#if $showTwoBody}
	<TwoBody {showEarth} {showSun} {isMoving} />
{/if}
{#if $showThreeBody}
	<ThreeBody {showEarth} {showSun} {isMoving} />
{/if}

{#if $showPlayground}
	<Playground type={"static"}/>
{/if}