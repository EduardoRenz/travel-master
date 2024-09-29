<script lang="ts">
  import { onMount } from "svelte"
  import type { Travel } from "../../../domain/Travel"
  import { InMemoryTravelGateway } from "../../../gateways/InMemoryTravelGateway"
  import { page } from "$app/stores"
  import TravelCard from "./components/TravelCard.svelte"
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
  {:else}
    <LoadingSpinner />
  {/if}
</div>

<style>
  .travel-container {
    max-width: 64rem;
    margin: 0 auto;
    padding: var(--padding-default);
  }
</style>
