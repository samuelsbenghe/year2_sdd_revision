<script lang="ts">
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

	let classMap = {
		info: 'border-blue-200 bg-blue-50 text-blue-800 text-sm',
		warning: 'border-yellow-200 bg-yellow-50 text-yellow-800 text-sm',
		error: 'border-red-200 bg-red-50 text-red-800 text-sm'
	};

	$effect(() => {
		classNames = `rounded-lg border p-4 ${classMap[type]}`;
	});
</script>

<div class={classNames}>
	<strong>{lead}</strong>
	{message}
</div>
