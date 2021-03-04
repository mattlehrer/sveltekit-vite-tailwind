<script>
	let count = 0;

	const increment = () => {
		count += 1;
	};
</script>

<button
	on:click={increment}
	class="py-4 px-8 bg-red-300 text-red-900 rounded-full outline-none tabular-nums focus:border-2 focus:border-red-600 active:bg-red-100"
>
	Clicks: {count}
</button>
