const lastUpdated: Date = new Date('2024-12-21T00:00:00Z');

const StaticAssets = {
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
	// Images
	MoodleLogo: '/assets/logos/moodle.ico',
	PDFLogo: '/assets/logos/pdf.png',
	DigitalOceanLogo: '/assets/logos/digitalocean.png',
	PragProgLogo: '/assets/logos/pragprog.ico',
	SeleniumLogo: 'https://www.selenium.dev/images/selenium_logo_square_green.png',
	JUnitLogo: 'https://junit.org/assets/img/junit-diamond.png',
	W3SchoolsLogo: 'https://www.w3schools.com/favicon.ico'
} as const;

export { StaticAssets };
export { lastUpdated };
