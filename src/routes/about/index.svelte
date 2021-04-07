<script>
	{
		(''); // keep something to prevent Vite empty block sourcemap bug
	}
</script>

<div class="mx-8 my-16 sm:mx-32">
	<h1
		class="px-2 -ml-2 text-3xl text-indigo-600 sm:text-5xl hover:text-black dark:text-indigo-300"
	>
		This is the about page.
	</h1>
	<p class="mt-8 underline">
		<a href="https://github.com/mattlehrer/sveltekit-vite-tailwind">
			The code for this SvelteKit starter template is available on GitHub.<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 20 20"
				class="inline-block w-5 h-5 ml-2 align-text-bottom"
				fill="currentColor"
			>
				<path
					d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"
				/>
				<path
					d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"
				/>
			</svg>
		</a>
	</p>
</div>

<!-- how to use dark mode in @apply; these styles are ugly and I don't recommend them -->
<style style lang="postcss" global>
	:local(h1) {
		width: fit-content;
		@apply dark:hover:bg-yellow-900 hover:border-indigo-500 dark:hover:border-yellow-500 border border-transparent dark:text-indigo-100;
	}
</style>
