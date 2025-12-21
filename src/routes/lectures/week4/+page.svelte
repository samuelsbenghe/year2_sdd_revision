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
	import PDF from '$lib/components/PDF.svelte';
	import PageNavLink from '$lib/components/PageNavLink.svelte';
	// Static Variables
	import { StaticAssets } from '$lib';
</script>

<svelte:head>
	<title>Lecture 3: Acceptance Testing in Agile</title>
	<meta name="description" content="Lecture 3 explores Acceptance Testing in Agile, covering ATDD, Three Amigos, Selenium automation, and testing tools for web applications." />
	<meta name="keywords" content="Acceptance Testing, Agile, ATDD, Three Amigos, Selenium, W3C Validator, Lighthouse, CI/CD, Testing Tools, Lecture 3" />
	<meta name="author" content="Samuel" />
	<meta name="language" content="en-UK" />
</svelte:head>

<Page>
	<PageNav title="Lecture 3: Acceptance Testing in Agile">
		<PageNavLink href="#overview" label="Overview" />
		<PageNavLink href="#pdf-viewer" label="Lecture PDF" />
		<PageNavLink href="#atdd" label="ATDD & Three Amigos" />
		<PageNavLink href="#testing-tools" label="Testing Tools" />
		<PageNavLink href="#ci-integration" label="CI Integration" />
		<PageNavLink href="#labs" label="Labs" />
		<PageNavLink href="#resources" label="Resources" />
	</PageNav>

	<PageContent>
		<Section id="overview">
			<Heading>Overview</Heading>
			<Text>
				This lecture provides a comprehensive guide to Acceptance Testing in Agile development. Acceptance testing verifies that software meets business requirements and is ready for release. We'll
				explore Acceptance Test-Driven Development (ATDD), the Three Amigos model, and various automated testing tools that help ensure quality throughout the development process.
			</Text>
			<Notice type="info" lead="Key Statistic" message="80% of teams in Agile use acceptance tests to align software with business needs, and teams using ATDD reduce production bugs by 30%." />
		</Section>

		<HorizontalBreak />

		<Section id="pdf-viewer">
			<Heading>Lecture Material (PDF)</Heading>
			<PDF title="Week 4 PDF" pdf_url={StaticAssets.Week4Lecture} />
		</Section>

		<HorizontalBreak />

		<Section id="atdd">
			<Heading>ATDD & Three Amigos</Heading>
			<Text>
				Acceptance Test-Driven Development (ATDD) encourages collaboration between developers, testers, and business stakeholders before development begins. The 'Three Amigos' model clarifies
				requirements and defines the 'Definition of Done' (DoD) for Agile projects.
			</Text>
			<GridList>
				<GridListItem
					title="Definition of Done"
					description="Acceptance tests define when a feature is complete. They establish clear criteria that must be met before a story can be considered finished."
				/>
				<GridListItem
					title="Three Amigos Collaboration"
					description="Brings together developers, testers, and business stakeholders to discuss requirements, examples, and acceptance criteria before coding begins."
				/>
				<GridListItem
					title="User Stories & Scenarios"
					description="Write scenarios with expected results. Example: User creates account, uploads profile picture, adds friends - profile successfully created and visible to others."
				/>
				<GridListItem
					title="Acceptance Criteria"
					description="Clear, testable conditions that software must meet. Examples include displaying classifications correctly, calculating projections accurately, and ensuring multi-device accessibility."
				/>
				<GridListItem
					title="Scenario Testing"
					description="Test specific user journeys. Example: Student with 70% average should see 'First Class' classification; student with failed module should see warning about impact."
				/>
				<GridListItem
					title="Validation & Automation"
					description="Confirm ATDD scenarios validate against user stories and use cases. These processes can be automated to ensure consistent verification throughout development."
				/>
			</GridList>
			<Notice
				type="info"
				lead="Research-Driven Testing"
				message="Always research target environments. Top browser resolutions include 1920x1080 (desktop), 360x800 (mobile), and 1366x768 (legacy laptops)."
			/>
		</Section>

		<HorizontalBreak />

		<Section id="testing-tools">
			<Heading>Testing Tools & Frameworks</Heading>
			<Text>
				Modern web development relies on automated testing tools to ensure quality, performance, accessibility, and security. These tools integrate into development workflows to provide continuous
				feedback and catch issues early.
			</Text>
			<GridList>
				<GridListItem
					title="Selenium"
					description="Automates web browser interactions for end-to-end testing. 75% of web automation frameworks use Selenium to test workflows like login, navigation, and transactions."
				/>
				<GridListItem title="W3C Validator" description="Checks HTML and CSS for compliance with web standards. Validating code reduces cross-browser issues and improves accessibility by 20%." />
				<GridListItem
					title="Lighthouse"
					description="Open-source tool assessing web performance, accessibility, SEO, and best practices. Sites with high Lighthouse scores rank 30% better in Google search results."
				/>
				<GridListItem
					title="Accessibility Tools"
					description="Pa11y and Axe automate accessibility checks for standards compliance. Axe-core is used by over 60% of accessibility testers worldwide."
				/>
				<GridListItem
					title="Gatling"
					description="Open-source load and performance testing tool. Using Gatling improves app scalability by 25% by detecting bottlenecks early through stress testing with concurrent users."
				/>
				<GridListItem
					title="OWASP ZAP"
					description="Automates security testing to detect vulnerabilities. 98% of websites passing OWASP ZAP checks avoid common vulnerabilities. Most penetration testers focus on this 'low hanging fruit'."
				/>
			</GridList>
			<Notice type="info" lead="Performance Testing" message="Stress test applications with over 1,000 concurrent users to ensure stability under real-world traffic conditions." />
		</Section>

		<HorizontalBreak />

		<Section id="ci-integration">
			<Heading>Continuous Integration & Testing</Heading>
			<Text>
				Continuous Integration (CI) integrates code changes frequently and runs automated tests to ensure quality in each iteration. Automating tests in CI pipelines can reduce deployment times by 50%
				and testing time by 40%.
			</Text>
			<GridList>
				<GridListItem
					title="CI Pipeline Integration"
					description="Jenkins, GitHub Actions, and other CI tools automate tests like Selenium, W3C Validator, and Lighthouse. 70% of high-performing teams integrate automated tests into CI pipelines."
				/>
				<GridListItem
					title="Quick Feedback"
					description="Selenium tests in CI pipelines provide immediate feedback on code changes, catching issues before they reach production and reducing testing time by 40%."
				/>
				<GridListItem
					title="Quality Assurance"
					description="Automated testing ensures every code change meets quality standards. This continuous verification prevents regression and maintains application stability throughout development."
				/>
				<GridListItem
					title="Usability Testing"
					description="Ensure applications are user-friendly and meet accessibility standards. Accessible websites see a 25% increase in user engagement due to inclusive design."
				/>
			</GridList>
			<Notice type="info" lead="Best Practice Warning" message="Google will not index sites that fail to follow best practices. High Lighthouse scores are essential for SEO and discoverability." />
		</Section>

		<HorizontalBreak />

		<Section id="labs">
			<Heading>Labs & Practical Exercises</Heading>
			<Text>Work through hands-on activities building a grade submission system with validation, manual testing workflows, DOM manipulation exercises, and optional Selenium automation.</Text>
			<PDF title="Week 4 Lab" pdf_url={StaticAssets.Week4Lab} />
			<GridList>
				<GridListItem
					title="Activity 1: Simple HTML Setup"
					description="Create a basic HTML page with input fields and buttons. Set up the foundation for testing user interactions and input validation."
				/>
				<GridListItem title="Activity 2: Input Handling" description="Implement grade submission logic with pass/fail boundaries. Display results based on user input and boundary value of 40." />
				<GridListItem
					title="Activity 3: Boundary Testing"
					description="Manually test boundary values including edge cases and invalid inputs. Verify correct behavior at critical transition points."
				/>
				<GridListItem title="Activity 4: Regex Validation" description="Add regular expression validation for non-numeric input detection. Prevent invalid characters from being processed." />
				<GridListItem
					title="Activity 5: Dynamic Parsing"
					description="Extend functionality to handle floating-point numbers and whitespace. Support multiple input formats while maintaining validation."
				/>
				<GridListItem title="Activity 6: Table Parsing" description="Parse HTML tables and store data in sessionStorage. Practice working with structured data entirely client-side." />
			</GridList>
		</Section>

		<HorizontalBreak />

		<Section id="resources">
			<Heading>Tools & Further Reading</Heading>
			<HorizontalList>
				<HorizontalListItem title="VLE Page" description="Course management and resources." link_url="https://learn.gold.ac.uk/course/section.php?id=569326" logo_url={StaticAssets.MoodleLogo} />
			</HorizontalList>
		</Section>
	</PageContent>
</Page>
