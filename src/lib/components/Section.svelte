<script lang="ts">
	let { id, children }: { id?: string; children: any } = $props();
</script>

<section {id} class="space-y-4">
	{@render children()}
</section>
