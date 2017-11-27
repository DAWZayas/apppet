<template>
  <div>
    <header>
      <div class="header-flex">
        <nav>
          <ul>
            <li> <a href="#"> <i class="material-icons material-icons-style ">person</i>Perfil </a> </li>
            <li> <a href="#"> <i class="material-icons material-icons-style ">pets</i>Candidato </a> </li>
            <li> <a href="#"> <i class="material-icons material-icons-style ">message</i></span>Mensajes </a> </li>
            <li> <a href="#"> <i class="material-icons material-icons-style ">query_builder</i>Noticias </a> </li>
            <li> <a href="#"> <i class="material-icons material-icons-style ">help</i></span>Ayuda </a> </li>
            <li> <a href="#"> <i class="material-icons material-icons-style ">search</i>Búsqueda </a> </li>
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
        style="background-color: white;"
      >
      <v-list class="pa-1">
        <v-list-tile avatar>
          <v-list-tile-avatar>
            <img src="https://randomuser.me/api/portraits/men/85.jpg" />
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title>Usuario no registrado</v-list-tile-title>
          </v-list-tile-content>
          </v-list-tile-action>
        </v-list-tile>
      </v-list>
      <v-list class="pt-0" dense>
        <v-divider></v-divider>
        <v-list-tile v-for="item in items" :key="item.title" @click="">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        drawer: null,
        items: [
          { title: 'Inicio', icon: 'dashboard' },
          { title: 'Perfil', icon: 'question_answer' }
        ]
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

.search-box{
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
.material-icons-style {
	font-size: 25px;
 	color:white;
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

header nav ul li a {
	color: #fff;
	padding: 20px;
	display: block;
	text-decoration: none;
}

header nav ul li span {
	margin-right: 10px;
}

header nav ul li a:hover {
  text-decoration: none;
  color: #00acc1;
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

	}

  .search-button {
		display: none;
	}

	.div-logo {
		width: 30%;
		text-align: center;
		padding-top: 0.5em;
	}

	.div-menu {
		display: none;
	}
}

</style>
