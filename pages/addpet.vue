<template>
  <div>
    <header-component></header-component>
    <addpet-component></addpet-component>
    <footer-component></footer-component>
  </div>
</template>
<script>
  import { HeaderComponent, FooterComponent } from '~/components/common/layout'
  import { AddpetComponent } from '~/components/common/addpet'

  export default {
    data () {
      return {}
    },
    components: {
      HeaderComponent,
      FooterComponent,
      AddpetComponent
    }
  }
</script>
<style lang="scss">

</style>
