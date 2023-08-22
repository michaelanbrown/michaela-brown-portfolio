import emoji from "react-easy-emoji";

export const greetings = {
	name: "Michaela Brown",
	title: "Hi! I'm Michaela",
	description:
		"I am new to Software Engineering and love everything I have been learning so far! My goals are to be able to expand my knowledge on all things Software Engineering and build a name for myself. I am so excited for what is in store!",
	resumeLink:
		"https://docs.google.com/document/d/18LF08JQXPDsjicF55_HHio9V16GpsOHK-59wzYjArsI/edit?usp=sharing",
};

export const openSource = {
	githubUserName: "michaelanbrown",
};

export const contact = {};

export const socialLinks = {
	linkedin: "https://www.linkedin.com/in/michaela-n-brown/",
	github: "https://github.com/michaelanbrown",
};

export const skillsSection = {
	title: "What I do",
	subTitle:
		"ENTHUSIASTIC SOFTWARE ENGINEER HOPING TO GAIN ALL THE KNOWLEDGE",
	data: [
		{
			title: "Software Engineer",
			lottieAnimationFile: "/lottie/skills/fullstack.json", // Path of Lottie Animation JSON File
			skills: [
				emoji(
					"⚡ Building responsive Single-Page-Apps (SPA) in React.js"
				),
				emoji("⚡ Creating features to enhance the user experience using CSS, HTML, and React.js"),
				emoji(
					"⚡ Form the building blocks of webpages to support user needs and functionality"
				),
			],
			softwareSkills: [
				
			],
		},
		{
			title: "Data Analysis",
			lottieAnimationFile: "/lottie/skills/ethereum.json", // Path of Lottie Animation JSON File
			skills: [
				emoji(
					"⚡ Build reports utilizing SQL Server Management Studio and Databricks SQL Querying"
				),
				emoji(
					"⚡ Make changes to existing reports causing processes to be expedited"
				),
				emoji(
					"⚡ Utilize different functions and features in Microsoft Excel to record ongoing progress on master spreadsheets"
				),
				emoji(
					"⚡ Proficient use of databases such as Encompass, Velocify, SalesForce, and SalesScreen"
				),
			],
			softwareSkills: [
				
			],
		},
	],
};

export const SkillBars = [
	{
		Stack: "Frontend/Design", //Insert stack or technology you have experience in
		progressPercentage: "70", //Insert relative proficiency in percentage
	},
	{
		Stack: "Backend",
		progressPercentage: "50",
	},
	{
		Stack: "Programming",
		progressPercentage: "60",
	},
];

export const educationInfo = [
	{
		schoolName: "Flatiron School",
		subHeader: "Software Engineering Flex Program",
		duration: "October 2022 - Current",
		desc: "Completed the course in record time",
		grade: "Grade A",
		descBullets: [
			"Managed a full-time job, family, friends, activity, and school",
			"Developed a love for computers and software",
		],
	},
];

export const experience = [
	{
		role: "Strategic Soltuions Specialist",
		company: "GoodLeap",
		companylogo: "/img/icons/goodleap.PNG",
		date: "December 2020 - Current",
		desc: "I utilize SQL Server Management Studio and Databricks querying to build new reports and make edits on exisitng reports in order to promote increased efficiency within our sales department.",
	},
];

export const projects = [
	{
		name: "Michaela's Activity Randomizer (MARS)",
		desc: "Vanilla JavaScript project designed to help you decide an activity to do when bored!",
		github: "https://github.com/michaelanbrown/Phase-1-Project",
		link: "https://mars-michaelas-activity-randomizer.netlify.app/",
	},
	{
		name: "Travel Station",
		desc: "React.js and CSS are used to display destinations my boyfriend and I have traveled to, future travel plans, and core memories from each location.",
		github: "https://github.com/michaelanbrown/Travel-Station",
		link: "https://travel-station.netlify.app/"
	},
];

export const feedbacks = [
	{
		name: "TBD",
		feedback:
			"TBD",
	},
];

// option to hide or show the ContactUs component
export const showContactUs = false;

// See object prototype on SEO.jsx page
export const seoData = {
	title: "Michaela Brown",
	description:
		"I am new to Software Engineering and love everything I have been learning so far! My goals are to be able to expand my knowledge on all things Software Engineering and build a name of myself. I am so excited for what is in store!",
	author: "Michela Brown",
	image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTpGVwAbTU4S94tNBDLDlrKdEe_AQ9EVLBGolnuUxswA&s",
	keywords: [
		"Michaela",
		"Michaela Brown",
		"@michaelanbrown",
		"michaelanbrown",
		"Portfolio",
		"Michaela Portfolio ",
		"Michaela Brown Portfolio",
	],
}
