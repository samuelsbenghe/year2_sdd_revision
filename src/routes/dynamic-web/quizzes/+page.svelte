<script lang="ts">
	import QuizCatalog from '$lib/components/QuizCatalog.svelte';
	import { dynamicWebQuizTopics } from '$lib/quizzes/dynamic-web';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
</script>

<svelte:head>
	<title>Dynamic Web Quizzes | University Revision</title>
	<meta name="description" content="Browse the Dynamic Web quiz topics by lecture week." />
</svelte:head>

<QuizCatalog subject="Dynamic Web" testPath="/dynamic-web/quizzes/test" topics={dynamicWebQuizTopics} comingSoon={data.comingSoon} />
