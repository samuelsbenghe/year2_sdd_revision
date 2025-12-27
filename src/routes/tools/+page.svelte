<script lang="ts">
	import Page from '$lib/components/Page.svelte';
	import PageNav from '$lib/components/PageNav.svelte';
	import PageContent from '$lib/components/PageContent.svelte';
	import Section from '$lib/components/Section.svelte';
	import Heading from '$lib/components/Heading.svelte';
	import Text from '$lib/components/Text.svelte';
	import HorizontalBreak from '$lib/components/HorizontalBreak.svelte';
	import Notice from '$lib/components/Notice.svelte';
	import { LayoutGrid, ExternalLink, Code, TestTube, GitBranch, Search, FileCode, Paintbrush, Shield, Gauge, Play, Terminal, Box, Bug, Activity, Accessibility, Send } from '@lucide/svelte';
</script>

<svelte:head>
	<title>Tools - SDD Revision</title>
	<meta name="description" content="Useful development tools for Software Development and Design including testing, version control, code quality, and more." />
</svelte:head>

<Page>
	<PageNav title="Tools" />

	<PageContent>
		<Section>
			<div class="flex items-center gap-4">
				<div class="flex h-14 w-14 items-center justify-center rounded-xl bg-orange-100">
					<LayoutGrid class="h-8 w-8 text-orange-600" />
				</div>
				<div>
					<h1 class="text-2xl font-bold text-slate-800">Development Tools</h1>
					<p class="text-slate-600">Essential tools for software development and testing</p>
				</div>
			</div>
		</Section>

		<HorizontalBreak />

		<Section>
			<Heading>Testing Tools</Heading>
			<Text>Tools for automated testing, browser automation, and quality assurance.</Text>

			<div class="mt-4 space-y-3">
				<a
					href="https://www.selenium.dev/"
					target="_blank"
					rel="noopener noreferrer"
					class="group flex items-center justify-between rounded-lg border border-slate-200 bg-white p-4 transition-all hover:border-orange-300 hover:shadow-md"
				>
					<div class="flex items-center gap-4">
						<div class="flex h-10 w-10 items-center justify-center rounded-lg bg-green-100">
							<TestTube class="h-5 w-5 text-green-600" />
						</div>
						<div>
							<h3 class="font-semibold text-slate-800 group-hover:text-orange-600">Selenium</h3>
							<p class="text-sm text-slate-500">Browser automation and web testing framework</p>
						</div>
					</div>
					<ExternalLink class="h-5 w-5 text-slate-400 group-hover:text-orange-600" />
				</a>

				<a
					href="https://junit.org/"
					target="_blank"
					rel="noopener noreferrer"
					class="group flex items-center justify-between rounded-lg border border-slate-200 bg-white p-4 transition-all hover:border-orange-300 hover:shadow-md"
				>
					<div class="flex items-center gap-4">
						<div class="flex h-10 w-10 items-center justify-center rounded-lg bg-red-100">
							<TestTube class="h-5 w-5 text-red-600" />
						</div>
						<div>
							<h3 class="font-semibold text-slate-800 group-hover:text-orange-600">JUnit</h3>
							<p class="text-sm text-slate-500">Unit testing framework for Java</p>
						</div>
					</div>
					<ExternalLink class="h-5 w-5 text-slate-400 group-hover:text-orange-600" />
				</a>

				<a
					href="https://docs.pytest.org/"
					target="_blank"
					rel="noopener noreferrer"
					class="group flex items-center justify-between rounded-lg border border-slate-200 bg-white p-4 transition-all hover:border-orange-300 hover:shadow-md"
				>
					<div class="flex items-center gap-4">
						<div class="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100">
							<TestTube class="h-5 w-5 text-blue-600" />
						</div>
						<div>
							<h3 class="font-semibold text-slate-800 group-hover:text-orange-600">PyTest</h3>
							<p class="text-sm text-slate-500">Testing framework for Python</p>
						</div>
					</div>
					<ExternalLink class="h-5 w-5 text-slate-400 group-hover:text-orange-600" />
				</a>

				<a
					href="https://coverage.readthedocs.io/"
					target="_blank"
					rel="noopener noreferrer"
					class="group flex items-center justify-between rounded-lg border border-slate-200 bg-white p-4 transition-all hover:border-orange-300 hover:shadow-md"
				>
					<div class="flex items-center gap-4">
						<div class="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-100">
							<Activity class="h-5 w-5 text-emerald-600" />
						</div>
						<div>
							<h3 class="font-semibold text-slate-800 group-hover:text-orange-600">Coverage.py</h3>
							<p class="text-sm text-slate-500">Python code coverage measurement</p>
						</div>
					</div>
					<ExternalLink class="h-5 w-5 text-slate-400 group-hover:text-orange-600" />
				</a>
			</div>
		</Section>

		<HorizontalBreak />

		<Section>
			<Heading>Version Control</Heading>
			<Text>Tools for managing code versions, collaboration, and CI/CD pipelines.</Text>

			<div class="mt-4 space-y-3">
				<a
					href="https://git-scm.com/"
					target="_blank"
					rel="noopener noreferrer"
					class="group flex items-center justify-between rounded-lg border border-slate-200 bg-white p-4 transition-all hover:border-orange-300 hover:shadow-md"
				>
					<div class="flex items-center gap-4">
						<div class="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-100">
							<GitBranch class="h-5 w-5 text-orange-600" />
						</div>
						<div>
							<h3 class="font-semibold text-slate-800 group-hover:text-orange-600">Git</h3>
							<p class="text-sm text-slate-500">Distributed version control system</p>
						</div>
					</div>
					<ExternalLink class="h-5 w-5 text-slate-400 group-hover:text-orange-600" />
				</a>

				<a
					href="https://github.com/"
					target="_blank"
					rel="noopener noreferrer"
					class="group flex items-center justify-between rounded-lg border border-slate-200 bg-white p-4 transition-all hover:border-orange-300 hover:shadow-md"
				>
					<div class="flex items-center gap-4">
						<div class="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-800">
							<GitBranch class="h-5 w-5 text-white" />
						</div>
						<div>
							<h3 class="font-semibold text-slate-800 group-hover:text-orange-600">GitHub</h3>
							<p class="text-sm text-slate-500">Code hosting and collaboration platform</p>
						</div>
					</div>
					<ExternalLink class="h-5 w-5 text-slate-400 group-hover:text-orange-600" />
				</a>
			</div>
		</Section>

		<HorizontalBreak />

		<Section>
			<Heading>CI/CD & Automation</Heading>
			<Text>Continuous integration and deployment tools for automated workflows.</Text>

			<div class="mt-4 space-y-3">
				<a
					href="https://www.jenkins.io/"
					target="_blank"
					rel="noopener noreferrer"
					class="group flex items-center justify-between rounded-lg border border-slate-200 bg-white p-4 transition-all hover:border-orange-300 hover:shadow-md"
				>
					<div class="flex items-center gap-4">
						<div class="flex h-10 w-10 items-center justify-center rounded-lg bg-red-100">
							<Play class="h-5 w-5 text-red-600" />
						</div>
						<div>
							<h3 class="font-semibold text-slate-800 group-hover:text-orange-600">Jenkins</h3>
							<p class="text-sm text-slate-500">Open-source automation server for CI/CD</p>
						</div>
					</div>
					<ExternalLink class="h-5 w-5 text-slate-400 group-hover:text-orange-600" />
				</a>

				<a
					href="https://github.com/features/actions"
					target="_blank"
					rel="noopener noreferrer"
					class="group flex items-center justify-between rounded-lg border border-slate-200 bg-white p-4 transition-all hover:border-orange-300 hover:shadow-md"
				>
					<div class="flex items-center gap-4">
						<div class="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-100">
							<Play class="h-5 w-5 text-indigo-600" />
						</div>
						<div>
							<h3 class="font-semibold text-slate-800 group-hover:text-orange-600">GitHub Actions</h3>
							<p class="text-sm text-slate-500">Automated workflows integrated with GitHub</p>
						</div>
					</div>
					<ExternalLink class="h-5 w-5 text-slate-400 group-hover:text-orange-600" />
				</a>

				<a
					href="https://www.docker.com/"
					target="_blank"
					rel="noopener noreferrer"
					class="group flex items-center justify-between rounded-lg border border-slate-200 bg-white p-4 transition-all hover:border-orange-300 hover:shadow-md"
				>
					<div class="flex items-center gap-4">
						<div class="flex h-10 w-10 items-center justify-center rounded-lg bg-sky-100">
							<Box class="h-5 w-5 text-sky-600" />
						</div>
						<div>
							<h3 class="font-semibold text-slate-800 group-hover:text-orange-600">Docker</h3>
							<p class="text-sm text-slate-500">Containerization platform for consistent environments</p>
						</div>
					</div>
					<ExternalLink class="h-5 w-5 text-slate-400 group-hover:text-orange-600" />
				</a>
			</div>
		</Section>

		<HorizontalBreak />

		<Section>
			<Heading>Code Quality</Heading>
			<Text>Linters, formatters, and static analysis tools for maintaining code quality.</Text>

			<div class="mt-4 space-y-3">
				<a
					href="https://eslint.org/"
					target="_blank"
					rel="noopener noreferrer"
					class="group flex items-center justify-between rounded-lg border border-slate-200 bg-white p-4 transition-all hover:border-orange-300 hover:shadow-md"
				>
					<div class="flex items-center gap-4">
						<div class="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-100">
							<Search class="h-5 w-5 text-purple-600" />
						</div>
						<div>
							<h3 class="font-semibold text-slate-800 group-hover:text-orange-600">ESLint</h3>
							<p class="text-sm text-slate-500">JavaScript linting utility</p>
						</div>
					</div>
					<ExternalLink class="h-5 w-5 text-slate-400 group-hover:text-orange-600" />
				</a>

				<a
					href="https://prettier.io/"
					target="_blank"
					rel="noopener noreferrer"
					class="group flex items-center justify-between rounded-lg border border-slate-200 bg-white p-4 transition-all hover:border-orange-300 hover:shadow-md"
				>
					<div class="flex items-center gap-4">
						<div class="flex h-10 w-10 items-center justify-center rounded-lg bg-pink-100">
							<Paintbrush class="h-5 w-5 text-pink-600" />
						</div>
						<div>
							<h3 class="font-semibold text-slate-800 group-hover:text-orange-600">Prettier</h3>
							<p class="text-sm text-slate-500">Opinionated code formatter</p>
						</div>
					</div>
					<ExternalLink class="h-5 w-5 text-slate-400 group-hover:text-orange-600" />
				</a>

				<a
					href="https://pylint.org/"
					target="_blank"
					rel="noopener noreferrer"
					class="group flex items-center justify-between rounded-lg border border-slate-200 bg-white p-4 transition-all hover:border-orange-300 hover:shadow-md"
				>
					<div class="flex items-center gap-4">
						<div class="flex h-10 w-10 items-center justify-center rounded-lg bg-yellow-100">
							<FileCode class="h-5 w-5 text-yellow-600" />
						</div>
						<div>
							<h3 class="font-semibold text-slate-800 group-hover:text-orange-600">Pylint</h3>
							<p class="text-sm text-slate-500">Python static code analysis</p>
						</div>
					</div>
					<ExternalLink class="h-5 w-5 text-slate-400 group-hover:text-orange-600" />
				</a>

				<a
					href="https://www.sonarqube.org/"
					target="_blank"
					rel="noopener noreferrer"
					class="group flex items-center justify-between rounded-lg border border-slate-200 bg-white p-4 transition-all hover:border-orange-300 hover:shadow-md"
				>
					<div class="flex items-center gap-4">
						<div class="flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-100">
							<Shield class="h-5 w-5 text-cyan-600" />
						</div>
						<div>
							<h3 class="font-semibold text-slate-800 group-hover:text-orange-600">SonarQube</h3>
							<p class="text-sm text-slate-500">Continuous code quality inspection</p>
						</div>
					</div>
					<ExternalLink class="h-5 w-5 text-slate-400 group-hover:text-orange-600" />
				</a>
			</div>
		</Section>

		<HorizontalBreak />

		<Section>
			<Heading>Web Testing & Validation</Heading>
			<Text>Tools for validating HTML, accessibility, and performance.</Text>

			<div class="mt-4 space-y-3">
				<a
					href="https://validator.w3.org/"
					target="_blank"
					rel="noopener noreferrer"
					class="group flex items-center justify-between rounded-lg border border-slate-200 bg-white p-4 transition-all hover:border-orange-300 hover:shadow-md"
				>
					<div class="flex items-center gap-4">
						<div class="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100">
							<Code class="h-5 w-5 text-blue-600" />
						</div>
						<div>
							<h3 class="font-semibold text-slate-800 group-hover:text-orange-600">W3C Validator</h3>
							<p class="text-sm text-slate-500">HTML and CSS validation service</p>
						</div>
					</div>
					<ExternalLink class="h-5 w-5 text-slate-400 group-hover:text-orange-600" />
				</a>

				<a
					href="https://developer.chrome.com/docs/lighthouse/"
					target="_blank"
					rel="noopener noreferrer"
					class="group flex items-center justify-between rounded-lg border border-slate-200 bg-white p-4 transition-all hover:border-orange-300 hover:shadow-md"
				>
					<div class="flex items-center gap-4">
						<div class="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-100">
							<Gauge class="h-5 w-5 text-amber-600" />
						</div>
						<div>
							<h3 class="font-semibold text-slate-800 group-hover:text-orange-600">Lighthouse</h3>
							<p class="text-sm text-slate-500">Performance, accessibility, and SEO audits</p>
						</div>
					</div>
					<ExternalLink class="h-5 w-5 text-slate-400 group-hover:text-orange-600" />
				</a>

				<a
					href="https://pa11y.org/"
					target="_blank"
					rel="noopener noreferrer"
					class="group flex items-center justify-between rounded-lg border border-slate-200 bg-white p-4 transition-all hover:border-orange-300 hover:shadow-md"
				>
					<div class="flex items-center gap-4">
						<div class="flex h-10 w-10 items-center justify-center rounded-lg bg-teal-100">
							<Accessibility class="h-5 w-5 text-teal-600" />
						</div>
						<div>
							<h3 class="font-semibold text-slate-800 group-hover:text-orange-600">Pa11y</h3>
							<p class="text-sm text-slate-500">Automated accessibility testing</p>
						</div>
					</div>
					<ExternalLink class="h-5 w-5 text-slate-400 group-hover:text-orange-600" />
				</a>

				<a
					href="https://www.deque.com/axe/"
					target="_blank"
					rel="noopener noreferrer"
					class="group flex items-center justify-between rounded-lg border border-slate-200 bg-white p-4 transition-all hover:border-orange-300 hover:shadow-md"
				>
					<div class="flex items-center gap-4">
						<div class="flex h-10 w-10 items-center justify-center rounded-lg bg-violet-100">
							<Accessibility class="h-5 w-5 text-violet-600" />
						</div>
						<div>
							<h3 class="font-semibold text-slate-800 group-hover:text-orange-600">Axe</h3>
							<p class="text-sm text-slate-500">Accessibility testing engine (used by 60%+ of teams)</p>
						</div>
					</div>
					<ExternalLink class="h-5 w-5 text-slate-400 group-hover:text-orange-600" />
				</a>
			</div>
		</Section>

		<HorizontalBreak />

		<Section>
			<Heading>Security Testing</Heading>
			<Text>Tools for identifying security vulnerabilities and memory issues.</Text>

			<div class="mt-4 space-y-3">
				<a
					href="https://www.zaproxy.org/"
					target="_blank"
					rel="noopener noreferrer"
					class="group flex items-center justify-between rounded-lg border border-slate-200 bg-white p-4 transition-all hover:border-orange-300 hover:shadow-md"
				>
					<div class="flex items-center gap-4">
						<div class="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100">
							<Shield class="h-5 w-5 text-blue-600" />
						</div>
						<div>
							<h3 class="font-semibold text-slate-800 group-hover:text-orange-600">OWASP ZAP</h3>
							<p class="text-sm text-slate-500">Web application security scanner</p>
						</div>
					</div>
					<ExternalLink class="h-5 w-5 text-slate-400 group-hover:text-orange-600" />
				</a>

				<a
					href="https://valgrind.org/"
					target="_blank"
					rel="noopener noreferrer"
					class="group flex items-center justify-between rounded-lg border border-slate-200 bg-white p-4 transition-all hover:border-orange-300 hover:shadow-md"
				>
					<div class="flex items-center gap-4">
						<div class="flex h-10 w-10 items-center justify-center rounded-lg bg-red-100">
							<Bug class="h-5 w-5 text-red-600" />
						</div>
						<div>
							<h3 class="font-semibold text-slate-800 group-hover:text-orange-600">Valgrind</h3>
							<p class="text-sm text-slate-500">Memory debugging and profiling</p>
						</div>
					</div>
					<ExternalLink class="h-5 w-5 text-slate-400 group-hover:text-orange-600" />
				</a>

				<a
					href="https://clang.llvm.org/docs/AddressSanitizer.html"
					target="_blank"
					rel="noopener noreferrer"
					class="group flex items-center justify-between rounded-lg border border-slate-200 bg-white p-4 transition-all hover:border-orange-300 hover:shadow-md"
				>
					<div class="flex items-center gap-4">
						<div class="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-100">
							<Bug class="h-5 w-5 text-orange-600" />
						</div>
						<div>
							<h3 class="font-semibold text-slate-800 group-hover:text-orange-600">AddressSanitizer</h3>
							<p class="text-sm text-slate-500">Memory error detector for C/C++</p>
						</div>
					</div>
					<ExternalLink class="h-5 w-5 text-slate-400 group-hover:text-orange-600" />
				</a>
			</div>
		</Section>

		<HorizontalBreak />

		<Section>
			<Heading>API Testing</Heading>
			<Text>Tools for testing and debugging APIs.</Text>

			<div class="mt-4 space-y-3">
				<a
					href="https://www.postman.com/"
					target="_blank"
					rel="noopener noreferrer"
					class="group flex items-center justify-between rounded-lg border border-slate-200 bg-white p-4 transition-all hover:border-orange-300 hover:shadow-md"
				>
					<div class="flex items-center gap-4">
						<div class="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-100">
							<Send class="h-5 w-5 text-orange-600" />
						</div>
						<div>
							<h3 class="font-semibold text-slate-800 group-hover:text-orange-600">Postman</h3>
							<p class="text-sm text-slate-500">API development and testing platform</p>
						</div>
					</div>
					<ExternalLink class="h-5 w-5 text-slate-400 group-hover:text-orange-600" />
				</a>

				<a
					href="https://insomnia.rest/"
					target="_blank"
					rel="noopener noreferrer"
					class="group flex items-center justify-between rounded-lg border border-slate-200 bg-white p-4 transition-all hover:border-orange-300 hover:shadow-md"
				>
					<div class="flex items-center gap-4">
						<div class="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-100">
							<Send class="h-5 w-5 text-purple-600" />
						</div>
						<div>
							<h3 class="font-semibold text-slate-800 group-hover:text-orange-600">Insomnia</h3>
							<p class="text-sm text-slate-500">API client for REST and GraphQL</p>
						</div>
					</div>
					<ExternalLink class="h-5 w-5 text-slate-400 group-hover:text-orange-600" />
				</a>

				<a
					href="https://curl.se/"
					target="_blank"
					rel="noopener noreferrer"
					class="group flex items-center justify-between rounded-lg border border-slate-200 bg-white p-4 transition-all hover:border-orange-300 hover:shadow-md"
				>
					<div class="flex items-center gap-4">
						<div class="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100">
							<Terminal class="h-5 w-5 text-slate-600" />
						</div>
						<div>
							<h3 class="font-semibold text-slate-800 group-hover:text-orange-600">cURL</h3>
							<p class="text-sm text-slate-500">Command-line tool for HTTP requests</p>
						</div>
					</div>
					<ExternalLink class="h-5 w-5 text-slate-400 group-hover:text-orange-600" />
				</a>
			</div>
		</Section>

		<HorizontalBreak />

		<Section>
			<Heading>Profiling & Monitoring</Heading>
			<Text>Tools for performance profiling and system monitoring.</Text>

			<div class="mt-4 space-y-3">
				<a
					href="https://htop.dev/"
					target="_blank"
					rel="noopener noreferrer"
					class="group flex items-center justify-between rounded-lg border border-slate-200 bg-white p-4 transition-all hover:border-orange-300 hover:shadow-md"
				>
					<div class="flex items-center gap-4">
						<div class="flex h-10 w-10 items-center justify-center rounded-lg bg-green-100">
							<Activity class="h-5 w-5 text-green-600" />
						</div>
						<div>
							<h3 class="font-semibold text-slate-800 group-hover:text-orange-600">htop</h3>
							<p class="text-sm text-slate-500">Interactive process viewer for Unix</p>
						</div>
					</div>
					<ExternalLink class="h-5 w-5 text-slate-400 group-hover:text-orange-600" />
				</a>

				<a
					href="https://perf.wiki.kernel.org/"
					target="_blank"
					rel="noopener noreferrer"
					class="group flex items-center justify-between rounded-lg border border-slate-200 bg-white p-4 transition-all hover:border-orange-300 hover:shadow-md"
				>
					<div class="flex items-center gap-4">
						<div class="flex h-10 w-10 items-center justify-center rounded-lg bg-rose-100">
							<Gauge class="h-5 w-5 text-rose-600" />
						</div>
						<div>
							<h3 class="font-semibold text-slate-800 group-hover:text-orange-600">perf</h3>
							<p class="text-sm text-slate-500">Linux profiling with performance counters</p>
						</div>
					</div>
					<ExternalLink class="h-5 w-5 text-slate-400 group-hover:text-orange-600" />
				</a>
			</div>
		</Section>

		<HorizontalBreak />

		<Notice type="info" lead="Tip" message="Familiarize yourself with these tools as they are commonly referenced in the exam. Understanding when and why to use each tool is key." />
	</PageContent>
</Page>
