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
		startDate: new Date('2017-01-01'),
		endDate: new Date('2022-01-01'),
		description:
			'Constructed a liquid argon purity monitor, performed data analysis on large particle data sets.'
	},
	{
		title: 'Server',
		companies: [hobbit_cafe, clara, noi_due_carne],
		startDate: new Date('2010-01-01'),
		endDate: null,
		description:
			'Originally a way to pay for college, this line of work has made me a customer service expert.'
	}
];
