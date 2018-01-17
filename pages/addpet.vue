<template>
  <div>
    <header-component></header-component>
    <add-pet-component></add-pet-component>
    <footer-component></footer-component>
  </div>
</template>
<script>
  import { HeaderComponent, FooterComponent } from '~/components/common/layout'
  import { AddPetComponent } from '~/components/common/addpet'

  export default {
    data () {
      return {}
    },
    components: {
      HeaderComponent,
      FooterComponent,
      AddPetComponent
    }
  }
</script>
<style lang="scss">

</style>
