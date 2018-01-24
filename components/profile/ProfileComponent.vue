<template>
<div id="app">
  <v-app id="inspire">
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <v-card>
          <v-card-media src="http://papers.co/wallpaper/papers.co-ag77-google-lollipop-january-background-25-wallpaper.jpg" height="330px">
            <v-layout column class="media align-center">
              <v-card-title>
                <nuxt-link to="/apppet" class="nuxt-link">
                <v-btn dark icon>
                  <v-icon>chevron_left</v-icon>
                </v-btn>
                </nuxt-link>
                <v-spacer></v-spacer>
                <v-btn dark icon class="">
                  <v-icon class="">more_vert</v-icon>
                </v-btn>
              </v-card-title>            
               <v-spacer>
              <v-card-title class="white--text mt-3 pt-3">
                <div class="display-1">{{name}}</div>
              </v-card-title>
               </v-spacer>
               <v-spacer>
              <v-card-title class="white--text pb-5 mb-5 " >
                <div class="title">Programador Web</div>
              </v-card-title>
               </v-spacer>
            </v-layout>
          </v-card-media>
          <v-layout column class="media align-center">
             <v-flex
              xs12
              sm6
              md8
              text-xs-center
              layout
              align-center
              justify-center
            >
              <v-avatar
                size="150px"
                class="grey lighten-4"
              ><input class="d-none" type="file" ref="inputFile" value="0" @change="filesChange($event.target.files)">
                <v-btn
                  fab
                  small
                  color="cyan accent-2"
                  class="button-image"
                  absolute
                  @click="inputFile"
                >
                
                  <v-icon dark>camera_alt</v-icon>
              </v-btn>
                <img :src="photo" alt="avatar" class="avatar-border">
              </v-avatar>
               </v-flex>
               <v-list two-line class="name">
          <v-list-tile>
            <v-list-tile-action>
              <v-icon color="indigo">person</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>{{name}}</v-list-tile-title>
              <v-list-tile-sub-title>Nombre de usuario</v-list-tile-sub-title>
            </v-list-tile-content>
            <v-list-tile-action>
              <change-display-name-component></change-display-name-component>
            </v-list-tile-action>
          </v-list-tile>
          <hr class="ml-5 mr-5 mt-0 mb-0">
          <v-list-tile @click="">
            <v-list-tile-action>
              <v-icon color="indigo">mail</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>{{email}}</v-list-tile-title>
              <v-list-tile-sub-title>Email</v-list-tile-sub-title>
            </v-list-tile-content>
            <v-list-tile-action>
             <change-email-component></change-email-component>
            </v-list-tile-action>
          </v-list-tile>
               </v-list>
          </v-layout>
        </v-card>
      </v-flex>
    </v-layout>
  </v-app>
  
</div>

</template>
<script>
import ChangeDisplayNameComponent from '~/components/profile/changes/ChangeDisplayNameComponent'
import ChangeEmailComponent from '~/components/profile/changes/ChangeEmailComponent'
import {mapGetters} from 'vuex'
export default {
  components: {
    ChangeDisplayNameComponent,
    ChangeEmailComponent
  },
  computed: {
    ...mapGetters({name: 'getDisplayName', photo: 'getPhotoURL', email: 'getEmail'})
  },
  methods: {
    inputFile () {
      this.$refs.inputFile.click()
    }
  }
}
</script>
<style  scoped>
.card__title{
  width :100%;
}

.layout{
  margin:0;
}
.avatar-border{
  border: 4px solid white;
  border-radius: 50%;
}


.avatar{
  margin-top: -75px;
  z-index: 1;
}
.button-image{
 margin-left:120px;
}

.name{
  width: 100%;
}

.nuxt-link{
  text-decoration: none;
}

</style>
