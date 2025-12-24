<script lang="ts">
	import Page from '$lib/components/Page.svelte';
	import PageNav from '$lib/components/PageNav.svelte';
	import PageContent from '$lib/components/PageContent.svelte';
	import Section from '$lib/components/Section.svelte';
	import Heading from '$lib/components/Heading.svelte';
	import Text from '$lib/components/Text.svelte';
	import HorizontalBreak from '$lib/components/HorizontalBreak.svelte';
	import Notice from '$lib/components/Notice.svelte';
	import { ArrowRight, FileText, BookOpen } from '@lucide/svelte';
</script>

<svelte:head>
	<title>Lectures - SDD Revision</title>
	<meta name="description" content="Browse all Software Development and Design lecture materials organized by week." />
</svelte:head>

<Page>
	<PageNav title="Lectures" />

	<PageContent>
		<Section>
			<div class="flex items-center gap-4">
				<div class="flex h-14 w-14 items-center justify-center rounded-xl bg-indigo-100">
					<BookOpen class="h-7 w-7 text-indigo-600" />
				</div>
				<div>
					<h1 class="text-3xl font-bold text-slate-800">All Lectures</h1>
					<p class="text-slate-600">Weekly lecture materials, PDFs, and lab exercises</p>
				</div>
			</div>
		</Section>

		<HorizontalBreak />

		<Section>
			<Heading>Available Lectures</Heading>
			<Text>Select a week to view its lecture materials, summaries, and practical exercises.</Text>

			<div class="mt-6 space-y-3">
				<a href="/lectures/week1" class="group block rounded-lg border border-slate-200 bg-white p-5 transition-all hover:border-indigo-300 hover:shadow-md">
					<div class="flex items-center justify-between">
						<div class="flex items-center gap-4">
							<div class="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-50 text-sm font-bold text-indigo-600">1</div>
							<div>
								<h3 class="font-semibold text-slate-800 group-hover:text-indigo-600">Introduction to Software Development and Design</h3>
								<p class="text-sm text-slate-500">Coupling, Cohesion, DRY, SOLID Principles, Design Patterns</p>
							</div>
						</div>
						<ArrowRight class="h-5 w-5 text-slate-400 transition-transform group-hover:translate-x-1 group-hover:text-indigo-600" />
					</div>
				</a>

				<a href="/lectures/week2" class="group block rounded-lg border border-slate-200 bg-white p-5 transition-all hover:border-indigo-300 hover:shadow-md">
					<div class="flex items-center justify-between">
						<div class="flex items-center gap-4">
							<div class="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-50 text-sm font-bold text-indigo-600">2</div>
							<div>
								<h3 class="font-semibold text-slate-800 group-hover:text-indigo-600">Module Coupling and Cohesion</h3>
								<p class="text-sm text-slate-500">Types of Coupling, Types of Cohesion, Design Principles</p>
							</div>
						</div>
						<ArrowRight class="h-5 w-5 text-slate-400 transition-transform group-hover:translate-x-1 group-hover:text-indigo-600" />
					</div>
				</a>

				<a href="/lectures/week3" class="group block rounded-lg border border-slate-200 bg-white p-5 transition-all hover:border-indigo-300 hover:shadow-md">
					<div class="flex items-center justify-between">
						<div class="flex items-center gap-4">
							<div class="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-50 text-sm font-bold text-indigo-600">3</div>
							<div>
								<h3 class="font-semibold text-slate-800 group-hover:text-indigo-600">Software Testing</h3>
								<p class="text-sm text-slate-500">Testing Types, Methodologies, Lifecycle, Unit Testing</p>
							</div>
						</div>
						<ArrowRight class="h-5 w-5 text-slate-400 transition-transform group-hover:translate-x-1 group-hover:text-indigo-600" />
					</div>
				</a>

				<a href="/lectures/week4" class="group block rounded-lg border border-slate-200 bg-white p-5 transition-all hover:border-indigo-300 hover:shadow-md">
					<div class="flex items-center justify-between">
						<div class="flex items-center gap-4">
							<div class="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-50 text-sm font-bold text-indigo-600">4</div>
							<div>
								<h3 class="font-semibold text-slate-800 group-hover:text-indigo-600">Web Testing with JavaScript</h3>
								<p class="text-sm text-slate-500">ATDD, Three Amigos, Selenium, Testing Tools, CI Integration</p>
							</div>
						</div>
						<ArrowRight class="h-5 w-5 text-slate-400 transition-transform group-hover:translate-x-1 group-hover:text-indigo-600" />
					</div>
				</a>

				<a href="/lectures/week5" class="group block rounded-lg border border-slate-200 bg-white p-5 transition-all hover:border-indigo-300 hover:shadow-md">
					<div class="flex items-center justify-between">
						<div class="flex items-center gap-4">
							<div class="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-50 text-sm font-bold text-indigo-600">5</div>
							<div>
								<h3 class="font-semibold text-slate-800 group-hover:text-indigo-600">User Testing</h3>
								<p class="text-sm text-slate-500">CHI Pioneers, Nielsen's Heuristics, Usability Metrics, Testing Methods</p>
							</div>
						</div>
						<ArrowRight class="h-5 w-5 text-slate-400 transition-transform group-hover:translate-x-1 group-hover:text-indigo-600" />
					</div>
				</a>

				<a href="/lectures/week6" class="group block rounded-lg border border-slate-200 bg-white p-5 transition-all hover:border-indigo-300 hover:shadow-md">
					<div class="flex items-center justify-between">
						<div class="flex items-center gap-4">
							<div class="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-50 text-sm font-bold text-indigo-600">6</div>
							<div>
								<h3 class="font-semibold text-slate-800 group-hover:text-indigo-600">Version Control Systems</h3>
								<p class="text-sm text-slate-500">Git Basics, Branching, Merging, Collaboration, DVCS</p>
							</div>
						</div>
						<ArrowRight class="h-5 w-5 text-slate-400 transition-transform group-hover:translate-x-1 group-hover:text-indigo-600" />
					</div>
				</a>

				<a href="/lectures/week7" class="group block rounded-lg border border-slate-200 bg-white p-5 transition-all hover:border-indigo-300 hover:shadow-md">
					<div class="flex items-center justify-between">
						<div class="flex items-center gap-4">
							<div class="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-50 text-sm font-bold text-indigo-600">7</div>
							<div>
								<h3 class="font-semibold text-slate-800 group-hover:text-indigo-600">Robust and Secure Programming</h3>
								<p class="text-sm text-slate-500">Input Validation, Memory Management, Authentication, Encryption, Concurrency</p>
							</div>
						</div>
						<ArrowRight class="h-5 w-5 text-slate-400 transition-transform group-hover:translate-x-1 group-hover:text-indigo-600" />
					</div>
				</a>

				<a href="/lectures/week8" class="group block rounded-lg border border-slate-200 bg-white p-5 transition-all hover:border-indigo-300 hover:shadow-md">
					<div class="flex items-center justify-between">
						<div class="flex items-center gap-4">
							<div class="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-50 text-sm font-bold text-indigo-600">8</div>
							<div>
								<h3 class="font-semibold text-slate-800 group-hover:text-indigo-600">Usability Testing</h3>
								<p class="text-sm text-slate-500">Heuristic Evaluation, Think-Aloud, SUS, A/B Testing, User Metrics</p>
							</div>
						</div>
						<ArrowRight class="h-5 w-5 text-slate-400 transition-transform group-hover:translate-x-1 group-hover:text-indigo-600" />
					</div>
				</a>

				<a href="/lectures/week9" class="group block rounded-lg border border-slate-200 bg-white p-5 transition-all hover:border-indigo-300 hover:shadow-md">
					<div class="flex items-center justify-between">
						<div class="flex items-center gap-4">
							<div class="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-50 text-sm font-bold text-indigo-600">9</div>
							<div>
								<h3 class="font-semibold text-slate-800 group-hover:text-indigo-600">Comprehensive Revision</h3>
								<p class="text-sm text-slate-500">SOLID Principles, DRY, Anti-Patterns, Refactoring, Unix, Code Quality</p>
							</div>
						</div>
						<ArrowRight class="h-5 w-5 text-slate-400 transition-transform group-hover:translate-x-1 group-hover:text-indigo-600" />
					</div>
				</a>

				<a href="/lectures/week10" class="group block rounded-lg border border-slate-200 bg-white p-5 transition-all hover:border-indigo-300 hover:shadow-md">
					<div class="flex items-center justify-between">
						<div class="flex items-center gap-4">
							<div class="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-50 text-sm font-bold text-indigo-600">10</div>
							<div>
								<h3 class="font-semibold text-slate-800 group-hover:text-indigo-600">Final Lecture & Exam Prep</h3>
								<p class="text-sm text-slate-500">Advanced Tools, API Design, CI/CD, Profiling, Code Reviews, Mock Exam</p>
							</div>
						</div>
						<ArrowRight class="h-5 w-5 text-slate-400 transition-transform group-hover:translate-x-1 group-hover:text-indigo-600" />
					</div>
				</a>
			</div>
		</Section>

		<HorizontalBreak />

		<Notice
			type="info"
			lead="Study Tip"
			message="Each lecture includes PDF slides, summary notes, and practical lab exercises. Work through the labs to reinforce your understanding of the concepts."
		/>
	</PageContent>
</Page>
