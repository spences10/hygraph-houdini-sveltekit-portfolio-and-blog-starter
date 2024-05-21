<script lang="ts">
	interface Image {
		url: string;
	}
	interface ProjectCardProps {
		name: string;
		slug: string | null;
		description: string;
		tags: string[];
		demo: string | null;
		sourceCode: string | null;
		image: Image[];
	}

	let { project }: { project: ProjectCardProps } = $props();
</script>

<div class="group card relative col-span-2 shadow-2xl">
	<img
		src={project.image[0]?.url}
		alt={project.name}
		class="h-full object-cover"
	/>
	<a href={`/projects/${project.slug}`}>
		<div
			class="absolute bottom-0 left-0 right-0 bg-primary p-4 text-primary-content duration-300 group-hover:opacity-100 lg:opacity-0"
		>
			<h2 class="font-bold lg:text-xl">{project.name}</h2>
			<p class="text-sm lg:text-xl">
				{project.description.slice(0, 80)}...
			</p>
		</div>
	</a>
</div>
