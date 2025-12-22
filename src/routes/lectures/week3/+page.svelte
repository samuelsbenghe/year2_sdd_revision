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
	<title>Lecture 3: Software Testing</title>
	<meta name="description" content="Lecture 3 explores Software Testing fundamentals, covering different testing types, methodologies, and best practices for ensuring software quality." />
	<meta name="keywords" content="Software Testing, Unit Testing, Integration Testing, Test Automation, Quality Assurance, Lecture 3" />
	<meta name="author" content="Samuel" />
	<meta name="language" content="en-UK" />
</svelte:head>

<Page>
	<PageNav title="Lecture 3: Software Testing">
		<PageNavLink href="#overview" label="Overview" />
		<PageNavLink href="#lecture-viewer" label="Lecture PDF" />
		<PageNavLink href="#unittests-viewer" label="Unit Tests PDF" />
		<PageNavLink href="#testing-types" label="Testing Types" />
		<PageNavLink href="#testing-approaches" label="Testing Approaches" />
		<PageNavLink href="#testing-lifecycle" label="Testing Lifecycle" />
		<PageNavLink href="#specialized-testing" label="Specialized Testing" />
		<PageNavLink href="#labs" label="Labs" />
		<PageNavLink href="#resources" label="Resources" />
	</PageNav>

	<PageContent>
		<Section id="overview">
			<Heading>Overview</Heading>
			<Text>
				This lecture provides a comprehensive introduction to software testing principles and practices. Software testing ensures that applications function correctly, meet specified requirements, and
				deliver a high-quality user experience. We'll explore various testing methodologies, from unit testing to acceptance testing, and examine both manual and automated approaches.
			</Text>
			<Notice
				type="info"
				lead="Key Principle"
				message="Software testing is vital to delivering a high-quality product. Automating integration and testing helps detect issues early in the development cycle."
			/>
		</Section>

		<HorizontalBreak />

		<Section id="lecture-viewer">
			<Heading>Lecture Material (PDF)</Heading>
			<PDF title="Week 3 PDF" src={StaticAssets.Week3Lecture} />
		</Section>

		<HorizontalBreak />

		<Section id="unittests-viewer">
			<Heading>Unit Testing Material (PDF)</Heading>
			<PDF title="Week 3 Unit Tests PDF" src={StaticAssets.Week3UnitTests} />
		</Section>

		<Section id="testing-types">
			<Heading>Core Testing Types</Heading>
			<Text>Different testing levels target specific aspects of software quality. Understanding when and how to apply each type is essential for comprehensive testing coverage.</Text>
			<GridList>
				<GridListItem
					title="Unit Testing"
					description="Tests individual components of the software to ensure they work in isolation. Focuses on the smallest testable parts like functions or methods."
				/>
				<GridListItem
					title="Integration Testing"
					description="Ensures that different modules or services work together as expected. Tests the interfaces and interactions between integrated components."
				/>
				<GridListItem
					title="System Testing"
					description="Verifies that the complete software system meets the specified requirements. Tests the entire application as a whole in an environment similar to production."
				/>
				<GridListItem
					title="Acceptance Testing"
					description="Ensures the software meets business needs and is ready for release. Validates that the system satisfies user requirements and business objectives."
				/>
			</GridList>
		</Section>

		<HorizontalBreak />

		<Section id="testing-approaches">
			<Heading>Testing Methodologies & Approaches</Heading>
			<Text>Different testing approaches provide unique perspectives on software quality. Combining these methods creates a comprehensive testing strategy.</Text>
			<GridList>
				<GridListItem
					title="Static Testing"
					description="Involves reviewing documents and code without executing the software. Includes code reviews, walkthroughs, and inspections to identify defects early."
				/>
				<GridListItem title="Dynamic Testing" description="Involves executing code and checking the output for expected results. Validates actual behavior against expected outcomes during runtime." />
				<GridListItem
					title="White Box Testing"
					description="The tester has knowledge of the internal code and tests the logic directly. Examines internal structures, paths, conditions, and loops within the code."
				/>
				<GridListItem
					title="Black Box Testing"
					description="Tests functionality without knowing the internal workings of the software. Focuses on inputs and outputs without concern for internal implementation."
				/>
				<GridListItem
					title="Manual Testing"
					description="Human testers manually execute tests and review the results. Provides flexibility and intuition but can be time-consuming and prone to human error."
				/>
				<GridListItem
					title="Automated Testing"
					description="Uses software tools to run tests automatically, improving efficiency. Enables rapid execution of repetitive tests and continuous integration workflows."
				/>
			</GridList>
			<Notice
				type="info"
				lead="Alpha vs Beta"
				message="Alpha testing is conducted by internal developers before release, while beta testing is performed by end users in real-world environments to catch issues before final release."
			/>
		</Section>

		<HorizontalBreak />

		<Section id="testing-lifecycle">
			<Heading>Testing Lifecycle & Components</Heading>
			<Text>Effective testing requires proper planning, execution, and tracking. These components form the foundation of a structured testing process.</Text>
			<GridList>
				<GridListItem
					title="Test Plans"
					description="A test plan outlines the testing strategy, scope, and resources needed for testing. Defines objectives, schedule, responsibilities, and deliverables."
				/>
				<GridListItem
					title="Test Cases"
					description="Test cases define the inputs, execution conditions, and expected results for a test. Provide step-by-step instructions to validate specific functionality."
				/>
				<GridListItem
					title="Test Scripts"
					description="A set of instructions that are executed during testing, especially in automated tests. Can be written in programming languages or testing frameworks."
				/>
				<GridListItem title="Test Data" description="Data used during testing to check the system's behavior under various conditions. Includes valid, invalid, boundary, and edge case data." />
				<GridListItem title="Test Metrics" description="Metrics like pass/fail rates help measure the effectiveness of testing. Track defect density, code coverage, and test execution progress." />
				<GridListItem
					title="Bug Tracking"
					description="Tracking and managing bugs is critical to fixing defects in a timely manner. Documents issues, assigns priorities, and monitors resolution status."
				/>
				<GridListItem title="Regression Testing" description="Ensures that new code changes do not break existing functionality. Re-runs previous tests after modifications to verify stability." />
				<GridListItem title="Review Techniques" description="Reviews help identify errors early and improve software quality. Includes peer reviews, inspections, and technical walkthroughs." />
			</GridList>
		</Section>

		<HorizontalBreak />

		<Section id="specialized-testing">
			<Heading>Specialized Testing Areas</Heading>
			<Text>Beyond functional testing, specialized approaches target specific quality attributes like performance, security, and user experience.</Text>
			<GridList>
				<GridListItem title="Performance Testing" description="Tests how the system performs under high load or stress conditions. Identifies bottlenecks and ensures acceptable response times." />
				<GridListItem title="Load Testing" description="Measures the system's ability to handle expected user loads. Simulates concurrent users to verify scalability and resource utilization." />
				<GridListItem title="Stress Testing" description="Puts the system under extreme conditions to test its limits. Determines breaking points and how the system recovers from failures." />
				<GridListItem
					title="Security Testing"
					description="Identifies vulnerabilities and ensures that the system is secure against attacks. Tests for common vulnerabilities like SQL injection and cross-site scripting."
				/>
				<GridListItem
					title="Usability Testing"
					description="Ensures the software is user-friendly and meets the needs of its users. Evaluates user interface design, navigation, and overall user experience."
				/>
			</GridList>
			<Notice
				type="info"
				lead="Continuous Integration"
				message="Automating the integration and testing of code helps detect issues early. CI/CD pipelines run automated tests on every commit, providing rapid feedback to developers."
			/>
		</Section>

		<HorizontalBreak />

		<Section id="labs">
			<Heading>Labs & Practical Exercises</Heading>
			<Text>Apply your knowledge of software testing through hands-on lab exercises. These labs will help you write effective tests and implement automated testing strategies.</Text>
			<PDF title="Week 3 Lab" src={StaticAssets.Week3Lab} />
			<HorizontalList>
				<HorizontalListItem title="Lab Answers" description="Check your solutions and compare with provided answers." link_url={StaticAssets.Week3LabAnswers} logo_url={StaticAssets.MoodleLogo} />
			</HorizontalList>
		</Section>

		<HorizontalBreak />

		<Section id="resources">
			<Heading>Tools & Further Reading</Heading>
			<Text>Enhance your understanding of software testing with these curated resources, including articles, tutorials, and tools.</Text>
			<HorizontalList>
				<HorizontalListItem title="VLE Page" description="Course management and resources." link_url="https://learn.gold.ac.uk/course/section.php?id=569325" logo_url={StaticAssets.MoodleLogo} />
			</HorizontalList>
		</Section>
	</PageContent>
</Page>
