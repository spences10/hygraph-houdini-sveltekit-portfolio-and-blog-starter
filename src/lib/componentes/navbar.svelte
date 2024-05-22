<script lang="ts">
	import ThemeSelect from './theme-select.svelte';
</script>

<div
	class="navbar sticky top-0 z-10 mb-16 bg-neutral text-neutral-content shadow-lg"
>
	<div class="mx-2 flex-1 px-2">
		<a class="text-lg font-bold" href="/"> Portfolio and Blog </a>
	</div>

	<div class="dropdown dropdown-left lg:hidden">
		<div class="btn m-1">Links</div>
		<ul
			class="menu dropdown-content w-52 rounded-box bg-neutral p-2 text-neutral-content shadow"
		>
			<a class="btn btn-ghost btn-sm rounded-btn" href="/projects">
				Portfolio
			</a>
			<a class="btn btn-ghost btn-sm rounded-btn" href="/posts">
				Blog
			</a>
			<a class="btn btn-ghost btn-sm rounded-btn" href="/about">
				About
			</a>
		</ul>
	</div>

	<div class="mx-2 hidden flex-none px-2 lg:flex">
		<div class="flex items-stretch">
			<a class="btn btn-ghost btn-sm rounded-btn" href="/projects">
				Portfolio
			</a>
			<a class="btn btn-ghost btn-sm rounded-btn" href="/posts">
				Blog
			</a>
			<a class="btn btn-ghost btn-sm rounded-btn" href="/about">
				About
			</a>
			<div class="px-4">
				<ThemeSelect />
			</div>
		</div>
	</div>
</div>
