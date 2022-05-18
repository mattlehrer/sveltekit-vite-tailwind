import { writable } from 'svelte/store';
	
export let nflCoverage = writable([
	{
		"AMERICAN FOOTBALL": "NFL",	
	},
	{
		"AMERICAN FOOTBALL": "NFL 1st Half",
	},
]);

export let nbaCoverage = writable([
	{
		"AMERICAN HOOPS": "NBA",
	},
])

