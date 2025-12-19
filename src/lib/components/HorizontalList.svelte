<script lang="ts">
	let { children }: { children: any } = $props();
</script>

<div class="divide-y divide-slate-200 rounded-lg border border-slate-200 bg-white">
	{@render children()}
</div>
