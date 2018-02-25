<template>
  <div>
    <v-btn 
      block 
      flat 
      color="red darken-1" 
      class="hidden-md-and-up" 
      @click="onLoadMore" 
      v-show="hasMore"
    >
      Cargar más
    </v-btn>
    <v-btn 
      block
      flat
      color="red darken-1"
      class="button-desktop hidden-sm-and-down" 
      @click="onLoadMore" 
      v-show="hasMore"
    >
      <v-icon>expand_more</v-icon>
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
    margin: auto;
    width: 30%;
    margin-top: -7em;
  }
  .icon {
    font-size: 35px;
  }
</style>
