<script lang="ts">
	import { ExternalLink } from '@lucide/svelte';
	let { logo_url, title, description, link_url }: { logo_url: string; title: string; description: string; link_url: string } = $props();
</script>

<div class="flex items-center justify-between p-4 hover:bg-slate-50">
	<div class="flex items-center gap-3">
		<div class="flex h-8 w-8 items-center justify-center rounded text-xs font-bold">
			<img src={logo_url} alt={title} class="h-6 w-6" />
		</div>
		<div>
			<p class="text-sm font-medium text-slate-900">{title}</p>
			<p class="text-xs text-slate-500">{description}</p>
		</div>
	</div>
	<a target="_blank" href={link_url} class="inline-flex items-center gap-1 text-sm text-indigo-600 hover:underline">
		<span>Link</span>
		<ExternalLink class="h-4 w-4" />
	</a>
</div>
