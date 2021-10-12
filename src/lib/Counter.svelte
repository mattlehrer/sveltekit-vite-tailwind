<script>
	let count = 0;

	const increment = () => {
		count += 1;
	};
</script>

<button
	on:click={increment}
	class="px-8 py-4 text-red-900 bg-red-300 rounded-full outline-none tabular-nums focus:ring focus:ring-red-400 active:bg-red-100 box-border"
>
	Clicks: {count}
</button>
