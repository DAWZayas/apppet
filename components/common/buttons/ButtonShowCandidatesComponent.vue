<template>
  <v-card id="create">
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
      <nuxt-link to="/mainpets/">
        <v-btn fab dark small color="teal lighten-1">
          <v-icon color="white">pets</v-icon>
        </v-btn>
      </nuxt-link>
      <nuxt-link to="/mainpets/adoption">
        <v-btn fab dark small color="light-blue lighten-3">
          <v-icon color="white">mood</v-icon>
        </v-btn>
      </nuxt-link>
      <nuxt-link to="/mainpets/lost">
        <v-btn fab dark small color="red lighten-1">
          <v-icon color="white">mood_bad</v-icon>
        </v-btn>
      </nuxt-link>
      <nuxt-link to="/mainpets/takeCare">
        <v-btn fab dark small color="grey">
          <v-icon color="white">sentiment_satisfied</v-icon>
        </v-btn>
      </nuxt-link>
    </v-speed-dial>
  </v-card>
</template>
<script>
  export default {
    data: () => ({
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
    }),

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
    },

    computed: {
      activeFab () {
        switch (this.tabs) {
          case 'one': return { 'class': 'purple', icon: 'account_circle' }
          case 'two': return { 'class': 'red', icon: 'edit' }
          case 'three': return { 'class': 'green', icon: 'keyboard_arrow_up' }
          default: return {}
        }
      }
    }
  }
</script>
<style>
  /* This is for documentation purposes and will not be needed in your application */
  #create .speed-dial {
    display: none;
  }

  @media(min-width: 1024px) {
    #create .speed-dial {
      display: inline;
      position: fixed;
      bottom: 4.5em;
      right: 1.5em;
      color: white;
    }
    
  }
</style>

