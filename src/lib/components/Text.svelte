<script lang="ts">
	let { children }: { children: any } = $props();
</script>

<p class="text-base leading-7 text-slate-600">
	{@render children()}
</p>
