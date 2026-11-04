<script>
  let { value } = $props()
</script>

<div class="display">{value}</div>

<style>
  .display {
    background: #222;
    color: #fff;
    font-size: 2rem;
    text-align: right;
    padding: 0.75rem 1rem;
    border-radius: 6px;
    min-height: 2.5rem;
  }
</style>
