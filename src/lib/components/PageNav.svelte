<script lang="ts">
	let {
		title = 'Page Navigation',
		children = () => {
			return '';
		}
	}: { title?: string; children?: any } = $props();
</script>

<header class="sticky top-0 z-20 border-b border-slate-200/80 bg-white/80 shadow-sm backdrop-blur-md">
	<div class="flex items-center justify-between px-8 py-4">
		<div>
			<h1 class="bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-2xl font-bold text-transparent">{title}</h1>
		</div>
		<nav class="hidden space-x-6 text-sm font-medium text-slate-600 md:flex">
			{#if children}
				{@render children()}
			{/if}
		</nav>
	</div>
</header>
