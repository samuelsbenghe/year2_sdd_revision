<script lang="ts">
	let { href = '#', label = 'Link' }: { href: string; label: string } = $props();
</script>

<a
	{href}
	class="relative py-1 transition-colors duration-200 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-indigo-500 after:transition-all after:duration-300 hover:text-indigo-600 hover:after:w-full"
	>{label}</a
>
