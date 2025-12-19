const lastUpdated: Date = new Date('2024-12-19T00:00:00Z');

const StaticAssets = {
	Week1Lecture: '/assets/week1_lecture.pdf',
	Week2Lecture: '/assets/week2_lecture.pdf',
	Week2Lab: '/assets/week2_lab.pdf',
	Week2LabAnswers: '/assets/week2_lab_answers.pdf',
	// Images
	MoodleLogo: '/assets/logos/moodle.ico',
	PDFLogo: '/assets/logos/pdf.png',
	DigitalOceanLogo: '/assets/logos/digitalocean.png',
	PragProgLogo: '/assets/logos/pragprog.ico'
} as const;

export { StaticAssets };
export { lastUpdated };
