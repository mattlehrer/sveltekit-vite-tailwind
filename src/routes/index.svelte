<script>
  import Table from "/workspace/sveltekit-vite-tailwind/src/lib/Table.svelte";
  import NflGameList from "$lib/NflGameList.svelte";
  import {
    nflCoverage,
    nbaCoverage,
  } from "/workspace/sveltekit-vite-tailwind/src/stores/menustore.js";

  let coverage = [];
</script>

<main class="container">
  <Table tableData={$nflCoverage} bind:coverage />
  <Table tableData={$nbaCoverage} bind:coverage />

  <div>
    <ul>
      {#each coverage as action}
        {#if action === "NFL" }
          <NflGameList />
        {:else}
          <h1>NOT NFL</h1>
        {/if}
        <li>{action}</li>
      {/each}
    </ul>
  </div>
</main>
