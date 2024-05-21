<script lang="ts">
	import { ProjectCard } from '$lib/componentes';
	import type { PageData } from './$houdini';

	let { data }: { data: PageData } = $props();

	let page_data = data.indexPageData;
</script>

<h1 class="mb-20 text-center text-5xl font-bold">
	Welcome to my Portfolio
</h1>

{#if $page_data.data?.authors && $page_data.data.authors.length > 0}
	<div class="mb-40 flex items-end">
		<div class="mr-6">
			<h2 class="mb-4 text-3xl font-bold tracking-wider">
				{$page_data.data.authors[0]?.name}
			</h2>
			<p class="mb-4 text-xl">{$page_data.data.authors[0]?.intro}</p>
		</div>

		<img
			class="mask mask-squircle h-48"
			src={$page_data.data.authors[0]?.picture?.url}
			alt={$page_data.data.authors[0]?.name}
		/>
	</div>
{/if}

<div
	class="grid gap-10 md:grid-cols-4 md:px-10 lg:-mx-52 lg:grid-cols-6"
>
	{#if $page_data.data && $page_data.data.projects}
		{#each $page_data.data.projects as project}
			<ProjectCard {project} />
		{/each}
	{/if}
</div>
