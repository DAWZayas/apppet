<template>
  <div>
    <header-component></header-component>
    <footer-component></footer-component>
  </div>
</template>
<script>
  import { HeaderComponent, FooterComponent } from '~/components/common/layout'

  export default {
    data () {
      return {}
    },
    components: {
      HeaderComponent,
      FooterComponent
    }
  }
</script>
<style lang="scss">

</style>
