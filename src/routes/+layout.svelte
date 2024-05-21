<script lang="ts">
	import '../app.css';

	let { children } = $props();
</script>

<main class="container mx-auto mb-20 max-w-3xl px-4">
	{@render children()}
</main>
