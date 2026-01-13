const lastUpdated: Date = new Date(2026, 0, 13);

const StaticAssets: Record<string, string> = {
	// Week Materials
	Week1Lecture: '/assets/week1_lecture.pdf',
	Week2Lecture: '/assets/week2_lecture.pdf',
	Week2Lab: '/assets/week2_lab.pdf',
	Week2LabAnswers: '/assets/week2_lab_answers.pdf',
	Week3Lecture: '/assets/week3_lecture.pdf',
	Week3UnitTests: '/assets/week3_unit_tests.pdf',
	Week3Lab: '/assets/week3_lab.pdf',
	Week3LabAnswers: '/assets/week3_lab_answers.js',
	Week4Lecture: '/assets/week4_lecture.pdf',
	Week4Lab: '/assets/week4_lab.pdf',
	Week5Lecture: '/assets/week5_lecture.pdf',
	Week6Lecture: '/assets/week6_lecture.pdf',
	Week6Lab: '/assets/week6_lab.pdf',
	Week6CICD: '/assets/week6_cicd.pdf',
	Week7Lecture: '/assets/week7_lecture.pdf',
	Week7Lab: '/assets/week7_lab.pdf',
	Week8Lecture: '/assets/week8_lecture.pdf',
	Week8Lab: '/assets/week8_lab.pdf',
	Week9Lecture1: '/assets/week9_lecture1.pdf',
	Week9Lecture2: '/assets/week9_lecture2.pdf',
	Week9Lab: '/assets/week9_lab.pdf',
	Week10Lecture: '/assets/week10_lecture.pdf',
	Week10Lab: '/assets/week10_lab.pdf',
	MockExam: '/assets/mock_exam.pdf',
	MockExamRubric: '/assets/mock_exam_rubric.pdf',
	// Images
	MoodleLogo: '/assets/logos/moodle.ico',
	PDFLogo: '/assets/logos/pdf.png',
	DigitalOceanLogo: '/assets/logos/digitalocean.png',
	PragProgLogo: '/assets/logos/pragprog.ico',
	SeleniumLogo: 'https://www.selenium.dev/images/selenium_logo_square_green.png',
	JUnitLogo: 'https://junit.org/assets/img/junit-diamond.png',
	W3SchoolsLogo: 'https://www.w3schools.com/favicon.ico'
} as const;

const QuizQuestions: Array<{
	area: string;
	question: string;
	type: string;
	options: string[];
	answer: string;
}> = [
	// Design Principles
	{
		area: 'design-principles',
		question: 'What does the "S" in SOLID stand for?',
		type: 'multiple-choice',
		options: ['Simple Responsibility Principle', 'Single Responsibility Principle', 'Secure Responsibility Principle', 'System Responsibility Principle'],
		answer: 'Single Responsibility Principle'
	},
	{
		area: 'design-principles',
		question: 'Which type of coupling is considered the WORST?',
		type: 'multiple-choice',
		options: ['Data Coupling', 'Stamp Coupling', 'Content Coupling', 'Control Coupling'],
		answer: 'Content Coupling'
	},
	{
		area: 'design-principles',
		question: 'What does the DRY principle stand for?',
		type: 'multiple-choice',
		options: ['Do Repeat Yourself', "Don't Repeat Yourself", 'Data Reuse Yourself', 'Design Repeat Yearly'],
		answer: "Don't Repeat Yourself"
	},
	{
		area: 'design-principles',
		question: 'Which type of cohesion is considered the BEST?',
		type: 'multiple-choice',
		options: ['Coincidental Cohesion', 'Logical Cohesion', 'Functional Cohesion', 'Temporal Cohesion'],
		answer: 'Functional Cohesion'
	},
	{
		area: 'design-principles',
		question: 'The Open-Closed Principle states that modules should be:',
		type: 'multiple-choice',
		options: ['Open for modification, closed for extension', 'Open for extension, closed for modification', 'Always open for changes', 'Always closed to new features'],
		answer: 'Open for extension, closed for modification'
	},
	{
		area: 'design-principles',
		question: 'What percentage of bugs stem from repetitive code according to Larman (2004)?',
		type: 'multiple-choice',
		options: ['30%', '45%', '60%', '75%'],
		answer: '60%'
	},
	{
		area: 'design-principles',
		question: 'Which coupling type involves modules sharing global data?',
		type: 'multiple-choice',
		options: ['Content Coupling', 'Common Coupling', 'Control Coupling', 'Data Coupling'],
		answer: 'Common Coupling'
	},
	{
		area: 'design-principles',
		question: 'The Liskov Substitution Principle states that:',
		type: 'multiple-choice',
		options: [
			'Classes should have multiple responsibilities',
			'Derived classes should be substitutable for their base classes',
			'Interfaces should be as large as possible',
			'Dependencies should be on concrete classes'
		],
		answer: 'Derived classes should be substitutable for their base classes'
	},
	// Software Testing
	{
		area: 'testing',
		question: 'Which type of testing tests individual components in isolation?',
		type: 'multiple-choice',
		options: ['Integration Testing', 'System Testing', 'Unit Testing', 'Acceptance Testing'],
		answer: 'Unit Testing'
	},
	{
		area: 'testing',
		question: 'What does TDD stand for?',
		type: 'multiple-choice',
		options: ['Test Driven Design', 'Test Driven Development', 'Testing During Development', 'Total Defect Detection'],
		answer: 'Test Driven Development'
	},
	{
		area: 'testing',
		question: 'Which testing approach involves the tester having no knowledge of internal code?',
		type: 'multiple-choice',
		options: ['White Box Testing', 'Glass Box Testing', 'Black Box Testing', 'Grey Box Testing'],
		answer: 'Black Box Testing'
	},
	{
		area: 'testing',
		question: 'What does ATDD stand for?',
		type: 'multiple-choice',
		options: ['Automated Test Driven Development', 'Acceptance Test Driven Development', 'Agile Test Driven Design', 'Application Test Driven Deployment'],
		answer: 'Acceptance Test Driven Development'
	},
	{
		area: 'testing',
		question: 'The "Three Amigos" in ATDD refers to:',
		type: 'multiple-choice',
		options: ['Three testing phases', 'Developer, Tester, and Business Stakeholder', 'Unit, Integration, and System tests', 'Three debugging tools'],
		answer: 'Developer, Tester, and Business Stakeholder'
	},
	{
		area: 'testing',
		question: 'Which testing ensures new code changes do not break existing functionality?',
		type: 'multiple-choice',
		options: ['Unit Testing', 'Regression Testing', 'Smoke Testing', 'Stress Testing'],
		answer: 'Regression Testing'
	},
	{
		area: 'testing',
		question: 'By what percentage do Agile teams using ATDD reduce production bugs?',
		type: 'multiple-choice',
		options: ['10%', '20%', '30%', '40%'],
		answer: '30%'
	},
	{
		area: 'testing',
		question: 'Which tool is commonly used for web browser automation testing?',
		type: 'multiple-choice',
		options: ['JUnit', 'PyTest', 'Selenium', 'Valgrind'],
		answer: 'Selenium'
	},
	// User & Usability Testing
	{
		area: 'user-testing',
		question: 'According to Nielsen, how many users are needed to uncover 85% of usability issues?',
		type: 'multiple-choice',
		options: ['3 users', '5 users', '10 users', '15 users'],
		answer: '5 users'
	},
	{
		area: 'user-testing',
		question: 'What does SUS stand for in usability testing?',
		type: 'multiple-choice',
		options: ['Standard Usability Score', 'System Usability Scale', 'Software Usability Survey', 'Simple User Study'],
		answer: 'System Usability Scale'
	},
	{
		area: 'user-testing',
		question: 'A SUS score above what number indicates above-average usability?',
		type: 'multiple-choice',
		options: ['50', '60', '68', '75'],
		answer: '68'
	},
	{
		area: 'user-testing',
		question: 'Which protocol involves users verbalizing their thoughts while using a system?',
		type: 'multiple-choice',
		options: ['Silent Observation', 'Think Aloud Protocol', 'Heuristic Evaluation', 'A/B Testing'],
		answer: 'Think Aloud Protocol'
	},
	{
		area: 'user-testing',
		question: 'Who developed the 10 usability heuristics?',
		type: 'multiple-choice',
		options: ['Donald Norman', 'Ben Shneiderman', 'Jakob Nielsen', 'Alan Cooper'],
		answer: 'Jakob Nielsen'
	},
	{
		area: 'user-testing',
		question: 'What is the target task completion rate in usability testing?',
		type: 'multiple-choice',
		options: ['>65%', '>75%', '>85%', '>95%'],
		answer: '>85%'
	},
	{
		area: 'user-testing',
		question: 'Who developed the Eight Golden Rules of interface design?',
		type: 'multiple-choice',
		options: ['Jakob Nielsen', 'Ben Shneiderman', 'Donald Norman', 'Steve Krug'],
		answer: 'Ben Shneiderman'
	},
	{
		area: 'user-testing',
		question: 'What concept did Donald Norman introduce regarding perceived properties of objects?',
		type: 'multiple-choice',
		options: ['Heuristics', 'Affordances', 'Mental Models', 'Cognitive Load'],
		answer: 'Affordances'
	},
	// Version Control & CI/CD
	{
		area: 'version-control',
		question: 'Who created Git?',
		type: 'multiple-choice',
		options: ['Bill Gates', 'Linus Torvalds', 'James Gosling', 'Guido van Rossum'],
		answer: 'Linus Torvalds'
	},
	{
		area: 'version-control',
		question: 'What year was Git created?',
		type: 'multiple-choice',
		options: ['2000', '2003', '2005', '2008'],
		answer: '2005'
	},
	{
		area: 'version-control',
		question: 'What type of VCS is Git?',
		type: 'multiple-choice',
		options: ['Local VCS', 'Centralized VCS', 'Distributed VCS', 'Cloud VCS'],
		answer: 'Distributed VCS'
	},
	{
		area: 'version-control',
		question: 'What percentage of developers use version control?',
		type: 'multiple-choice',
		options: ['85%', '90%', '95%', '99%'],
		answer: '99%'
	},
	{
		area: 'version-control',
		question: 'What does CI stand for?',
		type: 'multiple-choice',
		options: ['Code Integration', 'Continuous Integration', 'Central Integration', 'Commit Integration'],
		answer: 'Continuous Integration'
	},
	{
		area: 'version-control',
		question: 'By what percentage does CI reduce deployment errors?',
		type: 'multiple-choice',
		options: ['10%', '20%', '30%', '40%'],
		answer: '30%'
	},
	{
		area: 'version-control',
		question: 'Which VCS was improved upon by Subversion (SVN)?',
		type: 'multiple-choice',
		options: ['Git', 'Mercurial', 'CVS', 'RCS'],
		answer: 'CVS'
	},
	{
		area: 'version-control',
		question: 'What is the Git staging area used for?',
		type: 'multiple-choice',
		options: ['Storing deleted files', 'Holding changes before committing', 'Managing remote repositories', 'Resolving merge conflicts'],
		answer: 'Holding changes before committing'
	},
	// Secure Programming
	{
		area: 'security',
		question: 'What percentage of vulnerabilities in critical systems are memory safety errors?',
		type: 'multiple-choice',
		options: ['50%', '60%', '70%', '80%'],
		answer: '70%'
	},
	{
		area: 'security',
		question: 'Multi-factor authentication blocks what percentage of account compromise attacks?',
		type: 'multiple-choice',
		options: ['95%', '97%', '99%', '99.9%'],
		answer: '99.9%'
	},
	{
		area: 'security',
		question: 'What percentage of secure applications use AES encryption?',
		type: 'multiple-choice',
		options: ['50%', '60%', '70%', '80%'],
		answer: '70%'
	},
	{
		area: 'security',
		question: 'Which organization ranks input validation issues among top security risks?',
		type: 'multiple-choice',
		options: ['IEEE', 'ACM', 'OWASP', 'W3C'],
		answer: 'OWASP'
	},
	{
		area: 'security',
		question: 'What tool can identify memory-related issues?',
		type: 'multiple-choice',
		options: ['Selenium', 'Valgrind', 'ESLint', 'Prettier'],
		answer: 'Valgrind'
	},
	{
		area: 'security',
		question: 'Cybercrime damages are expected to reach how much annually by 2025?',
		type: 'multiple-choice',
		options: ['$5 trillion', '$7.5 trillion', '$10.5 trillion', '$15 trillion'],
		answer: '$10.5 trillion'
	},
	{
		area: 'security',
		question: 'What occurs when two threads try to access the same resource simultaneously?',
		type: 'multiple-choice',
		options: ['Deadlock', 'Race Condition', 'Memory Leak', 'Buffer Overflow'],
		answer: 'Race Condition'
	},
	{
		area: 'security',
		question: 'What occurs when two or more threads are waiting for each other indefinitely?',
		type: 'multiple-choice',
		options: ['Race Condition', 'Deadlock', 'Livelock', 'Starvation'],
		answer: 'Deadlock'
	},
	// Anti-Patterns & Code Quality
	{
		area: 'anti-patterns',
		question: 'What is a "God Object" anti-pattern?',
		type: 'multiple-choice',
		options: ['A class that is too small', 'A class that knows too much or does too much', 'A class with no methods', 'A perfectly designed class'],
		answer: 'A class that knows too much or does too much'
	},
	{
		area: 'anti-patterns',
		question: 'What is "Spaghetti Code"?',
		type: 'multiple-choice',
		options: ['Well-structured modular code', 'Code written in Italian', 'Unstructured and difficult-to-read code', 'Code that uses too many functions'],
		answer: 'Unstructured and difficult-to-read code'
	},
	{
		area: 'anti-patterns',
		question: 'What percentage of developers refactor to reduce bugs according to Fowler (2018)?',
		type: 'multiple-choice',
		options: ['50%', '60%', '70%', '80%'],
		answer: '70%'
	},
	{
		area: 'anti-patterns',
		question: 'What is refactoring?',
		type: 'multiple-choice',
		options: ['Adding new features to code', 'Improving code structure without changing behavior', 'Removing all comments', 'Rewriting code from scratch'],
		answer: 'Improving code structure without changing behavior'
	},
	{
		area: 'anti-patterns',
		question: 'Which tool is used for static code analysis in Python?',
		type: 'multiple-choice',
		options: ['ESLint', 'PyLint', 'Prettier', 'Black'],
		answer: 'PyLint'
	},
	{
		area: 'anti-patterns',
		question: 'Which tool is used for linting JavaScript code?',
		type: 'multiple-choice',
		options: ['PyLint', 'Black', 'ESLint', 'SonarQube'],
		answer: 'ESLint'
	},
	{
		area: 'anti-patterns',
		question: 'What is the solution to the God Object anti-pattern?',
		type: 'multiple-choice',
		options: ['Add more methods', 'Refactor into smaller, focused classes', 'Make all methods public', 'Use global variables'],
		answer: 'Refactor into smaller, focused classes'
	},
	{
		area: 'anti-patterns',
		question: 'High cohesion in a module means:',
		type: 'multiple-choice',
		options: ['The module has many dependencies', 'The module does many unrelated things', "The module's functionalities are closely related", 'The module is very large'],
		answer: "The module's functionalities are closely related"
	},
	// API Design & Documentation
	{
		area: 'api-design',
		question: 'What tool is used to send HTTP requests from the command line?',
		type: 'multiple-choice',
		options: ['Postman', 'cURL', 'Insomnia', 'Swagger'],
		answer: 'cURL'
	},
	{
		area: 'api-design',
		question: 'Which tools are GUI-based for testing APIs?',
		type: 'multiple-choice',
		options: ['cURL and wget', 'Postman and Insomnia', 'Git and GitHub', 'PyTest and JUnit'],
		answer: 'Postman and Insomnia'
	},
	{
		area: 'api-design',
		question: 'What does Design by Contract define?',
		type: 'multiple-choice',
		options: ['Legal agreements', 'Preconditions, postconditions, and invariants', 'API endpoints', 'Database schemas'],
		answer: 'Preconditions, postconditions, and invariants'
	},
	{
		area: 'api-design',
		question: 'What do code reviews improve?',
		type: 'multiple-choice',
		options: ['Code speed only', 'Code quality and team collaboration', 'File size', 'Compile time'],
		answer: 'Code quality and team collaboration'
	},
	{
		area: 'api-design',
		question: 'Which command-line tools can be used to monitor and benchmark systems?',
		type: 'multiple-choice',
		options: ['git, npm, yarn', 'htop, perf, ab', 'curl, wget, ssh', 'vim, nano, emacs'],
		answer: 'htop, perf, ab'
	},
	{
		area: 'api-design',
		question: 'What is Continuous Deployment?',
		type: 'multiple-choice',
		options: ['Manually deploying code', 'Deploying tested code to production automatically', 'Testing code before commit', 'Writing deployment documentation'],
		answer: 'Deploying tested code to production automatically'
	},
	{
		area: 'api-design',
		question: 'What tool measures test coverage in Python?',
		type: 'multiple-choice',
		options: ['ESLint', 'Coverage.py', 'Selenium', 'PyLint'],
		answer: 'Coverage.py'
	},
	{
		area: 'api-design',
		question: 'By what percentage does AI reduce time-to-detection for bugs?',
		type: 'multiple-choice',
		options: ['25%', '35%', '50%', '65%'],
		answer: '50%'
	},
	// Mixed Review
	{
		area: 'mixed',
		question: 'What percentage of breaches result from poor design according to OWASP?',
		type: 'multiple-choice',
		options: ['50%', '60%', '70%', '80%'],
		answer: '70%'
	},
	{
		area: 'mixed',
		question: 'Teams with automated tests deploy how much faster?',
		type: 'multiple-choice',
		options: ['20%', '30%', '40%', '50%'],
		answer: '40%'
	},
	{
		area: 'mixed',
		question: 'What is the primary technical imperative in software design?',
		type: 'multiple-choice',
		options: ['Maximizing performance', 'Managing complexity', 'Reducing cost', 'Increasing features'],
		answer: 'Managing complexity'
	},
	{
		area: 'mixed',
		question: 'Which type of complexity arises from poor design?',
		type: 'multiple-choice',
		options: ['Essential complexity', 'Accidental complexity', 'Inherent complexity', 'Natural complexity'],
		answer: 'Accidental complexity'
	},
	// Week 1 - Software Design Fundamentals
	{
		area: 'design-principles',
		question: 'What term describes design problems that are not fully understood until partially solved?',
		type: 'multiple-choice',
		options: ['Wicked Problems', 'Complex Problems', 'Iterative Problems', 'Design Debt'],
		answer: 'Wicked Problems'
	},
	{
		area: 'design-principles',
		question: 'Which bridge is used as an example of a "wicked problem" in software design lectures?',
		type: 'multiple-choice',
		options: ['Golden Gate Bridge', 'Brooklyn Bridge', 'Tacoma Narrows Bridge', 'London Bridge'],
		answer: 'Tacoma Narrows Bridge'
	},
	{
		area: 'design-principles',
		question: 'Good software design is described as what type of process?',
		type: 'multiple-choice',
		options: ['Linear', 'Nondeterministic', 'Sequential', 'Predictable'],
		answer: 'Nondeterministic'
	},
	{
		area: 'design-principles',
		question: 'What does "High Fan-In" mean in software architecture?',
		type: 'multiple-choice',
		options: ['Many classes inherit from one class', 'Maximise the number of classes that use utility classes', 'One class uses many other classes', 'Classes have many methods'],
		answer: 'Maximise the number of classes that use utility classes'
	},
	{
		area: 'design-principles',
		question: 'Which layer in a typical software architecture handles user interface?',
		type: 'multiple-choice',
		options: ['Business Logic Layer', 'Data Access Layer', 'Presentation Layer', 'Database Layer'],
		answer: 'Presentation Layer'
	},
	{
		area: 'design-principles',
		question: 'In monolithic architecture, how are the layers related?',
		type: 'multiple-choice',
		options: ['Loosely coupled', 'Tightly coupled', 'Completely independent', 'Distributed'],
		answer: 'Tightly coupled'
	},
	{
		area: 'design-principles',
		question: 'What is "essential complexity" in software design?',
		type: 'multiple-choice',
		options: ['Complexity from poor design', 'Complexity from real-world intricacies', 'Complexity from too many features', 'Complexity from legacy code'],
		answer: 'Complexity from real-world intricacies'
	},
	{
		area: 'design-principles',
		question: 'Which design heuristic emphasizes thinking about future maintenance?',
		type: 'multiple-choice',
		options: ['Minimal Complexity', 'Ease of Maintenance', 'Loose Coupling', 'High Cohesion'],
		answer: 'Ease of Maintenance'
	},
	// Week 2 - Coupling Types
	{
		area: 'design-principles',
		question: 'In stamp coupling, modules share:',
		type: 'multiple-choice',
		options: ['Global variables', 'A composite data structure using only parts of it', 'Control flags', 'Direct memory access'],
		answer: 'A composite data structure using only parts of it'
	},
	{
		area: 'design-principles',
		question: 'Control coupling involves:',
		type: 'multiple-choice',
		options: ['Sharing global data', 'One module passing flags to control another', 'Sharing composite data structures', 'Communicating through parameters only'],
		answer: 'One module passing flags to control another'
	},
	{
		area: 'design-principles',
		question: 'Which type of coupling should you strive for?',
		type: 'multiple-choice',
		options: ['Content Coupling', 'Common Coupling', 'Control Coupling', 'Data Coupling'],
		answer: 'Data Coupling'
	},
	{
		area: 'design-principles',
		question: 'In data coupling, modules communicate:',
		type: 'multiple-choice',
		options: ['Through global variables', 'Through shared files', 'Only through parameters passing necessary data', 'Through direct memory access'],
		answer: 'Only through parameters passing necessary data'
	},
	// Week 2 - Cohesion Types
	{
		area: 'design-principles',
		question: 'In coincidental cohesion, elements within a module:',
		type: 'multiple-choice',
		options: ['Perform a single task', 'Have no clear relationship', 'Operate on the same data', 'Execute in order'],
		answer: 'Have no clear relationship'
	},
	{
		area: 'design-principles',
		question: 'Temporal cohesion groups elements by:',
		type: 'multiple-choice',
		options: ['Their function', 'When they are processed', 'The data they operate on', 'Their execution order'],
		answer: 'When they are processed'
	},
	{
		area: 'design-principles',
		question: 'Communicational cohesion means elements:',
		type: 'multiple-choice',
		options: ['Communicate with users', 'Operate on the same data', 'Send messages to each other', 'Use the same interface'],
		answer: 'Operate on the same data'
	},
	{
		area: 'design-principles',
		question: 'Procedural cohesion groups elements by:',
		type: 'multiple-choice',
		options: ['Their function', 'The time they run', 'Their order of execution', 'The data they use'],
		answer: 'Their order of execution'
	},
	{
		area: 'design-principles',
		question: 'Logical cohesion means elements:',
		type: 'multiple-choice',
		options: ['Perform similar activities but are grouped arbitrarily', 'Follow logical programming rules', 'Have clear relationships', 'Use boolean operations'],
		answer: 'Perform similar activities but are grouped arbitrarily'
	},
	{
		area: 'design-principles',
		question: 'Which is better: high coupling or low coupling?',
		type: 'multiple-choice',
		options: ['High coupling', 'Low coupling', 'They are equally good', 'It depends on the language'],
		answer: 'Low coupling'
	},
	{
		area: 'design-principles',
		question: 'Which is better: high cohesion or low cohesion?',
		type: 'multiple-choice',
		options: ['Low cohesion', 'High cohesion', 'They are equally good', 'It depends on the project'],
		answer: 'High cohesion'
	},
	// Week 3 - Testing Types
	{
		area: 'testing',
		question: 'Which testing verifies that the complete software system meets requirements?',
		type: 'multiple-choice',
		options: ['Unit Testing', 'Integration Testing', 'System Testing', 'Acceptance Testing'],
		answer: 'System Testing'
	},
	{
		area: 'testing',
		question: 'Which testing ensures the software meets business needs and is ready for release?',
		type: 'multiple-choice',
		options: ['Unit Testing', 'Integration Testing', 'System Testing', 'Acceptance Testing'],
		answer: 'Acceptance Testing'
	},
	{
		area: 'testing',
		question: 'Static testing involves:',
		type: 'multiple-choice',
		options: ['Running the software', 'Reviewing documents and code without execution', 'Testing with real users', 'Performance benchmarking'],
		answer: 'Reviewing documents and code without execution'
	},
	{
		area: 'testing',
		question: 'Dynamic testing involves:',
		type: 'multiple-choice',
		options: ['Code review', 'Executing code and checking output', 'Documentation review', 'Static analysis'],
		answer: 'Executing code and checking output'
	},
	{
		area: 'testing',
		question: 'In white box testing, the tester:',
		type: 'multiple-choice',
		options: ['Has no knowledge of internal code', 'Has full knowledge of internal code', 'Only tests the UI', 'Only tests performance'],
		answer: 'Has full knowledge of internal code'
	},
	{
		area: 'testing',
		question: 'Performance testing evaluates:',
		type: 'multiple-choice',
		options: ['Code readability', 'System behavior under high load', 'User interface design', 'Security vulnerabilities'],
		answer: 'System behavior under high load'
	},
	{
		area: 'testing',
		question: 'Load testing measures:',
		type: 'multiple-choice',
		options: ['System behavior under extreme conditions', 'System ability to handle expected user loads', 'Code coverage', 'Security vulnerabilities'],
		answer: 'System ability to handle expected user loads'
	},
	{
		area: 'testing',
		question: 'Stress testing:',
		type: 'multiple-choice',
		options: ['Tests normal user loads', 'Puts the system under extreme conditions', 'Tests user interface', 'Reviews code quality'],
		answer: 'Puts the system under extreme conditions'
	},
	{
		area: 'testing',
		question: 'Alpha testing is conducted by:',
		type: 'multiple-choice',
		options: ['End users', 'Internal developers or testers', 'External contractors', 'Automated tools only'],
		answer: 'Internal developers or testers'
	},
	{
		area: 'testing',
		question: 'Beta testing is performed by:',
		type: 'multiple-choice',
		options: ['Internal developers', 'End users in real-world environment', 'QA team only', 'Automated scripts'],
		answer: 'End users in real-world environment'
	},
	{
		area: 'testing',
		question: 'A test case defines:',
		type: 'multiple-choice',
		options: ['The programming language used', 'Inputs, execution conditions, and expected results', 'The developer who wrote the code', 'The deployment environment'],
		answer: 'Inputs, execution conditions, and expected results'
	},
	{
		area: 'testing',
		question: 'Security testing identifies:',
		type: 'multiple-choice',
		options: ['Performance bottlenecks', 'Usability issues', 'Vulnerabilities and attack vectors', 'Code smells'],
		answer: 'Vulnerabilities and attack vectors'
	},
	// Week 4 - Acceptance Testing
	{
		area: 'testing',
		question: 'Acceptance tests define what in Agile projects?',
		type: 'multiple-choice',
		options: ['Sprint length', 'Definition of Done (DoD)', 'Team velocity', 'Technical debt'],
		answer: 'Definition of Done (DoD)'
	},
	{
		area: 'testing',
		question: 'What percentage of Agile teams use acceptance tests to align software with business needs?',
		type: 'multiple-choice',
		options: ['60%', '70%', '80%', '90%'],
		answer: '80%'
	},
	{
		area: 'testing',
		question: 'Using Selenium in CI pipelines reduces testing time by:',
		type: 'multiple-choice',
		options: ['20%', '30%', '40%', '50%'],
		answer: '40%'
	},
	{
		area: 'testing',
		question: 'What does Lighthouse assess?',
		type: 'multiple-choice',
		options: ['Code syntax', 'Web performance, accessibility, SEO, and best practices', 'Database queries', 'Network security'],
		answer: 'Web performance, accessibility, SEO, and best practices'
	},
	{
		area: 'testing',
		question: 'Websites with high Lighthouse scores rank how much better in Google search?',
		type: 'multiple-choice',
		options: ['10%', '20%', '30%', '40%'],
		answer: '30%'
	},
	{
		area: 'testing',
		question: 'The W3C Validator checks:',
		type: 'multiple-choice',
		options: ['JavaScript performance', 'HTML and CSS compliance with web standards', 'Database integrity', 'Server response times'],
		answer: 'HTML and CSS compliance with web standards'
	},
	{
		area: 'testing',
		question: 'Validating code reduces cross-browser issues and improves accessibility by:',
		type: 'multiple-choice',
		options: ['10%', '20%', '30%', '40%'],
		answer: '20%'
	},
	{
		area: 'testing',
		question: 'What is the most common desktop browser resolution?',
		type: 'multiple-choice',
		options: ['1366x768', '1920x1080', '1280x720', '2560x1440'],
		answer: '1920x1080'
	},
	{
		area: 'testing',
		question: 'Pa11y and Axe help automate:',
		type: 'multiple-choice',
		options: ['Performance checks', 'Security scans', 'Accessibility checks', 'Load testing'],
		answer: 'Accessibility checks'
	},
	// Week 5 - User Testing
	{
		area: 'user-testing',
		question: 'According to Nielsen, the cost of fixing a usability issue post-launch can be up to how many times more?',
		type: 'multiple-choice',
		options: ['10 times', '50 times', '100 times', '200 times'],
		answer: '100 times'
	},
	{
		area: 'user-testing',
		question: 'What is A/B testing?',
		type: 'multiple-choice',
		options: ['Testing with two testers', 'Comparing two versions of a design', 'Testing alpha and beta versions', 'Testing accessibility and security'],
		answer: 'Comparing two versions of a design'
	},
	{
		area: 'user-testing',
		question: "What did Donald Norman's work show users build when using systems?",
		type: 'multiple-choice',
		options: ['Frustration', 'Mental models', 'Technical skills', 'Preferences'],
		answer: 'Mental models'
	},
	{
		area: 'user-testing',
		question: 'Task-based user testing simulates:',
		type: 'multiple-choice',
		options: ['Automated scripts', 'Actual usage scenarios', 'Stress conditions', 'Security attacks'],
		answer: 'Actual usage scenarios'
	},
	{
		area: 'user-testing',
		question: 'What does iterative testing involve?',
		type: 'multiple-choice',
		options: ['Testing once at the end', 'Regular user feedback loops to refine products', 'Automated testing only', 'Testing by developers only'],
		answer: 'Regular user feedback loops to refine products'
	},
	{
		area: 'user-testing',
		question: 'Remote user testing allows:',
		type: 'multiple-choice',
		options: ['Testing only in labs', 'Testing with users from anywhere', 'Automated testing', 'Testing without users'],
		answer: 'Testing with users from anywhere'
	},
	{
		area: 'user-testing',
		question: 'User personas help guide:',
		type: 'multiple-choice',
		options: ['Code reviews', 'User testing by representing real-world user groups', 'Automated testing', 'Database design'],
		answer: 'User testing by representing real-world user groups'
	},
	{
		area: 'user-testing',
		question: 'Why is testing in real-world contexts important?',
		type: 'multiple-choice',
		options: ['It is cheaper', 'It uncovers issues that lab testing might miss', 'It is faster', 'It requires fewer users'],
		answer: 'It uncovers issues that lab testing might miss'
	},
	// Week 6 - Version Control
	{
		area: 'version-control',
		question: 'What does git init do?',
		type: 'multiple-choice',
		options: ['Clones a repository', 'Initializes a new Git repository', 'Commits changes', 'Creates a branch'],
		answer: 'Initializes a new Git repository'
	},
	{
		area: 'version-control',
		question: 'What does git clone do?',
		type: 'multiple-choice',
		options: ['Creates a local copy of a remote repository', 'Initializes a new repository', 'Commits changes', 'Merges branches'],
		answer: 'Creates a local copy of a remote repository'
	},
	{
		area: 'version-control',
		question: 'What does git add do?',
		type: 'multiple-choice',
		options: ['Commits changes', 'Stages changes for the next commit', 'Pushes to remote', 'Creates a branch'],
		answer: 'Stages changes for the next commit'
	},
	{
		area: 'version-control',
		question: 'Git fetch does what?',
		type: 'multiple-choice',
		options: ['Downloads and merges changes', 'Downloads changes without merging', 'Uploads local commits', 'Deletes remote branches'],
		answer: 'Downloads changes without merging'
	},
	{
		area: 'version-control',
		question: 'Git pull is a combination of:',
		type: 'multiple-choice',
		options: ['Clone and push', 'Fetch and merge', 'Add and commit', 'Branch and checkout'],
		answer: 'Fetch and merge'
	},
	{
		area: 'version-control',
		question: 'Git pushing does what?',
		type: 'multiple-choice',
		options: ['Downloads changes', 'Uploads local commits to remote', 'Creates branches', 'Merges code'],
		answer: 'Uploads local commits to remote'
	},
	{
		area: 'version-control',
		question: 'Git branches allow:',
		type: 'multiple-choice',
		options: ['Deleting code permanently', 'Working on different features in parallel', 'Compiling code', 'Testing automatically'],
		answer: 'Working on different features in parallel'
	},
	{
		area: 'version-control',
		question: 'Git merging combines:',
		type: 'multiple-choice',
		options: ['Different repositories', 'Changes from different branches', 'Multiple commits into one', 'Test results'],
		answer: 'Changes from different branches'
	},
	{
		area: 'version-control',
		question: 'How many repositories are on GitHub?',
		type: 'multiple-choice',
		options: ['50 million', '100 million', '200 million', '500 million'],
		answer: '200 million'
	},
	{
		area: 'version-control',
		question: 'Subversion improved upon CVS by adding:',
		type: 'multiple-choice',
		options: ['Distributed version control', 'Atomic commits and better binary file handling', 'Cloud storage', 'AI-powered merging'],
		answer: 'Atomic commits and better binary file handling'
	},
	{
		area: 'version-control',
		question: 'Each Git commit has:',
		type: 'multiple-choice',
		options: ['A random name', 'A unique identifier and message', 'An automatic backup', 'A branch by default'],
		answer: 'A unique identifier and message'
	},
	{
		area: 'version-control',
		question: 'Git remotes are:',
		type: 'multiple-choice',
		options: ['Local backups', 'Copies of a repository hosted on a server', 'Deleted branches', 'Merge conflicts'],
		answer: 'Copies of a repository hosted on a server'
	},
	// Week 7 - Secure Programming
	{
		area: 'security',
		question: 'Sanitizing inputs prevents:',
		type: 'multiple-choice',
		options: ['Performance issues', 'A majority of injection attacks', 'Memory leaks', 'Code smells'],
		answer: 'A majority of injection attacks'
	},
	{
		area: 'security',
		question: 'Which RFC standards does PHP use for email validation?',
		type: 'multiple-choice',
		options: ['RFC 1234 and 5678', 'RFC 5321 and 5322', 'RFC 2616 and 7231', 'RFC 8000 and 9000'],
		answer: 'RFC 5321 and 5322'
	},
	{
		area: 'security',
		question: 'A deadlock in programming is when:',
		type: 'multiple-choice',
		options: ['A program crashes', 'Two or more threads wait for each other indefinitely', 'Memory is exhausted', 'The database is locked'],
		answer: 'Two or more threads wait for each other indefinitely'
	},
	{
		area: 'security',
		question: 'Docker uses what to deploy systems?',
		type: 'multiple-choice',
		options: ['Virtual machines', 'Containers that take a snapshot of a system', 'Cloud functions', 'Serverless architecture'],
		answer: 'Containers that take a snapshot of a system'
	},
	{
		area: 'security',
		question: 'What are leading causes of cloud breaches?',
		type: 'multiple-choice',
		options: ['Hardware failures', 'Misconfigurations', 'Power outages', 'Natural disasters'],
		answer: 'Misconfigurations'
	},
	{
		area: 'security',
		question: 'AES encryption is secure because:',
		type: 'multiple-choice',
		options: ['It uses simple passwords', 'The configuration makes brute force infeasible', 'It is fast', 'It does not require a key'],
		answer: 'The configuration makes brute force infeasible'
	},
	{
		area: 'security',
		question: 'AddressSanitizer helps identify:',
		type: 'multiple-choice',
		options: ['Network issues', 'Memory-related issues', 'Database errors', 'UI bugs'],
		answer: 'Memory-related issues'
	},
	// Week 8 - Usability Evaluation
	{
		area: 'user-testing',
		question: 'Heuristic evaluation uses:',
		type: 'multiple-choice',
		options: ['End users', 'Usability principles to identify problems', 'Automated scripts', 'Performance benchmarks'],
		answer: 'Usability principles to identify problems'
	},
	{
		area: 'user-testing',
		question: 'Cognitive walkthroughs evaluate:',
		type: 'multiple-choice',
		options: ['Code quality', 'Task flow based on user goals and system feedback', 'Performance metrics', 'Security vulnerabilities'],
		answer: 'Task flow based on user goals and system feedback'
	},
	{
		area: 'user-testing',
		question: 'Error rate in usability metrics should be:',
		type: 'multiple-choice',
		options: ['Higher is better', 'Lower is better', 'Around 50%', 'Not measured'],
		answer: 'Lower is better'
	},
	{
		area: 'user-testing',
		question: 'Eye-tracking studies analyze:',
		type: 'multiple-choice',
		options: ['Code syntax', 'User focus and navigation patterns', 'Database queries', 'Server logs'],
		answer: 'User focus and navigation patterns'
	},
	{
		area: 'user-testing',
		question: 'Net Promoter Score (NPS) measures:',
		type: 'multiple-choice',
		options: ['Code coverage', 'User loyalty based on likelihood to recommend', 'Page load time', 'Error rate'],
		answer: 'User loyalty based on likelihood to recommend'
	},
	{
		area: 'user-testing',
		question: 'Card sorting helps understand:',
		type: 'multiple-choice',
		options: ['Code structure', 'How users categorize and label information', 'Database organization', 'API design'],
		answer: 'How users categorize and label information'
	},
	{
		area: 'user-testing',
		question: 'Contextual inquiry involves:',
		type: 'multiple-choice',
		options: ['Lab testing', 'Observing users in their natural environment', 'Automated testing', 'Code review'],
		answer: 'Observing users in their natural environment'
	},
	{
		area: 'user-testing',
		question: 'Microinteractions are:',
		type: 'multiple-choice',
		options: ['Small bugs', 'Small design details that enhance user experience', 'Minimal code changes', 'Quick tests'],
		answer: 'Small design details that enhance user experience'
	},
	{
		area: 'user-testing',
		question: 'Progress indicators show users:',
		type: 'multiple-choice',
		options: ['Error messages', 'Their progress in multi-step tasks', 'System performance', 'Network status'],
		answer: 'Their progress in multi-step tasks'
	},
	{
		area: 'user-testing',
		question: 'Minimizing cognitive load means:',
		type: 'multiple-choice',
		options: ['Reducing file size', 'Reducing mental effort needed to use a system', 'Removing features', 'Simplifying code'],
		answer: 'Reducing mental effort needed to use a system'
	},
	// Week 9 - SOLID Principles Deep Dive
	{
		area: 'design-principles',
		question: 'The Interface Segregation Principle states:',
		type: 'multiple-choice',
		options: ['Interfaces should be as large as possible', 'Avoid forcing classes to implement unused interfaces', 'All classes need interfaces', 'Interfaces should be private'],
		answer: 'Avoid forcing classes to implement unused interfaces'
	},
	{
		area: 'design-principles',
		question: 'The Dependency Inversion Principle states:',
		type: 'multiple-choice',
		options: ['Low-level modules depend on high-level modules', 'High-level modules depend on abstractions, not details', 'All dependencies should be removed', 'Dependencies should be concrete'],
		answer: 'High-level modules depend on abstractions, not details'
	},
	{
		area: 'design-principles',
		question: 'Which anti-pattern involves unstructured and difficult-to-read code?',
		type: 'multiple-choice',
		options: ['God Object', 'Spaghetti Code', 'Golden Hammer', 'Copy-Paste Programming'],
		answer: 'Spaghetti Code'
	},
	{
		area: 'design-principles',
		question: 'The solution to spaghetti code is to:',
		type: 'multiple-choice',
		options: ['Add more comments', 'Modularize and use clear control flows', 'Use global variables', 'Add more functions'],
		answer: 'Modularize and use clear control flows'
	},
	{
		area: 'design-principles',
		question: 'Encapsulation means:',
		type: 'multiple-choice',
		options: ['Making all methods public', 'Restricting access to internal module details', 'Sharing all data globally', 'Removing private methods'],
		answer: 'Restricting access to internal module details'
	},
	{
		area: 'design-principles',
		question: 'Abstraction in software design:',
		type: 'multiple-choice',
		options: ['Exposes all implementation details', 'Simplifies complex details behind simple interfaces', 'Removes all functions', 'Makes code longer'],
		answer: 'Simplifies complex details behind simple interfaces'
	},
	{
		area: 'anti-patterns',
		question: 'Using parameterized queries in database code helps with:',
		type: 'multiple-choice',
		options: ['Performance only', 'Reducing redundancy and preventing SQL injection', 'Making queries longer', 'Database backup'],
		answer: 'Reducing redundancy and preventing SQL injection'
	},
	// Week 10 - Advanced Topics
	{
		area: 'testing',
		question: 'Exception handling uses:',
		type: 'multiple-choice',
		options: ['If-else statements', 'Try-except blocks', 'For loops', 'Global variables'],
		answer: 'Try-except blocks'
	},
	{
		area: 'testing',
		question: 'SonarQube is used for:',
		type: 'multiple-choice',
		options: ['Version control', 'Static code analysis', 'Database management', 'User testing'],
		answer: 'Static code analysis'
	},
	{
		area: 'testing',
		question: 'Design by Contract defines:',
		type: 'multiple-choice',
		options: ['Legal terms', 'Preconditions, postconditions, and invariants', 'User interfaces', 'Database schemas'],
		answer: 'Preconditions, postconditions, and invariants'
	},
	{
		area: 'testing',
		question: 'PyTest is a framework for:',
		type: 'multiple-choice',
		options: ['Web development', 'Unit testing in Python', 'Database queries', 'Version control'],
		answer: 'Unit testing in Python'
	},
	{
		area: 'testing',
		question: 'Accessibility testing ensures software is usable by:',
		type: 'multiple-choice',
		options: ['Developers only', 'People with disabilities', 'Automated scripts', 'Database administrators'],
		answer: 'People with disabilities'
	},
	{
		area: 'testing',
		question: 'WCAG stands for:',
		type: 'multiple-choice',
		options: ['Web Code Analysis Guidelines', 'Web Content Accessibility Guidelines', 'World Computer Access Group', 'Website Creation And Guidelines'],
		answer: 'Web Content Accessibility Guidelines'
	},
	{
		area: 'api-design',
		question: 'Peer code reviews help with:',
		type: 'multiple-choice',
		options: ['Automated testing', 'Code quality and team collaboration', 'Database design', 'User interface design'],
		answer: 'Code quality and team collaboration'
	},
	{
		area: 'api-design',
		question: 'Docstrings are used for:',
		type: 'multiple-choice',
		options: ['Compiling code', 'Documenting code functionality', 'Debugging', 'Version control'],
		answer: 'Documenting code functionality'
	},
	{
		area: 'mixed',
		question: 'What is technical debt?',
		type: 'multiple-choice',
		options: ['Money owed for software', 'Accumulated shortcuts that need future refactoring', 'Hardware costs', 'Training expenses'],
		answer: 'Accumulated shortcuts that need future refactoring'
	},
	{
		area: 'mixed',
		question: 'Graceful degradation refers to:',
		type: 'multiple-choice',
		options: ['Slow performance', 'Smooth recovery from errors with fallback mechanisms', 'Code deprecation', 'Database corruption'],
		answer: 'Smooth recovery from errors with fallback mechanisms'
	},
	{
		area: 'mixed',
		question: 'DevOps combines:',
		type: 'multiple-choice',
		options: ['Design and testing', 'Development and operations', 'Database and servers', 'Documentation and versioning'],
		answer: 'Development and operations'
	},
	// Mock Exam - Multiple Choice Questions
	{
		area: 'mixed',
		question: 'What is the primary goal of defensive coding?',
		type: 'multiple-choice',
		options: ['To make code more readable', 'To prevent errors from occurring in the first place', 'To make code more efficient', 'To make code more secure'],
		answer: 'To prevent errors from occurring in the first place'
	},
	{
		area: 'testing',
		question: 'Which is NOT a benefit of user testing?',
		type: 'multiple-choice',
		options: ['Identifying usability issues', 'Gathering feedback on design', 'Ensuring code is error-free', 'Understanding user needs'],
		answer: 'Ensuring code is error-free'
	},
	{
		area: 'version-control',
		question: 'What is the main purpose of version control?',
		type: 'multiple-choice',
		options: ['To track changes to code over time', 'To prevent unauthorized access', 'To compile code', 'To deploy code to production'],
		answer: 'To track changes to code over time'
	},
	{
		area: 'testing',
		question: 'In TDD, what comes first?',
		type: 'multiple-choice',
		options: ['Write code first, then tests', 'Write tests first, then code', 'Write tests and code simultaneously', 'Do not write any tests'],
		answer: 'Write tests first, then code'
	},
	{
		area: 'design-principles',
		question: 'Which SOLID principle reduces impact of changes by being open for extension but closed for modification?',
		type: 'multiple-choice',
		options: ['Single Responsibility Principle', 'Open/Closed Principle', 'Liskov Substitution Principle', 'Interface Segregation Principle'],
		answer: 'Open/Closed Principle'
	},
	{
		area: 'design-principles',
		question: 'A common approach to achieving loose coupling is:',
		type: 'multiple-choice',
		options: ['Using global variables', 'Defining clear interfaces', 'Tightly integrating modules', 'Sharing data directly between modules'],
		answer: 'Defining clear interfaces'
	},
	{
		area: 'version-control',
		question: 'In version control, what is a branch used for?',
		type: 'multiple-choice',
		options: ['Deleting old code', 'Storing the main version', 'Creating an independent line of development', 'Merging different versions'],
		answer: 'Creating an independent line of development'
	},
	{
		area: 'testing',
		question: 'Which is NOT a type of software testing?',
		type: 'multiple-choice',
		options: ['Unit testing', 'Integration testing', 'User acceptance testing', 'Compilation testing'],
		answer: 'Compilation testing'
	},
	// Additional design principle questions
	{
		area: 'design-principles',
		question: 'What does "portability" mean in software design?',
		type: 'multiple-choice',
		options: ['Code runs fast', 'Design is transferable to other platforms', 'Code is small in size', 'Code is well documented'],
		answer: 'Design is transferable to other platforms'
	},
	{
		area: 'design-principles',
		question: 'What does "extensibility" mean in software design?',
		type: 'multiple-choice',
		options: ['Code can be deleted easily', 'Changes in one part should not affect other parts', 'Code runs on multiple platforms', 'Code has many features'],
		answer: 'Changes in one part should not affect other parts'
	},
	{
		area: 'design-principles',
		question: 'What does "reusability" mean in software design?',
		type: 'multiple-choice',
		options: ['Code should be reusable in other systems', 'Code should be rewritten frequently', 'Code should be copied manually', 'Code should only work in one project'],
		answer: 'Code should be reusable in other systems'
	},
	{
		area: 'design-principles',
		question: 'Microservices architecture means:',
		type: 'multiple-choice',
		options: ['Everything in one codebase', 'Application split into small, independent services', 'Only using small functions', 'Minimal code documentation'],
		answer: 'Application split into small, independent services'
	},
	{
		area: 'design-principles',
		question: '3-tier architecture typically includes:',
		type: 'multiple-choice',
		options: ['Three developers', 'UI, Business Logic, and Database layers', 'Three testing phases', 'Three programming languages'],
		answer: 'UI, Business Logic, and Database layers'
	},
	// TDD specific questions
	{
		area: 'testing',
		question: 'The TDD cycle is also known as:',
		type: 'multiple-choice',
		options: ['Build-Test-Deploy', 'Red-Green-Refactor', 'Write-Run-Fix', 'Code-Review-Merge'],
		answer: 'Red-Green-Refactor'
	},
	{
		area: 'testing',
		question: 'In the TDD "Red" phase, you:',
		type: 'multiple-choice',
		options: ['Write passing tests', 'Write a failing test', 'Refactor code', 'Delete tests'],
		answer: 'Write a failing test'
	},
	{
		area: 'testing',
		question: 'In the TDD "Green" phase, you:',
		type: 'multiple-choice',
		options: ['Write failing tests', 'Write minimal code to make the test pass', 'Refactor code', 'Add more tests'],
		answer: 'Write minimal code to make the test pass'
	},
	{
		area: 'testing',
		question: 'In the TDD "Refactor" phase, you:',
		type: 'multiple-choice',
		options: ['Write new tests', 'Delete tests', 'Improve code structure without changing behavior', 'Skip testing'],
		answer: 'Improve code structure without changing behavior'
	},
	{
		area: 'testing',
		question: 'JUnit is a testing framework for:',
		type: 'multiple-choice',
		options: ['Python', 'JavaScript', 'Java', 'C++'],
		answer: 'Java'
	},
	{
		area: 'testing',
		question: 'Code coverage measures:',
		type: 'multiple-choice',
		options: ['Lines of code written', 'How much code is executed by tests', 'Number of developers', 'Time to run tests'],
		answer: 'How much code is executed by tests'
	},
	// Quotes and Philosophy
	{
		area: 'mixed',
		question: 'Who said "Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away"?',
		type: 'multiple-choice',
		options: ['Steve Jobs', 'Antoine de Saint-Exupéry', 'Aristotle', 'Confucius'],
		answer: 'Antoine de Saint-Exupéry'
	},
	{
		area: 'mixed',
		question: 'Who said "The whole is greater than the sum of its parts"?',
		type: 'multiple-choice',
		options: ['Plato', 'Socrates', 'Aristotle', 'Confucius'],
		answer: 'Aristotle'
	},
	{
		area: 'mixed',
		question: 'Who said "The best is the enemy of the good"?',
		type: 'multiple-choice',
		options: ['Voltaire', 'Rousseau', 'Descartes', 'Pascal'],
		answer: 'Voltaire'
	},
	{
		area: 'mixed',
		question: 'Who said "Code is like humor. When you have to explain it, it is bad"?',
		type: 'multiple-choice',
		options: ['Martin Fowler', 'Robert Martin', 'Cory House', 'Kent Beck'],
		answer: 'Cory House'
	},
	{
		area: 'mixed',
		question: 'Who said "Design is not just what it looks like. Design is how it works"?',
		type: 'multiple-choice',
		options: ['Bill Gates', 'Steve Jobs', 'Elon Musk', 'Jeff Bezos'],
		answer: 'Steve Jobs'
	}
] as const;

export { StaticAssets };
export { QuizQuestions };
export { lastUpdated };
