<script lang="ts">
	import type { Experience } from '$lib/types';

	export let experience_item: Experience;
</script>

<div class="card preset-filled border-tertiary-950-50 border-2">
	<article class="flex flex-col flex-wrap gap-2 p-4">
		<div class="flex justify-between">
			<h3 class="font-bold">{experience_item.title}</h3>
			<p class="text-sm">
				{experience_item.startDate.getFullYear()} - {experience_item.endDate
					? experience_item.endDate.getFullYear()
					: 'Present'}
			</p>
		</div>
		{#if experience_item.companies.length > 0}
			<div class="flex gap-2">
				{#each experience_item.companies as company (company.name)}
					<div class="badge bg-tertiary-950-50 card-hover">
						<a href={company.link} target="_blank">{company.name}</a>
					</div>
				{/each}
			</div>
		{/if}
		{#if experience_item.description !== ''}
			<p>{experience_item.description}</p>
		{/if}
	</article>
</div>
