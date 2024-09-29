<script lang="ts">
  import { onMount, afterUpdate } from "svelte"
  import { browser } from "$app/environment"

  export let place: string

  let mapElement: HTMLElement
  let L: any
  let map: any
  let currentMarker: any

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

      // Use um estilo de mapa mais claro
      L.tileLayer("https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        subdomains: "abcd",
        maxZoom: 19,
      }).addTo(map)

      updateMap()
    }
  })

  afterUpdate(() => {
    if (map) {
      updateMap()
    }
  })

  async function updateMap() {
    // Use a API de geocodificação do OpenStreetMap (Nominatim)
    const response = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(place)}`)
    const data = await response.json()

    if (data && data.length > 0) {
      const lat = parseFloat(data[0].lat)
      const lon = parseFloat(data[0].lon)
      map.setView([lat, lon], 13)

      // Remove o marcador anterior, se existir
      if (currentMarker) {
        map.removeLayer(currentMarker)
      }

      // Adiciona o novo marcador
      currentMarker = L.marker([lat, lon]).addTo(map)
      currentMarker.bindPopup(place).openPopup()
    } else {
      console.error("Não foi possível encontrar o local")
    }
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

  /* Adicione estes estilos para melhorar a aparência do mapa escuro */
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
