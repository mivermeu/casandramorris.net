import type { Experience } from '$lib/types';
import { cern, nikhef, university_of_houston } from '$lib/data/companies';

export const education: Experience[] = [
	{
		title: 'IBM Data Science Course',
		companies: [],
		startDate: new Date(2022, 8),
		endDate: new Date(2023, 5),
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
		startDate: new Date(2010, 8),
		endDate: new Date(2015, 5),
		description: ''
	}
];
