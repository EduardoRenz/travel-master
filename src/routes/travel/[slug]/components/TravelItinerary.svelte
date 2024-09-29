<script lang="ts">
  import { format, addDays } from "date-fns"
  import { ptBR } from "date-fns/locale"

  export let startDate: string

  const activities = [
    { city: "Paris", description: "Chegada e check-in no hotel" },
    { city: "Paris", description: "Visita à Torre Eiffel e cruzeiro no Rio Sena" },
    { city: "Paris", description: "Museu do Louvre e Jardim das Tulherias" },
    { city: "Versalhes", description: "Excursão ao Palácio de Versalhes" },
    { city: "Paris", description: "Montmartre e Sacré-Cœur" },
    { city: "Paris", description: "Arco do Triunfo e Champs-Élysées" },
    { city: "Giverny", description: "Visita à casa e jardins de Monet" },
    { city: "Paris", description: "Catedral de Notre-Dame e Île de la Cité" },
    { city: "Paris", description: "Centro Pompidou e Le Marais" },
    { city: "Paris", description: "Dia livre para compras e despedida" },
  ]

  const itinerary = activities.map((activity, index) => {
    const date = addDays(new Date(startDate), index)
    return {
      day: index + 1,
      date: format(date, "dd 'de' MMMM", { locale: ptBR }),
      ...activity,
    }
  })
</script>

<div class="itinerary">
  <h2>Itinerário</h2>
  <ul class="timeline">
    {#each itinerary as item}
      <li>
        <div class="timeline-badge">{item.day}</div>
        <div class="timeline-panel">
          <div class="timeline-heading">
            <h4>{item.date}</h4>
            <h5>{item.city}</h5>
          </div>
          <div class="timeline-body">
            <p>{item.description}</p>
          </div>
        </div>
      </li>
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
    padding-left: calc(var(--spacing-lg) + 13px); /* Ajustado para centralizar a linha */
    margin-left: 0;
  }

  .timeline:before {
    content: " ";
    background: var(--color-text-secondary);
    display: inline-block;
    position: absolute;
    left: 13px; /* Ajustado para alinhar com as bolinhas */
    width: 2px;
    height: 100%;
    z-index: 1; /* Garante que a linha fique atrás das bolinhas */
  }

  .timeline > li {
    margin-bottom: var(--spacing-lg);
    position: relative;
  }

  .timeline-badge {
    color: var(--color-text-light);
    width: 25px;
    height: 25px;
    line-height: 25px;
    font-size: var(--font-size-sm);
    text-align: center;
    position: absolute;
    top: 0;
    left: calc(-1 * (var(--spacing-lg) + 13px)); /* Ajustado para alinhar com a linha */
    background-color: var(--color-primary);
    border-radius: 50%;
    z-index: 2; /* Garante que as bolinhas fiquem sobre a linha */
  }

  .timeline-panel {
    padding: var(--spacing-sm);
    background-color: var(--color-background);
    border-radius: var(--border-radius-sm);
    box-shadow: var(--box-shadow-default);
  }

  .timeline-heading h4 {
    margin-top: 0;
    color: var(--color-primary);
    font-size: var(--font-size-lg);
    font-weight: var(--font-weight-bold);
  }

  .timeline-heading h5 {
    margin-top: var(--spacing-xs);
    color: var(--color-text-secondary);
    font-size: var(--font-size-base);
    font-weight: var(--font-weight-normal);
  }

  .timeline-body p {
    margin-bottom: 0;
    color: var(--color-text-primary);
    font-size: var(--font-size-base);
  }
</style>
