<script lang="ts">
	let { id, children }: { id?: string; children?: any } = $props();
</script>

<section {id} class="space-y-5 rounded-2xl bg-white/50 p-6 ring-1 ring-slate-900/5">
	{#if children}
		{@render children()}
	{:else}
		<p class="text-sm italic text-slate-400">Empty section.</p>
	{/if}
</section>
