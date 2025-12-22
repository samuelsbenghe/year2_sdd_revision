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
	import { StaticAssets } from '$lib';
	// Static Variables
	let lectureSrc = StaticAssets.Week1Lecture;
	let MoodleLogo = StaticAssets.MoodleLogo;
	let PDFLogo = StaticAssets.PDFLogo;
</script>

<svelte:head>
	<title>Lecture 1: Introduction to Software Development and Design</title>
	<meta name="description" content="Lecture 1 covers the fundamentals of Software Development and Design, including Coupling, Cohesion, DRY principles, SOLID principles, and design patterns." />
	<meta name="keywords" content="Software Development, Software Design, Coupling, Cohesion, DRY Principles, SOLID Principles, Design Patterns, Lecture 1" />
	<meta name="author" content="Samuel" />
	<meta name="language" content="en-UK" />
</svelte:head>

<Page>
	<PageNav title="Lecture 1: Introduction to Software Development and Design">
		<PageNavLink href="#overview" label="Overview" />
		<PageNavLink href="#pdf-viewer" label="Lecture PDF" />
		<PageNavLink href="#design-fundamentals" label="Design Fundamentals" />
		<PageNavLink href="#core-principles" label="Core Principles" />
		<PageNavLink href="#solid-principles" label="SOLID Principles" />
		<PageNavLink href="#dry-principle" label="DRY Principle" />
		<PageNavLink href="#architecture" label="Architecture" />
		<PageNavLink href="#resources" label="Resources" />
	</PageNav>

	<PageContent>
		<Section id="overview">
			<Heading>Overview</Heading>
			<Text>
				This lecture introduces the fundamentals of Software Development and Design, covering Coupling, Cohesion, DRY principles, SOLID principles, and various design patterns. Software design is the
				critical link between requirements and implementation, helping manage complexity and ensure structure in both small and large projects.
			</Text>
			<Notice type="info" lead="Exam Tip" message="Focus on understanding the principles of Coupling and Cohesion, as well as the DRY principle and all five SOLID principles." />
		</Section>

		<HorizontalBreak />

		<Section id="pdf-viewer">
			<Heading>Lecture Material (PDF)</Heading>
			<PDF title="Week 1 PDF" src={lectureSrc} />
		</Section>

		<HorizontalBreak />

		<Section id="design-fundamentals">
			<Heading>Design Fundamentals</Heading>
			<Text>Software design faces several inherent challenges that make it a complex and iterative process. Understanding these challenges helps you approach design problems more effectively.</Text>
			<GridList>
				<GridListItem title="Wicked Problems" description="Design problems are often not fully understood until partially solved. Solutions emerge through exploration and experimentation." />
				<GridListItem title="Sloppy Process" description="Design involves trial and error. The final tidy result comes through mistakes and iterations, not perfection on the first attempt." />
				<GridListItem title="Nondeterministic" description="Multiple valid solutions can exist for the same design problem. There's rarely one 'correct' answer." />
				<GridListItem title="Trade-offs" description="Designers must balance competing objectives like performance, simplicity, extensibility, and maintainability based on system requirements." />
				<GridListItem title="Emergent Practice" description="Good design evolves over time through reviews, discussions, and real-world testing. Flexibility to adapt is crucial." />
				<GridListItem
					title="Managing Complexity"
					description="The primary technical imperative. Essential complexity stems from real-world requirements; accidental complexity arises from poor design."
				/>
			</GridList>
			<Notice type="info" lead="Key Insight" message="Restricting possibilities helps simplify design and avoid overcomplication. Breaking problems into manageable parts reduces complexity." />
		</Section>

		<HorizontalBreak />

		<Section id="core-principles">
			<Heading>Core Principles: Coupling & Cohesion</Heading>
			<Text>Two fundamental concepts that determine the quality of your software design. These principles guide how you structure modules and their relationships.</Text>
			<GridList>
				<GridListItem
					title="Coupling"
					description="The degree of interdependence between software modules. LOW coupling is desirable for flexibility and easier maintenance. Modules should have minimal dependencies on each other."
				/>
				<GridListItem
					title="Cohesion"
					description="The degree to which elements within a module belong together. HIGH cohesion means a module performs a single task or closely related tasks, making it easier to understand and maintain."
				/>
				<GridListItem title="Loose Coupling" description="Keep interdependencies between components minimal. Use dependency injection and abstraction to reduce tight coupling between modules." />
				<GridListItem title="Design Heuristics" description="Prioritize minimal complexity, ease of maintenance, and think about future developers who will work with your code." />
			</GridList>
			<Notice
				type="warning"
				lead="Remember"
				message="High coupling makes systems rigid and fragile. Low cohesion makes modules confusing and hard to maintain. Aim for LOW coupling and HIGH cohesion."
			/>
		</Section>

		<HorizontalBreak />

		<Section id="solid-principles">
			<Heading>SOLID Principles</Heading>
			<Text>A set of five design principles for object-oriented programming that create more maintainable, flexible, and scalable software systems.</Text>
			<GridList>
				<GridListItem
					title="Single Responsibility Principle (SRP)"
					description="A class or function should have only one reason to change. It should have only one responsibility, promoting high cohesion and making code easier to maintain, test, and understand."
				/>
				<GridListItem
					title="Open/Closed Principle (OCP)"
					description="Software entities should be open for extension but closed for modification. Add new features without modifying existing code, reducing the risk of introducing bugs."
				/>
				<GridListItem
					title="Liskov Substitution Principle (LSP)"
					description="Subclasses should be able to replace their parent classes without affecting system behavior. Derived classes must extend base classes properly without altering expected functionality."
				/>
				<GridListItem
					title="Interface Segregation Principle (ISP)"
					description="Clients should not be forced to depend on interfaces they don't use. Break large interfaces into smaller, specific ones to promote high cohesion."
				/>
				<GridListItem
					title="Dependency Inversion Principle (DIP)"
					description="High-level modules should not depend on low-level modules. Both should depend on abstractions. This reduces coupling between modules and makes the system more flexible."
				/>
			</GridList>
		</Section>

		<HorizontalBreak />

		<Section id="dry-principle">
			<Heading>DRY Principle (Don't Repeat Yourself)</Heading>
			<Text>Every piece of knowledge or logic must have a single, unambiguous representation in the system. Avoid repetition in code, data, logic, and documentation.</Text>
			<GridList>
				<GridListItem title="Easier Maintenance" description="Changing one instance of repeated logic affects all occurrences, reducing the chance for bugs and inconsistencies." />
				<GridListItem title="Code Readability" description="More concise and understandable code because there's no clutter of repeated logic throughout your codebase." />
				<GridListItem title="Reduced Complexity" description="Less code to maintain means fewer places where bugs can hide and easier comprehension of the system." />
				<GridListItem
					title="Implementation Strategies"
					description="Refactor repeated logic into functions or classes. Use variables and constants instead of hard-coded values. Extract common patterns into reusable modules."
				/>
			</GridList>
		</Section>

		<HorizontalBreak />

		<Section id="architecture">
			<Heading>Software Architecture</Heading>
			<Text>Understanding different architectural patterns and layers helps you structure applications effectively for your specific requirements.</Text>
			<GridList>
				<GridListItem
					title="Typical Application Layers"
					description="Presentation Layer (UI), Business Logic Layer (core logic), Data Access Layer (database interaction), and Database Layer (persistent storage)."
				/>
				<GridListItem
					title="Monolithic Architecture"
					description="Entire application built as a single unit with tightly coupled layers. Simpler to develop initially but harder to scale and maintain as it grows."
				/>
				<GridListItem
					title="Microservices Architecture"
					description="Application divided into small, independent services. More complex initially but easier to scale and maintain specific components independently."
				/>
				<GridListItem
					title="3-Tier Architecture"
					description="Common pattern you'll likely use: UI layer (HTML/React), Application layer (Node.js), Database layer (SQL). Clear separation of concerns."
				/>
				<GridListItem title="Design Levels" description="System Level (organizing into subsystems), Class Level (dividing into classes), and Routine Level (designing individual methods)." />
				<GridListItem title="Good Software Characteristics" description="Reusability, extensibility, high fan-in (maximizing use of utility classes), and portability across platforms." />
			</GridList>
		</Section>

		<HorizontalBreak />

		<Section id="resources">
			<Heading>Tools & Further Reading</Heading>
			<Text>Additional resources to deepen your understanding of software design principles and best practices.</Text>
			<HorizontalList>
				<HorizontalListItem title="VLE Page" description="Course management and resources." link_url="https://learn.gold.ac.uk/course/section.php?id=569323" logo_url={MoodleLogo} />
				<HorizontalListItem
					title="Design Principles and Design Patterns"
					description="Additional reading on software design."
					link_url="https://staff.cs.utu.fi/~jounsmed/doos_06/material/DesignPrinciplesAndPatterns.pdf"
					logo_url={PDFLogo}
				/>
				<HorizontalListItem
					title="Coupling and Cohesion Metrics"
					description="Research paper on measuring coupling and cohesion."
					link_url="https://dl.acm.org/doi/10.1145/3172871.3172878"
					logo_url={PDFLogo}
				/>
			</HorizontalList>
			<Notice
				type="warning"
				lead="Important Lesson"
				message="Good coding practice requires thinking about solutions before jumping into code. Use whiteboarding, flow charts, and UML diagrams. Remember: others may work on your codebase, and your code might power critical systems."
			/>
		</Section>
	</PageContent>
</Page>
