<script lang="ts">
	import Page from '$lib/components/Page.svelte';
	import PageNav from '$lib/components/PageNav.svelte';
	import PageContent from '$lib/components/PageContent.svelte';
	import Section from '$lib/components/Section.svelte';
	import Heading from '$lib/components/Heading.svelte';
	import Text from '$lib/components/Text.svelte';
	import HorizontalBreak from '$lib/components/HorizontalBreak.svelte';
	import Notice from '$lib/components/Notice.svelte';
	import { page } from '$app/state';
	import { QuizQuestions } from '$lib';
	import { CheckCircle, XCircle, RotateCcw, ArrowLeft, ArrowRight, Trophy } from '@lucide/svelte';

	const quizNames: Record<string, string> = {
		'design-principles': 'Design Principles',
		testing: 'Software Testing',
		'user-testing': 'User & Usability Testing',
		'version-control': 'Version Control & CI/CD',
		security: 'Secure Programming',
		'anti-patterns': 'Anti-Patterns & Code Quality',
		'api-design': 'API Design & Documentation',
		mixed: 'Mixed Review'
	};

	let quizName = $derived(page.url.searchParams.get('name') || 'mixed');
	let quizTitle = $derived(quizNames[quizName] || 'Quiz');

	let questions = $derived(quizName === 'mixed' ? [...QuizQuestions].sort(() => Math.random() - 0.5).slice(0, 10) : QuizQuestions.filter((q) => q.area === quizName));

	let currentIndex = $state(0);
	let selectedAnswer = $state<string | null>(null);
	let showResult = $state(false);
	let score = $state(0);
	let answers = $state<(string | null)[]>([]);
	let quizComplete = $state(false);

	function selectAnswer(option: string) {
		if (showResult) return;
		selectedAnswer = option;
	}

	function submitAnswer() {
		if (!selectedAnswer) return;
		showResult = true;
		answers[currentIndex] = selectedAnswer;
		if (selectedAnswer === questions[currentIndex].answer) {
			score++;
		}
	}

	function nextQuestion() {
		if (currentIndex < questions.length - 1) {
			currentIndex++;
			selectedAnswer = null;
			showResult = false;
		} else {
			quizComplete = true;
		}
	}

	function restartQuiz() {
		currentIndex = 0;
		selectedAnswer = null;
		showResult = false;
		score = 0;
		answers = [];
		quizComplete = false;
	}

	let currentQuestion = $derived(questions[currentIndex]);
	let isCorrect = $derived(selectedAnswer === currentQuestion?.answer);
	let progress = $derived(((currentIndex + 1) / questions.length) * 100);
	let scorePercentage = $derived(Math.round((score / questions.length) * 100));
</script>

<svelte:head>
	<title>{quizTitle} Quiz - SDD Revision</title>
	<meta name="description" content="Test your knowledge on {quizTitle} with this interactive quiz." />
</svelte:head>

<Page>
	<PageNav title="{quizTitle} Quiz" />

	<PageContent>
		{#if questions.length === 0}
			<Section>
				<Notice type="error" lead="No Questions" message="No questions found for this quiz category." />
				<a href="/quizzes" class="mt-4 inline-flex items-center gap-2 text-indigo-600 hover:underline">
					<ArrowLeft class="h-4 w-4" />
					Back to Quizzes
				</a>
			</Section>
		{:else if quizComplete}
			<Section>
				<div class="flex flex-col items-center text-center">
					<div class="bg-linear-to-br mb-6 flex h-24 w-24 items-center justify-center rounded-full from-yellow-400 to-orange-500">
						<Trophy class="h-12 w-12 text-white" />
					</div>
					<h2 class="text-3xl font-bold text-slate-800">Quiz Complete!</h2>
					<p class="mt-2 text-lg text-slate-600">You scored</p>
					<p class="mt-2 text-5xl font-bold text-indigo-600">{score}/{questions.length}</p>
					<p class="mt-1 text-lg text-slate-500">({scorePercentage}%)</p>

					<div class="mt-6 w-full max-w-md">
						<div class="h-4 overflow-hidden rounded-full bg-slate-200">
							<div
								class="h-full rounded-full transition-all duration-500 {scorePercentage >= 70 ? 'bg-green-500' : scorePercentage >= 50 ? 'bg-yellow-500' : 'bg-red-500'}"
								style="width: {scorePercentage}%"
							></div>
						</div>
					</div>

					<div class="mt-4 rounded-lg border p-4 {scorePercentage >= 70 ? 'border-green-200 bg-green-50' : scorePercentage >= 50 ? 'border-yellow-200 bg-yellow-50' : 'border-red-200 bg-red-50'}">
						{#if scorePercentage >= 70}
							<p class="font-medium text-green-800">Excellent work! You have a strong understanding of this topic.</p>
						{:else if scorePercentage >= 50}
							<p class="font-medium text-yellow-800">Good effort! Review the material to improve further.</p>
						{:else}
							<p class="font-medium text-red-800">Keep studying! Review the lecture materials and try again.</p>
						{/if}
					</div>

					<div class="mt-8 flex gap-4">
						<button onclick={restartQuiz} class="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-6 py-3 font-medium text-white transition-colors hover:bg-indigo-700">
							<RotateCcw class="h-5 w-5" />
							Try Again
						</button>
						<a href="/quizzes" class="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-6 py-3 font-medium text-slate-700 transition-colors hover:bg-slate-50">
							<ArrowLeft class="h-5 w-5" />
							All Quizzes
						</a>
					</div>
				</div>
			</Section>

			<HorizontalBreak />

			<Section>
				<Heading>Review Answers</Heading>
				<div class="mt-4 space-y-4">
					{#each questions as question, i}
						<div class="rounded-lg border p-4 {answers[i] === question.answer ? 'border-green-200 bg-green-50' : 'border-red-200 bg-red-50'}">
							<div class="flex items-start gap-3">
								{#if answers[i] === question.answer}
									<CheckCircle class="mt-0.5 h-5 w-5 shrink-0 text-green-600" />
								{:else}
									<XCircle class="mt-0.5 h-5 w-5 shrink-0 text-red-600" />
								{/if}
								<div>
									<p class="font-medium text-slate-800">Q{i + 1}: {question.question}</p>
									<p class="mt-1 text-sm text-slate-600">Your answer: <span class="font-medium {answers[i] === question.answer ? 'text-green-700' : 'text-red-700'}">{answers[i]}</span></p>
									{#if answers[i] !== question.answer}
										<p class="text-sm text-slate-600">Correct answer: <span class="font-medium text-green-700">{question.answer}</span></p>
									{/if}
								</div>
							</div>
						</div>
					{/each}
				</div>
			</Section>
		{:else}
			<Section>
				<div class="mb-6 flex items-center justify-between">
					<span class="text-sm font-medium text-slate-600">Question {currentIndex + 1} of {questions.length}</span>
					<span class="text-sm font-medium text-indigo-600">Score: {score}</span>
				</div>

				<div class="mb-6 h-2 overflow-hidden rounded-full bg-slate-200">
					<div class="h-full rounded-full bg-indigo-600 transition-all duration-300" style="width: {progress}%"></div>
				</div>
			</Section>

			<Section>
				<div class="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
					<h2 class="text-xl font-semibold text-slate-800">{currentQuestion.question}</h2>

					<div class="mt-6 space-y-3">
						{#each currentQuestion.options as option}
							<button
								onclick={() => selectAnswer(option)}
								disabled={showResult}
								class="w-full rounded-lg border-2 p-4 text-left transition-all
									{selectedAnswer === option
									? showResult
										? option === currentQuestion.answer
											? 'border-green-500 bg-green-50'
											: 'border-red-500 bg-red-50'
										: 'border-indigo-500 bg-indigo-50'
									: showResult && option === currentQuestion.answer
										? 'border-green-500 bg-green-50'
										: 'border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50'}
									{showResult ? 'cursor-default' : 'cursor-pointer'}"
							>
								<div class="flex items-center justify-between">
									<span class="font-medium text-slate-700">{option}</span>
									{#if showResult}
										{#if option === currentQuestion.answer}
											<CheckCircle class="h-5 w-5 text-green-600" />
										{:else if selectedAnswer === option}
											<XCircle class="h-5 w-5 text-red-600" />
										{/if}
									{/if}
								</div>
							</button>
						{/each}
					</div>

					{#if showResult}
						<div class="mt-6 rounded-lg p-4 {isCorrect ? 'bg-green-100' : 'bg-red-100'}">
							<p class="font-medium {isCorrect ? 'text-green-800' : 'text-red-800'}">
								{isCorrect ? '✓ Correct!' : `✗ Incorrect. The correct answer is: ${currentQuestion.answer}`}
							</p>
						</div>
					{/if}

					<div class="mt-6 flex justify-between">
						<a href="/quizzes" class="inline-flex items-center gap-2 text-slate-600 hover:text-slate-800">
							<ArrowLeft class="h-4 w-4" />
							Exit Quiz
						</a>

						{#if !showResult}
							<button
								onclick={submitAnswer}
								disabled={!selectedAnswer}
								class="rounded-lg bg-indigo-600 px-6 py-2 font-medium text-white transition-colors hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-50"
							>
								Submit Answer
							</button>
						{:else}
							<button onclick={nextQuestion} class="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-6 py-2 font-medium text-white transition-colors hover:bg-indigo-700">
								{currentIndex < questions.length - 1 ? 'Next Question' : 'See Results'}
								<ArrowRight class="h-4 w-4" />
							</button>
						{/if}
					</div>
				</div>
			</Section>
		{/if}
	</PageContent>
</Page>
