<script lang="ts">
	import { marked } from 'marked';
	import type { PageData } from './$houdini';

	let { data }: { data: PageData } = $props();

	let page_data = data.postsData;

	const truncate_content = (content: string) => {
		return content.slice(0, 150);
	};
</script>

<h1 class="mb-10 text-4xl font-extrabold">Blog posts</h1>

{#if $page_data.data?.posts && $page_data.data.posts.length > 0}
	{#each $page_data.data?.posts as { title, slug, content, coverImage, tags }}
		<div class="card mb-20 text-center shadow-2xl">
			<figure class="">
				<img
					class=""
					src={coverImage.url}
					alt={`Cover image for ${title}`}
				/>
			</figure>
			<div class="prose card-body">
				<h2 class="title">{title}</h2>
				{@html marked(truncate_content(content))}
				<div class="mt-5 flex justify-center space-x-2">
					{#each tags as tag}
						<span class="badge badge-primary">{tag}</span>
					{/each}
				</div>
				<div class="card-actions justify-center">
					<a
						href={`/posts/${slug}`}
						class="btn btn-outline btn-primary">Read &rArr;</a
					>
				</div>
			</div>
		</div>
	{/each}
{/if}
