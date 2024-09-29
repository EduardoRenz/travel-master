<script lang="ts">
  export let date: string
  export let concluded: boolean
</script>

<div class="travel-info">
  <p class="travel-date">
    <span class="label">Data:</span>
    {date}
  </p>
  <span class="travel-status {concluded ? 'concluded' : 'pending'}">
    {concluded ? "Concluída" : "Pendente"}
  </span>
</div>

<style>
  .travel-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: var(--spacing-md);
  }

  .travel-date {
    color: var(--color-text-secondary);
  }

  .label {
    font-weight: var(--font-weight-bold);
  }

  .travel-status {
    padding: var(--spacing-xs) var(--spacing-sm);
    border-radius: var(--border-radius-sm);
    font-size: var(--font-size-sm);
    font-weight: var(--font-weight-bold);
  }

  .travel-status.concluded {
    background-color: var(--color-secondary);
    color: var(--color-text-light);
  }

  .travel-status.pending {
    background-color: var(--color-accent);
    color: var(--color-text-light);
  }
</style>
