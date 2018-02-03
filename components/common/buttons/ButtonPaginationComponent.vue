<template>
  <v-btn block scroll-off-screen flat color="red darken-1" class="button hidden-md-and-up" @click="onLoadMore" v-show="hasMore">Cargar más</v-btn>
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
</style>
