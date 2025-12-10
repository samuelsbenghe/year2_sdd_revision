<script lang="ts">
	let { children }: { children: any } = $props();
</script>

<main class="relative flex h-screen flex-1 flex-col overflow-hidden bg-slate-50">
	{@render children()}
</main>
