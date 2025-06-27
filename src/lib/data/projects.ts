import Assets from './assets';
import { getSkills } from './skills';
import type { Project } from '../types';

export const items: Array<Project> = [
	// {
	// 	slug: 'Auto-Updating Stock Visualization'
	// 	links: [{to: 'https://anish-aws-bucket.s3.us-east-2.amazonaws.com/bank_data_boxplot.png'}]
	// }
	{
		//change this to the aws project you worked on, apply this link:
		// <img src="https://anish-aws-bucket.s3.us-east-2.amazonaws.com/bank_data_boxplot.png">
		//Note: In a real image embedded on a website, it would be important to include an alt tag for accessibility purposes
		slug: 'cloud-powered-stock-analysis',
		color: 'orange',
		description:
			'Developed an automated pipeline using Pandas, Matplotlib, and the Twelve Data API to retrieve, process, and visualize five years of stock market data with 98% data consistency. Integrated AWS S3 & EC2 for seamless cloud integration and real-time visualization updates, reducing latency by 50%. Enhanced predictive modeling to inform decisions, boosting decision-making efficiency by 30%.',
		shortDescription:
			'Automated cloud-based stock data pipeline (Python, AWS) with real-time visualizations.',
		links: [{ to: 'https://github.com/AnishKanade/Cloud-Powered-Auto-Updating-Visualizations', label: 'GitHub' }], // Replace with your actual GitHub link
		logo: Assets.AWS, // Change to appropriate asset if available
		name: 'Cloud-Powered Stock Analysis',
		period: {
			from: new Date(2025, 3), // Assuming this is January 2023
			to: new Date(2025, 4) // Assuming this is April 2023
		},
		skills: getSkills('python', 'pandas', 'matplotlib', 'aws'),// Include relevant skills
		type: 'Data Analytics (Cloud)'
	},
	// Frontend Development for HikeMate Website
	{
		slug: 'frontend-hikemate',
		color: 'purple',
		description:
			'Designed and implemented responsive web components for HikeMate using React, CSS, and JavaScript, reducing layout-related support tickets by 35%. Refactored front-end code to improve maintainability and reduce development time by 5%. Collaborated in an Agile/Scrum environment, improving task completion rates by 23%.',
		shortDescription:
			'Responsive frontend for HikeMate (React, CSS, JS) with Agile collaboration.',
		links: [{ to: 'https://github.com/AnishKanade/hikemate', label: 'GitHub' }],
		logo: Assets.ReactJs,
		name: 'HikeMate Frontend',
		period: {
			from: new Date(2024, 10),
			to: new Date(2024, 12)
		},
		skills: getSkills('reactjs', 'css', 'javascript'),
		type: 'Web Application'
	},

	// Bank Churn Analysis
	{
		slug: 'bank-churn-analysis',
		color: '#33cc33',
		description:
			'Conducted an in-depth customer churn analysis using Python, Pandas, Matplotlib, and Scikit-learn. Preprocessed raw data, handled missing values, and engineered features, improving model performance by 10%. Developed predictive models that recommended actions to stakeholders, reducing churn by 15%.',
		shortDescription:
			'Customer churn analysis with predictive modeling (Python, Scikit-learn).',
		links: [{ to: '', label: 'GitHub' }],
		logo: Assets.Python,
		name: 'Bank Churn Analysis',
		period: {
			from: new Date(2024, 9),
			to: new Date(2024, 11)
		},
		skills: getSkills('python', 'pandas', 'matplotlib', 'scikit-learn'),
		type: 'Data Science'
	},
	{
		slug: 'halal-hustler',
		color: '#5e95e3',
		description:
			'Halal Hustler is an engaging PC game developed using Unity, inspired by the popular mobile game Crossy Road. In this family-friendly game, players navigate an avatar through a challenging environment filled with various obstacles and hazards, with the objective of reaching the other side safely while achieving the longest survival time for higher scores. This project showcases quick and addictive gameplay mechanics that appeal to players of all ages.',
		shortDescription:
			'Developed a Unity-based PC game inspired by Crossy Road, featuring engaging gameplay and competitive scoring.',
		links: [{ to: 'https://github.com/AnishKanade/Halal-Hustlers', label: 'GitHub' }], // Replace with your actual GitHub link
		logo: Assets.Csharp, // Change to appropriate asset if available
		name: 'Halal Hustler',
		period: {
			from: new Date(2023, 0), // Assuming this is January 2023
			to: new Date(2023, 3) // Assuming this is April 2023
		},
		skills: getSkills('Unity', 'C#', 'game-development'), // Include relevant skills
		type: 'PC Game'
	},
	{
		slug: 'percolation',
		color: 'yellow',
		description:
			'Analyzed and solved complex percolation problems in Java by applying scientific principles to model and study percolation phenomena.',
		shortDescription:
			'Developed a Java application to model percolation and analyze data visualizations.',
		links: [{ to: 'https://github.com/AnishKanade/Percolation', label: 'GitHub' }], // Replace with your actual GitHub link
		logo: Assets.Java,
		name: 'Percolation Model',
		period: {
			from: new Date(2022, 3), // Assuming this is April 2022
			to: new Date(2022, 4) // Assuming this is May 2022
		},
		skills: getSkills('java', 'data-analysis', 'visualization'), // Update skills as appropriate
		type: 'Java Application'
	},
	{
		slug: 'markov-model',
		color: 'darkgreen',
		description:
			'Developed a Python-based first-order Markov model capable of predicting text sequences using probability transition matrices.',
		shortDescription:
			'Created a Markov model in Python for natural language processing.',
		links: [{ to: 'https://github.com/yourusername/markov-model', label: 'GitHub' }], // Replace with your actual GitHub link
		logo: Assets.Python,
		name: 'Markov Model',
		period: {
			from: new Date(2021, 9), // Assuming this is October 2021
			to: new Date(2021, 10) // Assuming this is November 2021
		},
		skills: getSkills('python', 'numpy', 'data-analysis'), // Update skills as appropriate
		type: 'Python Application'
	},
	{
		slug: 'ambient-lights',
		color: 'red',
		description:
			'Designed and implemented a custom ambient lighting system using Arduino microcontrollers.',
		shortDescription:
			'Created an Arduino-based ambient lighting system that adapts to environmental conditions.',
		links: [{ to: '', label: 'GitHub' }], // Replace with your actual GitHub link
		logo: Assets.Unknown, // Change to appropriate asset if available
		name: 'Ambient Lights System',
		period: {
			from: new Date(2021, 0), // January 2021
			to: new Date(2021, 3) // Assuming this is April 2021
		},
		skills: getSkills('arduino microcontrollers', 'c', 'embedded-systems'), // Update skills as appropriate
		type: 'Embedded Systems Project'
	}
];

export const title = 'Projects';
