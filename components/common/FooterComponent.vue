<template>
    <footer>
		<p> © {{ new Date().getFullYear() }}</p>
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
	position: fixed;
  	bottom: 0;
}

/* @MEDIA */
@media screen and (max-width: 800px) {
	footer {
		display: none;
	}

}


</style>

