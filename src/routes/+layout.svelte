<script lang="ts">
	import '../app.css';
	import { asset } from '$app/paths';
	import type { LayoutProps } from './$types';

	let { children }: LayoutProps = $props();
</script>

<svelte:head>
	<link rel="icon" type="image/svg+xml" href={asset('favicon.svg')} />
</svelte:head>

{@render children()}
