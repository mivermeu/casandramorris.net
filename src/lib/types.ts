import type { icons } from '$lib/data/icons';
import type { Component } from 'svelte';

export type Skill = {
	name: string;
	strength: number;
	icon: Component | null;
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
	startDate: Date;
	endDate: Date | null;
	description: string;
};
