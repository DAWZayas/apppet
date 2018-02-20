<template>
	<div>
    <v-stepper v-model="e13" vertical>
      <v-stepper-step step="1" complete> Datos </v-stepper-step>
      <v-stepper-content step="1">
        <span class="form-title"> Rellena los campos </span>
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
          ></v-text-field>
          <div class="image-box">
            <v-subheader class="image-box-subheader m-auto p-0">Imagen:</v-subheader>                
            <div>
              <input class="d-none" type="file" ref="inputFile" value="0" @change="filesChange($event.target.files)">
              <v-btn color="primary" @click="inputFile">Subir</v-btn>
            </div>
          </div>
        </v-form>      
        <v-btn color="primary"  @click.native="e13 = 2"> Siguiente </v-btn>
        <v-btn flat @click="onClick()"> Cancelar </v-btn>
      </v-stepper-content>
      <v-stepper-step step="2" complete> Información </v-stepper-step>
      <v-stepper-content step="2">
        <span class="form-title"> Escoge tu fondo del post </span>
        <v-flex xs12 sm5 md5 class="colors">
          <v-switch 
            label="blue-grey"
            v-model="bgColor"
            color="blue-grey darken-2"
            value="blue-grey darken-2"
            hide-details
          ></v-switch>
          <v-switch 
            label="cyan"
            v-model="bgColor"
            color="cyan darken-2"
            value="cyan darken-2"
            hide-details
          ></v-switch>
          <v-switch 
            label="purple"
            v-model="bgColor"
            color="purple"
            value="purple"
            hide-details
            ></v-switch>
        </v-flex>
        <v-form v-model="valid">
            <v-text-field
            label="Escribe..."
            v-model="textPost"
            :counter="500"
            :rules="textRules"
            textarea
            required
          ></v-text-field>
        </v-form>
        <v-btn color="primary"  @click="addPost" :disabled="!formIsValid"> Enviar </v-btn>
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
        pictures: [],
        bgColor: '',
        textPost: '',
        textRules: [
          (v) => !!v || 'Ingrese un texto',
          (v) => v.length >= 150 || 'Texto minimo 150 caracteres',
          (v) => v.length <= 500 || 'Texto maximo 500 caracteres'
        ]
      }
    },
    computed: {
      ...mapGetters({ user: 'getUser' }),
      formIsValid () {
        if (this.textPost.length >= 150 && this.textPost.length <= 500) {
          return (
            this.namePet && this.textPost
          )
        }
      }
    },
    mounted: function () {
      this.$nextTick(function () {
        this.$vuetify.theme.primary = '#4db6ac'
      })
    },
    methods: {
      filesChange (files) {
        this.pictures = [...files]
        console.log(this.pictures)
      },
      addPost: function () {
        this.uploadImages(this.pictures).then(picUrls => {
          const newPost = {
            namePet: this.namePet,
            movil: this.movil,
            email: this.user.email,
            textPost: this.textPost,
            userUid: this.user.uid,
            photoPost: picUrls,
            bgColor: this.bgColor
          }
          this.setAddPost(newPost)
        })
        this.$router.push('/notes/')
      },
      inputFile () {
        this.$refs.inputFile.click()
      },
      onClick () {
        this.$router.push('/notes/')
      },
      ...mapActions(['setAddPost', 'uploadImages'])
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
  .image-box {
    display: flex;
    padding: 1em 0px;
  }
  .image-box-subheader {
    width: 100%;
  }
  .colors {
    margin-left: 0.5em;
  }
  @media screen and (min-width: 800px) {
    .stepper {
      width: 50%;
      margin: 0 auto;
      margin-top: 100px;
    }
  }

</style>
