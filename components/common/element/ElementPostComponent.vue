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
              <v-btn flat icon class="close-icon" @click="deletePost()">
                <v-icon color="black">close</v-icon>
              </v-btn>
              <v-layout row>
                <v-flex xs12>
                  <div>
                    <div class="headline"> 
                      {{ note.namePet }} 
                      <hr color="white">
                    </div>
                    <div style="text-align: justify;">
                      <v-flex xs5 v-if="note.photoPost" class="frame-image">
                        <v-progress-circular v-show="loadingWorkoutImage" indeterminate color="grey" class="spinner"></v-progress-circular>
                        <img
                          v-show="loadedWorkoutImage" @load="handleLoadedImage"
                          :src="note.photoPost ? note.photoPost[0] : null"
                        >
                      </v-flex>
                      {{ note.textPost }}
                    </div>
                    <div class="buttons">
                      <v-btn flat icon>
                        <v-icon color="red lighten-1">thumb_up</v-icon>
                      </v-btn>
                      <v-btn flat icon>
                        <v-icon color="grey lighten-1">chat</v-icon>
                      </v-btn>
                      <v-btn flat icon>
                        <v-icon color="grey lighten-1">share</v-icon>
                      </v-btn>
                    </div>
                  </div>
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
  import {mapActions} from 'vuex'
  export default {
    props: ['note', 'noteKey'],
    data () {
      return {
        loadingWorkoutImage: true,
        loadedWorkoutImage: false
      }
    },
    methods: {
      ...mapActions(['unSetAddPost']),
      handleLoadedImage () {
        this.loadingWorkoutImage = false
        this.loadedWorkoutImage = true
      },
      deletePost () {
        this.unSetAddPost(this.noteKey)
      }
    }
  }
</script>
<style scoped>
  .spinner {
    margin-top: 1.5em;
    margin-left: 2.5em;
    margin-right: 2.5em;
  }
  img {
    margin-top: auto;
    width: 100px;
    height: auto;
    border-radius: 5px;
  }
  .frame-image {
    float: right;
  }
  .close-icon {
    position: absolute;
    margin-top: -20px;
    margin-left: 280px;
  }
  .icon {
    font-size: 1.5rem;
  }
  .buttons {
    margin-left: -14px;
    font-size: 2rem;
  }
  @media screen and (min-width: 370px) {
    .close-icon {
      margin-top: -20px;
      margin-left: 290px;
    }
  }
  @media screen and (min-width: 400px) {
    .close-icon {
      margin-top: -20px;
      margin-left: 330px;
    }
  }
  @media screen and (min-width: 500px) {
    .spinner {
      margin-top: 1.5em;
      margin-right: 4em;
      margin-left: 4em;
    }
    img {
      width: 150px;
      margin-top: auto;
      margin-left: 1em;
    }
    .close-icon {
      margin-top: -20px;
      margin-left: 620px;
    }
  }
</style>
