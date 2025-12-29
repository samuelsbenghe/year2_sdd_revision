const lastUpdated: Date = new Date(2025, 11, 29);

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
	}
] as const;

export { StaticAssets };
export { QuizQuestions };
export { lastUpdated };
