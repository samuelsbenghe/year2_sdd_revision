<script lang="ts">
	let { title, description }: { title: string; description: string } = $props();
</script>

<header class="text-center">
	<h1 class="text-4xl font-bold text-slate-800">{title}</h1>
	<p class="mt-4 text-lg text-slate-600">{description}</p>
</header>
