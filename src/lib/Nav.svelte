<script>
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';

	{
		(''); // keep something to prevent Vite empty block sourcemap bug
	}

	let darkMode;
	let darkModeReady = false;

	onMount(() => {
		darkMode = document.documentElement.classList.contains('dark');
		document.body.classList.add('transition', 'ease-in-out', 'duration-500');
		darkModeReady = true;
	});
</script>

<nav
	class="flex items-center justify-between h-8 px-8 my-4 underline dark:text-gray-50"
>
	<section class="h-8 space-x-6">
		<a href="/">Home</a><a href="/about">About</a>
	</section>

	{#if darkModeReady}
		<div class="h-8 toggle" in:fade={{ duration: 800 }}>
			<input
				type="checkbox"
				id="toggle"
				bind:checked={darkMode}
				on:change={() => document.documentElement.classList.toggle('dark')}
			/>
			<label
				id="darkicon"
				title="Toggle dark mode"
				for="toggle"
				data-dark={darkMode ? '🌒' : '🌞'}
			/>
		</div>
	{/if}
</nav>

<style style lang="postcss">
	.toggle input[type='checkbox'] {
		display: none;
	}

	.toggle label {
		@apply inline-block cursor-pointer relative transition-all ease-in-out duration-300 w-12 h-6 rounded-3xl border border-solid border-gray-700 bg-yellow-100;
	}

	.toggle label::after {
		content: attr(data-dark);
		@apply flex items-center justify-center rounded-full cursor-pointer absolute top-px left-px transition-all ease-in-out duration-300 w-5 h-5 bg-transparent align-middle;
	}

	.toggle input[type='checkbox']:checked ~ label {
		@apply bg-gray-500;
	}

	.toggle input[type='checkbox']:checked ~ label::after {
		transform: translateX(24px);
	}
</style>
