<script>
  let showActive = true;
  export let message = "default message from StraightMenu";
</script>

{#if showActive}
  <div class="backdrop" >
    <div class="active">
      <p>{message}</p>
    </div>
  </div>
{/if}
