<script>
  import { nba } from "/workspace/sveltekit-vite-tailwind/src/stores/nbastore.js";
  import { fade, scale } from "svelte/transition";
  import NbaGame from "./NflGame.svelte";
  console.log($nba);
</script>

{#each $nba as game (game.id)}
  <div in:scale out:fade={{ duration: 500 }}>
    <NbaGame {game} />
  </div>
{/each}
