<template>
  <v-tabs icons centered class="hidden-md-and-up">
    <v-tabs-bar dark color="grey lighten-1">
      <v-tabs-slider color="pink lighten-2"></v-tabs-slider>
      <v-tabs-item class="frame" @click="onClick('allPets')">
        <v-icon color="teal lighten-1">pets</v-icon>
      </v-tabs-item>
      <v-tabs-item @click="onClick('adoption')">
        <v-icon>mood</v-icon>
      </v-tabs-item>
      <v-tabs-item @click="onClick('lost')">
        <v-icon>mood_bad</v-icon>
      </v-tabs-item>
      <v-tabs-item @click="onClick('takeCare')">
        <v-icon>sentiment_satisfied</v-icon>
      </v-tabs-item>
    </v-tabs-bar>
  </v-tabs>
</template>
<script>
  export default {
    data () {
      return {}
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
<style lang="scss" scoped>
  .card__text {
    padding: 0;
  }
  .icon {
    font-size: 35px;
    color: #1e76a8;
  }
</style>
