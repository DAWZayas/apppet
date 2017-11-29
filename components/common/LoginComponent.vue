<template>
  <div class="container">
		<div class="body"></div>
		<div class="login-form">
			<div class="logo">
				<div>App<span>Pet</span></div>
			</div>
			<div class="row text-form">
        <div class="tab-content">

          <div id="login">
						<div class="form-group">
							<div class="col-xs-10 col-xs-offset-1">
								<input type="email" v-model="email" class="form-control input-text" placeholder="email">       
							</div>
						</div>
						<div class="form-group">
							<div class="col-xs-10 col-xs-offset-1">
								<input type="password" v-model="password" class="form-control input-text" placeholder="contraseña">
							</div>
						</div>
						<div class="form-check">
							<label id="check" class="form-check-label">
								<input type="checkbox" class="form-check-input">
								Recordar contraseña
							</label>
						</div>
						<a @click="login" class="btn btn-default buttons button-submit">Ingresar</a>
			    </div> <!--/login-->
          <div id="signup" class="hide">
						<div class="form-group">
							<div class="col-xs-10 col-xs-offset-1">
								<input type="text" v-model="name" class="form-control input-text" placeholder="nombre">       
							</div>
						</div>
						<div class="form-group">
							<div class="col-xs-10 col-xs-offset-1">
								<input type="text" v-model="fullName" class="form-control input-text" placeholder="apellido">       
							</div>
						</div>
						<div class="form-group">
							<div class="col-xs-10 col-xs-offset-1">
								<input type="email" v-model="emailSignUp" class="form-control input-text" placeholder="email">       
							</div>
						</div>
						<div class="form-group">
							<div class="col-xs-10 col-xs-offset-1">
								<input type="password" v-model="passwordSignUp" class="form-control input-text" placeholder="contraseña">
							</div>
						</div>
						<a @click="signUp" class="btn btn-default buttons button-submit">Registrar</a>
					</div> <!--/signup-->
				</div> <!--/tab-content-->
				
				<hr>
				<div>
					<div class="btn-group inline">
						<a href="#login" class="btn btn-default buttons active" @click.prevent="toggleLog">Identificarse</a>
						<a href="#signup" class="btn btn-default buttons button-signup" @click.prevent="toggleLog">Registrarse</a>
					</div>
				<nuxt-link to="/apppet/"><p class="home-forgot">AppPet</p></nuxt-link>
				</div>
	
			</div> <!--row-->
		</div> <!--/login-form-->
	</div>
</template>
<script>
  import {mapActions, mapGetters} from 'vuex'
  export default {
    data () {
      return {
        isLogin: true,
        email: '',
        password: '',
        name: '',
        fullName: '',
        emailSignUp: '',
        passwordSignUp: ''
      }
    },
    computed: {
      ...mapGetters(['authError'])
    },
    methods: {
      ...mapActions(['createUser', 'authenticate', 'authenticateAnonymous', 'resetAuthError']),
      toggleLog (e) {
        var formActive = document.querySelectorAll('.tab-content > div')
        if (!e.currentTarget.classList.contains('active')) {
          e.currentTarget.parentNode.childNodes.forEach(function (element) {
            element.classList.toggle('active')
          })
          formActive.forEach(function (element) { element.classList.toggle('hide') })
        }
      },
      login () {
        let method = this.authenticate
        method({email: this.email, password: this.password})
      },
      signUp () {
        let method = this.createUser
        method({email: this.emailSignUp, password: this.passwordSignUp})
      },
      onDisposeErrorAlert (ev) {
        this.resetAuthError()
      }
    }
  }
</script>
<style lang="scss" scoped>
	@import url(https://fonts.googleapis.com/css?family=Exo:100,200,400);
	@font-face {	
		font-family: "pokemonsolid";
		src: url(~/assets/font/pokemonsolid.ttf) format("truetype");
	}
	a {
		margin-left: 0;
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
	.input-text {
		transition: .8s;
    background-color: rgba(0,0,0,.5);
    color: white;
    border-color: #006;
		border-bottom-color: white;
    border-bottom-style: groove;
		border-left: none;
		border-right: none;
		border-top: none;
		border-width: 4px;
	}
	.group-buttons {
		margin-left: 0;
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
	.button-submit {
		width: 80px;
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
	a:hover {
		text-decoration: none;
	}
	#check {
		color: white;
		font-size: 0.8rem;
		z-index: 2;
	}
  .input-text:hover {
		transition: .8s;
		background-color: rgba(55,71,79 ,.5);
		color: white;
		box-shadow: inset;
    border-bottom-color: #00acc1;
	}
  .input-text:focus {
		transition: .8s;
		border-bottom-color: white;
  }

	@media screen and (min-width:1050px) {
	
		.body {
			background-image: url(~/assets/fondos/fondo-large.jpg);
		}
   
	}
  
</style>
