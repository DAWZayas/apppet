<template>
<v-dialog v-model="open" persistent max-width="290">
    <v-card>
      <v-card-title class="headline">Adopta</v-card-title>
      <v-card-text></v-card-text>
        <v-flex xs12 sm6>
            <v-text-field
              color="purple darken-2"
              label="Descripción"
              required
              full-width
              multi-line
            ></v-text-field>
          </v-flex>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="green darken-1" flat @click.native="">Cancelar</v-btn>
        <v-btn color="green darken-1" flat @click.native="closeNotify">Enviar</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  data () {
    return {
    }
  },
  methods: {
    ...mapActions(['sendNotification']),
    closeNotify () {
      this.open = false
    }
  },
  props: ['animal', 'open'],
  mounted () {
    this.sendNotification()
  }
}
</script>
<style scoped>

</style>
