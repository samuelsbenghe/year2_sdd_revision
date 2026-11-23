<script lang="ts">
	import Page from './Page.svelte';
	import PageContent from './PageContent.svelte';
	import Section from './Section.svelte';

	let { title, description }: { title: string; description: string } = $props();
</script>

<svelte:head>
	<title>{title} | University Revision</title>
</svelte:head>

<Page>
	<PageContent>
		<Section>
			<h1 class="text-3xl font-bold tracking-tight text-slate-800">{title}</h1>
			<p class="text-slate-600">{description}</p>
		</Section>
	</PageContent>
</Page>
