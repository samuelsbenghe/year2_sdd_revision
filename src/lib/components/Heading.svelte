<script lang="ts">
	let { children }: { children: any } = $props();
</script>

<h2
	class="relative border-l-4 border-indigo-500 pl-4 text-xl font-bold tracking-tight text-slate-800 before:absolute before:-left-1 before:top-0 before:h-full before:w-1 before:bg-indigo-300/50 before:blur-sm"
>
	{@render children()}
</h2>
