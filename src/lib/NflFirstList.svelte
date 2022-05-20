<script>
  import { nfl } from "/workspace/sveltekit-vite-tailwind/src/stores/nflfirststore.js";
  import { fade, scale } from "svelte/transition";
  import NflFirst from "./NflFirst.svelte";
</script>

{#each $nfl as game (game.id)}
  <div in:scale out:fade={{ duration: 500 }}>
    <NflFirst {game} />
  </div>
{/each}
