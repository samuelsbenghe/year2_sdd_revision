<script lang="ts">
	let { children }: { children?: any } = $props();
</script>

<div class="flex-1 overflow-y-auto p-8">
	<div class="mx-auto max-w-4xl space-y-12 pb-20">
		{#if children}
			{@render children()}
		{:else}
			<p>No content available.</p>
		{/if}
	</div>
</div>
