<script>
  export let searchTerm = ""
  export let showOnlyUnconcluded = false
</script>

<div class="search-container">
  <input type="text" placeholder="Pesquisar viagens..." class="search-bar" bind:value={searchTerm} />
  <label class="checkbox-container">
    <input type="checkbox" bind:checked={showOnlyUnconcluded} />
    <span class="checkbox-text">Mostrar apenas não concluídas</span>
  </label>
</div>

<style>
  .search-container {
    margin-top: 8rem;
    grid-area: search;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: var(--spacing-sm);
  }

  .search-bar {
    width: 80%;
    max-width: 600px;
    padding: 1rem;
    font-size: 1.2rem;
    border: 2px solid #ccc;
    border-radius: 25px;
    margin-bottom: 1rem;
  }

  .checkbox-container {
    display: flex;
    align-items: center;
    font-size: 1rem;
    color: #333;
  }

  .checkbox-text {
    margin-left: 0.5rem;
  }
</style>
