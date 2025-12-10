<script lang="ts">
	let { children }: { children: any } = $props();
</script>

<p class="leading-relaxed text-slate-600">
	{@render children()}
</p>
