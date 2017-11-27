<template>
	<div class="main">
		<section class="main-elements">
			<element-component v-for="animal in animals" :key="animal.name" :animal="animal">
      </element-component>
		</section>
  <button-add-component></button-add-component>
	</div>
</template>

<script>

  import {mapGetters} from 'vuex'
  import ElementComponent from '~/components/common/ElementComponent'
  import ButtonAddComponent from '~/components/common/ButtonAddComponent'

export default {
    computed: {
      ...mapGetters({
        animals: 'getAnimals'
      })
    },
    data () {
      return {
      }
    },
    components: {
      ElementComponent,
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
    margin: 0 auto;
    width: 100%;
    max-width: 900px;
    background-color: #fafafa;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(170px, 1fr));
    grid-auto-rows: 1fr;
    grid-gap: 1em;
    grid-auto-flow: dense;
    padding: 1em;
    padding-right:2em;

  }

}

</style>

