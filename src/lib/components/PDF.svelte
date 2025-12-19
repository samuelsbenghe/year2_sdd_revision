<script lang="ts">
	let { title, pdf_url }: { title: string; pdf_url: string } = $props();
</script>

<div class="flex h-96 w-full flex-col items-center justify-center rounded-lg border-2 border-dashed border-slate-400 bg-slate-200 text-slate-500">
	<!-- <svg class="mb-2 h-12 w-12 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
					</svg>
					<p class="font-medium">Embed PDF Here</p>
					<p class="mt-1 text-xs text-slate-400">&lt;iframe src="lecture1.pdf" class="w-full h-full"&gt;&lt;/iframe&gt;</p> -->
	<iframe {title} src={pdf_url} class="h-full w-full"></iframe>
</div>
<div class="flex gap-3">
	<a href={pdf_url} download class="rounded-md bg-indigo-600 px-4 py-2 text-sm text-white hover:bg-indigo-700">Download PDF</a>
	<a href={pdf_url} target="_blank" rel="noopener noreferrer" class="rounded-md border border-slate-300 bg-white px-4 py-2 text-sm text-slate-700 hover:bg-slate-50">Open in New Tab</a>
</div>
