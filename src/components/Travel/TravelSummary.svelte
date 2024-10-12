<script lang="ts">
  import type { Travel } from "../../domain/Travel"
  import TravelImage from "./TravelImage.svelte"
  import TravelContent from "./TravelContent.svelte"

  export let travel: Travel
</script>

<div class="card">
  <TravelImage src="/{travel.image}" alt={travel.title} />
  <TravelContent {travel} />
</div>
