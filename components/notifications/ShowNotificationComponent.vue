<template>
  <v-layout row class="notifications">
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-list two-line>
          <template v-for="notification in notifications" >
            <v-list-tile avatar ripple :key="notification['.key']" @click="openDialog(notification)">
              <v-avatar>
                  <img :src="notification.animalPhoto" alt="avatar" class="avatar-border">
                </v-avatar>
              <v-list-tile-content>
                <v-list-tile-title>{{notification.nameAnimal}}</v-list-tile-title>
                <v-list-tile-sub-title class="grey--text text--darken-4">{{ displayName }}</v-list-tile-sub-title>
                <v-list-tile-sub-title>{{ 'Notificación' + type(notification.typeSolicitude)  + notification.nameAnimal }}</v-list-tile-sub-title>
              </v-list-tile-content>
              <v-list-tile-action>
                <v-list-tile-action-text>{{notification.date}}</v-list-tile-action-text>
                <v-icon v-if="notification.finalized">{{notification.final ? 'check' : 'clear'}}</v-icon>
                <v-icon v-else :color="notification.answerOwner ? notification.senderUid === user.uid ? 'blue' : 'grey lighten-1' : notification.senderUid === user.uid ? 'grey lighten-1' : 'red'" @click="test(notification)">{{ notification.senderUid === user.uid ? 'send' : 'priority_high' }}</v-icon>
              </v-list-tile-action>
            </v-list-tile>
            <v-divider></v-divider>
          </template>
        </v-list>
      </v-card>
    </v-flex>
    <info-modal-notification-component v-if="dialog" :user="user" :dialog="dialog" :notification="not" @closeDialog="closeDialog"></info-modal-notification-component>
  </v-layout>
</template> 
<script>
import { mapGetters, mapActions } from 'vuex'
import InfoModalNotificationComponent from '~/components/notifications/InfoModalNotificationComponent'
export default {
  data () {
    return {
      dialog: false,
      not: ''
    }
  },
  methods: {
    ...mapActions(['setInfoSingleAnimal', 'updateNotification']),
    type (t) {
      if (t === 'adoption') {
        return ' para adoptar a '
      } else if (t === 'lost') {
        return ' de animal perdido '
      } else {
        return ' para cuidar a '
      }
    },
    openDialog (notification) {
      this.dialog = true
      this.not = notification
    },
    closeDialog (value) {
      this.dialog = value
    }
  },
  computed: {
    ...mapGetters({user: 'getUser', notifications: 'getNotification', displayName: 'getOwnerDisplayName'})
  },
  mounted () {
  },
  components: {
    InfoModalNotificationComponent
  }
}
</script>
<style scoped>
.card{
  border:0;
}


.layout{
  width: 100%!important;
  margin:55px 0!important;
}
.notifications {
  margin-top:75px;
}
</style>

