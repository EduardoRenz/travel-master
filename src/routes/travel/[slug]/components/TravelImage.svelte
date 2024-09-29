<script lang="ts">
  export let src: string
  export let alt: string
</script>

<img {src} {alt} class="travel-image" />

<style>
  .travel-image {
    width: 100%;
    height: 16rem;
    object-fit: cover;
  }
</style>
