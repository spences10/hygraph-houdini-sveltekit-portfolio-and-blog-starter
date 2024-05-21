<script lang="ts">
	import { ProjectCard } from '$lib/componentes';
	import type { PageData } from './$houdini';

	let { data }: { data: PageData } = $props();

	let page_data = data.projectsData;
</script>

<h1 class="mb-20 text-center text-5xl font-bold">
	Recent Projects by Me
</h1>

<div
	class="grid gap-10 md:grid-cols-4 md:px-10 lg:-mx-52 lg:grid-cols-6"
>
	{#if $page_data.data && $page_data.data.projects}
		{#each $page_data.data.projects as project}
			<ProjectCard {project} />
		{/each}
	{/if}
</div>
