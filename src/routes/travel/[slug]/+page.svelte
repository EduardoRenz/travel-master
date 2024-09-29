<script lang="ts">
  import { onMount } from "svelte"
  import type { Travel } from "../../../domain/Travel"
  import { InMemoryTravelGateway } from "../../../gateways/TravelGateway/InMemoryTravelGateway"
  import { page } from "$app/stores"
  import TravelCard from "../../../components/Travel/TravelCard.svelte"
  import LoadingSpinner from "../../../components/Travel/LoadingSpinner.svelte"
  import TravelItinerary from "../../../components/Travel/TravelItinerary.svelte"
  import TravelMap from "../../../components/Travel/TravelMap.svelte"

  const travelGateway = new InMemoryTravelGateway()
  let travel: Travel | undefined
  let selectedItineraryItem: any | undefined

  onMount(async () => {
    travel = await travelGateway.getTravel(Number($page.params.slug))
  })

  function handleItinerarySelected(event: CustomEvent<any>) {
    selectedItineraryItem = event.detail
    console.log("Itinerário selecionado:", selectedItineraryItem)
  }
</script>

<div class="travel-container">
  {#if travel}
    <TravelCard {travel} />
    <div class="travel-content">
      <div class="itinerary-column">
        <TravelItinerary {travel} on:itinerarySelected={handleItinerarySelected} />
      </div>
      <div class="map-column">
        <TravelMap place={selectedItineraryItem ? selectedItineraryItem.address : travel.place} />
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
