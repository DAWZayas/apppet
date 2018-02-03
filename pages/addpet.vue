<template>
  <div>
    <header-component></header-component>
    <add-pet-component></add-pet-component>
  </div>
</template>
<script>
  import { HeaderComponent } from '~/components/common/layout'
  import { AddPetComponent } from '~/components/common/addpet'

  export default {
    data () {
      return {}
    },
    components: {
      HeaderComponent,
      AddPetComponent
    }
  }
</script>
<style lang="scss">

</style>
