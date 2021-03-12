<script>
	import { onMount } from 'svelte';

	let darkMode;
	{
		(''); // keep something to prevent Vite empty block sourcemap bug
	}

	onMount(() => {
		const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

		if (prefersDarkScheme.matches) {
			darkMode = true;
			console.log({ darkMode });
			document.documentElement.classList.add('dark');
		}
	});

	function toggleDarkMode() {
		console.log({ darkMode });
		if (!document) return;
		if (darkMode) {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
	}
</script>

<nav class="flex justify-between px-8 my-4 underline dark:text-gray-50">
	<section class="space-x-6">
		<a href="/">Home</a>
		<a href="/about">About</a>
	</section>

	<div class="toggle">
		<input
			type="checkbox"
			id="toggle"
			bind:checked={darkMode}
			on:change={toggleDarkMode}
		/>
		<label for="toggle" />
	</div>
</nav>

<style>
	.toggle input[type='checkbox'] {
		display: none;
	}

	.toggle label {
		@apply inline-block cursor-pointer relative transition-all ease-in-out duration-300 w-12 h-6 rounded-3xl border border-solid border-gray-700 bg-yellow-200;
	}

	.toggle label::after {
		content: ' ';
		/* content: ' '; */
		@apply inline-block rounded-full cursor-pointer absolute top-px left-px transition-all ease-in-out duration-300 w-5 h-5 bg-gray-700;
	}

	.toggle input[type='checkbox']:checked ~ label {
		@apply bg-gray-500;
	}

	.toggle input[type='checkbox']:checked ~ label::after {
		transform: translateX(24px);
	}
</style>
