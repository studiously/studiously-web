<template>
  <div>
    <div class="mdc-layout-grid">
      <div class="mdc-layout-grid__cell--span-2">
        <h3 class="mdc-typography--headline"><i class="material-icons">people</i>Units</h3>
      </div>
    </div>
    <button id="fab" class="mdc-fab material-icons" aria-label="create a question">
      <span class="mdc-fab__icon">add</span>
    </button>
  </div>
</template>
<script>
  export default {
    name: 'Units'
  }
</script>
<style>
  #fab {
    position: fixed;
    bottom: 1rem;
    right: 1rem;
  }

  @media (min-width: 1024px) {
    #fab {
      bottom: 3rem;
      right: 5rem;
    }
  }
</style>
