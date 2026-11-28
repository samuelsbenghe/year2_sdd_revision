<script lang="ts">
	import QuizRunner from '$lib/components/QuizRunner.svelte';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
</script>

{#key data}
	<QuizRunner {...data} quizHome="/applied-ai/quizzes" emptyMessage="Questions for this quiz are coming soon." />
{/key}
