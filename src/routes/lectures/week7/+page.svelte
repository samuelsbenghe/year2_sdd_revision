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
	<title>Lecture 7: Robust and Secure Programming</title>
	<meta name="description" content="Lecture 7 explores Robust and Secure Programming, covering input validation, secure memory management, authentication, data protection, and concurrency." />
	<meta name="keywords" content="Secure Programming, Input Validation, Memory Management, Authentication, AES Encryption, Concurrency, Multithreading, Deadlock, Race Condition, Lecture 7" />
	<meta name="author" content="Samuel" />
	<meta name="language" content="en-UK" />
</svelte:head>

<Page>
	<PageNav title="Lecture 7: Robust and Secure Programming">
		<PageNavLink href="#overview" label="Overview" />
		<PageNavLink href="#pdf-viewer" label="Lecture PDF" />
		<PageNavLink href="#input-validation" label="Input Validation" />
		<PageNavLink href="#memory-management" label="Memory Management" />
		<PageNavLink href="#auth" label="Authentication" />
		<PageNavLink href="#data-protection" label="Data Protection" />
		<PageNavLink href="#concurrency" label="Concurrency" />
		<PageNavLink href="#secure-design" label="Secure Design" />
		<PageNavLink href="#labs" label="Labs" />
		<PageNavLink href="#resources" label="Resources" />
	</PageNav>

	<PageContent>
		<Section id="overview">
			<Heading>Overview</Heading>
			<Text>
				Robust and secure programming is the foundation of reliable software systems. This lecture covers essential security practices including input validation, memory management, authentication,
				encryption, and handling concurrency safely. With cybercrime damages expected to reach $10.5 trillion annually by 2025, understanding these concepts is critical for every developer.
			</Text>
			<Notice
				type="warning"
				lead="Key Statistic"
				message="Cybercrime damages are expected to reach $10.5 trillion annually by 2025. Memory safety errors account for 70% of all vulnerabilities in critical systems."
			/>
		</Section>

		<HorizontalBreak />

		<Section id="pdf-viewer">
			<Heading>Lecture Material (PDF)</Heading>
			<PDF title="Week 7 PDF" src={StaticAssets.Week7Lecture} />
		</Section>

		<HorizontalBreak />

		<Section id="input-validation">
			<Heading>Input Validation & Output Encoding</Heading>
			<Text
				>Sanitizing inputs prevents a majority of injection attacks. OWASP ranks input validation issues among the top security risks. Proper validation ensures only expected data enters your system.</Text
			>
			<GridList>
				<GridListItem
					title="Input Sanitization"
					description="Always validate and sanitize user inputs before processing. Use built-in methods like PHP's filter_var() or regex patterns to ensure data matches expected formats."
				/>
				<GridListItem title="Output Encoding" description="Encode output data to prevent XSS attacks. Never trust user input when rendering to HTML, JavaScript, or other contexts." />
				<GridListItem
					title="Whitelist Validation"
					description="Define acceptable input patterns and reject everything else. For example, names should only contain letters and spaces: /^[a-zA-Z ]*$/"
				/>
				<GridListItem title="Email Validation" description="Use RFC 5321/5322 compliant validation methods. PHP's FILTER_VALIDATE_EMAIL follows these standards automatically." />
			</GridList>
			<Notice
				type="info"
				lead="PHP Insight"
				message="PHP has native tools for input validation including filter_var() which validates emails according to RFC 5321 and RFC 5322, plus whitespace removal functions."
			/>
		</Section>

		<HorizontalBreak />

		<Section id="memory-management">
			<Heading>Secure Memory Management</Heading>
			<Text
				>Memory safety errors account for 70% of all vulnerabilities in critical systems. Understanding how memory works in different languages helps prevent leaks, buffer overflows, and other
				memory-related security issues.</Text
			>
			<GridList>
				<GridListItem
					title="Memory Leaks"
					description="Occur when allocated memory is not properly released. In Python, avoid holding unnecessary references to large objects. Use the gc module for cleanup."
				/>
				<GridListItem
					title="Buffer Overflows"
					description="Happen when programs write data beyond allocated memory boundaries. While Python prevents direct overflows, deeply nested structures can cause memory errors."
				/>
				<GridListItem title="Garbage Collection" description="Automatic memory management in languages like Python and JavaScript. Use gc.collect() in Python to force cleanup of unused objects." />
				<GridListItem
					title="Memory-Efficient Patterns"
					description="Use generators instead of lists for large datasets. Generators yield one item at a time rather than storing everything in memory."
				/>
			</GridList>
			<Notice type="info" lead="Tools" message="Tools like Valgrind and AddressSanitizer can identify memory-related issues in your code. Always test memory usage under realistic conditions." />
		</Section>

		<HorizontalBreak />

		<Section id="auth">
			<Heading>Authentication & Authorization</Heading>
			<Text>Authentication ensures only legitimate users can access the system. Authorization determines what authenticated users can do. Both are critical layers of application security.</Text>
			<GridList>
				<GridListItem title="Authentication" description="Verifies user identity through credentials like passwords, tokens, or biometrics. Ensures users are who they claim to be." />
				<GridListItem title="Authorization" description="Controls access to resources based on user roles and permissions. Determines what actions authenticated users can perform." />
				<GridListItem title="Multi-Factor Authentication" description="Combines multiple verification methods (something you know, have, or are). Blocks 99.9% of account compromise attacks." />
				<GridListItem title="Session Management" description="Securely handle user sessions with proper timeouts, secure cookies, and session invalidation on logout." />
			</GridList>
			<Notice type="info" lead="Best Practice" message="Multi-factor authentication blocks 99.9% of account compromise attacks. Always implement MFA for sensitive applications." />
		</Section>

		<HorizontalBreak />

		<Section id="data-protection">
			<Heading>Data Protection & Encryption</Heading>
			<Text>Encryption and hashing protect sensitive data from unauthorized access. AES encryption is used by over 70% of secure applications worldwide.</Text>
			<GridList>
				<GridListItem
					title="AES Encryption"
					description="Advanced Encryption Standard - a symmetric encryption algorithm. Think of it as a super-secret blender that scrambles data using a secret key, only reversible with the same key."
				/>
				<GridListItem title="Hashing" description="One-way transformation of data into a fixed-size string. Used for password storage - you can verify but never reverse the original." />
				<GridListItem title="Key Management" description="Securely store and rotate encryption keys. Never hardcode keys in source code or commit them to version control." />
				<GridListItem title="Data at Rest vs Transit" description="Encrypt data both when stored (at rest) and when transmitted (in transit). Use TLS/HTTPS for all network communications." />
			</GridList>
			<Notice
				type="info"
				lead="AES Analogy"
				message="AES is like a secret blender: you put your recipe (data) in, the key scrambles it into unrecognizable crumbs. Only someone with the same key can unscramble it back to the original."
			/>
		</Section>

		<HorizontalBreak />

		<Section id="concurrency">
			<Heading>Concurrency & Multithreading</Heading>
			<Text>Securely managing threads avoids race conditions and data corruption. Deadlocks and race conditions cost organisations millions in downtime.</Text>
			<GridList>
				<GridListItem
					title="Deadlock"
					description="Two or more threads waiting for each other to release resources, resulting in a standstill. Like two friends each holding a toy the other wants, refusing to let go first."
				/>
				<GridListItem
					title="Race Condition"
					description="Unpredictable behavior when multiple threads access shared resources simultaneously. Like two siblings racing to grab the last cookie - whoever reaches first wins."
				/>
				<GridListItem
					title="Thread Synchronization"
					description="Use locks, mutexes, and semaphores to coordinate access to shared resources. Prevents data corruption from concurrent modifications."
				/>
				<GridListItem title="Thread Safety" description="Design code that functions correctly when accessed by multiple threads. Avoid shared mutable state where possible." />
			</GridList>
			<Notice type="warning" lead="Cost Warning" message="Deadlocks and race conditions cost organisations millions in downtime. Always test concurrent code thoroughly under load." />
		</Section>

		<HorizontalBreak />

		<Section id="secure-design">
			<Heading>Secure Design & Deployment</Heading>
			<Text>Secure design principles proactively mitigate vulnerabilities. A secure deployment ensures no sensitive data leaks into production.</Text>
			<GridList>
				<GridListItem
					title="Secure Design Patterns"
					description="Apply security patterns like least privilege, defense in depth, and fail-safe defaults. 'Design is not just what it looks like - design is how it works.' – Steve Jobs"
				/>
				<GridListItem
					title="Configuration Management"
					description="Misconfigurations are a leading cause of cloud breaches. Never leak secure keys or sensitive config data. Use environment variables and secrets managers."
				/>
				<GridListItem
					title="Container Security"
					description="Tools like Docker take a 'snapshot' of a system and deploy it consistently. Containers help avoid configuration drift and environment inconsistencies."
				/>
				<GridListItem
					title="Vulnerability Assessment"
					description="Regularly scan for vulnerabilities using automated tools. Perform penetration testing and code reviews to identify security weaknesses."
				/>
			</GridList>
			<Notice type="info" lead="Best Practice" message="'Code is like humor. When you have to explain it, it's bad.' – Cory House. Write clear, self-documenting secure code." />
		</Section>

		<HorizontalBreak />

		<Section id="labs">
			<Heading>Labs & Practical Exercises</Heading>
			<Text>Work through hands-on activities exploring memory management issues in Python and JavaScript, garbage collection, and memory-efficient programming patterns.</Text>
			<PDF title="Week 7 Lab" src={StaticAssets.Week7Lab} />
			<GridList>
				<GridListItem
					title="Activity 1: Python Memory Leaks"
					description="Create and observe a memory leak using infinite loops. Learn to prevent leaks by managing resources and using the gc module."
				/>
				<GridListItem title="Activity 2: JavaScript Memory Leaks" description="Identify memory leaks caused by retaining references to large objects. Practice releasing references with obj = null." />
				<GridListItem title="Activity 3: Garbage Collection" description="Use Python's gc module to simulate garbage collection. Observe memory usage before and after gc.collect()." />
				<GridListItem title="Activity 4: Memory-Efficient Data" description="Refactor code to use generators instead of lists. Understand why generators are more memory-efficient." />
				<GridListItem title="Activity 5: Nested Structures" description="Explore Python's memory limits with deeply nested lists. Understand how memory usage grows with nesting depth." />
			</GridList>
		</Section>

		<HorizontalBreak />

		<Section id="resources">
			<Heading>Tools & Further Reading</Heading>
			<HorizontalList>
				<HorizontalListItem
					title="VLE Page"
					description="Course management and resources."
					link_url="https://learn.gold.ac.uk/course/section.php?id=569330"
					logo_url={StaticAssets.MoodleLogo}
				/></HorizontalList
			>
		</Section>
	</PageContent>
</Page>
