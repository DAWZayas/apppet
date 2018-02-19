<template>
	<div>
    <v-stepper v-model="e13" vertical>
      <v-stepper-step step="1" complete> Datos </v-stepper-step>
      <v-stepper-content step="1">
        <span class="form-title"> Escribe los datos </span>
        <v-form v-model="valid">
          <v-text-field
            :label="user.email"
            disabled
            v-model="email"
            :rules="emailRules"
            required
            :value="user.email"
          ></v-text-field>
          <v-text-field
            label="Nombre de la mascota"
            v-model="namePet"
            :rules="nameRules"
            :counter="10"
            required
          ></v-text-field>
          <v-text-field
            label="Teléfono móvil"
            v-model="movil"
            required
          ></v-text-field>
        </v-form>      
        <v-btn color="primary"  @click.native="e13 = 2"> Siguiente </v-btn>
        <v-btn flat @click="onClick()"> Cancelar </v-btn>
      </v-stepper-content>
      <v-stepper-step step="2" complete> Información </v-stepper-step>
      <v-stepper-content step="2">
        <span class="form-title"> Escribe la información </span>
        <v-form v-model="valid">
            <v-text-field
            label="Post"
            v-model="textPost"
            textarea
            required
          ></v-text-field>
        </v-form>
        <nuxt-link to="/notes"><v-btn color="primary"  @click="addPost"> Enviar </v-btn></nuxt-link>
        <v-btn flat @click.native="e13 = 1"> Atrás </v-btn>
      </v-stepper-content>
    </v-stepper>
	</div>
</template>
<script>
  import {mapGetters, mapActions} from 'vuex'
  export default {
    data () {
      return {
        e13: 0,
        valid: false,
        namePet: '',
        nameRules: [
          (v) => !!v || 'Ingrese el nombre de su mascota',
          (v) => v.length <= 10 || 'El nombre debe tener menos de 10 letras'
        ],
        email: '',
        emailRules: [
          (v) => !!v || 'E-mail is required',
          (v) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
        ],
        movil: '',
        textPost: ''
      }
    },
    computed: {
      ...mapGetters({ user: 'getUser' })
    },
    methods: {
      addPost: function () {
        const newPost = {
          namePet: this.namePet,
          movil: this.movil,
          email: this.user.email,
          textPost: this.textPost,
          userUid: this.user.uid
        }
        this.setAddPost(newPost)
      },
      onClick () {
        this.$router.push('/notes/')
      },
      ...mapActions(['setAddPost', 'uploadImagenes'])
    }
  }
</script>
<style scoped>
  .stepper {
    margin-top: 56px;
    z-index: 0;
  }
  .form-title {
    color: rgba(0,0,0,.54);
    font-size: 20px;
  }
  @media screen and (min-width: 800px) {
    .stepper {
      width: 50%;
      margin: 0 auto;
      margin-top: 100px;
    }
  }

</style>
