<script lang="ts">
  import type { Travel } from "$lib/../domain/Travel"
  import TravelInfo from "./TravelInfo.svelte"

  export let travel: Travel

  function formatDate(dateString: string): string {
    const date = new Date(dateString)
    return date.toLocaleDateString("pt-BR", { day: "2-digit", month: "long", year: "numeric" })
  }
</script>

<div class="travel-content">
  <h1 class="travel-title">{travel.title}</h1>
  <TravelInfo date={formatDate(travel.date)} concluded={travel.concluded} />
  <p class="travel-description">
    Detalhes adicionais sobre a viagem podem ser adicionados aqui. Por exemplo, descrição, itinerário, notas, etc.
  </p>
</div>

<style>
  .travel-content {
    padding: var(--spacing-xl);
  }

  .travel-title {
    font-size: var(--font-size-lg);
    font-weight: var(--font-weight-bold);
    margin-bottom: var(--spacing-md);
    color: var(--color-text-primary);
  }

  .travel-description {
    color: var(--color-text-secondary);
  }
</style>
