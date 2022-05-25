<script>
  import { nfl } from "/workspace/sveltekit-vite-tailwind/src/stores/nflstore.js";
  import { fade, scale } from "svelte/transition";
  import NflGame from "./NflGame.svelte";
</script>

{#each $nfl as game (game.id)}
  <div in:scale out:fade={{ duration: 500 }}>
    <NflGame {game} />
  </div>
{/each}

