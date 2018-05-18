<template>
  <v-layout row class="layout-profile">
    <v-flex xs12 sm6 offset-sm3>
      <v-card class="card">
        <v-card-media src="http://papers.co/wallpaper/papers.co-ag77-google-lollipop-january-background-25-wallpaper.jpg" height="330px">
          <v-layout column class="media align-center">
            <v-card-title class="header-card">
              <nuxt-link to="/apppet" class="nuxt-link">
              <v-btn dark icon>
                <v-icon>chevron_left</v-icon>
              </v-btn>
              </nuxt-link>
              <v-spacer></v-spacer>
              <v-menu bottom left>
                <v-btn dark icon class="" slot="activator">
                  <v-icon class="">more_vert</v-icon>
                </v-btn>
                <v-list class="list-margin">
                  <v-list-tile v-for="item in items" :key="item.title" @click="onClick(item.click)">
                    <v-list-tile-title >{{ item.title }}</v-list-tile-title>
                  </v-list-tile>
                </v-list>
              </v-menu>
            </v-card-title>            
              <v-spacer>
            <v-card-title class="white--text mt-3 pt-3">
              <div class="headline  ">{{name}}</div>
            </v-card-title>
              </v-spacer>
              <v-spacer>
            <v-card-title class="white--text pb-5 mb-5 " >
              <div class="title">Modifica tus datos</div>
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
            >
            <input class="d-none" type="file" ref="inputFile" value="0" @change="filesChange($event.target.files)">
            <img :src="photo" alt="avatar" class="avatar-border">
          </v-avatar>
        </v-flex>
        <v-list two-line class="name data-container">
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
            <hr class="ml-5 mr-5 mt-0 mb-0">
          </v-list>
        </v-layout>
      </v-card>
    </v-flex>
  </v-layout>  
</template>
<script>
import ChangeDisplayNameComponent from '~/components/profile/changes/ChangeDisplayNameComponent'
import ChangeEmailComponent from '~/components/profile/changes/ChangeEmailComponent'
import AlertComponent from '~/components/alerts/AlertComponent'
import {mapGetters, mapActions} from 'vuex'
export default {
  data () {
    return {
      items: [
        { title: 'Mis candidatos', click: 'candidates' },
        { title: 'Me gustan', click: 'likes' },
        { title: 'Mis notificaciones', click: 'notifications' },
        { title: 'Desconectar', click: 'logout' }
      ]
    }
  },
  components: {
    ChangeDisplayNameComponent,
    ChangeEmailComponent,
    AlertComponent
  },
  computed: {
    ...mapGetters({name: 'getDisplayName', photo: 'getPhotoURL', email: 'getEmail'})
  },
  methods: {
    inputFile () {
      this.$refs.inputFile.click()
    },
    ...mapActions(['logout']),
    onClick (f) {
      if (f === 'candidates') {
        this.$router.push('/candidates/')
      }
      if (f === 'likes') {
        this.$router.push('mainpets/favorites/')
      }
      if (f === 'logout') {
        this.logout()
        this.$router.push('/')
      }
      if (f === 'notifications') {
        this.$router.push('/notifications')
      }
    }
  }
}
</script>
<style  scoped>

.card{
  height: 100%!important;
}

.card__title{
  width :100%;
}

.header-card{
  padding: 5px;  
}

.list-margin{
 margin:0!important;
}

.layout{
  margin:0;
}
.avatar-border{
  border: 4px solid white;
  border-radius: 50%;
}

.layout-profile{
  height: auto!important;
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
  height: 10em;
}

.nuxt-link{
  text-decoration: none;
}



.data-container{

}

</style>
