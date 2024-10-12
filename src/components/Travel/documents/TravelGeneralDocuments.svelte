<script lang="ts">
  let documents = [
    { title: "Seguro Viagem", icon: "🛡️", needed: true, document_link: null },
    { title: "Vacinas", icon: "💉", needed: false, document_link: "http://fake.it" },
    { title: "Passaporte", icon: "🛂", needed: true, document_link: "http://fake.it" },
    { title: "Visto", icon: "📝", needed: false, document_link: "http://fake.it" },
  ]

  function toggleNeeded(index: number) {
    documents[index].needed = !documents[index].needed
    console.log(documents)
  }
</script>

<div class="card content-padding">
  <h4>Documentos</h4>
  <div class="documents-grid">
    {#each documents as document, index}
      <div class="document-card" class:gray={!document.needed}>
        <div class="document-icon">{document.icon}</div>
        <div class="document-title">{document.title}</div>
        <label>
          <input type="checkbox" bind:checked={document.needed} on:change={() => toggleNeeded(index)} />
          Necessário
        </label>
        {#if document.document_link}
          <a href={document.document_link} target="_blank" rel="noopener noreferrer">📄</a>
        {:else}
          <button on:click={() => alert("Adicionar documento")}>➕ Adicionar</button>
        {/if}
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

  .gray {
    background-color: #f9f9f9;
  }
</style>
