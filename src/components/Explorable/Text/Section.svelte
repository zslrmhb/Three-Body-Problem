<script>
	export let id = null;
	export let classNames = "";
</script>

<section {id} class="{classNames}">
	<slot />
</section>
