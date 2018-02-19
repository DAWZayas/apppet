<template>
  <div>
    <header-component></header-component>
    <New-post-component></New-post-component>
  </div>
</template>
<script>
  import { HeaderComponent } from '~/components/common/layout'
  import { NewPostComponent } from '~/components/common/addPost'
  export default {
    data () {
      return {}
    },
    components: {
      HeaderComponent,
      NewPostComponent
    }
  }
</script>
<style lang="scss">
</style>
