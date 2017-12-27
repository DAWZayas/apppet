<template>
  <div>
    <header>
      <div class="header-flex">
        <nav>
          <ul>
            <li> <nuxt-link class="menu-link" to="../apppet"> Home  </nuxt-link> </li>
            <li> <nuxt-link class="menu-link" :class="{disabled:!isAuthenticated}" to="../candidates" > <span>Candidato </span> </nuxt-link> </li>
            <li> <nuxt-link class="menu-link" :class="{disabled:!isAuthenticated}" to="" >Mensajes </nuxt-link> </li>
            <li> <nuxt-link class="menu-link" to="" >Noticias </nuxt-link> </li>
            <li> <nuxt-link class="menu-link" to="" >Ayuda </nuxt-link> </li>
            <li v-if="isAuthenticated"> 
              <span class="menu-link" @click="onClick(out.methods)">Logout <template > ( {{ name }} ) </template> </span> 
            </li>
            <li v-if="!isAuthenticated"> 
              <span class="menu-link" @click="onClick(login.methods)">Login </span> 
            </li>
          </ul>
        </nav>
        <div class="search-button"> <i class="material-icons material-icons-view ">search</i> </div>
        <div class="div-logo">
          <nuxt-link to="/apppet/">
            <img class="nom-app" src="~/assets/logos/nomApp.png">
            <img class="logo" src="~/assets/logos/huella.png">
          </nuxt-link>
        </div>
        <div class="div-menu" @click.stop="drawer = !drawer">
          <i class="material-icons material-icons-view">menu</i>
        </div>
      </div>
    </header>
    <v-navigation-drawer
      temporary
      v-model="drawer"
      light
      absolute
      style="background-color: white; width:80%;"
    >
      <v-list class="pa-1 menu">
        <v-list-tile avatar >
          <v-list-tile-avatar>
            <img src="https://randomuser.me/api/portraits/men/85.jpg" />
          </v-list-tile-avatar>
          <v-list-tile-content class="nom-user">
            <v-list-tile-title>
              <template v-if="isAuthenticated">
                {{ name }}
              </template>
             </v-list-tile-title>
          </v-list-tile-content>
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
          { title: 'Home', icon: 'dashboard', methods: 'home' },
          { title: 'Candidato', icon: 'pets', methods: 'candidate' },
          { title: 'Mensajes', icon: 'question_answer', methods: '' },
          { title: 'Noticias', icon: 'radio', methods: '' },
          { title: 'Ayuda', icon: 'help', methods: '' },
          { title: 'Busqueda', icon: 'search', methods: '' }
        ],
        out: { title: 'Logout', icon: 'close', methods: 'logout' },
        login: { title: 'Login', icon: 'power_settings_new', methods: 'logout' }
      }
    },
    computed: {
      ...mapGetters({name: 'getDisplayName', isAuthenticated: 'isAuthenticated'})
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
        if (f === 'candidate') {
          this.$router.push('/candidates')
        }
      }
    }
  }
</script>
<style lang="scss" scoped>
  .header-flex {
    background-color: #75ccb9;
    width: 100%;
    display: flex;
    flex-direction: row;
  }
  .menu {
    background-color: #75ccb9;
    width: 100%;
    margin-bottom: -1em;
  }
  .nom-user {
    color: white;
    font-weight: 800;
  }

  /* SEARCH */
  .none-search {
    display: none;
  }
  .search-button {
    width: 20%;
    text-align: center;
  }
  .icon-search {
    width: 23px;
    margin-top: 0.8em;
  }
  .search-box {
    background-color: #75ccb9;
  }
  .search-box-input{
    width: 100%;
    height: 40px;
    font-size: 1.5rem;
    border: 3px solid white;
    background-color: white;
    color: black;
  }
  .search-input {
    display: none;
  }

  /* HEADER ICONS-LOGO-MENU*/
  .div-logo {
    width: 60%;
    text-align: center;
  }
  .nom-app {
    width: 100px;
    margin-right: -0.7em;
  }
  .logo {
    width: 20px;
    margin-top: 10px;
  }
  .div-menu {
    width: 20%;
    text-align: center;
  }
  .material-icons-view{
    font-size: 40px;
    color:white;
    padding: 0.1em;
  }

  /* HEADER MENU */
  header nav {
    left: -100%;
    width: 100%;
    margin: auto;
    position: fixed;
  }
  header nav ul {
    list-style: none;
  }
  header nav ul li {
    float: left;
  }
  header nav ul li .menu-link {
    color: #fff;
    padding: 20px;
    display: block;
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
  header nav ul li .menu-link:hover {
    text-decoration: none;
    color: darkcyan;
  }
  .overlay {
    z-index: 1070!important;
  }

  /* @MEDIA */
  @media screen and (min-width: 800px) {
    header nav {
      background-color: #75ccb9;
      left: 0;
      position: relative;
      width: 60%;
    }
    .search-button {
      display: none;
    }
    .search-input {
      display:true;
    }
    .div-logo {
      width: 20%;
      text-align: left;
      padding-top: 0.5em;
    }
    .div-menu {
      display: none;
    }
  }
</style>
