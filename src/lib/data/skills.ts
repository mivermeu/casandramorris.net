import type { Skill } from '$lib/types';
import {
	Atom,
	BrainCircuit,
	ChartColumnBig,
	Database,
	HandPlatter,
	Users,
	Worm
} from '@lucide/svelte';

export const skills: Skill[] = [
	{
		name: 'Physics',
		icon: Atom,
		strength: 10
	},
	{
		name: 'Python',
		icon: Worm,
		strength: 8
	},
	{
		name: 'SQL',
		icon: Database,
		strength: 8
	},
	{
		name: 'Data Science',
		icon: ChartColumnBig,
		strength: 8
	},
	{
		name: 'Machine Learning and AI',
		icon: BrainCircuit,
		strength: 8
	},
	{
		name: 'Hospitality',
		icon: HandPlatter,
		strength: 10
	},
	{
		name: 'Management',
		icon: Users,
		strength: 8
	}
];
