<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  export let items;
  export let activeItem;
</script>

<div class="tabs">
  <ul>
    {#each items as item}
      <li on:click={() => dispatch("tabChange", item)}>
        <div class:active={item === activeItem}>{item}</div>
      </li>
    {/each}
  </ul>
</div>

<style>
  .tabs {
    margin-bottom: 40px;
  }
  ul {
    display: flex;
    justify-content: left;
    padding: 0;
    list-style-type: none;
  }
  li {
    margin: 0 16px;
    font-size: 18px;
    color: #555;
    cursor: pointer;
  }
  .active {
    color: brown;
    border-bottom: 2px solid brown;
    padding-bottom: 8px;
  }
</style>
