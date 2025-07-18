<script lang="ts">
	import type { Experience } from '$lib/types';
	import Link from '$lib/components/Link.svelte';

	export let experience_item: Experience;
</script>

<div class="card border-secondary-50-950 preset-filled border-1">
	<article class="flex flex-col flex-wrap gap-2 p-4">
		<div class="flex justify-between">
			<h3 class="text-secondary-50-950 font-bold">{experience_item.title}</h3>
			<p class="text-sm">
				{experience_item.startDate.getFullYear()} - {experience_item.endDate
					? experience_item.endDate.getFullYear()
					: 'Present'}
			</p>
		</div>
		{#if experience_item.companies.length > 0}
			<div class="flex gap-2">
				{#each experience_item.companies as company (company.name)}
					<Link href={company.link}>{company.name}</Link>
				{/each}
			</div>
		{/if}
		{#if experience_item.description !== ''}
			<p>{experience_item.description}</p>
		{/if}
	</article>
</div>
