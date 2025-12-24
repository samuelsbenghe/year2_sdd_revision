<script lang="ts">
	// Components
	import Heading from '$lib/components/Heading.svelte';
	import HorizontalBreak from '$lib/components/HorizontalBreak.svelte';
	import Notice from '$lib/components/Notice.svelte';
	import Section from '$lib/components/Section.svelte';
	import Text from '$lib/components/Text.svelte';
	import Page from '$lib/components/Page.svelte';
	import PageNav from '$lib/components/PageNav.svelte';
	import PageContent from '$lib/components/PageContent.svelte';
	import GridList from '$lib/components/GridList.svelte';
	import GridListItem from '$lib/components/GridListItem.svelte';
	import HorizontalList from '$lib/components/HorizontalList.svelte';
	import HorizontalListItem from '$lib/components/HorizontalListItem.svelte';
	import PageNavLink from '$lib/components/PageNavLink.svelte';
	import PDF from '$lib/components/PDF.svelte';
	// Static Variables
	import { StaticAssets } from '$lib';
</script>

<svelte:head>
	<title>Lecture 10: Final Lecture & Exam Prep</title>
	<meta name="description" content="Lecture 10 is the final lecture covering advanced software development tools, API design, CI/CD, profiling, code reviews, and exam preparation with mock exams." />
	<meta name="keywords" content="Final Lecture, Defensive Coding, TDD, API Design, CI/CD, Profiling, Code Reviews, Documentation, Mock Exam, Lecture 10" />
	<meta name="author" content="Samuel" />
	<meta name="language" content="en-UK" />
</svelte:head>

<Page>
	<PageNav title="Lecture 10: Final Lecture & Exam Prep">
		<PageNavLink href="#overview" label="Overview" />
		<PageNavLink href="#pdf-viewer" label="Lecture PDF" />
		<PageNavLink href="#defensive-coding" label="Defensive Coding" />
		<PageNavLink href="#modular-tdd" label="Modular Design & TDD" />
		<PageNavLink href="#user-testing" label="User Testing" />
		<PageNavLink href="#api-design" label="API Design" />
		<PageNavLink href="#cicd" label="CI/CD" />
		<PageNavLink href="#profiling" label="Profiling & Performance" />
		<PageNavLink href="#best-practices" label="Best Practices" />
		<PageNavLink href="#exam-practice" label="Exam Practice" />
		<PageNavLink href="#resources" label="Resources" />
	</PageNav>

	<PageContent>
		<Section id="overview">
			<Heading>Overview</Heading>
			<Text>
				This final lecture wraps up key topics and introduces advanced tools for robust software development. We consolidate learning objectives including strengthening programming skills, writing
				robust and secure code, effective collaboration using version control, and test-driven development practices.
			</Text>
			<Notice
				type="info"
				lead="Learning Objectives"
				message="1. Strengthen programming skills. 2. Write robust, maintainable, and secure code. 3. Collaborate effectively using version control. 4. Apply test-driven development."
			/>
		</Section>

		<HorizontalBreak />

		<Section id="pdf-viewer">
			<Heading>Lecture Material (PDF)</Heading>
			<PDF title="Week 10 PDF" src={StaticAssets.Week10Lecture} />
		</Section>

		<HorizontalBreak />

		<Section id="defensive-coding">
			<Heading>Defensive Coding</Heading>
			<Text>Defensive coding anticipates and handles invalid inputs and errors before they cause problems. This proactive approach creates more robust and reliable software.</Text>
			<GridList>
				<GridListItem title="Exception Handling" description="Use try-except blocks to gracefully handle unforeseen runtime errors. Catch specific exceptions and provide meaningful error messages." />
				<GridListItem title="Static Code Analysis" description="Tools like SonarQube and PyLint help detect bugs and code smells early in development before they reach production." />
				<GridListItem
					title="Design by Contract"
					description="Define preconditions (what must be true before), postconditions (what must be true after), and invariants (what must always be true) to ensure code correctness."
				/>
				<GridListItem title="Input Validation" description="Always validate inputs at system boundaries. Never trust external data without verification." />
			</GridList>
		</Section>

		<HorizontalBreak />

		<Section id="modular-tdd">
			<Heading>Modular Design & TDD</Heading>
			<Text>Combining modular design principles with test-driven development creates maintainable, well-tested software systems.</Text>
			<GridList>
				<GridListItem title="High Cohesion" description="Modules should be organised around a single, well-defined purpose. Each module does one thing well." />
				<GridListItem title="Low Coupling" description="Minimise dependencies between modules to simplify testing and maintenance. Changes in one module shouldn't cascade." />
				<GridListItem title="Test-Driven Development" description="Write tests before implementing functionality to ensure requirements are met. Follow the Red-Green-Refactor cycle." />
				<GridListItem title="Unit Tests" description="Isolate and test small parts of the codebase using frameworks like PyTest. Test individual functions and methods." />
				<GridListItem title="Integration Tests" description="Ensure that modules interact correctly using tools like Selenium. Test the system as a whole." />
				<GridListItem title="Code Coverage" description="Measure test coverage with tools like Coverage.py. Aim for high coverage of critical code paths." />
			</GridList>
		</Section>

		<HorizontalBreak />

		<Section id="user-testing">
			<Heading>User Testing Recap</Heading>
			<Text>Involve users early and often to identify usability issues before they become costly to fix.</Text>
			<GridList>
				<GridListItem title="Usability Testing" description="Evaluate user interactions to improve interface design. Observe how real users complete tasks." />
				<GridListItem title="Accessibility Testing" description="Ensure the software is usable by people with disabilities. Follow WCAG guidelines for inclusive design." />
				<GridListItem title="Early Involvement" description="Test with users throughout development, not just at the end. Iterative testing catches issues early." />
			</GridList>
		</Section>

		<HorizontalBreak />

		<Section id="api-design">
			<Heading>API Design & Interaction</Heading>
			<Text>APIs enable communication between systems. Understanding how to design, test, and consume APIs is essential for modern development.</Text>
			<GridList>
				<GridListItem title="RESTful APIs" description="Design APIs following REST principles with clear endpoints, proper HTTP methods, and consistent response formats." />
				<GridListItem title="cURL Basics" description="Send HTTP requests and handle responses from APIs using the command line. Essential for debugging and testing." />
				<GridListItem title="Postman & Insomnia" description="Test and debug APIs using GUI tools. Create collections of requests and automate API testing." />
			</GridList>
		</Section>

		<HorizontalBreak />

		<Section id="cicd">
			<Heading>CI/CD Pipeline</Heading>
			<Text>Continuous Integration and Continuous Deployment automate the build, test, and deployment process for faster, more reliable releases.</Text>
			<GridList>
				<GridListItem title="Continuous Integration" description="Merge code frequently and test changes automatically. Catch integration issues early before they compound." />
				<GridListItem title="Continuous Deployment" description="Deploy tested code to production automatically. Reduce manual steps and human error in releases." />
				<GridListItem title="Automated Testing" description="Run unit tests, integration tests, and linting on every commit. Maintain quality gates for merges." />
			</GridList>
		</Section>

		<HorizontalBreak />

		<Section id="profiling">
			<Heading>Profiling & Performance</Heading>
			<Text>Identify bottlenecks and optimise code performance using profiling tools. Measure before optimising.</Text>
			<GridList>
				<GridListItem title="Command-line Tools" description="Use htop, perf, and ab to monitor and benchmark systems. Chrome DevTools also supports profiling for web applications." />
				<GridListItem title="Error Handling Strategies" description="Implement graceful degradation, retries, and fallback mechanisms. Systems should fail gracefully, not catastrophically." />
				<GridListItem title="Scalability Awareness" description="Consider the impact of module design on scalability. Design for growth from the start." />
			</GridList>
		</Section>

		<HorizontalBreak />

		<Section id="best-practices">
			<Heading>Real-World Best Practices</Heading>
			<Text>Professional development practices that improve code quality and team collaboration.</Text>
			<GridList>
				<GridListItem
					title="Code Reviews"
					description="Use GitHub or GitLab for peer reviews. When writing new code, explain it to the team. One person chairs, takes notes and actions. Others critique and ask questions."
				/>
				<GridListItem title="Documentation" description="Document code clearly. Unit tests document functionality. Comments are your friend - use docstrings to explain purpose and usage." />
				<GridListItem
					title="Version Control Best Practices"
					description="Use Git effectively for individual and collaborative projects. Write clear commit messages and use meaningful branch names."
				/>
			</GridList>
			<Notice
				type="info"
				lead="Code Review Process"
				message="One person 'chairs' the code review and takes notes. One or more people are assigned to critique, but others can also ask questions for clarity."
			/>
		</Section>

		<HorizontalBreak />

		<Section id="exam-practice">
			<Heading>Exam Practice Materials</Heading>
			<Text>Prepare for your exam with practice questions covering all module topics. The lab includes multiple choice questions and open-ended scenarios.</Text>
			<PDF title="Practice Exam Questions" src={StaticAssets.Week10Lab} />
			<GridList>
				<GridListItem
					title="Section A: Multiple Choice"
					description="40 marks total covering interaction design, code smells, Git commands, security, usability testing, profiling, and SOLID principles."
				/>
				<GridListItem
					title="Section B: Open-Ended"
					description="Answer 2 of 3 questions worth 30 marks each. Topics include coupling/cohesion, defensive coding, user testing, TDD, and version control."
				/>
			</GridList>
		</Section>

		<HorizontalBreak />

		<Section id="mock-exam">
			<Heading>Mock Exam</Heading>
			<Text>Full mock exam with marking rubric to practice under exam conditions.</Text>
			<PDF title="Mock Exam" src={StaticAssets.MockExam} />
			<PDF title="Mock Exam Rubric" src={StaticAssets.MockExamRubric} />
		</Section>

		<HorizontalBreak />

		<Section id="resources">
			<Heading>Tools & Further Reading</Heading>
			<HorizontalList>
				<HorizontalListItem title="VLE Page" description="Course management and resources." link_url="https://learn.gold.ac.uk/course/section.php?id=569334" logo_url={StaticAssets.MoodleLogo} />
			</HorizontalList>
		</Section>
	</PageContent>
</Page>
