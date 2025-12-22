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
	<title>Lecture 6: Version Control Systems</title>
	<meta name="description" content="Lecture 6 explores Version Control Systems, covering Git fundamentals, branching strategies, collaboration workflows, and distributed version control." />
	<meta name="keywords" content="Version Control, Git, GitHub, Branching, Merging, DVCS, CVS, SVN, Commits, Repository, Lecture 6" />
	<meta name="author" content="Samuel" />
	<meta name="language" content="en-UK" />
</svelte:head>

<Page>
	<PageNav title="Lecture 6: Version Control Systems">
		<PageNavLink href="#overview" label="Overview" />
		<PageNavLink href="#pdf-viewer" label="Lecture PDF" />
		<PageNavLink href="#cicd-viewer" label="CI/CD PDF" />
		<PageNavLink href="#vcs-types" label="Types of VCS" />
		<PageNavLink href="#git-basics" label="Git Basics" />
		<PageNavLink href="#git-workflow" label="Git Workflow" />
		<PageNavLink href="#git-commands" label="Git Commands" />
		<PageNavLink href="#collaboration" label="Collaboration" />
		<PageNavLink href="#labs" label="Labs" />
		<PageNavLink href="#resources" label="Resources" />
	</PageNav>

	<PageContent>
		<Section id="overview">
			<Heading>Overview</Heading>
			<Text>
				This lecture provides a comprehensive introduction to Version Control Systems (VCS), critical tools for managing changes to files and code over time. We'll explore the evolution from local and
				centralized systems to modern distributed version control, with a focus on Git - the most widely used VCS today, used by millions of developers worldwide.
			</Text>
			<Notice type="info" lead="Key Statistic" message="99% of developers use some form of version control. GitHub, the largest Git hosting platform, has over 200 million repositories." />
		</Section>

		<HorizontalBreak />

		<Section id="pdf-viewer">
			<Heading>Lecture Material (PDF)</Heading>
			<PDF title="Week 6 PDF" src={StaticAssets.Week6Lecture} />
		</Section>

		<HorizontalBreak />

		<Section id="cicd-viewer">
			<Heading>CI/CD Overview (PDF)</Heading>
			<PDF title="CI/CD PDF" src={StaticAssets.Week6CICD} />
		</Section>

		<Section id="vcs-types">
			<Heading>Types of Version Control Systems</Heading>
			<Text>Version control systems have evolved significantly over time. Understanding the different types helps you appreciate the advantages of modern distributed systems like Git.</Text>
			<GridList>
				<GridListItem
					title="Local Version Control"
					description="Early VCS solutions like RCS stored file revisions in a special format on the local machine. Local VCS laid the foundation for more sophisticated version control."
				/>
				<GridListItem
					title="Centralized VCS (CVCS)"
					description="Systems like CVS and Subversion use a central server to store files and their history. CVCS were widely adopted in the early 2000s for team collaboration."
				/>
				<GridListItem
					title="CVS (Concurrent Versions System)"
					description="One of the first popular CVCS, allowing developers to check out and check in changes to a central repository. Introduced features like branching and merging."
				/>
				<GridListItem
					title="Subversion (SVN)"
					description="Improved upon CVS by adding features like atomic commits and better handling of binary files. Still used by many organizations for its reliability and simplicity."
				/>
				<GridListItem
					title="Distributed VCS (DVCS)"
					description="Systems like Git and Mercurial allow each developer to have a complete copy of the repository. DVCS offer greater flexibility and resilience compared to CVCS."
				/>
				<GridListItem
					title="Git History"
					description="Created by Linus Torvalds in 2005 for the development of the Linux kernel. Git is now the most popular VCS, used by millions of developers worldwide."
				/>
			</GridList>
		</Section>

		<HorizontalBreak />

		<Section id="git-basics">
			<Heading>Git Fundamentals</Heading>
			<Text>Git tracks changes to files in a special database called a repository. Think of Git as a snapshot tool for your project's files, capturing the state at each commit.</Text>
			<GridList>
				<GridListItem
					title="Git Repository"
					description="A Git repository stores the entire history of a project, including all branches and commits. It contains all the metadata needed to track changes over time."
				/>
				<GridListItem
					title="Staging Area"
					description="A temporary holding area for changes before they are committed. Staging allows you to select specific changes for each commit, giving you fine-grained control."
				/>
				<GridListItem
					title="Commits"
					description="A commit is a snapshot of the changes in the staging area at a specific point in time. Each commit has a unique identifier (SHA) and a message describing the changes."
				/>
				<GridListItem
					title="Branches"
					description="Branches allow you to work on different features or bug fixes in parallel without affecting the main codebase. Essential for managing complex projects."
				/>
				<GridListItem
					title="Merging"
					description="Merging combines changes from different branches into a single branch. Git provides tools to help resolve conflicts when the same lines are modified."
				/>
				<GridListItem title="Remotes" description="Remotes are copies of a repository hosted on a server, such as GitHub or GitLab. They enable collaboration and provide backups of your code." />
			</GridList>
			<Notice
				type="info"
				lead="Best Practice"
				message="Committing regularly is good practice for tracking your progress. Each commit should represent a logical unit of work with a clear, descriptive message."
			/>
		</Section>

		<HorizontalBreak />

		<Section id="git-workflow">
			<Heading>Git Workflow</Heading>
			<Text>
				The typical Git workflow involves a series of operations: cloning, branching, committing, merging, and pushing changes. Mastering this workflow is essential for effective code management.
			</Text>
			<GridList>
				<GridListItem title="Clone" description="Creates a local copy of a remote repository. Cloning is the first step to contributing to a project or starting work on an existing codebase." />
				<GridListItem title="Branch" description="Create a new branch to work on a feature or fix. This isolates your changes from the main codebase until they're ready to be merged." />
				<GridListItem title="Stage & Commit" description="Use git add to stage changes, then git commit to save them. Stage allows you to select specific changes for each commit." />
				<GridListItem
					title="Fetch"
					description="Downloads changes from a remote repository without merging them into your local branch. Fetching keeps your local repository up-to-date with the remote."
				/>
				<GridListItem title="Pull" description="Downloads changes from a remote repository and merges them into your local branch. Pulling is a combination of fetching and merging." />
				<GridListItem title="Push" description="Uploads your local commits to a remote repository. Pushing shares your changes with others and creates backups of your work." />
			</GridList>
		</Section>

		<HorizontalBreak />

		<Section id="git-commands">
			<Heading>Essential Git Commands</Heading>
			<Text>These are the core Git commands you'll use daily. Understanding these commands is fundamental to working effectively with version control.</Text>
			<GridList>
				<GridListItem title="git init" description="Initializes a new Git repository in the current directory. Start tracking your project's history with this command." />
				<GridListItem title="git clone [url]" description="Creates a local copy of a remote repository. Clone a repository to start collaborating or working on a project." />
				<GridListItem title="git add [file]" description="Stages changes for the next commit. Use 'git add .' to stage all changes, or specify individual files for selective staging." />
				<GridListItem title="git commit -m [message]" description="Creates a new commit with the specified message. Write clear, descriptive commit messages that explain what changed and why." />
				<GridListItem title="git status" description="Shows the current state of the repository, including staged and unstaged changes. Use this to see what has changed since your last commit." />
				<GridListItem title="git log" description="Displays the commit history of the current branch. Review your project's history, including commit messages, authors, and timestamps." />
				<GridListItem title="git branch [name]" description="Lists all branches or creates a new branch. Branching is a powerful tool for managing different versions of your code." />
				<GridListItem title="git checkout [branch]" description="Switches to a different branch or restores files. Use this to navigate between branches or undo changes to specific files." />
			</GridList>
		</Section>

		<HorizontalBreak />

		<Section id="collaboration">
			<Heading>Collaboration & Best Practices</Heading>
			<Text>Version control truly shines when working with teams. These practices help ensure smooth collaboration and maintain code quality.</Text>
			<GridList>
				<GridListItem title="Pull Requests" description="A mechanism for proposing changes and requesting code review before merging. Essential for maintaining code quality in team environments." />
				<GridListItem title="Code Review" description="Reviewing changes before they're merged helps catch bugs, improve code quality, and share knowledge across the team." />
				<GridListItem
					title="Branch Naming"
					description="Use descriptive branch names like 'feature/user-auth' or 'bugfix/login-error'. Clear naming helps team members understand the purpose of each branch."
				/>
				<GridListItem title="Commit Messages" description="Write clear, concise commit messages. Start with a verb (Add, Fix, Update) and explain what the change does, not how it does it." />
				<GridListItem
					title="Conflict Resolution"
					description="When multiple developers modify the same code, conflicts occur. Git provides tools to identify and resolve these conflicts during merging."
				/>
				<GridListItem
					title="Backup & Recovery"
					description="Remote repositories serve as backups. With Git's complete history, you can recover from mistakes and restore previous versions of your code."
				/>
			</GridList>
			<Notice
				type="info"
				lead="Team Tip"
				message="Choose the right VCS for your project's needs. For most modern projects, Git with a hosting platform like GitHub or GitLab provides the best collaboration features."
			/>
		</Section>

		<HorizontalBreak />

		<Section id="labs">
			<Heading>Labs & Practical Exercises</Heading>
			<Text>Reinforce your understanding of Version Control Systems with hands-on lab exercises. These labs will guide you through using Git for version control in real projects.</Text>
			<PDF title="Week 6 Lab" src={StaticAssets.Week6Lab} />
		</Section>

		<HorizontalBreak />

		<Section id="resources">
			<Heading>Tools & Further Reading</Heading>
			<Text>Enhance your understanding of version control with these resources and tools.</Text>
			<HorizontalList>
				<HorizontalListItem title="GitHub" description="World's largest code hosting platform." link_url="https://github.com/" logo_url="https://github.githubassets.com/favicons/favicon.svg" />
				<HorizontalListItem title="Git Documentation" description="Official Git reference and tutorials." link_url="https://git-scm.com/doc" logo_url="https://git-scm.com/favicon.ico" />
				<HorizontalListItem title="VLE Page" description="Course management and resources." link_url="https://learn.gold.ac.uk/course/section.php?id=569329" logo_url={StaticAssets.MoodleLogo} />
			</HorizontalList>
			<Notice
				type="info"
				lead="Practice Tip"
				message="The best way to learn Git is by using it daily. Create a personal project and practice the full workflow: branching, committing, merging, and collaborating."
			/>
		</Section>
	</PageContent>
</Page>
