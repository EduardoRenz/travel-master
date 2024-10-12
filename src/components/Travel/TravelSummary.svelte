<script lang="ts">
  import type { Travel } from "../../domain/Travel"
  import TravelImage from "./TravelImage.svelte"
  import TravelContent from "./TravelContent.svelte"

  export let travel: Travel
</script>

<div class="travel-card">
  <TravelImage src="/{travel.image}" alt={travel.title} />
  <TravelContent {travel} />
</div>

<style>
  .travel-card {
    background-color: var(--color-text-light);
    border-radius: var(--border-radius-lg);
    overflow: hidden;
    box-shadow: var(--box-shadow-default);
  }
</style>
