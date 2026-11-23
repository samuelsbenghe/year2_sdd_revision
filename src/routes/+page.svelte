<script lang="ts">
	import Page from '$lib/components/Page.svelte';
	import PageContent from '$lib/components/PageContent.svelte';
	import Section from '$lib/components/Section.svelte';
	import Heading from '$lib/components/Heading.svelte';
	import { modules } from '$lib/modules';
	import { ArrowRight } from '@lucide/svelte';
</script>

<svelte:head>
	<title>University Revision</title>
	<meta name="description" content="Revision resources for Software Development and Design, Dynamic Web, and SysNet Security." />
</svelte:head>

<Page>
	<PageContent>
		<Section>
			<h1 class="text-4xl font-bold tracking-tight text-slate-800">University Revision</h1>
		</Section>

		<Section>
			<Heading>Modules</Heading>
			<ul class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
				{#each Object.values(modules) as module (module.href)}
					<li>
						<a href={module.href} class="group flex h-full flex-col gap-4 rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-colors hover:border-indigo-300">
							<span class="flex items-center justify-between">
								<span class="grid size-11 place-items-center rounded-lg bg-indigo-100 text-indigo-600">
									<module.icon class="size-5" />
								</span>
								<ArrowRight class="size-5 text-slate-400 group-hover:text-indigo-600" />
							</span>
							<span>
								<span class="block font-semibold text-slate-800 group-hover:text-indigo-600">{module.title}</span>
								<span class="mt-1 block text-sm text-slate-600">{module.description}</span>
							</span>
						</a>
					</li>
				{/each}
			</ul>
		</Section>
	</PageContent>
</Page>
