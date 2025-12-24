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
	<title>Lecture 8: Usability Testing</title>
	<meta name="description" content="Lecture 8 explores Usability Testing methods including heuristic evaluation, cognitive walkthroughs, think-aloud protocols, SUS scoring, and A/B testing." />
	<meta name="keywords" content="Usability Testing, Heuristic Evaluation, Cognitive Walkthrough, Think Aloud, SUS, A/B Testing, Eye Tracking, User Experience, UX, Lecture 8" />
	<meta name="author" content="Samuel" />
	<meta name="language" content="en-UK" />
</svelte:head>

<Page>
	<PageNav title="Lecture 8: Usability Testing">
		<PageNavLink href="#overview" label="Overview" />
		<PageNavLink href="#pdf-viewer" label="Lecture PDF" />
		<PageNavLink href="#evaluation-methods" label="Evaluation Methods" />
		<PageNavLink href="#usability-metrics" label="Usability Metrics" />
		<PageNavLink href="#testing-techniques" label="Testing Techniques" />
		<PageNavLink href="#design-principles" label="Design Principles" />
		<PageNavLink href="#advanced-methods" label="Advanced Methods" />
		<PageNavLink href="#labs" label="Labs" />
		<PageNavLink href="#resources" label="Resources" />
	</PageNav>

	<PageContent>
		<Section id="overview">
			<Heading>Overview</Heading>
			<Text>
				Usability testing focuses on understanding the ease of use and effectiveness of a system. This lecture covers essential evaluation methods including heuristic evaluation, cognitive
				walkthroughs, and think-aloud studies. You'll learn how to measure usability through objective metrics and gather meaningful user feedback to improve designs.
			</Text>
			<Notice
				type="info"
				lead="Key Insight"
				message="Usability impacts user satisfaction, productivity, and error rates. A well-designed system reduces cognitive load and helps users achieve their goals efficiently."
			/>
		</Section>

		<HorizontalBreak />

		<Section id="pdf-viewer">
			<Heading>Lecture Material (PDF)</Heading>
			<PDF title="Week 8 PDF" src={StaticAssets.Week8Lecture} />
		</Section>

		<HorizontalBreak />

		<Section id="evaluation-methods">
			<Heading>Evaluation Methods</Heading>
			<Text
				>Different evaluation methods help identify usability problems at various stages of development. Expert-based methods like heuristic evaluation are cost-effective, while user-based methods
				provide direct insights into real user behaviour.</Text
			>
			<GridList>
				<GridListItem
					title="Heuristic Evaluation"
					description="A method to identify usability problems using established usability principles (Nielsen, 1994). Experts review the interface against a set of heuristics like visibility, consistency, and error prevention."
				/>
				<GridListItem
					title="Cognitive Walkthrough"
					description="Evaluating task flow based on user goals and system feedback (Wharton et al., 1994). Steps include defining tasks, identifying goals, and analysing whether users can determine correct actions."
				/>
				<GridListItem
					title="Think-Aloud Protocol"
					description="Users verbalise their thoughts while interacting with a system. Provides insights into user decision-making processes and reveals confusion or frustration in real-time."
				/>
				<GridListItem
					title="Contextual Inquiry"
					description="Observing users in their natural environment to gather insights. Combines observation with interview techniques to understand real-world usage patterns."
				/>
			</GridList>
			<Notice
				type="info"
				lead="Nielsen's Heuristics"
				message="Common usability principles include: visibility of system status, match between system and real world, user control, consistency, error prevention, recognition over recall, flexibility, aesthetic design, error recovery, and help documentation."
			/>
		</Section>

		<HorizontalBreak />

		<Section id="usability-metrics">
			<Heading>Usability Metrics</Heading>
			<Text
				>Objective measures help quantify usability and track improvements over time. These metrics provide concrete data to support design decisions and demonstrate the value of usability
				improvements.</Text
			>
			<GridList>
				<GridListItem title="Task Completion Rate" description="Percentage of users who successfully complete a task. Aim for >85% completion rate for critical tasks." />
				<GridListItem title="Error Rate" description="Tracks errors made during interaction. Lower is better - target around 5% or less for well-designed interfaces." />
				<GridListItem title="Time on Task" description="Measures efficiency by recording time needed to complete tasks. Compare against benchmarks to identify bottlenecks." />
				<GridListItem title="System Usability Scale (SUS)" description="A standardised 10-item survey to evaluate usability (Brooke, 1996). Scores above 68 indicate above-average usability." />
				<GridListItem
					title="Net Promoter Score (NPS)"
					description="Measures user loyalty based on likelihood to recommend. Users rate 0-10; scores are calculated as % promoters minus % detractors."
				/>
			</GridList>
			<Notice
				type="info"
				lead="SUS Scoring"
				message="SUS provides a single score from 0-100. Scores above 68 are considered above average. The scale is quick to administer and provides reliable results across different types of interfaces."
			/>
		</Section>

		<HorizontalBreak />

		<Section id="testing-techniques">
			<Heading>Testing Techniques</Heading>
			<Text>Various testing techniques provide different types of insights. Combining quantitative and qualitative methods creates a comprehensive understanding of usability issues.</Text>
			<GridList>
				<GridListItem
					title="A/B Testing"
					description="Comparing two versions of a system to determine which performs better. Provides quantitative data on user preferences and behaviour differences."
				/>
				<GridListItem title="Eye-Tracking Studies" description="Analyse user focus and navigation patterns using specialised equipment. Produces heatmaps showing where users look and for how long." />
				<GridListItem title="Remote Usability Testing" description="Allows users to test systems from their own environment. Increases participant diversity and tests in realistic conditions." />
				<GridListItem title="Controlled Experiments" description="Studies that test usability changes under controlled conditions. Isolates variables to determine cause-and-effect relationships." />
			</GridList>
		</Section>

		<HorizontalBreak />

		<Section id="design-principles">
			<Heading>Design Principles for Usability</Heading>
			<Text>Good usability is built on solid design principles. These guidelines help create interfaces that are intuitive, efficient, and satisfying to use.</Text>
			<GridList>
				<GridListItem title="Consistency in Design" description="Ensures uniformity in navigation and interaction patterns. Users learn faster when similar actions produce similar results." />
				<GridListItem title="Minimizing Cognitive Load" description="Reduces mental effort needed to use a system. Present information progressively and avoid overwhelming users with choices." />
				<GridListItem
					title="Feedback Loops"
					description="Providing users with immediate and clear system feedback. Users should always know what the system is doing and whether their actions succeeded."
				/>
				<GridListItem title="Error Recovery" description="Designing for smooth recovery from errors. Provide clear error messages and easy ways to undo or correct mistakes." />
				<GridListItem title="Progress Indicators" description="Show users their progress in multi-step tasks. Reduces uncertainty and helps users estimate time to completion." />
			</GridList>
			<Notice
				type="warning"
				lead="Design Tip"
				message="Designing clear and actionable error messages is critical. Users should understand what went wrong and how to fix it without technical jargon."
			/>
		</Section>

		<HorizontalBreak />

		<Section id="advanced-methods">
			<Heading>Advanced Methods & Future Trends</Heading>
			<Text>Modern usability testing incorporates advanced techniques and emerging technologies to gather deeper insights and test with diverse user groups.</Text>
			<GridList>
				<GridListItem title="Persona Development" description="Creating user personas to guide design decisions. Personas represent key user groups and their goals, frustrations, and behaviours." />
				<GridListItem title="User Journey Mapping" description="Visual representation of user interactions over time. Maps the complete experience from initial contact through task completion." />
				<GridListItem title="Accessibility Testing" description="Ensures usability for users with disabilities. Follow WCAG standards to create inclusive designs." />
				<GridListItem
					title="Mobile & Responsive Design"
					description="Special considerations for usability on mobile devices. Adapts layout and functionality to different screen sizes and touch interactions."
				/>
				<GridListItem title="Cross-Cultural Usability" description="Designing for a global and diverse audience. Consider language, cultural conventions, and regional preferences." />
				<GridListItem title="AI & VR in Testing" description="Exploring innovations like AI-powered analytics and VR environments for immersive usability testing." />
			</GridList>
		</Section>

		<HorizontalBreak />

		<Section id="labs">
			<Heading>Labs & Practical Exercises</Heading>
			<Text>Apply usability testing concepts through hands-on activities evaluating real forms and interfaces. Work through planning, conducting, and analysing usability tests.</Text>
			<PDF title="Week 8 Lab" src={StaticAssets.Week8Lab} />
			<GridList>
				<GridListItem title="Section 1: Introduction" description="Brainstorm usability factors, analyse well-designed vs poorly-designed forms, and review Nielsen's 10 Usability Heuristics." />
				<GridListItem title="Section 2: Planning" description="Define test objectives, recruit 3-5 participants, develop realistic tasks, and consider ethical requirements like informed consent." />
				<GridListItem
					title="Section 3: Conducting Tests"
					description="Practise think-aloud protocol facilitation, record observations, task completion times, and errors. Use NNGroup templates for data collection."
				/>
				<GridListItem
					title="Section 4: Analysis"
					description="Synthesise observations, identify recurring issues, rate severity (low/medium/high), and generate concrete recommendations for redesign."
				/>
			</GridList>
		</Section>

		<HorizontalBreak />

		<Section id="resources">
			<Heading>Tools & Further Reading</Heading>
			<HorizontalList>
				<HorizontalListItem
					title="VLE Page"
					description="Course management and resources."
					link_url="https://learn.gold.ac.uk/course/section.php?id=569331"
					logo_url={StaticAssets.MoodleLogo}
				/></HorizontalList
			>
		</Section>
	</PageContent>
</Page>
