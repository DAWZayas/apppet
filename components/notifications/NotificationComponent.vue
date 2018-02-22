<template>
<v-dialog v-model="open" persistent max-width="290">
    <v-card>
      <v-card-title class="headline">Adopta</v-card-title>
      <v-card-text></v-card-text>
        <v-flex xs12 sm6>
            <v-text-field
              color="purple darken-2"
              label="Descripción"
              v-model="textSolicitude"
              required
              full-width
              multi-line
            ></v-text-field>
          </v-flex>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="green darken-1" flat @click.native="sendSolicitude">Cancelar</v-btn>
        <v-btn color="green darken-1" flat @click.native="closeNotify">Enviar</v-btn>
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
    ...mapActions(['sendNotification', 'readNotification']),
    closeNotify () {
      this.open = false
    },
    sendSolicitude () {
      const infoSolicitude = {
        text: this.textSolicitude,
        animalKey: this.$route.params.id,
        ownerUid: this.animal.userUid,
        senderUid: this.user.uid,
        answerOwner: false,
        finalized: false
      }
      this.sendNotification(infoSolicitude)
    }
  },
  props: ['animal', 'open'],
  computed: {
    ...mapGetters({user: 'getUser'})
  },
  mounted () {
    this.readNotification('PAgFqnZyo0SffWJJ4HtCBQwBgUF3')
  }
}
</script>
<style scoped>

</style>
