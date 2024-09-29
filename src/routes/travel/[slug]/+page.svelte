<script lang="ts">
  import { onMount } from "svelte"
  import type { Travel } from "../../../domain/Travel"
  import { InMemoryTravelGateway } from "../../../gateways/InMemoryTravelGateway"
  import { page } from "$app/stores"
  import TravelCard from "./components/TravelCard.svelte"
  import TravelMap from "./components/TravelMap.svelte"
  import TravelItinerary from "./components/TravelItinerary.svelte"
  import LoadingSpinner from "./components/LoadingSpinner.svelte"

  const travelGateway = new InMemoryTravelGateway()
  let travel: Travel | undefined
  onMount(async () => {
    travel = await travelGateway.getTravel(Number($page.params.slug))
  })
</script>

<div class="travel-container">
  {#if travel}
    <TravelCard {travel} />
    <div class="travel-content">
      <div class="map-column">
        <TravelMap place={travel.place} />
      </div>
      <div class="itinerary-column">
        <TravelItinerary startDate={travel.date} />
      </div>
    </div>
  {:else}
    <LoadingSpinner />
  {/if}
</div>

<style>
  .travel-container {
    max-width: 95%;
    margin: 0 auto;
    padding: var(--padding-default);
  }

  .travel-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    margin-top: 2rem;
  }

  .map-column,
  .itinerary-column {
    min-width: 0;
  }

  .itinerary-column {
    max-height: 600px;
    overflow-y: auto;
  }

  @media (max-width: 768px) {
    .travel-content {
      grid-template-columns: 1fr;
    }
  }
</style>
