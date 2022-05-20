import { writable } from 'svelte/store';

export let nflCoverage = writable([
	{
		"AMERICAN FOOTBALL": "NFL"
	},
	{
		"AMERICAN FOOTBALL": "NFL 1st Half"
	},
]);

export let nbaCoverage = writable([
	{
		"AMERICAN HOOPS": "NBA"
	},
]);

export let mlbCoverage = writable([
	{
		"AMERICAN BASEBALL": "MLB"
	},
]);

export let nflPropsCoverage = writable([
	{
		"PRO FOOTBALL - PROPS AND FUTURES": "NFL SUPERBOWL WINNER"
	},
]);

