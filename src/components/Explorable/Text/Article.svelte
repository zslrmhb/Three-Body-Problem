<script>
	import Section from "./Section.svelte";
	import Part from "./Part.svelte";
	import Spacer from "./Spacer.svelte";
	import Bold from "./Bold.svelte";
	import Tex from "./Tex.svelte";
	import {Link} from 'svelte-routing';
</script>

<div id="title-spacer" class="h-[2500px]" />
<!-- classNames="animate" -->

<Section id="intro">
	The development of civilization relies on a relatively stable and predictable
	environment such as Earth. On a planet light years away from Earth, a new
	civilization embarks on its journey, and YOU are part of it...
</Section>

<Section id="section-1">
	WELCOME
	<Spacer />
	<Part id="st-1">This is my planet .. my .. home?</Part>
	<Spacer />
	<Part id="st-2"
		>This looks like the Sun, which provides the essential energy to my
		environment..
	</Part>
	<Spacer />
	<Part id="st-3"
		>Apparently, there is something called the gravitational force..</Part
	>
	<Spacer />
	<Part id="st-4"
		>This force is described by the formula <Tex
			expr={"\\colorbox{red}{$F=\\frac{GM_1M_2}{r^2}$}"}
		/>
	</Part>
	<Spacer />
	<Part id="st-5"
		>So on objects that have a large mass, like the sun and my planet, this
		force is HUGE!</Part
	>
</Section>

<Spacer />

<Section id="section-2">
	TWO-BODY PROBLEM
	<Spacer />
	<Part id="st-6">Now there are two suns in the solar system..</Part>
	<Spacer />
	<Part id="st-7"
		>They have similar mass. <br /> So, I think they exert similar force onto each
		other..</Part
	>
	<Spacer />
	<Part id="st-8">Their motion looks kind of stable, right..?</Part>
	<Spacer />
	<Part id="st-9"
		>Is this how my planet will orbit this two-body solar system?</Part
	>
</Section>

<Spacer />

<Section id="section-3">
	THREE-BODY PROBLEM
	<Spacer />
	<Part id="st-10">Now there are three suns in the solar system..</Part>
	<Spacer />
	<Part id="st-11"
		>They all have similar mass. <br /> So .. right! Similar force on each other!</Part
	>
	<Spacer />
	<Part id="st-12">Wait!? This is so chaotic..</Part>
	<Spacer />
	<Part id="st-13">What is going on?</Part>
</Section>

<!-- <Spacer /> -->

<Spacer />
<Spacer />
