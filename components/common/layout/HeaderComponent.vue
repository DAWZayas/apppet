<template>
  <div>
   <v-toolbar fixed dark color="teal lighten-2">
      <v-toolbar-side-icon class="hidden-md-and-up" @click.stop="drawer = !drawer"></v-toolbar-side-icon>
       <v-spacer></v-spacer>
      <nuxt-link to="/apppet/" class="logo">
        <img class="nom-app" src="~/assets/logos/nomApp.png">
      </nuxt-link>
      <v-spacer></v-spacer>
      <v-btn icon class="hidden-md-and-up">
        <v-icon>search</v-icon>
      </v-btn>
      <div class="hidden-sm-and-down header-menu">
        <nuxt-link class="menu-link" to="../apppet"> Inicio </nuxt-link>
        <nuxt-link class="menu-link" :class="{disabled:!isAuthenticated}" :to="isAuthenticated ? '../candidates' : ''"> Candidatos </nuxt-link>
        <nuxt-link class="menu-link" :class="{disabled:!isAuthenticated}" :to="isAuthenticated ? '../mainpets/favorites' : ''" > Favoritos </nuxt-link>
        <nuxt-link class="menu-link" to="../notes"> Notas </nuxt-link>
        <nuxt-link v-if="isAuthenticated" to="../notifications" class="menu-link" @click="onClick(out.methods)"> Notificaiones </nuxt-link>        
        <span v-if="isAuthenticated" class="menu-link" @click="onClick(out.methods)"> Salir </span>
        <span v-if="!isAuthenticated" class="menu-link" @click="onClick(login.methods)">Identificarse </span>
        <v-list-tile-avatar >
          <img class="img-profile" :src="picProfile" />
        </v-list-tile-avatar>
        <template>
          <span class="name-link"> {{ name }} </span>              
        </template>
      </div>
    </v-toolbar>
    <v-navigation-drawer
      temporary
      v-model="drawer"
      light
      fixed
      style="background-color: white; width:80%;"
    >
      <v-list class="pa-1 menu">
        <v-list-tile avatar >
          <nuxt-link to="/profile" style="text-decoration:none">
          <v-list-tile-avatar>
            <img :src="picProfile" />
          </v-list-tile-avatar>
          </nuxt-link>
          <nuxt-link to="/profile">
          <v-list-tile-content class="nom-user">
            <v-list-tile-title>
              <template>
                {{ name }}
              </template>
             </v-list-tile-title>
          </v-list-tile-content>
          </nuxt-link>
        </v-list-tile>
      </v-list>
      <v-list class="pt-0" dense>
        <v-divider></v-divider>
        <v-list-tile v-for="item in items" :key="item.title" @click="onClick(item.methods)">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title >{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile v-if="isAuthenticated" @click="onClick(out.methods)">
          <v-list-tile-action>
            <v-icon>{{ out.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title >{{ out.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile v-if="!isAuthenticated" @click="onClick(out.methods)">
          <v-list-tile-action>
            <v-icon>{{ login.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title >{{ login.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>
<script>
  import {mapActions, mapGetters} from 'vuex'
  export default {
    data () {
      return {
        drawer: null,
        items: [
          { title: 'Inicio', icon: 'dashboard', methods: 'home' },
          { title: 'Candidatos', icon: 'pets', methods: 'candidates' },
          { title: 'Favoritos', icon: 'favorite', methods: 'favorites' },
          { title: 'Notas', icon: 'question_answer', methods: 'notes' },
          { title: 'Notifications', icon: 'notifications', methods: 'notifications' }
        ],
        out: { title: 'Salir', icon: 'close', methods: 'logout' },
        login: { title: 'Identificarse', icon: 'power_settings_new', methods: 'logout' }
      }
    },
    computed: {
      ...mapGetters({name: 'getDisplayName', picProfile: 'getPhotoURL', isAuthenticated: 'isAuthenticated'})
    },
    methods: { ...mapActions(['logout']),
      onClick (f) {
        if (f === 'logout') {
          this.logout()
          this.$router.push('/')
        }
        if (f === 'home') {
          this.$router.push('/apppet')
        }
        if (f === 'candidates') {
          this.$router.push('/candidates')
        }
        if (f === 'notes') {
          this.$router.push('/notes')
        }
        if (f === 'favorites') {
          this.$router.push('/mainpets/favorites')
        }
        if (f === 'notifications') {
          this.$router.push('/notifications')
        }
      }
    }
  }
</script>
<style lang="scss" scoped>

  body{
    overflow: hidden;
  }
  .nom-app {
    width: 120px;
  }
  .header-menu{
    text-decoration: none;
    font-size: 0.8em;
    color: white;
  }
  .menu-link {
    color: #fff;
    padding: 20px;
    text-decoration: none;
    transition:all 0.3s ease;
    font-weight: 800;
    margin-right: 10px;
    cursor: pointer;
    &.disabled {
      cursor: default;
      color: #787c7b;
      &:hover {
        color: #787c7b;
      }
    }
  }
  .menu-link:hover {
    text-decoration: none;
    color: darkcyan;
  }
  .name-link {
    color: #fff;
    font-weight: 800;
  }
  .img-profile {
    width: 40px;
    height: 40px;
  }
  .menu {
    background-color: #4db6ac;
    width: 100%;
    margin-bottom: -1em;
  }
  .nom-user {
    color: white;
  }
</style>
