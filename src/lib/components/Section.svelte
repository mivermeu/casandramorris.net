<script lang="ts">
	export let title: string;
</script>

<section>
	<h2 class="mb-4 text-2xl font-semibold">{title}</h2>
	<slot />
</section>
