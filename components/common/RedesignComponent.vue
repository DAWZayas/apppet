<template>
  <div class="main">
		<carousel-component></carousel-component>
    <categories-component></categories-component>
		<stories-component></stories-component>  
  </div>
</template>

<script>
	import CarouselComponent from '~/components/common/CarouselComponent'
	import CategoriesComponent from '~/components/common/CategoriesComponent'
	import StoriesComponent from '~/components/common/StoriesComponent'
	export default {
  data () {
    return {
    }
  },
  components: {
    CarouselComponent,
    CategoriesComponent,
    StoriesComponent
  }
}
</script>

<style lang="scss" scoped>
:root {
  box-sizing: border-box;
}

.main {
  background-color: rgb(233, 236, 235);
}
</style>
