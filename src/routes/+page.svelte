<script lang="ts">
  import SearchBar from "../components/home/SearchBar.svelte"
  import TravelCard from "../components/home/TravelCard.svelte"
  import { writable } from "svelte/store"

  import { onMount } from "svelte"
  import type { Travel } from "../domain/Travel"
  import { TravelGatewayFactory } from "../gateways/TravelGateway/TravelGateway"

  // Criar uma store para o termo de pesquisa
  const searchTerm = writable("")
  const showOnlyUnconcluded = writable(false)

  const travelGateway = TravelGatewayFactory.getInstance()
  let travels: Travel[] = []

  onMount(async () => {
    travels = await travelGateway.getTravels()
    console.log(travels)
  })

  // Filtrar viagens com base no termo de pesquisa e status de conclusão
  $: viagensFiltradas = travels.filter(
    (travel) => travel.title.toLowerCase().includes($searchTerm.toLowerCase()) && ($showOnlyUnconcluded ? !travel.concluded : true)
  )
</script>

<main>
  <SearchBar bind:searchTerm={$searchTerm} bind:showOnlyUnconcluded={$showOnlyUnconcluded} />
  <div class="cards-container">
    {#each viagensFiltradas as viagem}
      <a href="/travel/{viagem.id}">
        <TravelCard {...viagem} />
      </a>
    {/each}
  </div>
</main>

<style>
  main {
    display: grid;
    grid-template-areas:
      "search"
      "cards";
    grid-template-rows: auto 1fr;
    min-height: 100vh;
    padding: 2rem;
    gap: 2rem;
  }

  .cards-container {
    grid-area: cards;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: var(--gap-default);
    padding-top: 1rem;
    justify-content: center;
    align-items: start;
    max-width: 1200px;
    margin: 0 auto;
  }
</style>
