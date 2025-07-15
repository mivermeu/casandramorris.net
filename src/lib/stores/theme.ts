import { browser } from '$app/environment';
import { writable } from 'svelte/store';

const defaultTheme: 'light' | 'dark' = 'dark';
export const theme = writable<'light' | 'dark'>(defaultTheme);

// Only run this in the browser
if (browser) {
	const saved = localStorage.getItem('theme') as 'light' | 'dark' | null;
	const initial = saved === 'dark' ? 'dark' : 'light';
	theme.set(initial);

	theme.subscribe((value) => {
		localStorage.setItem('theme', value);
		document.documentElement.classList.toggle('dark', value === 'dark');
	});
}
