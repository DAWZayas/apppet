<template>
  <div>
    <header-component></header-component>
    <notes-component></notes-component>
    <button-add-post-component v-if="isAuthenticated"></button-add-post-component>
  </div>
</template>
<script>
  import { HeaderComponent } from '~/components/common/layout'
  import { NotesComponent } from '~/components/common/post'
  import { ButtonAddPostComponent } from '~/components/common/buttons'
  import { mapGetters } from 'vuex'
  export default {
    data () {
      return {}
    },
    computed: {
      ...mapGetters({ isAuthenticated: 'isAuthenticated' })
    },
    components: {
      HeaderComponent,
      NotesComponent,
      ButtonAddPostComponent
    }
  }
</script>
<style>
</style>
