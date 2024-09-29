<script lang="ts">
  export let title
  export let date
  export let image
  export let concluded // Novo prop para o status da viagem
</script>

<div class="card" style="background-image: url({image})">
  <h2>{title}</h2>
  <p>Data de ida: {date}</p>
  {#if concluded === true}
    <div class="flag">Concluído</div>
  {/if}
</div>

<style>
  .card {
    background-size: cover;
    background-position: center;
    height: 200px;
    max-width: 350px;
    border-radius: 10px;
    display: grid;
    grid-template-columns: 1fr;
    padding: var(--padding-default);
    justify-content: center;
    align-items: center;
    color: white;
    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.8);
    transition: transform 0.3s ease;
    cursor: pointer;
    gap: var(--spacing-sm);
    position: relative;
    overflow: hidden;
  }

  .card:hover {
    transform: scale(1.05);
  }

  h2 {
    margin: 0;
    font-size: 1.5rem;
  }

  p {
    margin: 0.5rem 0 0;
  }

  .flag {
    position: absolute;
    top: 25px;
    right: -50px;
    background-color: #4caf50;
    color: white;
    padding: 5px 0;
    width: 200px;
    text-align: center;
    transform: rotate(45deg);
    font-size: 0.8rem;
    font-weight: bold;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  }
</style>
