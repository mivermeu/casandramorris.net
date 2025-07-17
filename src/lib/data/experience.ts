import type { Experience } from '$lib/types';
import {
	cern,
	university_of_houston,
	hobbit_cafe,
	clara,
	noi_due_carne
} from '$lib/data/companies';

export const experience: Experience[] = [
	{
		title: 'Particle Physicist',
		companies: [university_of_houston, cern],
		startDate: new Date(2018, 1, 1),
		endDate: new Date(2024, 1, 1),
		description:
			'Designed precision instrumentation to keep liquid argon pure and used data science to uncover what collided inside it.'
	},
	{
		title: 'Manager',
		companies: [hobbit_cafe, clara],
		startDate: new Date(2020, 1, 1),
		endDate: null,
		description:
			'Master of menus, moods, and making sure the place didn’t burn down (figuratively).'
	},
	{
		title: 'Server',
		companies: [hobbit_cafe, clara, noi_due_carne],
		startDate: new Date(2010, 1, 1),
		endDate: null,
		description:
			'Welcomed guests with warmth and ensured smooth, enjoyable dining experiences from start to finish.'
	}
];
