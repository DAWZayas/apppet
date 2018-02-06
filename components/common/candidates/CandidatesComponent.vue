<template>
	<div class="main">
		<section class="main-elements">
			<element-component 
        v-for="animal in animals"
        v-if="user.uid == animal.userUid" 
        :animal="animal"
        :key="animal.name"
      ></element-component>
		</section>
 	</div>
</template>
<script>
  import {mapGetters} from 'vuex'
  import ElementComponent from '~/components/common/main/ElementComponent'
  export default {
    computed: {
      ...mapGetters({animals: 'getAnimals', user: 'getUser'})
    },
    data () {
      return {
      }
    },
    components: {
      ElementComponent
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
  .load-more{
    margin-bottom: 60px;
  }
  @media screen and (min-width: 800px) {
    .main{
  
      background-image: url("~assets/fondos/fondo-main.jpg");
      background-size: 100%;
      background-repeat: no-repeat;
      background-attachment: fixed;
    }
    .main-elements {
      margin: 50px auto;
      width: 100%;
      max-width: 900px;
      background-color: rgba(255, 255, 255, 0.5);
      padding: 2em 0;
      padding-bottom: 5em;
    }
  }
</style>
