<template>
  <div>
    <v-btn block scroll-off-screen flat color="red darken-1" class="hidden-md-and-up" @click="onLoadMore" v-show="hasMore">Cargar más</v-btn>
    <v-btn fab color="transparent" class="button-desktop hidden-sm-and-down" @click="onLoadMore" v-show="hasMore">
      <v-icon color="cyan lighten-3">add</v-icon>
    </v-btn>
  </div>
</template>
<script>
  export default {
    props: ['hasMore'],
    methods: {
      onLoadMore () {
        this.$emit('loadMore')
      }
    }
  }
</script>
<style lang="scss" scoped>
  .button-desktop {
    position: fixed;
    bottom: 4.5em;
    right: 6em;
    border: none;
  }
  .icon {
    font-size: 35px;
  }
</style>
