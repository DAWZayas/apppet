<template>
  <v-dialog v-model="dialog" persistent max-width="290">
    <v-card v-if="notification.ownerUid === user.uid && !notification.answerOwner">
      <v-card-title class="headline">Alguien {{ notification.typeSolicitude === 'adoption' ? 'quiere adoptar a:' : notification.typeSolicitude === 'lost' ? 'ha encontrado a: ' : 'quiere cuidar de: '}} {{notification.nameAnimal}}</v-card-title>
      <v-card-text>{{notification.text}}</v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="green darken-1" flat="flat" @click.native="sendSolicitude(false, notification.animalKey, notification.ownerUid, notification.senderUid, true)">Aceptar</v-btn>
        <v-btn color="green darken-1" flat="flat" @click.native="sendSolicitude(false, notification.animalKey, notification.ownerUid, notification.senderUid, false)">Cancelar</v-btn>
      </v-card-actions>
    </v-card>
    <v-card v-else>
      <v-card-title class="headline">Alguien {{ notification.typeSolicitude === 'adoption' ? 'quiere adoptar a:' : notification.typeSolicitude === 'lost' ? 'ha encontrado a: ' : 'quiere cuidar de: '}} {{notification.nameAnimal}}</v-card-title>
      <v-card-text>{{!notification.answerOwner && notification.senderUid === user.uid ? 'Aun no ha respondido' : notification.ownerUid === user.uid ? 'Ya le has respondido' : notification.final ? 'Su dueño ha aceptado' : 'Su dueño no ha aceptado' }}</v-card-text>
      <v-card-actions>
        <v-btn color="green darken-1" block flat="flat" @click.native="(!notification.finalized && notification.senderUid === user.uid && notification.answerOwner) ? sendSolicitude(true, notification.animalKey, notification.ownerUid, notification.senderUid) : close()">Entendido</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  props: ['dialog', 'notification', 'user'],
  data () {
    return {
      isOpen: false
    }
  },
  methods: {
    ...mapActions(['updateNotification']),
    close () {
      this.$emit('closeDialog', !this.dialog)
    },
    sendSolicitude (finaliced, key, owner, send, final) {
      console.log('hey')
      if (finaliced) {
        const infoSolicitude = {
          animalKey: key,
          ownerUid: owner,
          senderUid: send,
          finalized: true
        }
        this.updateNotification(infoSolicitude)
      } else {
        const infoSolicitude = {
          animalKey: key,
          ownerUid: owner,
          senderUid: send,
          answerOwner: true,
          final: final
        }
        this.updateNotification(infoSolicitude)
      }
      this.close()
    }

  }
}
</script>

