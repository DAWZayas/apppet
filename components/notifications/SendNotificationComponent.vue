<template>
<v-dialog v-model="close" persistent max-width="290">
    <v-card>
      <v-card-title class="headline">Notificaiones</v-card-title>
      <v-card-text>
        <v-text-field v-model="textSolicitude" multi-line></v-text-field>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="green darken-1" flat @click.native="close()">Cancelar</v-btn>
        <v-btn color="green darken-1" flat @click.native="sendSolicitude">Enviar</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  data () {
    return {
      textSolicitude: ''
    }
  },
  methods: {
    ...mapActions(['sendNotification']),
    closeNotify () {
      this.open = false
    },
    close () {
      this.$emit('closeDialog', !this.close)
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
    sendSolicitude () {
      const infoSolicitude = {
        text: this.textSolicitude,
        animalKey: this.$route.params.id,
        ownerUid: this.animal.userUid,
        senderUid: this.user.uid,
        answerOwner: false,
        finalized: false,
        typeSolicitude: this.animal.selectAnimalAlert,
        animalPhoto: this.animal.animalPhoto[0],
        nameAnimal: this.animal.nameAnimal,
        date: this.getFecha(),
        final: false
      }
      this.close()
      this.sendNotification(infoSolicitude)
    }
  },
  props: ['animal', 'open'],
  computed: {
    ...mapGetters({user: 'getUser'})
  }
}
</script>
<style scoped>

</style>
