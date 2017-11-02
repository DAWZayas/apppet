<template>
<div class="main">
				<section class="main-elements">

					<div class="element featured">
						<img src="~/assets/candidatos/dogcat.jpg">
						<div>
							<p class="nom"> Felíx y Luis </p>
							<i class="material-icons material-icons-main "> share&nbsp&nbspfavorite&nbsp&nbspchat_bubble&nbsp&nbsppets </i>
							<button class="adoption"> En adopción </button>
						</div>	
					</div>
					<div class="element">
						<img src="~/assets/candidatos/1.jpg">
						<div>
							<p class="nom"> Paco </p>
							<i class="material-icons material-icons-main "> share&nbsp&nbspfavorite&nbsp&nbspchat_bubble&nbsp&nbsppets </i>
							<button class="lost"> Perdido </button>
						</div>		
					</div>
					<div class="element featured">
						<img src="~/assets/candidatos/6.jpg">
						<div>
							<p class="nom"> Peter </p>
							<i class="material-icons material-icons-main "> share&nbsp&nbspfavorite&nbsp&nbspchat_bubble&nbsp&nbsppets </i>
							<button class="adopted"> Adoptado </button>
						</div>		
					</div>
					<div class="element">
						<img src="~/assets/candidatos/3.jpg">
						<div>
							<p class="nom"> Luna </p>
							<i class="material-icons material-icons-main "> share&nbsp&nbspfavorite&nbsp&nbspchat_bubble&nbsp&nbsppets </i>
							<button class="adoption"> En adopción </button>
						</div>		
					</div>
					<div class="element">
						<img src="~/assets/candidatos/4.jpg">
						<div>
							<p class="nom"> Felíx </p>
							<i class="material-icons material-icons-main "> share&nbsp&nbspfavorite&nbsp&nbspchat_bubble&nbsp&nbsppets </i>
							<button class="adoption"> En adopción </button>
						</div>
					</div>
					<div class="element featured">
						<img src="~/assets/candidatos/5.jpg">
						<div>
							<p class="nom"> Arena </p>
							<i class="material-icons material-icons-main "> share&nbsp&nbspfavorite&nbsp&nbspchat_bubble&nbsp&nbsppets </i>
							<button class="adoption"> En adopción </button>
						</div>		
					</div>
					<div class="element">
						<img src="~/assets/candidatos/2.jpg">
						<div>
							<p class="nom"> Peoe </p>
							<i class="material-icons material-icons-main "> share&nbsp&nbspfavorite&nbsp&nbspchat_bubble&nbsp&nbsppets </i>
							<button class="adopted"> Adoptado </button>
						</div>		
					</div>
					<div class="element">
						<img src="~/assets/candidatos/7.jpg">
						<div>
							<p class="nom"> Nicky </p>
							<i class="material-icons material-icons-main "> share&nbsp&nbspfavorite&nbsp&nbspchat_bubble&nbsp&nbsppets </i>
							<button class="lost"> Perdido </button>
						</div>		
					</div>
					<div class="element">
						<img src="~/assets/candidatos/8.jpg">
						<div>
							<p class="nom"> Zhara </p>
							<i class="material-icons material-icons-main "> share&nbsp&nbspfavorite&nbsp&nbspchat_bubble&nbsp&nbsppets </i>
							<button class="adopted"> Adoptado </button>
						</div>		
					</div>
					<div class="element">
						<img src="~/assets/candidatos/9.jpg">
						<div>
							<p class="nom"> Siba </p>
							<i class="material-icons material-icons-main "> share&nbsp&nbspfavorite&nbsp&nbspchat_bubble&nbsp&nbsppets </i>
							<button class="adoption"> En adopción </button>
						</div>		
					</div>
					<div class="element">
						<img src="~/assets/candidatos/10.jpg">
						<div>
							<p class="nom"> Milú </p>
							<i class="material-icons material-icons-main"> share&nbsp&nbspfavorite&nbsp&nbspchat_bubble&nbsp&nbsppets </i>
							<button class="adopted"> Adoptado </button>
						</div>		
					</div>

				</section> <!--/section-->

				<aside>

					<div class="info">
						<p>
						Quisque lorem quam, vulputate ac accumsan sit amet, hendrerit in nisi. Maecenas molestie enim turpis, sed eleifend velit efficitur quis. In suscipit ac dolor vel ultricies. Integer nibh odio, tincidunt a odio at, congue posuere urna. In hac habitasse platea dictumst. Phasellus pretium venenatis ipsum. Praesent a lacinia lorem, ut porta diam. 
						</p>
					</div>
					<div class="info">
						<p>
						Quisque lorem quam, vulputate ac accumsan sit amet, hendrerit in nisi. Maecenas molestie enim turpis, sed eleifend velit efficitur quis. In suscipit ac dolor vel ultricies. Integer nibh odio, tincidunt a odio at, congue posuere urna. In hac habitasse platea dictumst. Phasellus pretium venenatis ipsum. Praesent a lacinia lorem, ut porta diam. 
						</p>
					</div>

				</aside> <!--/aside-->

			</div> <!--/main-->
</template>
<script>

</script>
<style lang="scss">
.main{
	display: flex;
}

.main-elements {
	width: 70%;
	background-color: #fafafa;
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(170px, 1fr));
	grid-auto-rows: 1fr;
	grid-gap: 1em;
	grid-auto-flow: dense;
	padding: 0.5em;
}

.main-elements .featured {
	grid-row: span 2;
	grid-column: span 2;
}

.main-elements > .element {
	border: 0.5px solid #E6E6E6;
	border-radius: 5px;
	display: flex;
	flex-direction: column;
}

img {
	flex: 1;
	object-fit: cover;
	max-width: 100%;
	border-radius: 5px;
}

/* TARGETS */
.nom {
	font-size: 1.2rem;
	margin-left: 0.4em;
	color: #848484;

}

button {
	width: 100%;
	border: none;
	padding: 0.2em;
	margin-top: 0.3em;
	font-family: 'Acme', sans-serif;
	font-size: 1rem;
	border-radius: 5px;
}

.adoption {
	background-color: #D8F781;
}

.lost {
	background-color: #FA5858;
}

.adopted {
	background-color: #D8D8D8;
}

.material-icons-main  {
	color: #75ccb9;
	font-size: 1rem;
	float: right;
	margin-right: 1em;
	text-shadow: 1px 1px black;
}

/* ASIDE */
aside  {
	flex: 20%;
	display: flex;    
	flex-direction: column; 
	margin-left: 1em;
}

.info {   
	background-color: #ccc;
	border-radius: 8px;
	margin-bottom: 1em;
	padding: 1em;     
}


/* @MEDIA */
@media screen and (max-width: 800px) {

	.main-elements {
		width: 100%;
	}

	.main-elements .featured {
	grid-row: span 1;
	grid-column: span 2;
	}

	.material-icons material-icons-main  {
		margin: 0.2em;
	}

	aside {
		display: none;
	}
}


</style>

