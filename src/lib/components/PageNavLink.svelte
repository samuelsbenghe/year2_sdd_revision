<script lang="ts">
	let { href = '#', label = 'Link' }: { href: string; label: string } = $props();
</script>

<a {href} class="transition-colors hover:text-indigo-600">{label}</a>
