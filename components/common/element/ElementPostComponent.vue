<template>
  <div
    id="e3"
    style="max-width: 700px; margin: auto;"
    class="grey lighten-3"
  >
    <v-container
      fluid
      style="min-height: 0;"
      grid-list-lg
    >
      <v-layout row wrap>
        <v-flex xs12>
          <v-card :color="note.bgColor || 'blue-grey darken-2'" class="white--text">
            <v-container fluid grid-list-lg>
              <v-layout row>
                <v-flex xs12>
                  <div>
                    <div class="headline"> {{ note.namePet }}  </div>
                    <hr color="white">
                    <div style="text-align: justify;"> {{ note.textPost }}</div>
                  </div>
                </v-flex>
                <v-flex xs5 v-if="note.photoPost">
                  <v-progress-circular v-show="loadingWorkoutImage" indeterminate color="grey" class="spinner"></v-progress-circular>
                  <img
                    v-show="loadedWorkoutImage" @load="handleLoadedImage"
                    :src="note.photoPost ? note.photoPost[0] : null"
                  >
                </v-flex>
              </v-layout>
            </v-container>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>
<script>
  export default {
    props: ['note'],
    data () {
      return {
        loadingWorkoutImage: true,
        loadedWorkoutImage: false
      }
    },
    methods: {
      handleLoadedImage () {
        this.loadingWorkoutImage = false
        this.loadedWorkoutImage = true
      }
    }
  }
</script>
<style scoped>
  .spinner {
    margin-top: 1.5em;
    margin-left: 1.5em;
  }
  img {
    flex: 1;
    object-fit: cover;
    width: 100px;
    height: auto;
    border-radius: 5px 5px 0px 0px;
  }
  @media screen and (min-width: 500px) {
    .spinner {
      margin-top: 3em;
      margin-left: 5em;
    }
    img {
      width: 150px;
      margin-top: 1em;
      margin-left: 1em;
    }
  }
</style>
