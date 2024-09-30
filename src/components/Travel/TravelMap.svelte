<script lang="ts">
  import { onMount } from "svelte"
  import { browser } from "$app/environment"

  export let places: { name: string; day: number }[]

  let mapElement: HTMLElement
  let L: any
  let map: any

  onMount(async () => {
    if (browser) {
      const leafletModule = await import("leaflet")
      L = leafletModule.default

      // Carregue o CSS do Leaflet
      const link = document.createElement("link")
      link.rel = "stylesheet"
      link.href = "https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
      document.head.appendChild(link)

      // Inicialize o mapa
      map = L.map(mapElement).setView([0, 0], 2)

      L.tileLayer("https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        subdomains: "abcd",
        maxZoom: 19,
      }).addTo(map)

      await updateMap()
    }
  })

  async function updateMap() {
    const bounds = L.latLngBounds()

    for (const place of places) {
      const response = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(place.name)}`)
      const data = await response.json()

      if (data && data.length > 0) {
        const lat = parseFloat(data[0].lat)
        const lon = parseFloat(data[0].lon)

        const marker = L.marker([lat, lon], {
          icon: L.divIcon({
            className: "custom-div-icon",
            html: `<div class="marker-pin">${place.day}</div>`,
            iconSize: [30, 42],
            iconAnchor: [15, 42],
          }),
        }).addTo(map)

        marker.bindPopup(`Dia ${place.day}: ${place.name}`)
        bounds.extend([lat, lon])
      }
    }

    // Ajuste a visualização do mapa para incluir todos os marcadores
    map.fitBounds(bounds, { padding: [30, 30] })
  }
</script>

<div class="map-container">
  <div bind:this={mapElement} class="map"></div>
</div>

<style>
  .map-container {
    width: 100%;
    height: 400px;
    margin-top: 1rem;
  }
  .map {
    width: 100%;
    height: 100%;
  }

  :global(.custom-div-icon) {
    background: none;
    border: none;
  }

  :global(.marker-pin) {
    width: 30px;
    height: 30px;
    border-radius: 50% 50% 50% 0;
    background: var(--color-primary);
    position: absolute;
    transform: rotate(-45deg);
    left: 50%;
    top: 50%;
    margin: -15px 0 0 -15px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  :global(.marker-pin::after) {
    content: attr(data-day);
    transform: rotate(45deg);
    color: white;
    font-weight: bold;
  }

  /* Estilos para o popup */
  :global(.leaflet-popup-content-wrapper) {
    background-color: var(--color-background);
    color: var(--color-text-primary);
    border-radius: var(--border-radius-md);
  }

  :global(.leaflet-popup-tip) {
    background-color: var(--color-background);
  }

  :global(.leaflet-popup-content) {
    font-family: var(--font-family-primary);
    font-size: var(--font-size-base);
  }

  :global(.leaflet-container) {
    font-family: var(--font-family-primary);
  }
</style>
