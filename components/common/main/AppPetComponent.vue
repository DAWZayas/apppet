<template>
  <div class="main">
    <categories-component></categories-component>
  </div>
</template>

<script>
	import CategoriesComponent from '~/components/common/main/CategoriesComponent'
	export default {
  data () {
    return {
    }
  },
  components: {
    CategoriesComponent
  }
}
</script>

<style lang="scss" scoped>
:root {
  box-sizing: border-box;
}

</style>
