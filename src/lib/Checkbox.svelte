<script>
  let id = "checkbox";
  let checked = false;
  export { id, checked, };
</script>

<label class="mr-2">
  <input type="checkbox" {id} on:change bind:checked />
  <slot />
</label>
