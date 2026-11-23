<script lang="ts">
	import { Download, ExternalLink } from '@lucide/svelte';
	import { asset } from '$app/paths';
	import type { Asset } from '$app/types';

	let { title, src }: { title: string; src: Asset } = $props();
</script>

<div class="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
	<iframe {title} src={asset(src)} sandbox="" loading="lazy" class="block h-[70dvh] min-h-96 w-full bg-white"></iframe>
	<div class="flex flex-wrap gap-3 border-t border-slate-100 bg-slate-50/50 p-4">
		<a
			href={asset(src)}
			download={src.split('/').at(-1)}
			class="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-medium text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-indigo-700 hover:shadow-md"
		>
			<Download class="h-4 w-4" />
			<span>Download HTML</span>
		</a>
		<a
			href={asset(src)}
			target="_blank"
			rel="noopener noreferrer"
			class="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-slate-300 hover:bg-slate-50 hover:shadow-md"
		>
			<ExternalLink class="h-4 w-4" />
			<span>Open in New Tab</span>
		</a>
	</div>
</div>
