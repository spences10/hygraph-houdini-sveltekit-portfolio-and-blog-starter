<script lang="ts">
	import { Facebook, Twitter, YouTube } from '$lib/icons';

	// CBA to fuck with drilling into the layout types
	let { footer_data }: any = $props();
</script>

<footer
	class="footer footer-center bg-primary p-10 text-primary-content"
>
	<div class="grid grid-flow-col gap-4">
		<a class="link-hover link" href="/projects">Portfolio</a>
		<a class="link-hover link" href="/posts">Blog</a>
		<a class="link-hover link" href="/about">About</a>
	</div>
	<div>
		<div class="grid grid-flow-col gap-4">
			<a href={$footer_data.data.socials[0].twitterUrl}>
				<Twitter />
			</a>
			<a href={$footer_data.data.socials[0].youTubeUrl}>
				<YouTube />
			</a>
			<a href={$footer_data.data.socials[0].facebookUrl}>
				<Facebook />
			</a>
		</div>
	</div>
	<div>
		<p>
			Copyright &copy; {`${new Date().getFullYear()}`} - All right reserved
			<strong>{$footer_data.data.authors[0].name}</strong>
		</p>
	</div>
</footer>
