<script lang="ts">
	import { ExternalLink } from '@lucide/svelte';
	let { logo_url, title, description, link_url }: { logo_url: string; title: string; description: string; link_url: string } = $props();
</script>

<div class="group flex items-center justify-between p-4 transition-colors duration-200 hover:bg-gradient-to-r hover:from-indigo-50/50 hover:to-transparent">
	<div class="flex items-center gap-4">
		<div class="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100 p-2 transition-transform duration-200 group-hover:scale-110">
			<img src={logo_url} alt={title} class="h-6 w-6" />
		</div>
		<div>
			<p class="text-sm font-semibold text-slate-900">{title}</p>
			<p class="text-xs text-slate-500">{description}</p>
		</div>
	</div>
	<a
		target="_blank"
		href={link_url}
		class="inline-flex items-center gap-1.5 rounded-full bg-indigo-50 px-3 py-1.5 text-sm font-medium text-indigo-600 transition-all duration-200 hover:gap-2 hover:bg-indigo-100"
	>
		<span>Open</span>
		<ExternalLink class="h-3.5 w-3.5" />
	</a>
</div>
