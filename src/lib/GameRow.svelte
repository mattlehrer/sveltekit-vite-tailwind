<script>
  export let type = "flex row";
</script>

<div class={type}>
  <slot name="logo" />
  <slot name="title" />
  <slot name="spread" />
</div>
