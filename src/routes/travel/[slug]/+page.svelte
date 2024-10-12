<script lang="ts">
  import { onMount } from "svelte"
  import type { Travel } from "../../../domain/Travel"
  import { TravelGatewayFactory } from "../../../gateways/TravelGateway/TravelGateway"
  import { page } from "$app/stores"
  import TravelSummary from "../../../components/Travel/TravelSummary.svelte"
  import LoadingSpinner from "../../../components/Travel/LoadingSpinner.svelte"
  import TravelItinerary from "../../../components/Travel/TravelItinerary.svelte"
  import TravelMap from "../../../components/Travel/TravelMap.svelte"

  const travelGateway = TravelGatewayFactory.getInstance()
  let travel: Travel | undefined
  let selectedItineraryItem: any | undefined

  onMount(async () => {
    travel = await travelGateway.getTravel(Number($page.params.slug))
  })

  function handleItinerarySelected(event: CustomEvent<any>) {
    selectedItineraryItem = event.detail
  }
</script>

<div class="travel-container">
  {#if travel}
    <TravelSummary {travel} />
    <div class="travel-content">
      <div class="itinerary-column">
        <TravelItinerary {travel} on:itinerarySelected={handleItinerarySelected} />
      </div>
      <div class="map-column">
        <TravelMap
          places={travel?.itinerary.map((item) => ({
            name: item.address,
            day: item.getDayFromFirstDay(travel?.date ?? new Date()),
          })) ?? []}
        />
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
