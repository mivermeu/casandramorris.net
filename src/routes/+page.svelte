<script lang="ts">
	import { experience } from '$lib/data/experience';
	import { education } from '$lib/data/education';
	import { skills } from '$lib/data/skills';
	import { theme } from '$lib/stores/theme';
	import { onMount } from 'svelte';
	import { Sun, Moon } from '@lucide/svelte';
	import { fade, scale } from 'svelte/transition';
	import ExperienceCard from '$lib/components/ExperienceCard.svelte';

	let currentTheme: 'light' | 'dark' = 'light';

	onMount(() => {
		theme.subscribe((t) => (currentTheme = t));
	});

	function toggleTheme() {
		theme.set(currentTheme === 'dark' ? 'light' : 'dark');
	}
</script>

<svelte:head>
	<meta charset="UTF-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />

	<title>Casandra's Portfolio</title>
</svelte:head>

<main class="bg-background text-foreground mx-auto max-w-3xl space-y-12 p-8 font-[Lora]">
	<!-- Theme switcher -->
	<div class="flex justify-end">
		<button class="btn btn-primary overflow-hidden" on:click={toggleTheme} transition:fade>
			{#if currentTheme === 'dark'}
				<span in:scale={{ duration: 150 }} out:scale={{ duration: 150 }}>
					<Sun />
				</span>
			{:else}
				<span in:scale={{ duration: 150 }} out:scale={{ duration: 150 }}>
					<Moon />
				</span>
			{/if}
		</button>
	</div>

	<!-- Title section -->
	<header class="space-y-2 text-center">
		<h1 class="text-secondary-950-50 text-4xl font-bold">Casandra Morris</h1>
		<p class="text-lg">Literally just a girl</p>
	</header>

	<!-- Skills section -->
	<section>
		<h2 class="mb-4 text-2xl font-semibold">Things I can do</h2>
		<div class="flex flex-wrap items-center gap-2">
			{#each skills as skill (skill.name)}
				<span class="badge preset-filled">
					{#if skill.icon}
						<svelte:component this={skill.icon} size={14} />
					{/if}
					<span>{skill.name}</span>
				</span>
			{/each}
		</div>
	</section>

	<!-- Experience section -->
	<section>
		<h2 class="mb-4 text-2xl font-semibold">Things I've done</h2>
		<div class="grid gap-6 md:grid-cols-2">
			{#each experience as experience_item (experience_item.title)}
				<ExperienceCard {experience_item} />
			{/each}
		</div>
	</section>

	<!-- Education section -->
	<section>
		<h2 class="mb-4 text-2xl font-semibold">Things I've learned</h2>
		<div class="flex flex-col gap-4">
			{#each education as education_item (education_item)}
				<ExperienceCard experience_item={education_item} horizontal />
			{/each}
		</div>
	</section>

	<!-- Copyright section -->
	<footer class="border-t pt-4 text-center text-sm">
		<p>&copy; {new Date().getFullYear()} Casandra Morris</p>
	</footer>
</main>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Lora:wght@400;700&display=swap');
</style>
