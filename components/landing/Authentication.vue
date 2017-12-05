<template>
  <div class="container">
		<div class="body"></div>
		<div class="login-form">
			<div class="logo">
				<div>App<span>Pet</span></div>
			</div>
			<div class="row text-form">
        <div class="tab-content">

          <log-in v-if="visible"></log-in>
          <sign-up v-if="!visible"></sign-up>

				</div> <!--/tab-content-->

				<hr>
				<div>
					<div class="btn-group inline">
						<button href="#login" class="btn btn-default buttons active" @click.prevent="toggleLogIn">Identificarse</button>
						<button href="#signup" class="btn btn-default buttons button-signup" @click.prevent="toggleSignUp">Registrarse</button>
					</div>
				<nuxt-link to="/apppet/"><p class="home-forgot">AppPet</p></nuxt-link>
				</div>

			</div> <!--row-->
		</div> <!--/login-form-->
	</div>
</template>
<script>
  import LogIn from '~/components/landing/LogIn'
  import SignUp from '~/components/landing/SignUp'
  import {mapActions, mapGetters} from 'vuex'
  export default {
    data () {
      return {
        visible: true
      }
    },
    computed: {
      ...mapGetters(['authError'])
    },
    methods: {
      ...mapActions(['createUser', 'authenticate', 'authenticateAnonymous', 'resetAuthError']),
      toggleLogIn () {
        this.visible = true
      },
      toggleSignUp () {
        this.visible = false
      }
    },
    components: {
      LogIn,
      SignUp
    }
  }
</script>
<style lang="scss" scoped>
	@import url(https://fonts.googleapis.com/css?family=Exo:100,200,400);
	@font-face {
		font-family: "pokemonsolid";
		src: url(~/assets/font/pokemonsolid.ttf) format("truetype");
	}
	hr {
		width: 100%;
		border: 0.5px solid #BDB8B6;
	}
	.hide {
		display: none;
	}
	.container {
		margin: 0;
		padding: 0;
		font-family: 'Exo', sans-serif;
	}
	.body {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		width: auto;
		height: auto;
		background-image: url(~/assets/fondos/fondo-small.jpg);
		background-size: cover;
  	z-index: 0;
	}
	.login-form {
    transition: .8s;
		position: absolute;
   	width: 100%;
		height: 100%;
  }
 	.login-form:hover {
		background-color: rgba(0,0,0,.5);
	}
	.logo {
		margin-top:  3em;
		margin-bottom: 1em;
		font-size: 2rem;
		text-align: center;
		z-index: 2;
	}
	.logo div {
		color: #fff;
		font-family: pokemonsolid;
	}
	.logo div span {
		color: #00acc1 !important;
	}
	.text-form {
		width: 200px;
		margin: auto;
		margin-bottom: 2em;
	}

	.buttons {
		background-color: white;
		color: #00acc1;
		width: 100px;
		height: 30px;
		border-radius: 3px;
		font-size: 0.8rem;
		margin-right: 0;
	}

	.button-signup {
		background-color: #00acc1;
		color: white;
	}
	.home-forgot {
    cursor: pointer;
		color: white;
		padding-top: 1em;
    margin: 0;
    text-align: right;
		z-index: 2;
  }



	@media screen and (min-width:1050px) {

		.body {
			background-image: url(~/assets/fondos/fondo-large.jpg);
		}

	}

</style>
