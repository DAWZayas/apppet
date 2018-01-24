<template>
	<div class="main">
		<section class="main-elements">
			<element-component v-for="animal in animals" :key="animal.name" :animal="animal" v-if="animal.email === user.email"></element-component>
		</section>
    <button-add-component v-if="isAuthenticated"></button-add-component>
	</div>
</template>
<script>
  import {mapGetters} from 'vuex'
  import ElementComponent from '~/components/common/main/ElementComponent'
  import ButtonAddComponent from '~/components/common/buttons/ButtonAddComponent'
  export default {
    computed: {
      ...mapGetters({animals: 'getAnimals', isAuthenticated: 'isAuthenticated', user: 'getUser'})
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
    margin-top: 60px;
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
      background-image: url("~assets/fondos/fondo-main.jpg");
      background-size: 180%;

    }
    .main-elements {
      margin: 50px auto;
      width: 100%;
      max-width: 850px;
      background-color: rgba(255, 255, 255, 0.5);
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
