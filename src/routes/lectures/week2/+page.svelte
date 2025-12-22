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
	let lectureSrc = StaticAssets.Week2Lecture;
	let labSrc = StaticAssets.Week2Lab;
	let labAnswersSrc = StaticAssets.Week2LabAnswers;
	let moodleLogo = StaticAssets.MoodleLogo;
	let pdfLogo = StaticAssets.PDFLogo;
	let digitaloceanLogo = StaticAssets.DigitalOceanLogo;
	let pragprogLogo = StaticAssets.PragProgLogo;
</script>

<svelte:head>
	<title>Lecture 2: Module Coupling and Cohesion</title>
	<meta
		name="description"
		content="Lecture 2 explores Module Coupling and Cohesion in Software Design, covering different types of coupling and cohesion, and best practices for building better software."
	/>
	<meta name="keywords" content="Module Coupling, Cohesion, Software Design, Content Coupling, Data Coupling, Functional Cohesion, Design Patterns, Lecture 2" />
	<meta name="author" content="Samuel" />
	<meta name="language" content="en-UK" />
</svelte:head>

<Page>
	<PageNav title="Lecture 2: Module Coupling and Cohesion">
		<PageNavLink href="#overview" label="Overview" />
		<PageNavLink href="#pdf-viewer" label="Lecture PDF" />
		<PageNavLink href="#coupling-types" label="Types of Coupling" />
		<PageNavLink href="#cohesion-types" label="Types of Cohesion" />
		<PageNavLink href="#design-principles" label="Design Principles" />
		<PageNavLink href="#labs" label="Labs" />
		<PageNavLink href="#resources" label="Resources" />
	</PageNav>

	<PageContent>
		<Section id="overview">
			<Heading>Overview</Heading>
			<Text>
				This lecture provides a comprehensive guide to Module Coupling and Cohesion in Software Design. Understanding these concepts is fundamental to building maintainable, reusable, and testable
				software systems. We'll explore different types of coupling (from worst to best) and cohesion levels, along with practical examples.
			</Text>
			<Notice type="info" lead="Key Principle" message="Aim for low coupling (ideally Data Coupling) and high cohesion (ideally Functional Cohesion) in your software modules." />
		</Section>

		<HorizontalBreak />

		<Section id="pdf-viewer">
			<Heading>Lecture Material (PDF)</Heading>
			<PDF title="Week 2 PDF" src={lectureSrc} />
		</Section>

		<HorizontalBreak />

		<Section id="coupling-types">
			<Heading>Types of Coupling (Worst to Best)</Heading>
			<Text>Coupling refers to the degree of interdependence between software modules. Lower coupling is generally better as it makes modules more independent and easier to maintain.</Text>
			<GridList>
				<GridListItem
					title="Content Coupling (Worst)"
					description="One module directly modifies data or instructions within another module. This should be avoided as it creates tight dependencies and makes code fragile."
				/>
				<GridListItem title="Common Coupling" description="Modules share global data. Like a shared document with everyone's passwords - changes affect all modules. Minimize this approach." />
				<GridListItem
					title="Control Coupling"
					description="One module passes flags or parameters to control another's flow. Use with caution - modules should have autonomy to make their own decisions."
				/>
				<GridListItem
					title="Stamp Coupling"
					description="Modules share a composite data structure but only use parts of it. Sending entire User objects when only purchase history is needed creates unnecessary dependencies."
				/>
				<GridListItem
					title="Data Coupling (Best)"
					description="Modules communicate only through parameters, passing only necessary data. Like a sword swing sending damage value to dragon health - clean and minimal dependencies."
				/>
			</GridList>
		</Section>

		<HorizontalBreak />

		<Section id="cohesion-types">
			<Heading>Types of Cohesion (Worst to Best)</Heading>
			<Text>Cohesion measures how closely the elements within a module belong together. Higher cohesion means a module has a clear, focused purpose.</Text>
			<GridList>
				<GridListItem
					title="Coincidental (Worst)"
					description="Elements have no clear relationship. Like a toolbox with a hammer, toothbrush, spoon, lightbulb, and sock - random items thrown together."
				/>
				<GridListItem
					title="Logical Cohesion"
					description="Elements perform similar activities but are grouped arbitrarily. Utility modules with string manipulation, date formatting, and math operations."
				/>
				<GridListItem
					title="Temporal Cohesion"
					description="Elements grouped by when they're processed. Like a morning routine - brushing teeth, showering, dressing - related by timing, not function."
				/>
				<GridListItem title="Procedural Cohesion" description="Elements grouped by execution order. Like following a recipe - steps are sequential but may use different tools and techniques." />
				<GridListItem title="Communicational Cohesion" description="Elements operate on the same data. Like different tradespeople working on the same house - different tasks, shared goal." />
				<GridListItem
					title="Functional Cohesion (Best)"
					description="All elements contribute to a single, well-defined task. Like an orchestra where every musician contributes to performing one piece of music."
				/>
			</GridList>
			<Notice
				type="info"
				lead="Example"
				message="A CircleDrawer module with draw function, color options, and fill function demonstrates functional cohesion - everything works together to draw circles."
			/>
		</Section>

		<HorizontalBreak />

		<Section id="design-principles">
			<Heading>Design Principles & Benefits</Heading>
			<Text>Understanding coupling and cohesion leads to better software design through several key principles and measurable benefits.</Text>
			<GridList>
				<GridListItem
					title="Modularization"
					description="Breaking down systems into smaller, independent modules. Separate modules for calculations and display improve organization and reusability."
				/>
				<GridListItem
					title="Abstraction"
					description="Hiding complex implementation details behind simple interfaces. Users call get_file_contents() without worrying about file handling internals."
				/>
				<GridListItem title="Encapsulation" description="Bundling data and methods within a class. A Dog class with name and bark() method keeps related functionality together." />
				<GridListItem title="Information Hiding" description="Restricting access to internal details. Private variables like __balance in BankAccount prevent unauthorized direct access." />
				<GridListItem
					title="Interface Design"
					description="Creating clear and consistent ways to interact. Functions with clear parameters like calculate_area(length, width) are easy to understand and use."
				/>
				<GridListItem title="Design Patterns" description="Proven solutions to common problems. Factory pattern for creating different shapes provides flexibility and maintainability." />
			</GridList>
			<Notice type="info" lead="Why It Matters" message="Good coupling and cohesion lead to increased maintainability, improved reusability, enhanced testability, and reduced complexity." />
		</Section>

		<HorizontalBreak />

		<Section id="labs">
			<Heading>Labs & Practical Exercises</Heading>
			<Text>Apply your knowledge of coupling and cohesion through hands-on lab exercises. These labs will help you identify and improve module design in real code.</Text>
			<PDF title="Week 2 Lab" src={labSrc} />
			<HorizontalList>
				<HorizontalListItem title="Lab Answers" description="Check your solutions and compare with provided answers." link_url={labAnswersSrc} logo_url={moodleLogo} />
			</HorizontalList>
		</Section>

		<HorizontalBreak />

		<Section id="resources">
			<Heading>Tools & Further Reading</Heading>
			<HorizontalList>
				<HorizontalListItem title="VLE Page" description="Course management and resources." link_url="https://learn.gold.ac.uk/course/section.php?id=569324" logo_url={moodleLogo} />
				<HorizontalListItem
					title="SOLID Design Principles Explained"
					description="Comprehensive article on SOLID principles in OOP."
					link_url="https://www.digitalocean.com/community/conceptual-articles/s-o-l-i-d-the-first-five-principles-of-object-oriented-design"
					logo_url={digitaloceanLogo}
				/>
				<HorizontalListItem
					title="Software Construction"
					description="In-depth article on software construction principles."
					link_url="https://media.pragprog.com/articles/may_04_oo1.pdf"
					logo_url={pragprogLogo}
				/>
				<HorizontalListItem
					title="Principles of Package Design"
					description="Insightful read on package design principles."
					link_url="https://medium.com/@mglover/principles-of-package-design-19cdb18ea35d"
					logo_url="https://miro.medium.com/v2/5d8de952517e8160e40ef9841c781cdc14a5db313057fa3c3de41c6f5b494b19"
				/>
			</HorizontalList>
		</Section>
	</PageContent>
</Page>
