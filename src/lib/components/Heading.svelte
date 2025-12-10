<script lang="ts">
	let { children }: { children: any } = $props();
</script>

<h2 class="border-l-4 border-indigo-500 pl-3 text-xl font-bold text-slate-800">
	{@render children()}
</h2>
