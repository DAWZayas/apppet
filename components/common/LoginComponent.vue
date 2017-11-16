<template>
  <div class="container">
		<div class="body"></div>
		<div class="login-form">
			<div class="logo">
				<div>App<span>Pet</span></div>
			</div> 
			<div class="row text-form">
				<form role="form" class="form-horizontal">
					<div class="form-group">
						<div class="col-xs-10 col-xs-offset-1">
							<input type="email" class="form-control input-text" placeholder="email">       
						</div>
					</div>
					<div class="form-group">
						<div class="col-xs-10 col-xs-offset-1">
							<input type="password" class="form-control input-text" placeholder="contraseña">
						</div>
					</div>
					<div class="form-check">
						<label id="check" class="form-check-label">
							<input type="checkbox" class="form-check-input">
							Recordar contraseña
						</label>
					</div>
					<hr>
					<div class="form-group">
						<button type="submit" id="in" class="btn btn-danger buttons">Ingresar</button><nuxt-link to="/apppet">&nbsp
						<button id="no-login" class="col-xs-10 btn btn-danger buttons">Sin registro</button></nuxt-link>
					</div>
				</form>
				</div> <!--row-->
		</div> <!--/login-form-->
	</div>
</template>
<script>
</script>
<style lang="scss">
	@import url(https://fonts.googleapis.com/css?family=Exo:100,200,400);
	@font-face {	
		font-family: "pokemonsolid";
		src: url(~/assets/font/pokemonsolid.ttf) format("truetype");
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
	/*	-webkit-filter: blur(4px); */
		z-index: 0;
	}
	.login-form {
		position: absolute;
    width: 100%;
  }
  .login-form:hover{
		transition: .8s;
    background-color: rgba(0,0,0,.5);
		width: 100%;
		height: 100%;
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
	.input-text{
		transition: .8s;
    background-color: rgba(0,0,0,.5);
    color: white;
    border-color:#006;
		border-bottom-color:white;
    border-bottom-style:groove;
		border-left:none;
		border-right:none;
		border-top:none;
		border-width: 4px;
	}
	.buttons {
		border: none;
		font-size: 0.97rem;
	}
	#in {
		background-color: white;
		color: #00acc1;
	}
	#no-login {
		background-color: #00acc1;
		color: white;
	}
	#check {
		color: white;
	}
  .input-text:hover{
		transition: .8s;
		background-color:rgba(55,71,79 ,.5);
		color: white;
		box-shadow:inset;
    border-bottom-color:#00acc1;
	}
  .input-text:focus{
		transition: .8s;
		border-bottom-color: white;
  }

	@media screen and (min-width:1050px) {
	
		.body {
			background-image: url(~/assets/fondos/fondo-large.jpg);
		}
   
	}
  
</style>
