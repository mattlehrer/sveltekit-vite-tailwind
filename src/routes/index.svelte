<script>
  import Table from "/workspace/sveltekit-vite-tailwind/src/lib/Table.svelte";
  import NflGameList from "$lib/NflGameList.svelte";
  import {
    nflCoverage,
    nbaCoverage,
  } from "/workspace/sveltekit-vite-tailwind/src/stores/menustore.js";

</script>

<main class="container">
  <Table tableData={$nflCoverage} />
  <Table tableData={$nbaCoverage} />
  <NflGameList />
</main>
