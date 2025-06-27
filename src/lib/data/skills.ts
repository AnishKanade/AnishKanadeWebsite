import Assets from './assets';
import type { Skill, SkillCategory } from '../types';
import { omit, type StringWithAutoComplete } from '@riadh-adrani/utils';

const defineSkillCategory = <S extends string>(data: SkillCategory<S>): SkillCategory<S> => data;

const categories = [
	defineSkillCategory({ name: 'Programming Languages', slug: 'pro-lang' }),
	defineSkillCategory({ name: 'Frameworks', slug: 'framework' }),
	defineSkillCategory({ name: 'Libraries', slug: 'library' }),
	defineSkillCategory({ name: 'Cloud', slug: 'cloud' }),
	defineSkillCategory({ name: 'DevOps', slug: 'devops' }),
	defineSkillCategory({ name: 'Databases', slug: 'db' }),
	defineSkillCategory({ name: 'Testing', slug: 'test' }),
	defineSkillCategory({ name: 'Dev Tools', slug: 'devtools' }),
	defineSkillCategory({ name: 'Markup & Style', slug: 'markup-style' }),
	defineSkillCategory({ name: 'Mobile Development', slug: 'mobile-dev' }),
	defineSkillCategory({ name: 'Soft Skills', slug: 'soft' })
] as const;

const defineSkill = <S extends string>(
	skill: Omit<Skill<S>, 'category'> & {
		category?: StringWithAutoComplete<(typeof categories)[number]['slug']>;
	}
): Skill<S> => {
	const out: Skill<S> = omit(skill, 'category');

	if (skill.category) {
		out.category = categories.find((it) => it.slug === skill.category);
	}

	return out;
};

export const items = [
	// Programming Languages
	defineSkill({ slug: 'python', color: 'blue', description: 'Python language for software development and data science.', logo: Assets.Python, name: 'Python', category: 'pro-lang' }),
	defineSkill({ slug: 'javascript', color: 'yellow', description: 'JavaScript for web development.', logo: Assets.JavaScript, name: 'JavaScript', category: 'pro-lang' }),
	defineSkill({ slug: 'typescript', color: 'blue', description: 'TypeScript for strongly typed JavaScript applications.', logo: Assets.TypeScript, name: 'TypeScript', category: 'pro-lang' }),
	defineSkill({ slug: 'c', color: 'green', description: 'C programming language for low-level system programming.', logo: Assets.C, name: 'C', category: 'pro-lang' }),
	defineSkill({ slug: 'cpp', color: 'blue', description: 'C++ for performance-intensive applications.', logo: Assets.Cpp, name: 'C++', category: 'pro-lang' }),
	defineSkill({ slug: 'C#', color: 'cyan', description: 'Go programming language for backend services.', logo: Assets.Csharp, name: 'C#', category: 'pro-lang' }),
	defineSkill({ slug: 'java', color: 'red', description: 'Java for cross-platform applications.', logo: Assets.Java, name: 'Java', category: 'pro-lang' }),
	
	// Frameworks / Frontend
	defineSkill({ slug: 'reactjs', color: 'cyan', description: 'React for building interactive web applications.', logo: Assets.ReactJs, name: 'ReactJS', category: 'framework' }),
	defineSkill({ slug: 'svelte', color: 'orange', description: 'Svelte for lightweight frontend frameworks.', logo: Assets.Svelte, name: 'Svelte', category: 'framework' }),
	defineSkill({ slug: 'django', color: 'green', description: 'Django for high-level Python web applications.', logo: Assets.Django, name: 'Django', category: 'framework' }),
	defineSkill({ slug: 'Bootstrap', color: 'green', description: 'Bootstrap open-source framework for building websites and web apps.', logo: Assets.Bootstrap, name: 'Bootstrap', category: 'framework' }),
	//defineSkill({ slug: 'expressjs', color: 'green', description: 'Express.js for Node.js web applications.', logo: Assets.ExpressJs, name: 'ExpressJS', category: 'framework' }),

	// Libraries / Data Science
	defineSkill({ slug: 'numpy', color: 'blue', description: 'NumPy for scientific computing in Python.', logo: Assets.Numpy, name: 'NumPy', category: 'library' }),
	defineSkill({ slug: 'pandas', color: 'teal', description: 'Pandas for data manipulation in Python.', logo: Assets.Pandas, name: 'Pandas', category: 'library' }),
	defineSkill({ slug: 'matplolib', color: 'navy', description: 'Matplotlib for data visualization in Python', logo: Assets.Unknown, name: 'Matplotlib', category: 'library' }),
	defineSkill({ slug: 'scikit-learn', color: 'green', description: 'Scikit-learn for machine learning in Python.', logo: Assets.Unknown, name: 'Scikit-learn', category: 'library' }),
	// Cloud
	defineSkill({ slug: 'aws', color: 'orange', description: 'Amazon Web Services for cloud infrastructure.', logo: Assets.AWS, name: 'AWS', category: 'cloud' }),
	defineSkill({ slug: 'gcp', color: 'green', description: 'Google Cloud Platform for scalable cloud services.', logo: Assets.Unknown, name: 'GCP', category: 'cloud' }),

	// Databases
	defineSkill({ slug: 'SQL', color: 'green', description: 'SQl Database.', logo: Assets.Unknown, name: 'SQL', category: 'db' }),
	defineSkill({ slug: 'postgresql', color: 'blue', description: 'PostgreSQL for relational databases.', logo: Assets.PostgreSQL, name: 'PostgreSQL', category: 'db' }),

	// DevOps
	defineSkill({ slug: 'docker', color: 'blue', description: 'Docker for containerization.', logo: Assets.Docker, name: 'Docker', category: 'devops' }),
	defineSkill({ slug: 'kubernetes', color: 'blue', description: 'Kubernetes for orchestration.', logo: Assets.Kubernetes, name: 'Kubernetes', category: 'devops' }),
	
	
/*
	// Testing
	defineSkill({ slug: 'jest', color: 'green', description: 'Jest for JavaScript testing.', logo: Assets.Jest, name: 'Jest', category: 'test' }),
*/
	// Markup & Style
	defineSkill({ slug: 'html', color: 'orange', description: 'HTML for web page structure.', logo: Assets.HTML, name: 'HTML', category: 'markup-style' }),
	defineSkill({ slug: 'css', color: 'blue', description: 'CSS for web design.', logo: Assets.CSS, name: 'CSS', category: 'markup-style' }),
	//defineSkill({ slug: 'sass', color: 'pink', description: 'Sass for styling extensions.', logo: Assets.Sass, name: 'Sass', category: 'markup-style' }),

/*	// Mobile Development
	defineSkill({ slug: 'flutter', color: 'blue', description: 'Flutter for mobile app development.', logo: Assets.Flutter, name: 'Flutter', category: 'mobile-dev' }),
	defineSkill({ slug: 'android', color: 'green', description: 'Android development for mobile applications.', logo: Assets.Android, name: 'Android', category: 'mobile-dev' }),
*/
	// Node.js
	defineSkill({
		slug: 'nodejs',
		color: 'green',
		description: 'Node.js for building scalable backend services.',
		logo: Assets.NodeJs,
		name: 'Node.js',
		category: 'framework'
	})
] as const;

export const title = 'Skills';

export const getSkills = (
	...slugs: Array<StringWithAutoComplete<(typeof items)[number]['slug']>>
): Array<Skill> => items.filter((it) => slugs.includes(it.slug));

export const groupByCategory = (
	query: string
): Array<{ category: SkillCategory; items: Array<Skill> }> => {
	const out: ReturnType<typeof groupByCategory> = [];

	const others: Array<Skill> = [];

	items.forEach((item) => {
		if (query.trim() && !item.name.toLowerCase().includes(query.trim().toLowerCase())) return;

		// push to others if item does not have a category
		if (!item.category) {
			others.push(item);
			return;
		}

		// check if category exists
		let category = out.find((it) => it.category.slug === item.category?.slug);

		if (!category) {
			category = { items: [], category: item.category };

			out.push(category);
		}

		category.items.push(item);
	});

	if (others.length !== 0) {
		out.push({ category: { name: 'Others', slug: 'others' }, items: others });
	}

	return out;
};
