import Assets from './assets';
import type { Education } from '../types';

export const items: Array<Education> = [
    {
        degree: 'Bachelor of Science in Computer Science',
        description: 'High School',
        location: 'Boston, MA',
        logo: Assets.UMB, // Replace with appropriate asset if available
        name: '',
        organization: 'University of Massachusetts Boston',
        period: { from: new Date(2021, 5, 1), to: new Date(2025, 5, 29) }, // Adjust dates if necessary
        shortDescription: '',
        slug: 'umb-computer-science',
        subjects: [
            'Introduction to Computing', 
            'Intermediate Computing with Data Structures',
            'Applied Discrete Mathematics',
            'Programming in C',
            'Advanced Data Structures and Algorithm',
            'Computer Architecture and Organization',
            'Database Management',
			'Introduction to Theory of Computation',
			'Computer Game Programming',
            'Artificial Intelligence',
            'Introduction to Software Engineering',
			'Higher Level Languages',
            'Theory of Computation',
			'Compilers',
            'Calculus',
            'Linear Algebra',
            'Probability and Statistics',
            'Calculus Based Physics',
            'Physics Lab'
			
        ]
    },
    {
        degree: 'Rindge School of Technical Arts - Computer Science Program',
        description: '',
        location: 'Cambridge, MA',
        logo: Assets.CRLS, // Replace with appropriate asset if available
        name: '',
        organization: 'Cambridge Rindge and Latin High School',
        period: { from: new Date(2017, 8, 1), to: new Date(2021, 7, 31) }, 
        shortDescription: '',
        slug: 'rindge-computer-science',
        subjects: [
            'Web Development', 
            'Applied Computer Science Principles', 
            'Artificial Intelligence',
            'Machine Learning'
        ]
    }
];

export const title = 'Education';

