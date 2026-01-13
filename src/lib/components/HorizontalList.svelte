<script lang="ts">
	let { children }: { children: any } = $props();
</script>

<div class="divide-y divide-slate-100 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
	{@render children()}
</div>
