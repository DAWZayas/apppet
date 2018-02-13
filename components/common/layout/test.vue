<template>
  <div>{{ name }}</div>
</template>
<script>
import {mapActions, mapGetters} from 'vuex'
export default {
  data () {
    return {
      name: ''
    }
  },
  computed: {
    ...mapGetters({animal: 'getSingleAnimal'})
  },
  methods: {
    ...mapActions(['petSinglePage'])
  },
  created () {
    this.petSinglePage(this.$route.params.id)
  },
  watch: {
    animal () { this.name = this.animal.nameAnimal }
  }
}
</script>

<style scoped>
div{
  margin-top: 80px;
}
</style>
