<script lang="ts">
	import { Info, AlertTriangle, AlertCircle } from '@lucide/svelte';

	let {
		type = 'info',
		lead = 'Info:',
		message = 'This is an informational notice.'
	}: {
		type: 'info' | 'warning' | 'error';
		lead: string;
		message: string;
	} = $props();

	let classNames = $state('');
	let iconClass = $state('');

	let classMap = {
		info: 'border-blue-200 bg-gradient-to-r from-blue-50 to-blue-50/50 text-blue-800',
		warning: 'border-amber-200 bg-gradient-to-r from-amber-50 to-amber-50/50 text-amber-800',
		error: 'border-red-200 bg-gradient-to-r from-red-50 to-red-50/50 text-red-800'
	};

	let iconClassMap = {
		info: 'text-blue-500',
		warning: 'text-amber-500',
		error: 'text-red-500'
	};

	$effect(() => {
		classNames = `flex items-start gap-3 rounded-xl border p-4 text-sm ${classMap[type]}`;
		iconClass = `h-5 w-5 shrink-0 mt-0.5 ${iconClassMap[type]}`;
	});
</script>

<div class={classNames}>
	{#if type === 'info'}
		<Info class={iconClass} />
	{:else if type === 'warning'}
		<AlertTriangle class={iconClass} />
	{:else}
		<AlertCircle class={iconClass} />
	{/if}
	<div>
		<strong class="font-semibold">{lead}</strong>
		<span class="ml-1">{message}</span>
	</div>
</div>
