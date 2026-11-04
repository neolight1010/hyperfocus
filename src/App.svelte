<script>
  import Display from './lib/Display.svelte'
  import Button from './lib/Button.svelte'
  import { sum } from './lib/sum.js'
  import { subtract } from './lib/subtract.js'

  let a = $state(0)
  let b = $state(0)
  let result = $state(0)

  const operate = (op) => (result = op(Number(a), Number(b)))
</script>

<main>
  <h1>Calculator</h1>
  <Display value={result} />
  <div class="inputs">
    <input type="number" bind:value={a} />
    <input type="number" bind:value={b} />
  </div>
  <div class="buttons">
    <Button label="Sum (+)" onclick={() => operate(sum)} />
    <Button label="Subtract (−)" onclick={() => operate(subtract)} />
  </div>
</main>

<style>
  main {
    max-width: 320px;
    margin: 2rem auto;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  .inputs,
  .buttons {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.5rem;
  }
  input {
    font-size: 1.1rem;
    padding: 0.5rem;
    min-width: 0;
  }
</style>
