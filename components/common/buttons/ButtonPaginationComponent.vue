<template>
  <v-btn block flat color="pink lighten-2" class="button" @click="onLoadMore" v-show="hasMore">Cargar más</v-btn>
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
  @media(min-width: 1024px) {
    .button {
      display: none;
    }
  }
</style>
