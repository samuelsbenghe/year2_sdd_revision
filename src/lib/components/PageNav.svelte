<script lang="ts">
	let { title = 'Title', children }: { title: string; children: any } = $props();
</script>

<header class="sticky top-0 z-20 border-b border-slate-200 bg-white shadow-sm">
	<div class="flex items-center justify-between px-8 py-4">
		<div>
			<h1 class="text-2xl font-bold text-slate-800">{title}</h1>
		</div>
		<nav class="hidden space-x-4 text-sm font-medium text-slate-600 md:flex">
			{@render children()}
		</nav>
	</div>
</header>
