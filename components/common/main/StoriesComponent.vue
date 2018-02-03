<template>
	<div class="section-two">
		<h1>Historias Felices</h1>
		<div class ="grid">
			<figure class = "effect-julia">
				<img src ="~/assets/stories/1.jpg" />
				<figcaption>
					<h2 > Jazz y <span > Julia </span > </h2 >
					<div>
						<p>Jazz es un perro muy bueno</p>
						<p>Se porta de maravilla</p>
						<p>Es un miembro más de la familia</p>
					</div>
				</figcaption>			
			</figure>
			<figure class = "effect-julia">
				<img src ="~/assets/stories/2.jpg" />
				<figcaption>
					<h2 > Maya y <span > Pablo </span > </h2 >
					<div>
						<p> Ya hará 2 meses que Maya forma parte de nuestra familia</p>
						<p> No nos podemos imaginar la familia sin ella</p>
					</div>
				</figcaption>			
			</figure>
			<figure class = "effect-julia">
				<img src ="~/assets/stories/3.jpg" />
				<figcaption>
					<h2 > Lia y <span >Nuria</span > </h2 >
					<div>
						<p>Lia forma parte de nuestra familia.</p>
						<p>Estamos encantados con él.</p>
						<p>Lo tenemos repleto de besos y abrazos.</p>
					</div>
				</figcaption>			
			</figure>
			<figure class = "effect-julia">
				<img src ="~/assets/stories/4.jpg" />
				<figcaption>
					<h2 > Perseo y <span >Marta </span > </h2 >
					<div>
						<p>Es un amor de gato, se pasaría el día pegado a nosotros.</p>
						<p>Es sociable y bueno con todo el mundo.</p>
					</div>
				</figcaption>			
			</figure>
		</div>
	</div>  
</template>
<script>
	export default {
	}
</script>
<style lang="scss" scoped>
	:root {
		box-sizing: border-box;
	}
	h1 {
		margin-top: 1em;
	}
	.section-two {
		width: 100%;
		border: 1px solid;
		background-color: #333;
		color: #fff;
		text-align: center;
	} 
	.grid {
		position: relative;
		clear: both;
		margin: 0 auto;
		padding: 1em 0 4em;
		width: 100%;
		list-style: none;
		text-align: center;
		display: flex;
		flex-wrap: wrap;
		justify-content: center; 
	}
	.grid figure {
		position: relative;
		float: left;
		overflow: hidden;
		margin: 2%;
		//min-width: 98%;
		//max-width: 480px;
		max-height: 260px;
		width: 98%;
		height: auto;
		//background: #3085a3;
		text-align: center;
		cursor: pointer;
	}
	.grid figure img {
		position: relative;
		display: block;
		min-height: 100%;
		width: 100%;
		opacity: 0.8;
	}
	.grid figure figcaption {
		padding: 2em;
		color: #fff;
		text-transform: uppercase;
		font-size: 1.25em;
		-webkit-backface-visibility: hidden;
		backface-visibility: hidden;
	}
	.grid figure figcaption::before,
	.grid figure figcaption::after {
		pointer-events: none;
	}
	.grid figure figcaption,
	.grid figure figcaption > a {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}
	.grid figure figcaption > a {
		z-index: 1000;
		text-indent: 200%;
		white-space: nowrap;
		font-size: 0;
		opacity: 0;
	}
	.grid figure h2 {
		word-spacing: -0.15em;
		font-weight: 300;
	}
	.grid figure h2 span {
		font-weight: 800;
	}
	.grid figure h2,
	.grid figure p {
		margin: 0;
	}
	.grid figure p {
		letter-spacing: 1px;
		font-size: 68.5%;
	}
	figure.effect-julia {
		background: #2f3238;
	}
	figure.effect-julia img {
		max-width: none;
		height: 400px;
		-webkit-transition: opacity 1s, -webkit-transform 1s;
		transition: opacity 1s, transform 1s;
		-webkit-backface-visibility: hidden;
		backface-visibility: hidden;
	}
	figure.effect-julia figcaption {
		text-align: left;
	}
	figure.effect-julia h2 {
		position: relative;
		padding: 0.5em 0;
	}
	figure.effect-julia p {
		display: inline-block;
		margin: 0 0 0.25em;
		padding: 0.4em 1em;
		background: rgba(255,255,255,0.9);
		color: #2f3238;
		text-transform: none;
		font-weight: 500;
		font-size: 75%;
		-webkit-transition: opacity 0.35s, -webkit-transform 0.35s;
		transition: opacity 0.35s, transform 0.35s;
		-webkit-transform: translate3d(-360px,0,0);
		transform: translate3d(-460px,0,0);
	}
	figure.effect-julia p:first-child {
		-webkit-transition-delay: 0.15s;
		transition-delay: 0.15s;
	}
	figure.effect-julia p:nth-of-type(2) {
		-webkit-transition-delay: 0.1s;
		transition-delay: 0.1s;
	}
	figure.effect-julia p:nth-of-type(3) {
		-webkit-transition-delay: 0.05s;
		transition-delay: 0.05s;
	}
	figure.effect-julia:hover p:first-child {
		-webkit-transition-delay: 0s;
		transition-delay: 0s;
	}
	figure.effect-julia:hover p:nth-of-type(2) {
		-webkit-transition-delay: 0.05s;
		transition-delay: 0.05s;
	}
	figure.effect-julia:hover p:nth-of-type(3) {
		-webkit-transition-delay: 0.1s;
		transition-delay: 0.1s;
	}
	figure.effect-julia:hover img {
		opacity: 0.4;
		-webkit-transform: scale3d(1.1,1.1,1);
		transform: scale3d(1.1,1.1,1);
	}
	figure.effect-julia:hover p {
		opacity: 1;
		-webkit-transform: translate3d(0,0,0);
		transform: translate3d(0,0,0);
	}
	.stories {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
	}
	.story {
		margin: 3%;
		width: 90%;
	}
	.stories img {
		width: 100%;
		max-width: 270px;
		max-height: 140px;
	}
	/* @MEDIA */
	@media screen and (min-width: 480px) {
		h3 {
			font-size: 2.3rem;
		}
	}
	@media (min-width: 768px){
		.grid figure{
			width: 40%;
		}
	}
	@media (min-width: 1024px){
		.grid figure {
			width: 20%;
		}
	}
</style>
