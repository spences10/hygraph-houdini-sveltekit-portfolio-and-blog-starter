<script lang="ts">
	import { marked } from 'marked';
	import type { PageData } from './$houdini';

	let { data }: { data: PageData } = $props();

	let page_data = data.postData;
</script>

<div class="xl:-mx-38 mb-5 sm:-mx-5 md:-mx-10 lg:-mx-20">
	<img
		class="rounded-xl"
		src={$page_data.data?.post?.coverImage.url}
		alt={`Cover image for ${$page_data.data?.post?.title}`}
	/>
</div>

<div class="prose prose-xl">
	<h1>{$page_data.data?.post?.title}</h1>
</div>

<p class="text-xs font-semibold tracking-widest text-secondary">
	{new Date($page_data.data?.post?.date).toLocaleDateString()}
</p>

<div class="mb-5 flex justify-between">
	<div>
		{#if $page_data.data?.post?.tags}
			<div class="mt-5 space-x-2">
				{#each $page_data.data?.post?.tags as tag}
					<span class="badge badge-primary">{tag}</span>
				{/each}
			</div>
		{/if}
	</div>
</div>

<article class="prose prose-lg">
	{@html marked($page_data.data?.post?.content ?? '')}
</article>
