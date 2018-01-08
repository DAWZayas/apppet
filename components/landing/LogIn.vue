<template>
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
  <div>
    <button @click="login" class="btn btn-default buttons button-submit">Ingresar</button>
    <p>o</p>
    <button class="loginBtn loginBtn--facebook" @click="loginWithFacebook">Login with Facebook</button>
    <button class="loginBtn loginBtn--google" @click="loginWithGoogle">Login with Google</button>
  </div>
</div>

</template>
<script>
  import firebase from 'firebase'
  import firebaseApp from '~/firebaseapp'
  import {mapActions, mapGetters} from 'vuex'
  export default {
    data () {
      return {
        email: '',
        password: ''
      }
    },
    computed: {
      ...mapGetters(['authError'])
    },
    methods: {
      ...mapActions(['createUser', 'authenticate', 'authenticateAnonymous', 'resetAuthError']),
      login () {
        let method = this.authenticate
        method({email: this.email, password: this.password})
      },
      loginWithFacebook () {
        this.loginWithProvider(new firebase.auth.FacebookAuthProvider())
      },
      loginWithGoogle () {
        this.loginWithProvider(new firebase.auth.GoogleAuthProvider())
      },
      loginWithProvider (provider) {
        firebaseApp.auth().signInWithPopup(provider)
        firebaseApp.auth().getRedirectResult()
          .then(() => this.$router.push('/'))
          .catch((error) => { this.error = error })
      },
      setError (error) {
        this.error = error.message
      }
    }
  }
</script>
<style scoped>
	@import url(https://fonts.googleapis.com/css?family=Exo:100,200,400);
	@font-face {
		font-family: "pokemonsolid";
		src: url(~/assets/font/pokemonsolid.ttf) format("truetype");
	}
  p {
    color: white;
    text-align: center;
    margin-bottom: 0.5em;
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
	.button-submit {
    background-color: white;
		color: #00acc1;
		width: 100%;
		height: 30px;
		border-radius: 3px;
		font-size: 0.8rem;
		margin-left: 0;
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
  /* login with network socials */
  .loginBtn {
    position: relative;
    width: 100%;
    height: 30px;
    padding-left: 2.5em;
    border: none;
    text-align: left;
    line-height: 34px;
    white-space: nowrap;
    border-radius: 0.2em;
    font-size: 16px;
    color: #FFF;
  }
  .loginBtn:hover{
    cursor:pointer;
  }
  .loginBtn:before {
    content: "";
    box-sizing: border-box;
    position: absolute;
    top: 0;
    left: 0;
    width: 34px;
    height: 100%;
  }
  .loginBtn:focus {
    outline: none;
  }
  .loginBtn:active {
    box-shadow: inset 0 0 0 32px rgba(0, 0, 0, 0.1);
  }
  /* Facebook */
  .loginBtn--facebook {
    background-color: #4C69BA;
  }
  .loginBtn--facebook:before {
    border-right: #364e92 1px solid;
    background: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/14082/icon_facebook.png') 6px 6px no-repeat;
  }
  .loginBtn--facebook:hover, .loginBtn--facebook:focus {
    background-color: #5B7BD5;
  }
  /* Google */
  .loginBtn--google {
    background: #DD4B39;
  }
  .loginBtn--google:before {
    border-right: #BB3F30 1px solid;
    background: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/14082/icon_google.png') 6px 6px no-repeat;
  }
  .loginBtn--google:hover, .loginBtn--google:focus {
    background: #E74B37;
  }
</style>
