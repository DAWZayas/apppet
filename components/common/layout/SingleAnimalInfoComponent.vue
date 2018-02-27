<template>
<v-layout row class="card">
    <v-flex xs12 sm8 offset-sm2>
      <v-card>
        <v-card-media class="image"
          :src="photo"
          height="300px"
        >
          <v-btn icon class="left-icon" @click="goBack"><v-icon color="white">arrow_back</v-icon></v-btn>
            <v-chip class="avatar-owner" disabled>
              <v-avatar>
                <img :src="ownerPhotoURL" alt="avatar" class="avatar-border" >
              </v-avatar>
              <span class="black--text">{{ownerDisplayName}}</span>
            </v-chip>
          <v-spacer></v-spacer>
          <v-btn v-if="!owner" flat icon :color="this.heart ? 'red' : 'white'" class="button-favorite" @click="favorite">
            <v-icon :class="'favorite-' + this.heart">{{ this.heart ? 'favorite' : 'favorite_border' }} </v-icon>
          </v-btn>         
        </v-card-media>
        <div class="information">
        <v-card-title primary-title class="first">
          <div class="d-inline-flex buttons">
            <v-btn small round color="indigo" class="button">Chat</v-btn>
            <v-btn small round color="green accent-3" class="button" @click="notify">{{ alertAnimal === 'adoption' ? '¡Adoptar!': alertAnimal === 'lost' ? '¡Encontrado!' : '¡Cuidar!' }} </v-btn>
            <send-notification-component :animal="animal" :open="openNotify"></send-notification-component>
            <v-btn small round color="red darken-4" class="button" @click="redButton(owner)">{{ owner ? 'Eliminar' : 'Denunciar' }} </v-btn>
          </div>
          <div>
            <div class="headline">{{ nameAnimal }} - {{ typeAnimal }}</div>
            <span class="grey--text"><v-icon>date_range</v-icon> Fecha de publicación desde: {{ datePublication }}</span>
          </div>
        </v-card-title>
        <hr>
          <v-card-text>
            <div class="title" >Datos de {{ nameAnimal }}:</div>
            <v-flex d-flex justify-space-between>
              <div class="column-1 grey--text">
                <br>
                <v-icon>cake</v-icon> Edad: {{ age }}
                <br>
                <v-icon>pets</v-icon> Sexo: {{ sex === 'male' ? 'Macho' : 'Hembra' }}
              </div>
              <div class="column-2 grey--text ml-3">
                <br>
                <div class="lost" v-if="alertAnimal == 'lost'">
                  <p>Hola me llamo <b>{{ nameAnimal }}</b> y me he perdido por <b>{{ lostPlace }}</b> el día <b>{{ lostDate }} </b></p>
                </div>
                <div class="adoption" v-if="alertAnimal == 'adoption'">
                  <p>Hola me llamo <b>{{ nameAnimal }}</b> y mis dueños me quieren dar en adopción por <b>{{ adoptionMotive }}.</b></p>
                </div>
                <div class="takecare" v-if="alertAnimal == 'takeCare'">
                  <p>Hola me llamo <b>{{ nameAnimal }}</b> y mis dueños buscan a alguien que me cuide por <b>{{ takeCareMotive }}</b> los desde <b>{{ takeCareSince }}</b> hasta <b>{{ takeCareUntil }}</b></p>
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
              <v-icon>person</v-icon> Nombre: {{ personName , personLastName}}
              <br>
              <v-icon>email</v-icon> Correo electrónico: {{ email }}
              <br>
              <v-icon>phone</v-icon> Teléfono móvil: {{ mobile }}
            </div>           
          </v-flex>
        </v-card-text>
        <hr>
        <v-card-actions>
          <v-btn flat block color="purple">Compartir</v-btn>  
        </v-card-actions>
        </div>
      </v-card>
    </v-flex>
  </v-layout>
</template>
<script>
import {mapActions, mapGetters, mapMutations} from 'vuex'
import SendNotificationComponent from '~/components/notifications/SendNotificationComponent'
export default {
  data () {
    return {
      nameAnimal: '',
      photo: '',
      typeAnimal: '',
      datePublication: '',
      age: '',
      sex: '',
      alertAnimal: '',
      lostPlace: '',
      lostDate: '',
      adoptionMotive: '',
      takeCareMotive: '',
      takeCareSince: '',
      takeCareUntil: '',
      personName: '',
      personLastName: '',
      email: '',
      mobile: '',
      show: false,
      owner: false,
      ownerUid: '',
      animalKey: this.$route.params.id,
      heart: false,
      openNotify: false,
      alert: {
        text: '',
        color: '',
        state: true
      }
    }
  },
  mounted () {
    if (this.favorites != null) {
      if (this.favorites[this.animalKey]) {
        this.heart = true
      }
    }
  },
  computed: {
    ...mapGetters({animal: 'getSingleAnimal', ownerDisplayName: 'getOwnerDisplayName', ownerPhotoURL: 'getOwnerPhotoURL', favorites: 'getFavorite', user: 'getUser'})
  },
  methods: {
    ...mapActions(['setInfoSingleAnimal', 'setAddFavorite', 'unSetAddFavorite', 'unSetAddAnimal']),
    ...mapMutations(['setAlert']),
    favorite () {
      this.heart = !this.heart
      if (this.heart) {
        let info = {
          key: this.animalKey,
          userUid: this.user.uid,
          ownerUid: this.uid
        }
        this.setAddFavorite(info)
      } else {
        let info = {
          key: this.animalKey,
          userUid: this.user.uid,
          ownerUid: this.ownerUid
        }
        this.unSetAddFavorite(info)
      }
    },
    redButton (owner) {
      if (owner) {
        this.alert.text = 'Publicación elminada'
        this.alert.color = 'red lighten-1'
        this.alert.state = true
        this.setAlert(this.alert)
        this.$router.push('../mainpets/' + this.alertAnimal)
        this.unSetAddAnimal(this.animalKey)
      }
    },
    goBack () {
      this.$router.push('../mainpets/' + this.alertAnimal)
    },
    notify () {
      this.openNotify = !this.openNotify
    }
  },
  created () {
    this.setInfoSingleAnimal(this.$route.params.id)
  },
  watch: {
    animal () {
      this.nameAnimal = this.animal.nameAnimal
      this.photo = this.animal.animalPhoto[0]
      this.typeAnimal = this.animal.typeAnimal
      this.datePublication = this.animal.date
      this.age = this.animal.animalAge
      this.sex = this.animal.checkSexo
      this.alertAnimal = this.animal.selectAnimalAlert
      this.lostPlace = this.animal.placeMissingAnimal
      this.lostDate = this.animal.dateMissingAnimal
      this.adoptionMotive = this.animal.motiveAdoptionAnimal
      this.takeCareMotive = this.animal.motiveTakeCareAnimal
      this.takeCareSince = this.animal.sinceDateAnimal
      this.takeCareUntil = this.animal.untilDateAnimal
      this.personName = this.animal.namePerson
      this.personLastName = this.animal.lastnamePerson
      this.email = this.animal.email
      this.mobile = this.animal.movil
      this.ownerUid = this.animal.userUid
      if (this.ownerUid === this.user.uid) {
        this.owner = true
      }
    }
  },
  components: {
    SendNotificationComponent
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

.favorite-true {
  font-size: 1.9rem;
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
.button{
  color:white;
}

.column-1{
  width: 50%;
}
.column-2{
  width: 50%;
}

@media screen and (min-width: 700px) {
  .card-image, card__media__content {
    height: 500px!important;
  }
}

@media (min-width: 1350px){
  .image{
    float: left;
    width: 40%;
  }

  .information {
    margin-top: 6em;
    margin-left: 26em;
  }
  
}
</style>
