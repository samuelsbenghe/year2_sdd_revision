<script lang="ts">
	import QuizCatalog from '$lib/components/QuizCatalog.svelte';
	import { appliedAiQuizTopics } from '$lib/quizzes/applied-ai';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
</script>

<svelte:head>
	<title>Applied AI Quizzes | University Revision</title>
	<meta name="description" content="Browse the Applied AI quiz topics by lecture week." />
</svelte:head>

<QuizCatalog subject="Applied AI" testPath="/applied-ai/quizzes/test" topics={appliedAiQuizTopics} comingSoon={data.comingSoon} />
