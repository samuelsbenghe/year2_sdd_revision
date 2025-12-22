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
	// Static Variables
	import { StaticAssets } from '$lib';
	import PDF from '$lib/components/PDF.svelte';
</script>

<svelte:head>
	<title>Lecture 5: User Testing</title>
	<meta name="description" content="Lecture 5 explores User Testing fundamentals, covering usability testing methods, Nielsen's heuristics, think-aloud protocols, and CHI research foundations." />
	<meta name="keywords" content="User Testing, Usability Testing, Nielsen Heuristics, Think Aloud Protocol, A/B Testing, Cognitive Walkthrough, CHI, UX, Lecture 5" />
	<meta name="author" content="Samuel" />
	<meta name="language" content="en-UK" />
</svelte:head>

<Page>
	<PageNav title="Lecture 5: User Testing">
		<PageNavLink href="#overview" label="Overview" />
		<PageNavLink href="#chi-pioneers" label="CHI Pioneers" />
		<PageNavLink href="#testing-methods" label="Testing Methods" />
		<PageNavLink href="#heuristics" label="Nielsen's Heuristics" />
		<PageNavLink href="#usability-metrics" label="Usability Metrics" />
		<PageNavLink href="#advanced-topics" label="Advanced Topics" />
		<PageNavLink href="#resources" label="Resources" />
	</PageNav>

	<PageContent>
		<Section id="overview">
			<Heading>Overview</Heading>
			<Text>
				This lecture provides a comprehensive introduction to User Testing, a crucial process where actual users interact with a system or product to identify usability issues and pain points. We'll
				explore the foundations laid by CHI pioneers like Jakob Nielsen, Donald Norman, and Ben Shneiderman, and examine various testing methodologies used in modern software development.
			</Text>
			<Notice
				type="info"
				lead="Nielsen's Law"
				message="You only need to test with 5 users to uncover 85% of usability issues. Early usability testing before the design is finalized helps avoid costly changes later."
			/>
		</Section>

		<HorizontalBreak />

		<Section id="pdf-viewer">
			<Heading>Lecture Material (PDF)</Heading>
			<PDF title="Week 5 PDF" src={StaticAssets.Week5Lecture} />
		</Section>

		<HorizontalBreak />

		<Section id="chi-pioneers">
			<Heading>CHI Pioneers & Foundations</Heading>
			<Text>
				The field of Human-Computer Interaction (CHI) was shaped by influential researchers who established the principles we use today. Understanding their contributions provides context for modern
				user testing practices.
			</Text>
			<GridList>
				<GridListItem
					title="Jakob Nielsen"
					description="Advocated for testing with small groups and popularized the 'think aloud' method. Proposed 10 usability heuristics used alongside user testing to identify design flaws."
				/>
				<GridListItem
					title="Donald Norman"
					description="Introduced the concept of affordances - perceived properties of objects that suggest how they should be used. Stressed the importance of clear, immediate feedback to users."
				/>
				<GridListItem
					title="Ben Shneiderman"
					description="Developed the Eight Golden Rules of interface design including 'Strive for consistency' and 'Seek universal usability'. Advocated for direct manipulation interfaces."
				/>
				<GridListItem
					title="Early CHI Research"
					description="Laid the foundation for modern usability engineering through rigorous user testing. This is empirical, largely quantitative, and what we call a 'discount' technique."
				/>
			</GridList>
			<Notice
				type="info"
				lead="Cost of Poor Usability"
				message="Nielsen's studies showed that the cost of fixing a usability issue post-launch can be up to 100 times more than if it were caught during testing."
			/>
		</Section>

		<HorizontalBreak />

		<Section id="testing-methods">
			<Heading>User Testing Methods</Heading>
			<Text>Various testing methods provide different insights into usability. Combining these approaches creates a comprehensive understanding of how users interact with your product.</Text>
			<GridList>
				<GridListItem
					title="Think Aloud Protocol"
					description="Users verbalize their thoughts while using the system to identify usability challenges. Reveals the user's mental model and decision-making process in real-time."
				/>
				<GridListItem
					title="Task-Based Testing"
					description="Testing based on real-world tasks that users would perform to simulate actual usage scenarios. Identifies pain points in specific user journeys."
				/>
				<GridListItem title="A/B Testing" description="Two versions of a design are compared to see which performs better with real users. Provides quantitative data on design effectiveness." />
				<GridListItem
					title="Cognitive Walkthrough"
					description="Stepping through the interface as a user would, predicting usability challenges before testing. Useful for early-stage evaluation without user involvement."
				/>
				<GridListItem
					title="Paper Prototyping"
					description="Using paper prototypes for testing designs cheaply and effectively before digital implementation. Bill Buxton has written extensively on this topic."
				/>
				<GridListItem
					title="Remote User Testing"
					description="With remote tools, user testing can be conducted anywhere, providing a broader and more diverse set of feedback from geographically distributed users."
				/>
			</GridList>
		</Section>

		<HorizontalBreak />

		<Section id="heuristics">
			<Heading>Nielsen's 10 Usability Heuristics</Heading>
			<Text>Jakob Nielsen proposed 10 usability heuristics that can be used alongside user testing to identify design flaws. These principles guide both evaluation and design decisions.</Text>
			<GridList>
				<GridListItem title="Visibility of System Status" description="The system should always keep users informed about what is going on through appropriate feedback within reasonable time." />
				<GridListItem title="Match System & Real World" description="The system should speak the users' language with familiar words, phrases, and concepts rather than system-oriented terms." />
				<GridListItem title="User Control & Freedom" description="Users often choose system functions by mistake and need a clearly marked 'emergency exit' to leave the unwanted state." />
				<GridListItem title="Consistency & Standards" description="Users should not have to wonder whether different words, situations, or actions mean the same thing. Follow platform conventions." />
				<GridListItem title="Error Prevention" description="Testing can identify areas where users are prone to making errors. Good design prevents problems from occurring in the first place." />
				<GridListItem
					title="Recognition Over Recall"
					description="Minimize the user's memory load by making objects, actions, and options visible. Instructions should be visible or easily retrievable."
				/>
			</GridList>
			<Notice
				type="info"
				lead="Slips vs Mistakes"
				message="Nielsen distinguishes between slips (unconscious errors) and mistakes (conscious errors). Understanding the difference helps design better error prevention. See: nngroup.com/videos/slips-vs-mistakes/"
			/>
		</Section>

		<HorizontalBreak />

		<Section id="usability-metrics">
			<Heading>Usability Metrics & Measurement</Heading>
			<Text>Early CHI research emphasized the importance of measuring usability with quantifiable metrics. These help evaluate the design's effectiveness objectively.</Text>
			<GridList>
				<GridListItem title="Task Completion Rate" description="The percentage of users who successfully complete a given task. A fundamental metric for measuring usability success." />
				<GridListItem title="Time-on-Task" description="How long it takes users to complete specific tasks. Shorter times generally indicate better usability, though context matters." />
				<GridListItem title="Error Rate" description="The number of errors users make when completing tasks. Helps identify confusing or problematic interface elements." />
				<GridListItem title="Learnability" description="How quickly a user can become proficient in using a new system. Nielsen stressed this as a key usability attribute." />
				<GridListItem title="Memorability" description="When users return to the system after a period of not using it, how easily can they remember how to use it?" />
				<GridListItem title="User Satisfaction" description="Subjective measures of how pleasant the interface is to use. Surveys provide direct user feedback on specific aspects." />
			</GridList>
		</Section>

		<HorizontalBreak />

		<Section id="advanced-topics">
			<Heading>Advanced Testing Considerations</Heading>
			<Text>Beyond basic usability testing, several advanced topics ensure comprehensive coverage of user experience across different contexts and user groups.</Text>
			<GridList>
				<GridListItem
					title="User Personas"
					description="Creating user personas guides testing by representing real-world user groups and ensuring their needs are met throughout the design process."
				/>
				<GridListItem
					title="Mental Models"
					description="Don Norman's work showed that users build mental models of how systems should work. Testing helps ensure the design aligns with those models."
				/>
				<GridListItem title="Affordances" description="The perceived properties of an object that suggest how it should be used. Testing ensures these are clear and intuitive to users." />
				<GridListItem title="Cultural Considerations" description="Testing with users from different cultural backgrounds can reveal usability issues not apparent with a homogenous testing group." />
				<GridListItem title="Accessibility Testing" description="User testing is crucial for identifying accessibility issues and ensuring products are usable by people with varying abilities." />
				<GridListItem title="Real-World Contexts" description="Testing in real-world environments through field studies can uncover usability issues that controlled lab testing might miss." />
				<GridListItem
					title="Mobile Usability"
					description="Mobile devices introduced new usability challenges. CHI researchers were among the first to highlight the importance of mobile user testing."
				/>
				<GridListItem
					title="Multimodal Interfaces"
					description="CHI research explores usability of interfaces where users interact via touch, voice, and other inputs. Fitts' Law provides empirical evidence for these mechanisms."
				/>
			</GridList>
			<Notice
				type="info"
				lead="Iterative Testing"
				message="Donald Norman stressed the need for iterative testing with regular user feedback loops to refine products based on real-world interactions. Mix and match techniques to get good value."
			/>
		</Section>

		<HorizontalBreak />

		<Section id="resources">
			<Heading>Tools & Further Reading</Heading>
			<HorizontalList>
				<HorizontalListItem title="VLE Page" description="Course management and resources." link_url="https://learn.gold.ac.uk/course/section.php?id=569327" logo_url={StaticAssets.MoodleLogo} />
			</HorizontalList>
		</Section>
	</PageContent>
</Page>
