<template>
	<div class="main">
		<section class="main-elements">
			<element-component v-for="element in elements" :key="element.name" :element="element">
      </element-component>
		</section>
    <aside-component></aside-component>
		
  <button-add-component></button-add-component>
	</div>
  
</template>

<script>

  import ElementComponent from '~/components/common/ElementComponent'
  import AsideComponent from '~/components/common/AsideComponent'
  import ButtonAddComponent from '~/components/common/ButtonAddComponent'
  
export default {
    data () {
      return {
        elements: [
          {
            name: 'Felix y Luis',
            src: require('~/assets/candidatos/dogcat.jpg'),
            classButton: 'adoption',
            classDiv: 'element featured',
            user: 'paco123',
            weight: '3,75',
            age: '2 años',
            microchip: 'Si',
            ubication: 'Villanueva del Pardillo',
            date: '06/11/2017'
          },
          {
            name: 'Paco',
            src: require('~/assets/candidatos/1.jpg'),
            classButton: 'lost',
            classDiv: 'element',
            user: 'paco123',
            weight: '3,75',
            age: '2 años',
            microchip: 'Si',
            ubication: 'Villanueva del Pardillo',
            date: '06/11/2017'
          },
          {
            name: 'Peter',
            src: require('~/assets/candidatos/6.jpg'),
            classButton: 'adopted',
            classDiv: 'element featured',
            user: 'paco123',
            weight: '3,75',
            age: '2 años',
            microchip: 'Si',
            ubication: 'Villanueva del Pardillo',
            date: '06/11/2017'
          },
          {
            name: 'Luna',
            src: require('~/assets/candidatos/3.jpg'),
            classButton: 'adoption',
            classDiv: 'element',
            user: 'paco123',
            weight: '3,75',
            age: '2 años',
            microchip: 'Si',
            ubication: 'Villanueva del Pardillo',
            date: '06/11/2017'
          },
          {
            name: 'Felix',
            src: require('~/assets/candidatos/4.jpg'),
            classButton: 'adoption',
            classDiv: 'element',
            user: 'paco123',
            weight: '3,75',
            age: '2 años',
            microchip: 'Si',
            ubication: 'Villanueva del Pardillo',
            date: '06/11/2017'
          },
          {
            name: 'Arena',
            src: require('~/assets/candidatos/5.jpg'),
            classButton: 'adoption',
            classDiv: 'element featured',
            user: 'paco123',
            weight: '3,75',
            age: '2 años',
            microchip: 'Si',
            ubication: 'Villanueva del Pardillo',
            date: '06/11/2017'
          },
          {
            name: 'Peoe',
            src: require('~/assets/candidatos/2.jpg'),
            classButton: 'adopted',
            classDiv: 'element',
            user: 'paco123',
            weight: '3,75',
            age: '2 años',
            microchip: 'Si',
            ubication: 'Villanueva del Pardillo',
            date: '06/11/2017'
          },
          {
            name: 'Nicky',
            src: require('~/assets/candidatos/7.jpg'),
            classButton: 'lost',
            classDiv: 'element',
            user: 'paco123',
            weight: '3,75',
            age: '2 años',
            microchip: 'Si',
            ubication: 'Villanueva del Pardillo',
            date: '06/11/2017'
          },
          {
            name: 'Zhara',
            src: require('~/assets/candidatos/8.jpg'),
            classButton: 'adopted',
            classDiv: 'element',
            user: 'paco123',
            weight: '3,75',
            age: '2 años',
            microchip: 'Si',
            ubication: 'Villanueva del Pardillo',
            date: '06/11/2017'
          },
          {
            name: 'Siba',
            src: require('~/assets/candidatos/9.jpg'),
            classButton: 'adoption',
            classDiv: 'element',
            user: 'paco123',
            weight: '3,75',
            age: '2 años',
            microchip: 'Si',
            ubication: 'Villanueva del Pardillo',
            date: '06/11/2017'
          },
          {
            name: 'Milú',
            src: require('~/assets/candidatos/10.jpg'),
            classButton: 'adopted',
            classDiv: 'element',
            user: 'paco123',
            weight: '3,75',
            age: '2 años',
            microchip: 'Si',
            ubication: 'Villanueva del Pardillo',
            date: '06/11/2017'
          },
          {
            name: 'Martínez',
            src: require('~/assets/candidatos/11.jpg'),
            classButton: 'lost',
            classDiv: 'element',
            user: 'paco123',
            weight: '3,75',
            age: '2 años',
            microchip: 'Si',
            ubication: 'Villanueva del Pardillo',
            date: '06/11/2017'
          }

        ]
      }
    },
    components: {
      ElementComponent,
      AsideComponent,
      ButtonAddComponent
    }
}
</script>

<style lang="scss" scoped>

.info {   
	background-color: #ccc;
	border-radius: 8px;
	margin-bottom: 1em;
	padding: 1em;     
}

.main-elements {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.material-icons material-icons-main  {
  margin: 0.2em;
}

@media screen and (min-width: 800px) {
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

}

</style>

