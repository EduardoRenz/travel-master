<script lang="ts">
  import { onMount } from "svelte"
  import type { Travel } from "../../../domain/Travel"
  import { InMemoryTravelGateway } from "../../../gateways/InMemoryTravelGateway"
  import { page } from "$app/stores"

  const travelGateway = new InMemoryTravelGateway()
  let travel: Travel | undefined
  onMount(async () => {
    travel = await travelGateway.getTravel(Number($page.params.slug))
  })

  function formatDate(dateString: string): string {
    const date = new Date(dateString)
    return date.toLocaleDateString("pt-BR", { day: "2-digit", month: "long", year: "numeric" })
  }
</script>

<div class="travel-container">
  {#if travel}
    <div class="travel-card">
      <img src="/{travel.image}" alt={travel.title} class="travel-image" />
      <div class="travel-content">
        <h1 class="travel-title">{travel.title}</h1>
        <div class="travel-info">
          <p class="travel-date">
            <span class="label">Data:</span>
            {formatDate(travel.date)}
          </p>
          <span class="travel-status {travel.concluded ? 'concluded' : 'pending'}">
            {travel.concluded ? "Concluída" : "Pendente"}
          </span>
        </div>
        <p class="travel-description">
          Detalhes adicionais sobre a viagem podem ser adicionados aqui. Por exemplo, descrição, itinerário, notas, etc.
        </p>
      </div>
    </div>
  {:else}
    <div class="loading-container">
      <div class="loading-spinner"></div>
    </div>
  {/if}
</div>

<style>
  .travel-container {
    max-width: 64rem;
    margin: 0 auto;
    padding: var(--padding-default);
  }

  .travel-card {
    background-color: var(--color-text-light);
    border-radius: var(--border-radius-lg);
    overflow: hidden;
    box-shadow: var(--box-shadow-default);
  }

  .travel-image {
    width: 100%;
    height: 16rem;
    object-fit: cover;
  }

  .travel-content {
    padding: var(--spacing-xl);
  }

  .travel-title {
    font-size: var(--font-size-lg);
    font-weight: var(--font-weight-bold);
    margin-bottom: var(--spacing-md);
    color: var(--color-text-primary);
  }

  .travel-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: var(--spacing-md);
  }

  .travel-date {
    color: var(--color-text-secondary);
  }

  .label {
    font-weight: var(--font-weight-bold);
  }

  .travel-status {
    padding: var(--spacing-xs) var(--spacing-sm);
    border-radius: var(--border-radius-sm);
    font-size: var(--font-size-sm);
    font-weight: var(--font-weight-bold);
  }

  .travel-status.concluded {
    background-color: var(--color-secondary);
    color: var(--color-text-light);
  }

  .travel-status.pending {
    background-color: var(--color-accent);
    color: var(--color-text-light);
  }

  .travel-description {
    color: var(--color-text-secondary);
  }

  .loading-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 16rem;
  }

  .loading-spinner {
    width: 4rem;
    height: 4rem;
    border: 0.25rem solid var(--color-background);
    border-top: 0.25rem solid var(--color-primary);
    border-radius: 50%;
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>
