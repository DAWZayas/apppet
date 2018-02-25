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
                        <v-icon color="black">close</v-icon>
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
                      <v-flex xs5 v-if="note.photoPost" class="frame-image">
                        <v-progress-circular v-show="loadingWorkoutImage" indeterminate color="grey" class="spinner"></v-progress-circular>
                        <img
                          v-show="loadedWorkoutImage" @load="handleLoadedImage"
                          :src="note.photoPost ? note.photoPost[0] : null"
                        >
                      </v-flex>
                      {{ note.textPost }}
                    </div>
                    <div class="frame-down">
                      <v-btn 
                        :color="this.like ? 'red lighten-1' : 'grey lighten-1'"
                        class="button-like"
                        @click="isLike"
                        flat 
                        icon 
                      >
                          <v-icon>thumb_up</v-icon>
                      </v-btn>
                      <i class="num-likes"> {{ note.likes }} </i>
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
        like: false
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
            likes: this.note.likes + 1
          }
          this.setAddLikePost(info)
          this.setMoreLike(infoLike)
        } else {
          let infoLike = {
            noteKey: this.note.key,
            userUid: this.user.uid,
            nameUser: this.user.displayName,
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
    margin-left: -1.5em;
    color: rgb(201, 198, 198);
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
    .name-user {
      margin-left: 1em;
    }
    .date {
      font-size: 1rem;
      margin-top: 25px;
    }
  }
</style>
