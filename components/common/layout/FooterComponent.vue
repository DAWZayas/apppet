<template>
    <footer>

		<div class="apppet">AppPet 2017 ©</div>
    <div class="rss">
      <a class="twitter" href="#"><img src="~/assets/media/twitter.png" class="rss-logo"></a>
      <a class="facebook" href="#"><img src="~/assets/media/facebook.png" class="rss-logo"></a>
      <a class="google" href="#"><img src="~/assets/media/google-plus.png" class="rss-logo"></a>
      <a class="instagram" href="#"><img src="~/assets/media/instagram.png" class="rss-logo"></a>

    </div>
    <div class="create">Designed by: Jesús, Evelin & Israel</div>
	</footer>

</template>
<script>

</script>
<style lang="scss">

footer {
	box-sizing: border-box;
	width: 100%;
	padding: 1em;
	color: #fff;
	background-color: #000;

  display: flex;
  justify-content: space-around;
}
.rss-logo{
  width: 30px;
  margin: 0 1em;
}

@media screen and (max-width: 800px) {
	footer {
		display: none;
	}

}


</style>

