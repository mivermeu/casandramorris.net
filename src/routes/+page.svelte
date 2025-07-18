<script lang="ts">
	import { experience } from '$lib/data/experience';
	import { education } from '$lib/data/education';
	import { skills } from '$lib/data/skills';
	import { theme } from '$lib/stores/theme';
	import { onMount } from 'svelte';
	import { Sun, Moon, Github, Linkedin, Mail } from '@lucide/svelte';
	import { fade, scale } from 'svelte/transition';
	import ExperienceCard from '$lib/components/ExperienceCard.svelte';
	import Section from '$lib/components/Section.svelte';

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

<main class="mx-auto max-w-4xl space-y-16 p-8 font-[Lora]">
	<!-- Top bar -->
	<div class="flex justify-between">
		<!-- Socials -->
		<div class="flex flex-row items-center gap-2">
			<a
				class="hover:text-secondary-950-50"
				href="https://www.linkedin.com/in/casandra-morris-673593198"
			>
				<Linkedin />
			</a>
			<a class="hover:text-secondary-950-50" href="https://github.com/chmorris4">
				<Github />
			</a>
			<a class="hover:text-secondary-950-50" href="mailto:info@casandramorris.com">
				<Mail />
			</a>
		</div>
		<!-- Theme switcher -->
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
		<h1 class="text-primary-950-50 text-4xl font-bold">Casandra Morris</h1>
		<!-- <p class="text-lg">Literally just a girl</p> -->
	</header>

	<!-- Skills section -->
	<Section title="Things I can do">
		<div class="flex flex-wrap items-center gap-2">
			{#each skills as skill (skill.name)}
				<span class="badge preset-filled border-secondary-50-950 border-1">
					{#if skill.icon}
						<svelte:component this={skill.icon} size={14} />
					{/if}
					<span>{skill.name}</span>
				</span>
			{/each}
		</div>
	</Section>

	<!-- Experience section -->
	<Section title="Things I've done">
		<div class="grid gap-6 md:grid-cols-2">
			{#each experience as experience_item (experience_item.title)}
				<ExperienceCard {experience_item} />
			{/each}
		</div>
	</Section>

	<!-- Education section -->
	<Section title="Things I've learned">
		<div class="grid gap-6 md:grid-cols-2">
			{#each education as education_item (education_item)}
				<ExperienceCard experience_item={education_item} />
			{/each}
		</div>
	</Section>

	<!-- Copyright section -->
	<footer class="flex flex-col gap-4 text-center text-sm">
		<hr class="hr border-primary-950-50" />
		<p>&copy; {new Date().getFullYear()} Casandra Morris</p>
	</footer>
</main>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Lora:wght@400;700&display=swap');
</style>
