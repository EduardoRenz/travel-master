<script lang="ts">
  import { format, addDays } from "date-fns"
  import { ptBR } from "date-fns/locale"
  import type { Travel } from "../../../../domain/Travel"
  import { createEventDispatcher } from "svelte"
  import ItineraryItem from "./ItineraryItem.svelte"

  export let travel: Travel

  const dispatch = createEventDispatcher()

  const startDate = travel.date

  type ItineraryItem = {
    day: number
    date: string
    address: string
    description: string
    weather: {
      icon: string
      temperature: number
    }
  }

  // Função para gerar previsão do tempo aleatória
  const activities = [
    { address: "Rue de Rivoli, 75001 Paris, França", description: "Chegada e check-in no hotel", weather: { icon: "☀️", temperature: 22 } },
    { address: "Champ de Mars, 5 Avenue Anatole France, 75007 Paris, França", description: "Visita à Torre Eiffel e cruzeiro no Rio Sena", weather: { icon: "⛅", temperature: 20 } },
    { address: "Rue de Rivoli, 75001 Paris, França", description: "Museu do Louvre e Jardim das Tulherias", weather: { icon: "☁️", temperature: 18 } },
    { address: "Place d'Armes, 78000 Versailles, França", description: "Excursão ao Palácio de Versalhes", weather: { icon: "🌧️", temperature: 17 } },
    { address: "35 Rue du Chevalier de la Barre, 75018 Paris, França", description: "Montmartre e Sacré-Cœur", weather: { icon: "☀️", temperature: 23 } },
    { address: "Place Charles de Gaulle, 75008 Paris, França", description: "Arco do Triunfo e Champs-Élysées", weather: { icon: "⛅", temperature: 21 } },
    { address: "84 Rue Claude Monet, 27620 Giverny, França", description: "Visita à casa e jardins de Monet", weather: { icon: "☀️", temperature: 24 } },
    { address: "6 Parvis Notre-Dame - Pl. Jean-Paul II, 75004 Paris, França", description: "Catedral de Notre-Dame e Île de la Cité", weather: { icon: "⛅", temperature: 19 } },
    { address: "Place Georges-Pompidou, 75004 Paris, França", description: "Centro Pompidou e Le Marais", weather: { icon: "☁️", temperature: 20 } },
    { address: "Boulevard Haussmann, 75009 Paris, França", description: "Dia livre para compras e despedida", weather: { icon: "☀️", temperature: 25 } },
  ]

  const itinerary: ItineraryItem[] = activities.map((activity, index) => {
    const date = addDays(new Date(startDate), index)
    return {
      day: index + 1,
      date: format(date, "dd 'de' MMMM", { locale: ptBR }),
      ...activity,
      weather: activity.weather,
    }
  })

  function onItinerarySelected(item: ItineraryItem) {
    dispatch("itinerarySelected", item)
  }
</script>

<div class="itinerary">
  <h2>Itinerário</h2>
  <ul class="timeline">
    {#each itinerary as item}
      <ItineraryItem {item} on:click={() => onItinerarySelected(item)} />
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
