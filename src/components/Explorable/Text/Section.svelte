<script>
	export let id = null;
	export let classNames = "";
</script>

<section {id} class="prose prose-xl [&>*]:px-10 mb-60 {classNames}">
	<slot />
</section>
