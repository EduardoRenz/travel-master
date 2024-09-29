<script lang="ts">
  import type { Travel } from "../../domain/Travel"
  import { createEventDispatcher } from "svelte"
  import ItineraryItem from "./ItineraryItem.svelte"
  import type { Activity } from "../../domain/Activity"

  export let travel: Travel

  const dispatch = createEventDispatcher()

  const itinerary = travel.itinerary

  function onItinerarySelected(item: Activity) {
    dispatch("itinerarySelected", item)
  }
</script>

<div class="itinerary">
  <h2>Itinerário</h2>
  <ul class="timeline">
    {#each itinerary as item}
      <ItineraryItem {item} on:click={() => onItinerarySelected(item)} firstDay={travel.date} />
    {/each}
  </ul>
</div>

<style>
  .itinerary {
    padding-right: var(--spacing-md);
  }

  .timeline {
    list-style-type: none;
    position: relative;
    padding-left: calc(var(--spacing-lg) + 13px);
    margin-left: 0;
  }

  .timeline:before {
    content: " ";
    background: var(--color-text-secondary);
    display: inline-block;
    position: absolute;
    left: 13px;
    width: 2px;
    height: 100%;
    z-index: 1;
  }
</style>
