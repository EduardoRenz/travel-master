<script lang="ts">
  import { onMount } from "svelte"
  import { WeatherGatewayFactory } from "../../gateways/weather/WeatherGateway"
  import type { Weather } from "../../domain/Weather"

  export let location: string
  export let date: Date

  const weatherService = WeatherGatewayFactory.getInstance()
  let loading = true
  let weather: Weather | null

  onMount(async () => {
    try {
      weather = await weatherService.get(location, date)
    } catch (error) {
    } finally {
      loading = false
    }
  })
</script>

{#if loading}
  <div class="loading">
    <span class="loading-icon">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <line x1="12" y1="2" x2="12" y2="6"></line>
        <line x1="12" y1="18" x2="12" y2="22"></line>
        <line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line>
        <line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line>
        <line x1="2" y1="12" x2="6" y2="12"></line>
        <line x1="18" y1="12" x2="22" y2="12"></line>
        <line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line>
        <line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line>
      </svg>
    </span>
  </div>
{/if}

{#if !loading && weather}
  <div class="weather-info">
    <span class="weather-icon">{weather.icon}</span>
    <span class="temperature">{weather.temperature}°C</span>
  </div>
{/if}

<style>
  .weather-info {
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    align-items: center;
    font-size: var(--font-size-sm);
    color: var(--color-text-secondary);
  }

  .weather-icon {
    margin-right: var(--spacing-xs);
    font-size: 1.2em;
  }

  .temperature {
    font-weight: var(--font-weight-bold);
  }

  .loading-icon {
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    align-items: center;
    font-size: var(--font-size-sm);
    color: var(--color-text-secondary);
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
