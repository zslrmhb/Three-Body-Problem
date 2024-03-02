<script>
	import Bold from "./Text/Bold.svelte";
</script>

<div id="title" class="fixed inset-0 z-10 flex items-center justify-center">
	<div class="flex flex-col gap-5 items-left relative">
		<h1 class="text-7xl sm:text-8xl md:text-9xl font-display drop-shadow-xl">
			Three <br /> Body <br /> Problem
		</h1>

		<div class="text-lg md:text-xl font-displayAlt text-right">
			Should philosophy guide experiments, or should experiments guide
			philosophy? <br />
			- Liu Cixin, <i>The Three-Body Problem</i>
		</div>
		<div
			class="relative top-0 right-0 font-displayAlt text-2xl sm:text-3xl md:text-4xl"
		>
			By <a
				href="https://github.com/zslrmhb"
				target="_blank"
				rel="noopener noreferrer"
				class="underline decoration-2 underline-offset-8 decoration-neutral text-secondary"
				>Hongbin Miao</a
			>
			&
			<a
				href="https://github.com/Qz07"
				target="_blank"
				rel="noopener noreferrer"
				class="underline decoration-2 underline-offset-8 decoration-neutral text-secondary"
				>Qirui Zheng</a
			>
		</div>
		<div
			class="relative alert bg-transparent border-0 flex flex-col mt-10 lg:hidden"
		>
			<div class="text-xl sm:text-2xl text-center">
				Whoops! This interactive is better viewed on <Bold>desktop</Bold> with a
				<Bold>larger screen</Bold>!
			</div>
		</div>
	</div>
</div>
