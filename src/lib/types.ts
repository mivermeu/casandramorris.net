import type { icons } from '$lib/data/icons';

export type Skill = {
	name: string;
	strength: number;
};

export type Social = {
	name: string;
	icon: keyof typeof icons;
	link: string;
};

export type Company = {
	name: string;
	link: string;
};

export type Experience = {
	title: string;
	companies: Company[];
	startDate: string;
	endDate: string | null;
	description: string;
};
