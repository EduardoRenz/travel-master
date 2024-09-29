<div class="loading-container">
  <div class="loading-spinner"></div>
</div>

<style>
  .loading-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 16rem;
  }

  .loading-spinner {
    width: 4rem;
    height: 4rem;
    border: 0.25rem solid var(--color-background);
    border-top: 0.25rem solid var(--color-primary);
    border-radius: 50%;
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
