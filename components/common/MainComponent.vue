<template>
	<div class="main">
		<section class="main-elements">
			<element-component v-for="element in elements" :key="element.name" :element="element"></element-component>
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

	import ElementComponent from '~/components/common/ElementComponent'

	export default {
	  data () {
	    return {
	      elements: [
        {
          name: 'Felix y Luis',
          src: require('~/assets/candidatos/dogcat.jpg'),
          state: 'En adopción'
        },
        {
          name: 'Paco',
          src: require('~/assets/candidatos/1.jpg'),
          state: 'Perdido'
        },
        {
          name: 'Peter',
          src: require('~/assets/candidatos/6.jpg'),
          state: 'Adoptado'
        },
        {
          name: 'Luna',
          src: require('~/assets/candidatos/3.jpg'),
          state: 'En adopción'
        },
        {
          name: 'Felix',
          src: require('~/assets/candidatos/4.jpg'),
          state: 'En adopción'
        },
        {
          name: 'Arena',
          src: require('~/assets/candidatos/5.jpg'),
          state: 'En adopción'
        },
        {
          name: 'Peoe',
          src: require('~/assets/candidatos/2.jpg'),
          state: 'Adoptado'
        },
        {
          name: 'Nicky',
          src: require('~/assets/candidatos/7.jpg'),
          state: 'Perdido'
        },
        {
          name: 'Zhara',
          src: require('~/assets/candidatos/8.jpg'),
          state: 'Adoptado'
        },
        {
          name: 'Siba',
          src: require('~/assets/candidatos/9.jpg'),
          state: 'En adopción'
        },
        {
          name: 'Milú',
          src: require('~/assets/candidatos/10.jpg'),
          state: 'Adoptado'
        }
      ]
    }
  },
  components: { ElementComponent
  }
}
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

