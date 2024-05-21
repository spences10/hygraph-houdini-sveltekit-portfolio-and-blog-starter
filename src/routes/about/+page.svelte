<script lang="ts">
	import { marked } from 'marked';

	import type { PageData } from './$houdini';

	let { data }: { data: PageData } = $props();

	let page_data = data.aboutPageData;
</script>

<svelte:head>
	<title>About · {$page_data.data?.authors[0].name}</title>
	<meta
		name="description"
		content={$page_data.data?.authors[0].bio}
	/>
</svelte:head>

<h1 class="mb-20 text-center text-5xl font-bold">About Me</h1>

<div class="mb-40 flex items-end">
	<div class="mr-6">
		<h2 class="mb-4 text-3xl font-bold tracking-wider">
			{$page_data.data?.authors[0].name}
		</h2>
		<p class="mb-4 text-xl">{$page_data.data?.authors[0].intro}</p>
	</div>

	<img
		class="mask mask-squircle h-48"
		src={$page_data.data?.authors[0].picture.url}
		alt={$page_data.data?.authors[0].name}
	/>
</div>

<article class="prose prose-lg">
	{@html marked($page_data.data?.authors[0].bio ?? '')}
</article>
