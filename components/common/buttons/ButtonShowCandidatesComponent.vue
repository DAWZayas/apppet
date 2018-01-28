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
        <v-icon color="white">mood</v-icon>
      </v-btn>
      <v-btn fab dark color="red lighten-1" @click="onClick('lost')">
        <v-icon color="white">mood_bad</v-icon>
      </v-btn>
      <v-btn fab dark color="grey" @click="onClick('takeCare')">
        <v-icon color="white">sentiment_satisfied</v-icon>
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
    },
    watch: {
      top (val) {
        this.bottom = !val
      },
      right (val) {
        this.left = !val
      },
      bottom (val) {
        this.top = !val
      },
      left (val) {
        this.right = !val
      }
    }
  }
</script>
<style>
  .icon {
    font-size: 35px;
  }
  #create .speed-dial {
    display: inline;
    position: fixed;
    bottom: 4.5em;
    right: 1.5em;
    color: white;
  }
</style>

