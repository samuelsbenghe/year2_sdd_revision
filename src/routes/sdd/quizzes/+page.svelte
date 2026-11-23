<script lang="ts">
	import QuizCatalog from '$lib/components/QuizCatalog.svelte';
	import { sddQuizTopics } from '$lib/quizzes/sdd';
</script>

<svelte:head>
	<title>Quizzes | University Revision</title>
	<meta name="description" content="Test your Software Development and Design knowledge with interactive quizzes covering all lecture topics." />
</svelte:head>

<QuizCatalog subject="SDD" testPath="/sdd/quizzes/test" topics={sddQuizTopics} />
