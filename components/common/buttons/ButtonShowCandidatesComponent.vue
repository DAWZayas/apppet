<template>
  <v-card id="create" class="hidden-sm-and-down">
    <v-speed-dial
      v-model="fab"
      :top="top"
      :bottom="bottom"
      :right="right"
      :left="left"
      :direction="direction"
      :hover="hover"
      :transition="transition"
    >
      <v-btn slot="activator" color="teal lighten-1" dark fab hover v-model="fab">
        <v-icon>pets</v-icon>
        <v-icon>close</v-icon>
      </v-btn>
      <v-btn fab dark color="teal lighten-1" @click="onClick('allPets')">
        <v-icon color="white">pets</v-icon>
      </v-btn>
      <v-btn fab dark color="light-blue lighten-3" @click="onClick('adoption')">
        <v-icon color="white">home</v-icon>
      </v-btn>
      <v-btn fab dark color="red lighten-1" @click="onClick('lost')">
        <v-icon color="white">warning</v-icon>
      </v-btn>
      <v-btn fab dark color="grey" @click="onClick('takeCare')">
        <v-icon color="white">remove_red_eye</v-icon>
      </v-btn>
    </v-speed-dial>
  </v-card>
</template>
<script>
  export default {
    data () {
      return {
        direction: 'top',
        fab: false,
        fling: false,
        hover: false,
        tabs: null,
        top: false,
        right: true,
        bottom: true,
        left: false,
        transition: 'slide-y-reverse-transition'
      }
    },
    methods: {
      onClick (f) {
        if (f === 'allPets') {
          this.$router.push('/mainpets/')
        }
        if (f === 'adoption') {
          this.$router.push('/mainpets/adoption')
        }
        if (f === 'lost') {
          this.$router.push('/mainpets/lost')
        }
        if (f === 'takeCare') {
          this.$router.push('/mainpets/takeCare')
        }
      }
    }
  }
</script>
<style scoped>
  .icon {
    font-size: 35px;
  }
  #create .speed-dial {
    display: inline;
    position: fixed;
    bottom: 5em;
    right: 1.5em;
    color: white;
  }
</style>

