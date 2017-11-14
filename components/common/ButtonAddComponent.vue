<template>
  <nuxt-link to="/addpet/">
    <button class="mdc-fab material-icons app-fab--absolute" aria-label="Favorite">
      <span class="mdc-fab__icon">
        pets
      </span>
    </button>
  </nuxt-link>
</template>
<script>
export default {
}
</script>
<style lang="scss" scoped>

.app-fab--absolute {
  position: fixed;
  bottom: 1rem;
  right: 1rem;
}

@media(min-width: 1024px) {
   .app-fab--absolute {
    bottom: 1.5rem;
    right: 1.5rem;
  }
}

</style>
