<script>
  import NbaGameList from "$lib/NbaGameList.svelte";
  import Table from "/workspace/sveltekit-vite-tailwind/src/lib/Table.svelte";
  import NflGameList from "$lib/NflGameList.svelte";
  import NflFirstList from "$lib/NflFirstList.svelte";
  import Tabs from "/workspace/sveltekit-vite-tailwind/src/shared/Tabs.svelte";
  import {
    nflCoverage,
    nbaCoverage,
    mlbCoverage,
    nflPropsCoverage,
  } from "/workspace/sveltekit-vite-tailwind/src/stores/menustore.js";

  let coverage = [];
  //tabs
  let items = ["Straight", "Parlay", "Teaser"];
  let activeItem = "Straight";
  const tabChange = (e) => {
    activeItem = e.detail;
  };
</script>

<main class="container">
  <Tabs {activeItem} {items} on:tabChange={tabChange} />
  <div class="flex row">
    <Table tableData={$nflCoverage} bind:coverage />
    <Table tableData={$nbaCoverage} bind:coverage />
  </div>

  <div class="flex row">
    <Table tableData={$mlbCoverage} bind:coverage />
    <Table tableData={$nflPropsCoverage} bind:coverage />
  </div>

  <div>
    <ul>
      {#each coverage as action}
        {#if action === "NFL"}
          <NflGameList />
        {:else if action === "NFL 1st Half"}
          <NflFirstList />
        {:else if action === "NBA"}
          <NbaGameList />
        {:else}
          <h1>NOT NFL</h1>
        {/if}
        <li>{action}</li>
      {/each}
    </ul>
  </div>
</main>
