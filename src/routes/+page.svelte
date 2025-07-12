<script lang="ts">
	import { colors } from '$lib/colors';
	import { experience } from '$lib/data/experience';
	import { skills } from '$lib/data/skills';
</script>

<svelte:head>
	<meta charset="UTF-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />

	<!-- Load font -->
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link
		href="https://fonts.googleapis.com/css2?family=Faculty+Glyphic&display=swap"
		rel="stylesheet"
	/>

	<title>Casandra's Portfolio</title>
</svelte:head>

<main
	style="
	--background: {colors.background};
	--pattern: {colors.pattern};
	--accent: {colors.accent};
	--highlight: {colors.highlight};
    "
>
	<header>
		<h1>Casandra Morris</h1>
		<h2>Literally just a girl.</h2>
	</header>

	<section>
		<h2>Things I know</h2>
		<div class="skills">
			{#each skills as skill (skill.name)}
				<div class="skill">
					<p>{skill.name}: {skill.strength} / 10</p>
				</div>
			{/each}
		</div>
	</section>

	<section>
		<h2>Things I've done</h2>
		<div class="experience">
			{#each experience as job (job.title)}
				<div class="job">
					<p>{job.title}</p>
					{#each job.companies as company (company.name)}
						<a href={company.link} target="_blank">{company.name}</a>
						<br />
					{/each}
					{#if job.endDate != null}
						<p>{job.startDate} - {job.endDate}</p>
					{:else}
						<p>{job.startDate} - Present</p>
					{/if}
					<p>{job.description}</p>
				</div>
			{/each}
		</div>
	</section>
</main>

<style>
	main {
		background-color: var(--background);
		font-family:
			Faculty Glyphic,
			Georgia,
			Cambria,
			serif;
		color: var(--pattern);
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: 100vh;
		margin: 0;
	}
	h1 {
		font-size: 4rem;
	}
	h1,
	h2,
	h3 {
		color: var(--highlight);
	}
	p {
		color: var(--pattern);
	}
	a {
		color: var(--accent);
		text-decoration: none;
	}

	.skills {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.skill {
		background-color: var(--pattern);
		border-radius: 0.5rem;
		margin: 1rem;
		p {
			color: var(--highlight);
		}
	}
</style>
