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
                    <div class="headline">
                      <v-btn 
                        flat 
                        icon 
                        class="close-icon" 
                        @click="deletePost()"
                        v-if="userPost"
                      >
                        <v-icon color="white">highlight_off</v-icon>
                      </v-btn>
                      <v-list-tile-avatar >
                        <img class="img-user" :src="note.photoURL" />
                      </v-list-tile-avatar>
                      <template>
                        <span class="name-user"> {{ note.nameUser }} </span>              
                      </template>
                      <p class="date"> {{ note.date }} </p>
                      <hr color="white">
                    </div>
                    <div style="text-align: justify;">
                      <div class="headline"> 
                        {{ note.affair }} 
                      </div>
                      <v-flex xs5 v-if="note.photoPost" class="frame-image-post">
                        <v-progress-circular v-show="loadingWorkoutImage" indeterminate color="grey" class="spinner"></v-progress-circular>
                        <img
                          class="img-post"
                          v-show="loadedWorkoutImage" @load="handleLoadedImage"
                          :src="note.photoPost ? note.photoPost[0] : null"
                        >
                      </v-flex>
                      {{ note.textPost }}
                    </div>
                    <div class="frame-down">
                      <i class="num-likes" @click.stop="dialog = true"> {{ note.likes }} </i>
                      <i class="num-likes"> 0 </i>
                      <i class="num-likes"> 0 </i>
                      <hr class="hr-down">
                      <v-btn 
                        :color="this.like ? 'red lighten-1' : 'grey lighten-1'"
                        class="button-like"
                        @click="isLike"
                        flat 
                        icon 
                      >
                          <v-icon>thumb_up</v-icon>
                      </v-btn>
                      <v-btn flat icon>
                        <v-icon color="grey lighten-1">chat</v-icon>
                      </v-btn>
                      <v-btn flat icon>
                        <v-icon color="grey lighten-1">share</v-icon>
                      </v-btn>
                    </div>
                    <v-dialog v-model="dialog" max-width="500px">
                      <v-card>
                        <v-card-title>
                          <div style="width: 100%;">
                            <span class="text-primary">Me gusta:</span> 
                            <div style=" float: right;"> 
                              {{ note.likes }} 
                              <v-icon style="font-size: 1rem; color: black;">thumb_up</v-icon>
                            </div>
                            <hr>
                          </div>
                          <div style="margin: auto; width: 30%;">
                            <img 
                              src="https://image.flaticon.com/icons/svg/26/26129.svg" 
                              v-if="!note.listUserLike"
                              style="width: 100%;"
                            >
                          </div>
                          <v-card style="width: 100%;">
                            <ul style="list-style: none; margin: 0.4em 0.5em; color: black;" v-if="note.listUserLike">
                              <li v-for="value in note.listUserLike"> 
                                <v-list-tile-avatar >
                                  <img class="img-dialog" :src="value.userURL" />
                                </v-list-tile-avatar>
                                {{ value.nameUser }} 
                              </li>
                            </ul>
                          </v-card>
                          <v-card-actions style="width: 100%;">
                            <v-btn style="margin: auto;" color="primary" flat @click.stop="dialog=false">Cerrar</v-btn>
                          </v-card-actions>
                        </v-card-title>
                      </v-card>
                    </v-dialog>
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
  import {mapActions, mapGetters} from 'vuex'
  export default {
    mounted () {
      if (this.user.uid === this.note.userUid) {
        this.userPost = true
      }
      if (this.likes != null) {
        if (this.likes[this.note.key]) {
          this.like = true
        }
      }
    },
    props: ['note'],
    data () {
      return {
        loadingWorkoutImage: true,
        loadedWorkoutImage: false,
        userPost: false,
        like: false,
        dialog: false
      }
    },
    computed: {
      ...mapGetters({user: 'getUser', likes: 'getLikes'})
    },
    methods: {
      ...mapActions(['unSetAddPost', 'setAddLikePost', 'unSetAddLikePost', 'setMoreLike', 'unSetMoreLike']),
      handleLoadedImage () {
        this.loadingWorkoutImage = false
        this.loadedWorkoutImage = true
      },
      deletePost () {
        this.unSetAddPost(this.note.key)
      },
      isLike () {
        this.like = !this.like
        let info = {
          noteKey: this.note.key,
          userUid: this.user.uid,
          ownerUid: this.note.userUid
        }
        if (this.like) {
          let infoLike = {
            noteKey: this.note.key,
            userUid: this.user.uid,
            nameUser: this.user.displayName,
            userURL: this.user.photoURL,
            likes: this.note.likes + 1
          }
          this.setAddLikePost(info)
          this.setMoreLike(infoLike)
        } else {
          let infoLike = {
            noteKey: this.note.key,
            userUid: this.user.uid,
            nameUser: this.user.displayName,
            userURL: this.user.photoURL,
            likes: this.note.likes - 1
          }
          this.unSetAddLikePost(info)
          this.unSetMoreLike(infoLike)
        }
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
  .img-post {
    margin-top: auto;
    width: 100px;
    height: auto;
    border-radius: 5px;
  }
  .frame-image-post {
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
  .frame-down {
    margin-left: -14px;
    margin-top: 1em;
    font-size: 2rem;
  }
  .name-user {
    color: #fff;
    font-size: 1rem;
    font-weight: 800;
  }
  .img-user {
    width: 40px;
    height: 40px;
    border-radius: 100%;
  }
  .date {
    font-size: 0.7rem;
    float: right;
    margin-top: 30px;
  }
  .num-likes {
    font-size: 0.8rem;
    margin: 0 2em 0 2em;
    cursor: pointer;
    color: rgb(201, 198, 198);
  }
  .hr-down {
    border: 0.4px solid; 
    border-color: #A4A4A4;
    margin: -0.2em 0.5em -0.3em;
    width: 125px;
  }
  .img-dialog {
    width: 35px;
    height: 35px;
    border-radius: 100%;
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
    .img-post {
      width: 150px;
      margin-top: auto;
      margin-left: 1em;
    }
    .close-icon {
      margin-top: -20px;
      margin-left: 620px;
    }
    .name-user {
      margin-left: 1em;
    }
    .date {
      font-size: 1rem;
      margin-top: 25px;
    }
  }
</style>
