<script lang="ts">
	let { title, description }: { title: string; description: string } = $props();
</script>

<li class="rounded border border-slate-200 bg-white p-4 shadow-sm">
	<h3 class="font-bold text-indigo-600">{title}</h3>
	<p class="mt-1 text-sm text-slate-600">{description}</p>
</li>
