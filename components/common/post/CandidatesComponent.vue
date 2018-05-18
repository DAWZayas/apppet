<template>
	<div class="main">
		<section class="main-elements">
			<element-pets-component 
        v-for="(animal) in animals"
        v-if="user.uid == animal.userUid" 
        :animal="animal"
        :key="animal.name"
      >
      </element-pets-component>
       <div style="margin-top:3em" v-if="isEmpty()">
        <v-alert value="true" outline color="warning" icon="priority_high">
          No tiene ningún candidato creado
        </v-alert>
        <v-alert value="true" outline color="info" icon="info" class="mt-5">
          Cree uno dándole al boton de abajo
        </v-alert>
      </div>
		</section>
 	</div>
</template>
<script>
  import {mapGetters} from 'vuex'
  import ElementPetsComponent from '~/components/common/element/ElementPetsComponent'
  export default {
    computed: {
      ...mapGetters({animals: 'getAnimals', user: 'getUser'})
    },
    data () {
      return {
      }
    },
    components: {
      ElementPetsComponent
    },
    methods: {
      isEmpty () {
        for (let i = 0; i < this.animals; i++) {
          if (this.animals[0].userUid === this.user.uid) {
            return false
          }
        }
        return true
      }
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
      background-image: url("~assets/fondos/fondo-main.jpg");
      background-size: 100%;
      background-repeat: no-repeat;
      background-attachment: fixed;
      padding-bottom: 1em;
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
