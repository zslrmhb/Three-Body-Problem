<script>
	import Section from "./Section.svelte";
	import Part from "./Part.svelte";
	import Spacer from "./Spacer.svelte";
</script>

<div id="title-spacer" class="h-[2500px]" />
<!-- classNames="animate" -->
<Section id="section-1" class="text-7xl">
	This is section 1
	<Part id="st-1" class="sticky bottom-0 text-center">This is part 1</Part>
	<Part id="st-2">This is part 2</Part>
	<Part id="st-3">This is part 3</Part>
	<Part id="st-4">This is part 4</Part>
</Section>

<Spacer />

<Section id="section-2" class="">
	This is section 2
	<Part id="st-5">This is part 5</Part>
	<Part id="st-6">This is part 6</Part>
	<Part id="st-7">This is part 7</Part>
	<Part id="st-8">This is part 8</Part>
</Section>

<Spacer />

<Section id="section-3" class="">
	This is section 3
	<Part id="st-9">This is part 9</Part>
	<Part id="st-10">This is part 10</Part>
	<Part id="st-11">This is part 11</Part>
	<Part id="st-12">This is part 12</Part>
</Section>

<Spacer />
<Spacer />
