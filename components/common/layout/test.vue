<template>
<v-layout row class="card">
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-card-media
          :src="photo"
          height="300px"
        >
         <v-btn icon class="left-icon ml-3" right><v-icon color="white">keyboard_arrow_left</v-icon></v-btn>
          <v-chip class="avatar-owner" disabled>
            <v-avatar>
              <img :src="photo" alt="avatar" class="avatar-border">
            </v-avatar>
            <span class="black--text">Jesus Mártinez Torrecilla</span>
          </v-chip>
        </v-card-media>
        <v-card-title primary-title class="first">
          <div class="d-inline-flex buttons">
            <v-btn small outline color="indigo" class="chat">Chat</v-btn>
            <v-btn small outline color="indigo" class="chat">Adoptar</v-btn>
            <v-btn small outline color="indigo" class="chat">Denunciar</v-btn>
          </div>
          <div>
            <div class="headline">Neo - Perro</div>
            <span class="grey--text">Perdido desde:16-09-2200</span>
          </div>
        </v-card-title>
        <hr>
          <v-card-text>
            <div class="title" >Datos del perro:</div>
            <v-flex d-flex justify-space-between>
              <div class="column-1 grey--text">
                <br>
                Edad:
                <br>
                Sexo:
                <br>
                Peso:
              </div>
              <div class="column-2 grey--text">
                <br>
                <div class="lost" v-if="true">
                  <p>Hola me llamo *nombreAnimal*  y me he perdido por *lugar* el día *fecha*</p>
                </div>
                <div class="adoption" v-if="this.adoption">
                  Hola me llamo *nombre* y mis dueños me quieren dar en adopción por *motivo*
                </div>
                <div class="takecare" v-if="this.takeCare">
                  Hola me llamo *nombre* y mis dueños buscan a alguien que me cuide por *motivo* los desde *dias antes* hasta *dias despues*
                </div>                
              </div>             
            </v-flex>
          </v-card-text>
        <hr>
         <v-card-text>
          <div class="title" >Datos del dueño/a:</div>
          <v-flex d-flex justify-space-between>
            <div class="grey--text">
              <br>
              Nombre: *nombre y apellidos*
              <br>
              Correo electrónico: *Correo*
              <br>
              Teléfono móvil: *telefono*
            </div>           
          </v-flex>
        </v-card-text>
        <hr>
        <v-card-actions>
          <v-btn flat block color="purple">Compartir</v-btn>  
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>
<script>
import {mapActions, mapGetters} from 'vuex'
export default {
  data () {
    return {
      name: '',
      photo: '',
      show: false
    }
  },
  computed: {
    ...mapGetters({animal: 'getSingleAnimal'})
  },
  methods: {
    ...mapActions(['petSinglePage'])
  },
  created () {
    this.petSinglePage(this.$route.params.id)
  },
  watch: {
    animal () {
      this.name = this.animal.nameAnimal
      this.photo = this.animal.animalPhoto[0]
    }
  }
}
</script>

<style scoped>

.card{
  border:0;
}

.layout{
  width: 100%!important;
  margin:0!important;
}

.card{
  margin-top: 55px;
}

.left-icon{
  margin-top: 10px;
}

.favorite-icon{
}

.avatar-owner{
  margin-top: 230px;
  margin-bottom: 30px;
  margin-left:-20px;
}
.avatar-border{
  width: 150%!important;
  height: 150%!important;
  border: 3px solid white;
}

hr{
  margin: 1em 1.5em;
}
.first{
  padding-top: 0;
}

.buttons{
  width: 100%;
}

.column-1{
  width: 50%;
}
.column-2{
  width: 50%;
}
</style>
