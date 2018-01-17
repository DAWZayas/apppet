<template>
  <div class="main">
		<carousel-component></carousel-component>
    <categories-component></categories-component>
		<stories-component></stories-component>  
  </div>
</template>

<script>
	import CarouselComponent from '~/components/common/main/CarouselComponent'
	import CategoriesComponent from '~/components/common/main/CategoriesComponent'
	import StoriesComponent from '~/components/common/main/StoriesComponent'
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

</style>
