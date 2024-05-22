<script lang="ts">
	import { Footer, Navbar } from '$lib/componentes';
	import type { Snippet } from 'svelte';
	import '../app.css';

	import type { PageData } from './$houdini';

	let { children, data }: { children: Snippet; data: PageData } =
		$props();
	let footer_data = data.layoutData;
</script>

<Navbar />

<main class="container mx-auto mb-20 max-w-3xl px-4">
	{@render children()}
</main>

<Footer {footer_data} />
