<script>
	export let title = "Three Body Problem";
	export let description = "A Visual Explorable of the Three Body Problem";
	export let url = "https://zslrmhb.github.io/Three-Body-Problem/";
	export let keywords =
		"two body problem, three body problem, gravity, visual, explorable, explainer,  interactive, visualization, tutorial, intuition, solar system, space, Liu Cixin, three.js, svelte, threlte, 3D";
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<meta name="author" content="Hongbin Miao" />
	<meta name="author" content="Qirui Zheng" />
	<meta name="news_keywords" content={keywords} />
	<meta property="og:title" content={title} />
	<meta property="og:site_name" content="Hongbin Miao" />
	<meta property="og:url" content={url} />
	<meta property="og:description" content={description} />
	<meta property="og:type" content="article" />
	<meta property="og:locale" content="en_US" />
	<meta name="robots" content="max-image-preview:large" />
	<link rel="canonical" href="{url}/" />
</svelte:head>
