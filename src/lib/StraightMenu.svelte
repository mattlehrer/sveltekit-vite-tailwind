<script>
  let showActive = true;
  export let straight_list = [];
</script>

{#if showActive}
  <div class="bg-purple-200">
    <div class="active">
      <p>{straight_list}</p>
    </div>
  </div>
{/if}
