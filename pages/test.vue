<template>
<div>
<v-app>
  <v-stepper v-model="e1">
      <v-stepper-header>
        <v-stepper-step step="1" :complete="e1 > 1">Datos personales 1</v-stepper-step>
        <v-divider></v-divider>
        <v-stepper-step step="2" :complete="e1 > 2">Datos del animal 2</v-stepper-step>
        <v-divider></v-divider>
        <v-stepper-step step="3">Tipo de alerta 3</v-stepper-step>
      </v-stepper-header>
      <v-stepper-items>
        <v-stepper-content step="1">
          <span class="form-title"> Datos personales </span>
            <v-form v-model="valid">
              <v-text-field
                label="Nombre"
                v-model="namePerson"
                :rules="nameRules"
                :counter="10"
                required
              ></v-text-field>
              <v-text-field
                label="Apellidos"
                v-model="lastnamePerson"
                :rules="nameRules"
                :counter="20"
                required
              ></v-text-field>
                <v-text-field
                label="E-mail"
                v-model="email"
                :rules="emailRules"
                required
              ></v-text-field>
              <v-text-field
                label="Teléfono móvil"
                v-model="movil"
                :rules="emailRules"
                required
              ></v-text-field>
            </v-form>      
          <v-btn color="primary"  @click.native="e1 = 2">Siguiente</v-btn>
        </v-stepper-content>
        <v-stepper-content step="2">
          <span class="form-title"> Datos del animal:</span>
            <v-form v-model="valid">
              <v-text-field
                label="Nombre de la mascota"
                v-model="nameAnimal"
                :rules="nameRules"
                :counter="10"
                required
              ></v-text-field>
              <v-layout row wrap>
                <v-flex xs6>
                  <v-subheader>Tipo de mascota:</v-subheader>
                </v-flex>
                <v-flex xs6>
                  <v-select
                    v-bind:items="selectTypeAnimal"
                    v-model="typeAnimal"
                    label="Selecciona"
                    single-line
                    bottom
                ></v-select>
              </v-flex>
              <v-flex xs6>
                <v-subheader>Edad de la mascota</v-subheader>
              </v-flex>
              <v-flex xs6>
                <v-select
                  v-bind:items="selectAnimalAge"
                  v-model="animalAge"
                  label="Selecciona"
                  single-line
                  bottom
              ></v-select>
              </v-flex>
            </v-layout>
             <v-flex xs6 >
                  <v-subheader class="genero-l">Género mascota:</v-subheader>
                </v-flex>
            <div class="genero">
              <div class="genero-p"><label for="one" class="form-span"> Hembra </label> <v-checkbox name="genderrr" value="female" v-model="checkSexo" id="one"></v-checkbox></div>
              <div class="genero-p"><label for="two" class="form-span"> Macho </label> <v-checkbox  name="gender" value="male" v-model="checkSexo" id="two"></v-checkbox></div>
            </div>
              <div class="image-box">
                  <v-subheader class="image-box-subheader m-auto p-0">Imagen de la mascota:</v-subheader>                
                <div>
                  <input class="d-none" type="file" ref="inputFile">
                  <v-btn color="primary" @click="inputFile">Subir</v-btn>
                </div>
              </div>
          </v-form> 
          <v-btn color="primary" @click.native="e1 = 3">Siguiente</v-btn>
          <v-btn flat @click.native="e1 = 1">Atrás</v-btn>
        </v-stepper-content>
        <v-stepper-content step="3">
          <span class="form-title"> Otros datos </span>
          <v-layout row wrap>
            <v-flex xs6>
              <v-subheader>Tipo de alerta:</v-subheader>
            </v-flex>
            <v-flex xs6>
              <v-select
                v-bind:items="typeAnimalsAlert"
                v-model="selectAnimalAlert"
                label="Selecciona"
                single-line
                bottom
              ></v-select>
            </v-flex>
            <v-flex xs6 v-if="selectAnimalAlert === 'lost'">
              <v-subheader>Lugar perdida:</v-subheader>
            </v-flex>
              <v-flex xs6 v-if="selectAnimalAlert === 'lost'">
                <v-text-field
                label="Lugar desaparecido"
                v-model="placeMissingAnimal"
                :rules="nameRules"
                :counter="10"
                required
              ></v-text-field>
              </v-flex>
               <v-flex xs6 v-if="selectAnimalAlert === 'lost'">
              <v-subheader>Fecha perdida:</v-subheader>
            </v-flex>
              <v-flex xs6 v-if="selectAnimalAlert === 'lost'">
                
                 <v-menu
        lazy
        :close-on-content-click="false"
        v-model="menu"
        transition="scale-transition"
        offset-y
        full-width
        :nudge-right="40"
        max-width="290px"
        min-width="290px"
      >
        <v-text-field
          slot="activator"
          label="Picker in menu"
          v-model="dateMissingAnimal"
          prepend-icon="event"
          readonly
        ></v-text-field>
        <v-date-picker v-model="dateMissingAnimal" no-title scrollable actions autosave>
        </v-date-picker>
      </v-menu>
              </v-flex>
          </v-layout>
          <v-btn color="primary" @click.native="e1 = 1">Enviar</v-btn>
          <v-btn flat @click.native="e1 = 2">Atrás</v-btn>
        </v-stepper-content>
      </v-stepper-items>
    </v-stepper>
</v-app>
</div>
</template>
<script>
  import {mapGetters, mapActions} from 'vuex'
  export default {
    data () {
      return {
        e1: 0,
        valid: false,
        namePerson: '',
        nameRules: [
          (v) => !!v || 'Name is required',
          (v) => v.length <= 10 || 'Name must be less than 10 characters'
        ],
        lastnamePerson: '',
        email: '',
        emailRules: [
          (v) => !!v || 'E-mail is required',
          (v) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
        ],
        movil: '',
        nameAnimal: '',
        typeAnimal: null,
        selectTypeAnimal: [
          { text: 'Perro' },
          { text: 'Gato' },
          { text: 'Pajaro' },
          { text: 'State 4' },
          { text: 'State 5' },
          { text: 'State 6' },
          { text: 'State 7' }
        ],
        animalAge: null,
        selectAnimalAge: [
          { text: 'Menor de 6 meses' },
          { text: 'Entre 6 meses y 1  año' },
          { text: 'Entre 1 año y 3 años' },
          { text: 'Entre 3 y 10 años' },
          { text: 'Más de 10 años' }
        ],
        selectAnimalAlert: null,
        typeAnimalsAlert: [
          { text: 'Perdido', value: 'lost' },
          { text: 'En adopción', value: 'adoption' },
          { text: 'Cuidar', value: 'adopted' }
        ],
        checkSexo: '',
        placeMissingAnimal: '',
        dateMissingAnimal: '',
        menu: false,
        modal: false
      }
    },
    computed: {
      ...mapGetters({
        animals: 'getAnimals'
      })
    },
    mounted: function () {
      this.$nextTick(function () {
        this.$vuetify.theme.primary = '#4db6ac'
      })
    },
    methods: {
      addAnimal: function () {
        const newAnimal = {
          namePerson: this.name,
          lastnamePerson: this.lastnamePerson,
          email: this.email,
          movil: this.movil,
          nameAnimal: this.nameAnimal,
          typeAnimal: this.typeAnimal.text,
          animalAge: this.animalAge.text,
          checkSexo: this.checkSexo,
          selectAnimalAlert: this.selectAnimalAlert.value,
          src: require('~/assets/candidatos/undefined.png'),
          classButton: 'adoption',
          classDiv: this.getSizeImage(),
          user: 'paco123',
          weight: '3,75',
          age: this.age,
          microchip: 'Si',
          ubication: this.ubication,
          date: this.getFecha(),
          placeMissingAnimal: this.placeMissingAnimal,
          dateMissingAnimal: ''
        }
        this.setAddAnimal(newAnimal)
      },
      getFecha: function () {
        var today = new Date()
        var dd = today.getDate()
        var mm = today.getMonth() + 1
        var yyyy = today.getFullYear()
        if (dd < 10) {
          dd = '0' + dd
        }
        if (mm < 10) {
          mm = '0' + mm
        }
        today = dd + '/' + mm + '/' + yyyy
        return today
      },
      getSizeImage: function () {
        var dado = Math.floor(Math.random() * 10) + 1
        console.log(dado)
        if (dado > 1) {
          return 'element'
        } else {
          return 'element featured'
        }
      },
      ...mapActions(['setAddAnimal']),
      inputFile () {
        this.$refs.inputFile.click()
      },
      formatDate: function (date) {
        if (!date) {
          return null
        }
        const [year, month, day] = date.split('-')
        return `${month}/${day}/${year}`
      },
      parseDate: function (date) {
        if (!date) {
          return null
        }
        const [month, day, year] = date.split('/')
        return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
      }
    }
  }
</script>
<style lang="scss" scoped>

  .stepper__step__step{
    background-color:red!important;
  }

  .input-group{
    width: 90%;
    text-align: center;
  }

  .form-title{
    color: rgba(0,0,0,.54);
    font-size: 20px;
  }

  .form-span{
    color: rgba(0,0,0,.54);
    font-size: 14px;
    
  }
  .genero{
    display: flex;
  }
  .genero-p{
    margin: 0 auto;

  }
  .genero-l{
    padding: 0;
  }

  .image-box{
    display: flex;
  }

  

  .image-box-subheader{
    width: 100%;
    
  }

@media screen and (min-width: 800px) {
 .stepper{
   width: 50%;
   margin: 0 auto;
   margin-top: 100px;
 }
}

</style>
