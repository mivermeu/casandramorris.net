<script lang="ts">
	import { ArrowUpRight } from '@lucide/svelte';

	export let href: string;
	export let target: string = '_blank';

	let isHovered = false;
</script>

<a
	{href}
	{target}
	class="relative"
	on:mouseenter={() => (isHovered = true)}
	on:mouseleave={() => (isHovered = false)}
>
	<span class="badge relative flex border-1">
		<slot />
	</span>
	<sup
		class="bg-surface-950-50 absolute -top-0 -right-0
		{isHovered
			? 'translate-x-2 -translate-y-2'
			: 'translate-x-1 -translate-y-1'} transition-transform duration-150 ease-in-out"
		><ArrowUpRight size={14} /></sup
	>
</a>
