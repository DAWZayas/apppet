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
  <button @click="login" class="btn btn-default buttons button-submit">Ingresar</button>
</div>

</template>
<script>
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
</style>
