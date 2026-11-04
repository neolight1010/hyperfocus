<script>
  let { label, onclick } = $props()
</script>

<button {onclick}>{label}</button>

<style>
  button {
    font-size: 1.25rem;
    padding: 0.75rem;
    border: none;
    border-radius: 6px;
    background: #646cff;
    color: #fff;
    cursor: pointer;
  }
  button:hover {
    background: #535bf2;
  }
</style>
