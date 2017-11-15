<template>
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
					</nav> <!--/nav-->
					<div class="search-button"> <i class="material-icons material-icons-view ">search</i> </div>
					<div class="div-logo">
						<nuxt-link to="/">
							<img class="nom-app" src="~/assets/logos/nomApp.png">
            				<img class="logo" src="~/assets/logos/huella.png">
						</nuxt-link>
					</div>

					<div class="div-menu"> <i class="material-icons material-icons-view">menu</i></div>
				</div> <!--/header flex-->
        <div class="search-box">
					<input type="text" class="search-box-input" placeholder="Buscar animal...">
				</div>
			</header>



</template>
<script>
	export default{
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
	width: 100%;
	max-width: 1240px;
	margin: auto;
	background-color: #00acc1;
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
	background: #037E8C;
  	text-decoration: none;
  	color: white;
}


/* @MEDIA */
@media screen and (min-width: 800px) {

	header nav {
		background-color: #75ccb9;
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

@media screen and (max-width:800px ) {
	header nav {
		width: 80%;
		height: 100%;
		left: -100%;
		margin: 0;
		position: fixed;
		z-index: 900;
	}
  header nav ul{
      padding: 0;
  }

	header nav ul li {
		display: block;
		float: none;
		border-bottom: 1px solid rgba(255,255,255, .3);
	}
}


</style>
