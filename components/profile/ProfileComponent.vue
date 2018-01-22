<template>
<div id="app">
  <v-app id="inspire">
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <v-card>
          <v-card-media src="http://papers.co/wallpaper/papers.co-ag77-google-lollipop-january-background-25-wallpaper.jpg" height="330px">
            <v-layout column class="media align-center">
              <v-card-title>
                <v-btn dark icon class="mr-4">
                  <v-icon>chevron_left</v-icon>
                </v-btn>
                <v-spacer></v-spacer>
                <v-btn dark icon>
                  <v-icon>edit</v-icon>
                </v-btn>
                <v-btn dark icon>
                  <v-icon>more_vert</v-icon>
                </v-btn>
              </v-card-title>
              
               <v-spacer>
              <v-card-title class="white--text mt-3 pt-3">
                <div class="display-2">Garlos Robrese</div>
              </v-card-title>
               </v-spacer>
               <v-spacer>
              <v-card-title class="white--text pb-5 mb-5 " >
                <div class="title">Programador Webp</div>
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
                class="grey lighten-4 avatar-pepe"
              >
                <img src="https://vuetifyjs.com/static/apple-touch-icon-180x180.png" alt="avatar" class="avatar-border">
              </v-avatar>
               </v-flex>
               <v-list two-line class="name">
          <v-list-tile @click="">
            <v-list-tile-action>
              <v-icon color="indigo">person</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Carlos epeppe pep e</v-list-tile-title>
              <v-list-tile-sub-title>Nombre</v-list-tile-sub-title>
            </v-list-tile-content>
            <v-list-tile-action>
              <v-icon>edit</v-icon>
            </v-list-tile-action>
          </v-list-tile>
          <v-list-tile @click="">
            <v-list-tile-action>
              <v-icon color="indigo">mail</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>carlos@gmail.com</v-list-tile-title>
              <v-list-tile-sub-title>Emilio</v-list-tile-sub-title>
            </v-list-tile-content>
            <v-list-tile-action>
              <v-icon>edit</v-icon>
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
export default {
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

.avatar-pepe{
  margin-top: -75px;
  z-index: 50;
}

.name{
  width: 100%;
}

</style>
