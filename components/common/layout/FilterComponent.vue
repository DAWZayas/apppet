<template>
  <div fixed class="hidden-md-and-up">
    <v-bottom-nav  :value="true"  color="white" :active.sync="e1" shift>
      <v-btn flat color="teal" value="favorites" @click="favorite">
        <span>Me gustan</span>
        <v-icon>favorite</v-icon>
      </v-btn>
      <v-btn flat color="teal" value='all' @click="allPets">
        <span>Todos</span>
        <v-icon>pets</v-icon>
      </v-btn>
      <v-btn flat color="teal" value="adoption" @click="adoption">
        <span>Adoptar</span>
        <v-icon>home</v-icon>
      </v-btn>
       <v-btn flat color="teal" value="lost" @click="lost">
        <span>Perdidos</span>
        <v-icon>warning</v-icon>
      </v-btn>
       <v-btn flat color="teal" value="takeCare" @click="takeCare">
        <span>Cuidar</span>
        <v-icon>remove_red_eye</v-icon>
      </v-btn>
    </v-bottom-nav>
    </div>
</template>
<script>
  export default {
    data () {
      return {
        e1: ''
      }
    },
    methods: {
      favorite () {
        this.$router.push('/mainpets/favorites')
      },
      allPets () {
        this.$router.push('/mainpets/')
      },
      adoption () {
        this.$router.push('/mainpets/adoption')
      },
      lost () {
        this.$router.push('/mainpets/lost')
      },
      takeCare () {
        this.$router.push('/mainpets/takeCare')
      }
    },
    created () {
      if (this.$route.params.catagory === undefined) {
        this.e1 = 'all'
      } else {
        this.e1 = this.$route.params.catagory
      }
    }
  }
</script>
<style lang="scss" scoped>

</style>
