<template>
    <header>
        <div class="header-flex">
            <nav>
                <ul>
                    <li> <a href="#"><span class="icon-person"></span>Perfil </a> </li>
                    <li> <a href="#"><span class="icon-pets"></span>Candidato </a> </li>
                    <li> <a href="#"><span class="icon-question_answer"></span>Mensajes </a> </li>
                    <li> <a href="#"><span class="icon-radio"></span>Noticias </a> </li>
                    <li> <a href="#"><span class="icon-help_outline"></span>Ayuda </a> </li>
                    <li> <a href="#"><span class="icon-search"></span>Búsqueda </a> </li>
                </ul>
            </nav> <!--/nav-->
            <div class="search-button"> <img class="icon-search" src="images/logos/busqueda.png"/> </div>
            <div class="div-logo"> 
                <img class="nom-app" src="images/logos/nomApp.png"/>
                <img class="logo" src="images/logos/huella.png"/>
            </div>
            
            <div class="div-menu"> <img class="icon-menu" src="images/logos/menu.png"/> </div>
        </div> <!--/header flex-->

        <div class="search-box">
            <input type="text" class="search-box-input" placeholder="Buscar animal...">
        </div>
                        
    </header>

</template>
<script>
</script>
<style lang="scss">
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
	height: 30px;
    font-size: 1rem;
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
	width: 95px;
	margin-right: -0.7em;
}
.logo {
	width: 23px;
}

.div-menu {
	width: 20%;
	text-align: center;
}
.icon-menu {
	width: 30px;
	margin-top: 0.6em;
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
	}
 
	header nav ul li {
		display: block;
		float: none;
		border-bottom: 1px solid rgba(255,255,255, .3);
	}

	
}


</style>
