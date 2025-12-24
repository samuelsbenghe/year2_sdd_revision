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
	<title>Lecture 9: Comprehensive Revision</title>
	<meta
		name="description"
		content="Lecture 9 provides a comprehensive revision of software design principles including SOLID, DRY, anti-patterns, refactoring, Unix fundamentals, and code quality tools."
	/>
	<meta name="keywords" content="SOLID Principles, DRY, Anti-Patterns, Refactoring, Unix, Code Quality, ESLint, Prettier, Pylint, Black, Lecture 9" />
	<meta name="author" content="Samuel" />
	<meta name="language" content="en-UK" />
</svelte:head>

<Page>
	<PageNav title="Lecture 9: Comprehensive Revision">
		<PageNavLink href="#overview" label="Overview" />
		<PageNavLink href="#pdf-viewer-1" label="Lecture PDF 1" />
		<PageNavLink href="#pdf-viewer-2" label="Lecture PDF 2" />
		<PageNavLink href="#solid-principles" label="SOLID Principles" />
		<PageNavLink href="#dry-modular" label="DRY & Modularization" />
		<PageNavLink href="#anti-patterns" label="Anti-Patterns" />
		<PageNavLink href="#refactoring" label="Refactoring" />
		<PageNavLink href="#unix" label="Unix Fundamentals" />
		<PageNavLink href="#code-quality" label="Code Quality Tools" />
		<PageNavLink href="#labs" label="Labs" />
		<PageNavLink href="#resources" label="Resources" />
	</PageNav>

	<PageContent>
		<Section id="overview">
			<Heading>Overview</Heading>
			<Text>
				This comprehensive revision lecture consolidates key software design concepts covered throughout the module. We revisit SOLID principles with deeper examples, explore common anti-patterns to
				avoid, learn refactoring techniques, and get hands-on with Unix command-line tools and code quality utilities. This is essential preparation for exam revision.
			</Text>
			<Notice
				type="info"
				lead="Exam Focus"
				message="Software design ensures maintainability and scalability. Key goals include simplicity, clarity, and adaptability. 70% of breaches result from poor design (OWASP, 2023)."
			/>
		</Section>

		<HorizontalBreak />

		<Section id="pdf-viewer-1">
			<Heading>Lecture Material - Part 1 (PDF)</Heading>
			<PDF title="Week 9 PDF - Part 1" src={StaticAssets.Week9Lecture1} />
		</Section>

		<HorizontalBreak />

		<Section id="pdf-viewer-2">
			<Heading>Lecture Material - Part 2 (PDF)</Heading>
			<PDF title="Week 9 PDF - Part 2" src={StaticAssets.Week9Lecture2} />
		</Section>

		<HorizontalBreak />

		<Section id="solid-principles">
			<Heading>SOLID Principles Revisited</Heading>
			<Text>The SOLID principles are core design principles for maintainable, flexible code. Understanding these deeply with practical analogies helps apply them correctly in real projects.</Text>
			<GridList>
				<GridListItem
					title="Single Responsibility (SRP)"
					description="Each class or module has one responsibility and one reason to change. Analogy: A chef doesn't also clean the dining area. Keep Logger and OrderProcessor separate."
				/>
				<GridListItem
					title="Open-Closed (OCP)"
					description="Modules should be extendable without modification. Analogy: Adding a new feature to a phone without altering its existing hardware. Add new shapes without changing existing code."
				/>
				<GridListItem
					title="Liskov Substitution (LSP)"
					description="Derived classes should work as substitutes for base classes without altering behaviour. Analogy: Electric cars can replace fuel cars in a garage - both are vehicles."
				/>
				<GridListItem
					title="Interface Segregation (ISP)"
					description="Avoid forcing classes to implement unused interfaces. Break large interfaces into smaller, specific ones. Separate Printable and Scannable for devices."
				/>
				<GridListItem
					title="Dependency Inversion (DIP)"
					description="High-level modules depend on abstractions, not details. Analogy: Using an adapter to plug devices into different outlets. PaymentService relies on PaymentProcessor interface."
				/>
			</GridList>
			<Notice type="info" lead="Key Principle" message="Design principles guide development to reduce technical debt and ensure robustness and quality in software (Beck, 2003)." />
		</Section>

		<HorizontalBreak />

		<Section id="dry-modular">
			<Heading>DRY & Modularization</Heading>
			<Text>The Don't Repeat Yourself principle and modular design are fundamental to maintainable code. Centralizing logic reduces bugs and improves clarity.</Text>
			<GridList>
				<GridListItem
					title="Don't Repeat Yourself (DRY)"
					description="Avoid redundancy to improve maintainability. 60% of bugs stem from repetitive code (Larman, 2004). Centralize logic in functions or modules."
				/>
				<GridListItem
					title="Applying DRY"
					description="Use templates for repeated structures. Parameterize queries in database code instead of string concatenation. Standardize tools across teams."
				/>
				<GridListItem title="Modularization" description="Break systems into independent, cohesive modules. Example: Separate billing, inventory, and user management into distinct modules." />
				<GridListItem title="Encapsulation" description="Restrict access to internal module details using private methods in classes. Hide implementation complexity from consumers." />
				<GridListItem title="Abstraction" description="Simplify complex details behind simple interfaces. A print() function abstracts all the printer driver complexity." />
			</GridList>
		</Section>

		<HorizontalBreak />

		<Section id="anti-patterns">
			<Heading>Anti-Patterns to Avoid</Heading>
			<Text>Anti-patterns are recurring solutions that often cause more problems than they solve. Recognizing these helps you avoid common pitfalls in software design.</Text>
			<GridList>
				<GridListItem
					title="God Object"
					description="A class that knows too much or does too much. It violates SRP and becomes a maintenance nightmare. Solution: Refactor into smaller, focused classes."
				/>
				<GridListItem title="Spaghetti Code" description="Unstructured and difficult-to-read code with tangled control flows. Solution: Modularize code and use clear, structured control flows." />
				<GridListItem title="Copy-Paste Programming" description="Duplicating code instead of abstracting common functionality. Violates DRY and makes maintenance difficult across copies." />
				<GridListItem title="Magic Numbers" description="Using unexplained numeric literals in code. Solution: Use named constants that explain what the number represents." />
			</GridList>
			<Notice type="warning" lead="Resource" message="For more anti-patterns, see: bariscimen.medium.com/10-most-common-anti-patterns-every-software-engineer-must-avoid" />
		</Section>

		<HorizontalBreak />

		<Section id="refactoring">
			<Heading>Refactoring Techniques</Heading>
			<Text>Refactoring improves the structure of code without changing its behaviour. 70% of developers refactor to reduce bugs (Fowler, 2018).</Text>
			<GridList>
				<GridListItem title="Rename Variables" description="Use clear, descriptive names that explain purpose. Good names eliminate the need for comments explaining what something does." />
				<GridListItem title="Extract Methods" description="Remove duplication by extracting repeated code into reusable functions. Makes code more readable and testable." />
				<GridListItem
					title="Replace Conditionals with Polymorphism"
					description="Instead of switch statements for types, define a class for each type (rectangle, circle) with embedded logic. Easier to maintain."
				/>
				<GridListItem
					title="Parameterize Queries"
					description="Replace string concatenation with parameterized queries. Instead of f-strings with user input, use ? placeholders for safety and reuse."
				/>
			</GridList>
		</Section>

		<HorizontalBreak />

		<Section id="unix">
			<Heading>Unix Fundamentals</Heading>
			<Text>Command-line skills are essential for working on remote servers. These commands help you navigate, manipulate files, and manage processes without a GUI.</Text>
			<GridList>
				<GridListItem title="Navigation Commands" description="ls (list files), cd (change directory), pwd (print working directory), mkdir (create directory). Use ls -l for detailed info." />
				<GridListItem title="File Operations" description="cp (copy), mv (move/rename), rm (remove - be careful with rm -rf!), nano (text editor). Create files with nano filename.txt." />
				<GridListItem title="Text Processing" description="grep (search patterns), awk (extract data columns), sed (text transformations). Use pipes (|) to chain commands together." />
				<GridListItem title="Finding Files" description="find . -name '*.js' -mtime -7 locates all .js files modified in the last week. Crucial when you don't have version control." />
				<GridListItem title="Process Management" description="ps (list processes), kill (terminate by ID). Use ps aux | grep 'process_name' to find specific process IDs." />
				<GridListItem title="I/O Redirection" description="Use | to pipe output between commands. cat file1 file2 | grep 'error' | wc -l counts error occurrences across files." />
			</GridList>
		</Section>

		<HorizontalBreak />

		<Section id="code-quality">
			<Heading>Code Quality Tools</Heading>
			<Text>Automated formatting and linting tools ensure consistent, high-quality code. They catch errors early and enforce coding standards across teams.</Text>
			<GridList>
				<GridListItem
					title="Prettier (JavaScript)"
					description="Automatic code formatter. Install: npm install -g prettier. Format: prettier --write my_code.js. Web alternative: prettier.io/playground"
				/>
				<GridListItem title="Black (Python)" description="Opinionated Python formatter. Install: pip install black. Format: black my_code.py. Ensures consistent style automatically." />
				<GridListItem title="ESLint (JavaScript)" description="JavaScript linter following ECMAScript standards. Install: npm install -g eslint. Lint: eslint my_code.js. Identifies code issues." />
				<GridListItem title="Pylint (Python)" description="Python linter following PEP 8 guidelines. Install: pip install pylint. Lint: pylint my_code.py. Rates code quality with a score." />
			</GridList>
			<Notice
				type="info"
				lead="Standards"
				message="JavaScript follows ECMAScript standard. Python follows PEP 8 (style) and PEP 20 (The Zen of Python). These define best practices for each language."
			/>
		</Section>

		<HorizontalBreak />

		<Section id="labs">
			<Heading>Labs & Practical Exercises</Heading>
			<Text>Work through hands-on Unix command-line exercises and code quality tool usage. SSH into remote servers and practise essential developer skills.</Text>
			<PDF title="Week 9 Lab" src={StaticAssets.Week9Lab} />
			<GridList>
				<GridListItem
					title="Section 1: Unix Fundamentals"
					description="SSH into Igor, create files with nano, practise ls/cd/pwd/mkdir/rm/cp/mv commands, I/O redirection, piping, and finding files."
				/>
				<GridListItem title="Section 2: Code Optimization" description="Use Prettier and Black to format JavaScript and Python code. Observe how automatic formatting improves readability." />
				<GridListItem title="Section 3: Linting" description="Use ESLint and Pylint to analyse code. Identify issues they highlight and understand how to fix them according to language standards." />
			</GridList>
		</Section>

		<HorizontalBreak />

		<Section id="resources">
			<Heading>Tools & Further Reading</Heading>
			<HorizontalList>
				<HorizontalListItem title="VLE Page" description="Course management and resources." link_url="https://learn.gold.ac.uk/course/section.php?id=569333" logo_url={StaticAssets.MoodleLogo} />
			</HorizontalList>
		</Section>
	</PageContent>
</Page>
