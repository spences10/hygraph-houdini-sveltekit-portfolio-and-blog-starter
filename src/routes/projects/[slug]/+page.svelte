<script lang="ts">
	import { marked } from 'marked';
	import type { PageData } from './$houdini';

	let { data }: { data: PageData } = $props();

	let page_data = data.projectData;
</script>

<div class="xl:-mx-38 mb-5 sm:-mx-5 md:-mx-10 lg:-mx-20">
	<img
		class="rounded-lg"
		src={$page_data.data?.project?.image[0].url}
		alt={$page_data.data?.project?.name}
	/>
</div>

<h1 class="mb-5 text-4xl font-semibold">
	{$page_data.data?.project?.name}
</h1>

<div class="mb-5 flex justify-between">
	<div>
		{#if $page_data.data?.project?.tags}
			{#each $page_data.data?.project?.tags as tag}
				<span
					class="hover:bg-primary-focus badge badge-primary mr-2 cursor-pointer"
				>
					{tag}
				</span>
			{/each}
		{/if}
	</div>
</div>

<div
	class="hover:prose-a:text-primary-focus prose mb-5 flex prose-a:text-primary"
>
	<a class="mr-5" href={$page_data.data?.project?.demo}>Demo</a>
	<a href={$page_data.data?.project?.sourceCode}>Source Code</a>
</div>

<article class="prose prose-xl">
	{@html marked($page_data.data?.project?.description ?? '')}
</article>
