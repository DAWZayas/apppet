<template>
  <div>
    <header-component></header-component>
    <New-add-pet-component></New-add-pet-component>
  </div>
</template>
<script>
  import { HeaderComponent } from '~/components/common/layout'
  import { NewAddPetComponent } from '~/components/common/addPost'
  export default {
    data () {
      return {}
    },
    components: {
      HeaderComponent,
      NewAddPetComponent
    }
  }
</script>
<style lang="scss">
</style>
