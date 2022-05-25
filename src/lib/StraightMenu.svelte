<script>
  let showActive = true;
  export let straight_list = [];
</script>

{#if showActive}
  <div class="backdrop">
    <div class="active">
      <p>{straight_list}</p>
    </div>
  </div>
{/if}
