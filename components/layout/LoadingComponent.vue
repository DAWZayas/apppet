<template>
  <div class="main-loader">
    <div class="loader-container">
      <div class="d-flex flex-column align-items-center">
        <img :src="logo" class="load-img" alt="AppVenture">
      </div>
      <div class="load-t">
				<div class="logo-apppet">App<span class="logo-apppet-pet">Pet</span></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      logo: require('~/assets/svg/footprints-splash.svg')
    }
  }
}
</script>
<style lang="scss" scoped>

	@font-face {
		font-family: "pokemonsolid";
		src: url(~/assets/font/pokemonsolid.ttf) format("truetype");
	}

  @keyframes dots {
    0%, 100% { width: 0; }
    20% { width: 0; }
    50% { width: 2.5rem; }
  }

  .main-loader {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: white;
    z-index: 10;
  }
  .loader-container {
    position: relative;
    overflow: hidden;
    background-color: #4db6ac;
    height: 100%;
  
  }
  .load-img {
    position: absolute;
    top: 20%;
    animation-timing-function: cubic-bezier(.90,.15,.15,.90);
    animation-name: loader;
    animation-duration: 1.5s;
    animation-iteration-count: infinite;
    animation-fill-mode: both;
    width:40%;
  }
  .load-t {
    position: absolute;
    font-size: 2.5rem;
    font-family: Arial, Helvetica, sans-serif;
    color: rgb(200, 200, 200);
    width: 100%;
    top: 75%;
    text-align: center;
    & span:after {
      position: absolute;
      overflow: hidden;
      animation: dots 2s infinite;
      content: "\2026";
    }
  }

  .logo-apppet {
		color: #fff;
		font-family: pokemonsolid;
    font-size: 4rem;
	}
	.logo-apppet-pet {
		color: #00acc1 !important;
	}
  @media screen and (min-width:500px) {
    .load-img{
      width: 30%;
    }
  }

    @media screen and (min-width:750px) {
    .load-img{
      width: 20%;
    }
  }
  @media screen and (min-width:1080px) {
    .load-img{
      width: 10%;
    }
  }
</style>
