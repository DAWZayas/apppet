<template>
<v-layout row class="card">
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-card-media
          :src="photo"
          height="300px"
        >
          <v-chip class="avatar-owner">
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
        <v-card-actions>
          <v-btn flat>Compartir</v-btn>
          <v-btn flat color="purple">Compartir</v-btn>
          <v-spacer></v-spacer>
        </v-card-actions>
        <hr>
          <v-card-text>
            Hola
          </v-card-text>
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

.layout{
  width: 100%!important;
  margin:0!important;
}

.card{
  margin-top: 55px;
}

.avatar-owner{
  margin-top: 230px;
  margin-bottom: 30px;
  margin-left: 20px;
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

</style>
