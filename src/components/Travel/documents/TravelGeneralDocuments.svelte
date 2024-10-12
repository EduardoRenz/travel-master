<script>
  let documents = [
    { title: "Seguro Viagem", icon: "🛡️" },
    { title: "Vacinas", icon: "💉" },
    // { title: "Passaporte", description: "Informações sobre passaporte.", icon: "🛂" },
    { title: "Visto", icon: "📝" },
  ]
</script>

<div class="card content-padding">
  <h4>Documentos</h4>
  <div class="documents-grid">
    {#each documents as document}
      <div class="document-card">
        <div class="document-icon">{document.icon}</div>
        <div class="document-title">{document.title}</div>
      </div>
    {/each}
  </div>
</div>

<style>
  .content-padding {
    padding: var(--padding-default);
  }

  .documents-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
  }

  .document-card {
    flex: 1 1 calc(25% - 1rem);
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 1rem;
    text-align: center;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  .document-icon {
    font-size: 2rem;
    margin-bottom: 0.5rem;
  }

  .document-title {
    font-size: 1.2rem;
    font-weight: bold;
  }

  .document-description {
    margin-top: 0.5rem;
    color: #666;
  }
</style>
