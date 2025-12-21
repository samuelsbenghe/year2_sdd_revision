<script lang="ts">
	import { Copy, Check, Loader2 } from '@lucide/svelte';

	let {
		language = 'text',
		code = '',
		src = ''
	}: {
		language?: string;
		code?: string;
		src?: string;
	} = $props();

	let copied = $state(false);
	let loading = $state(false);
	let error = $state('');
	let fetchedCode = $state('');

	const displayCode = $derived(src ? fetchedCode : code);

	$effect(() => {
		if (src) {
			loading = true;
			error = '';
			fetch(src)
				.then((res) => {
					if (!res.ok) throw new Error(`Failed to fetch: ${res.status}`);
					return res.text();
				})
				.then((text) => {
					fetchedCode = text;
					loading = false;
				})
				.catch((err) => {
					error = err.message;
					loading = false;
				});
		}
	});

	async function copyToClipboard() {
		await navigator.clipboard.writeText(displayCode);
		copied = true;
		setTimeout(() => {
			copied = false;
		}, 2000);
	}
</script>

<div class="relative rounded-lg border border-slate-200 bg-slate-900 shadow-sm">
	<div class="flex items-center justify-between border-b border-slate-700 px-4 py-2">
		<span class="text-xs font-medium uppercase tracking-wider text-slate-400">{language}</span>
		<button onclick={copyToClipboard} disabled={loading || !!error} class="flex items-center gap-1 rounded px-2 py-1 text-xs text-slate-400 transition-colors hover:bg-slate-800 hover:text-white disabled:cursor-not-allowed disabled:opacity-50">
			{#if copied}
				<Check class="h-4 w-4 text-green-400" />
				<span class="text-green-400">Copied!</span>
			{:else}
				<Copy class="h-4 w-4" />
				<span>Copy</span>
			{/if}
		</button>
	</div>
	<pre class="overflow-x-auto p-4 text-sm leading-relaxed text-slate-300"><code>{#if loading}<Loader2 class="h-5 w-5 animate-spin text-slate-400" />{:else if error}<span class="text-red-400">{error}</span>{:else}{displayCode}{/if}</code></pre>
</div>
