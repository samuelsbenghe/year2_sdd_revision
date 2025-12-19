<script lang="ts">
	let { children }: { children: any } = $props();
</script>

<ul class="grid grid-cols-1 gap-4 md:grid-cols-2">{@render children()}</ul>
