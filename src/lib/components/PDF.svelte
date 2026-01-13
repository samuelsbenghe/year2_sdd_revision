<script lang="ts">
	import { Download, ExternalLink } from '@lucide/svelte';
	let { title, src }: { title: string; src: string } = $props();
</script>

<div class="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
	<div class="h-[28rem] w-full bg-slate-100">
		<iframe {title} {src} class="h-full w-full"></iframe>
	</div>
	<div class="flex gap-3 border-t border-slate-100 bg-slate-50/50 p-4">
		<a
			href={src}
			download
			class="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-medium text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-indigo-700 hover:shadow-md"
		>
			<Download class="h-4 w-4" />
			<span>Download PDF</span>
		</a>
		<a
			href={src}
			target="_blank"
			rel="noopener noreferrer"
			class="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-slate-300 hover:bg-slate-50 hover:shadow-md"
		>
			<ExternalLink class="h-4 w-4" />
			<span>Open in New Tab</span>
		</a>
	</div>
</div>
