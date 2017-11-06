<template>
	<div class="main">
		<section class="main-elements">
			<element-component v-for="element in elements" :key="element.name" :element="element"></element-component>
		</section> <!--/section-->
    <aside-component></aside-component>
		

	</div> <!--/main-->
</template>

<script>

  import ElementComponent from '~/components/common/ElementComponent'
  import AsideComponent from '~/components/common/AsideComponent'
  
export default {
    data () {
      return {
        elements: [
          {
            name: 'Felix y Luis',
            src: require('~/assets/candidatos/dogcat.jpg'),
            state: 'En adopción',
            classB: 'adoption',
            classD: 'element featured'
          },
          {
            name: 'Paco',
            src: require('~/assets/candidatos/1.jpg'),
            state: 'Perdido',
            classB: 'lost',
            classD: 'element'
          },
          {
            name: 'Peter',
            src: require('~/assets/candidatos/6.jpg'),
            state: 'Adoptado',
            classB: 'adopted',
            classD: 'element featured'
          },
          {
            name: 'Luna',
            src: require('~/assets/candidatos/3.jpg'),
            state: 'En adopción',
            classB: 'adoption',
            classD: 'element'
          },
          {
            name: 'Felix',
            src: require('~/assets/candidatos/4.jpg'),
            state: 'En adopción',
            classB: 'adoption',
            classD: 'element'
          },
          {
            name: 'Arena',
            src: require('~/assets/candidatos/5.jpg'),
            state: 'En adopción',
            classB: 'adoption',
            classD: 'element featured'
          },
          {
            name: 'Peoe',
            src: require('~/assets/candidatos/2.jpg'),
            state: 'Adoptado',
            classB: 'adopted',
            classD: 'element'
          },
          {
            name: 'Nicky',
            src: require('~/assets/candidatos/7.jpg'),
            state: 'Perdido',
            classB: 'lost',
            classD: 'element'
          },
          {
            name: 'Zhara',
            src: require('~/assets/candidatos/8.jpg'),
            state: 'Adoptado',
            classB: 'adopted',
            classD: 'element'
          },
          {
            name: 'Siba',
            src: require('~/assets/candidatos/9.jpg'),
            state: 'En adopción',
            classB: 'adoption',
            classD: 'element'
          },
          {
            name: 'Milú',
            src: require('~/assets/candidatos/10.jpg'),
            state: 'Adoptado',
            classB: 'adopted',
            classD: 'element'
          }
        ]
      }
    },
    components: {
      ElementComponent,
      AsideComponent
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
}


</style>

