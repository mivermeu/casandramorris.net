import type { Experience } from '$lib/types';
import { cern, nikhef, university_of_houston } from '$lib/data/companies';

export const education: Experience[] = [
	{
		title: 'IBM Data Science Certification',
		companies: [],
		startDate: new Date(2024, 11),
		endDate: new Date(2025, 1),
		description: ''
	},
	{
		title: 'Master of Science in Physics',
		companies: [university_of_houston, cern, nikhef],
		startDate: new Date(2015, 8),
		endDate: new Date(2018, 5),
		description: ''
	},
	{
		title: 'Bachelor of Science in Physics',
		companies: [university_of_houston],
		startDate: new Date(2011, 8),
		endDate: new Date(2015, 5),
		description: ''
	}
];
