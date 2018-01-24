<template>
    <v-layout row justify-center>
      <v-dialog v-model="dialog" persistent max-width="500px">
        <v-btn dark icon slot="activator" class="ml-5">
          <v-icon color="grey">edit</v-icon>
        </v-btn>
        <v-card>
          <v-card-title>
            <span class="headline">Nombre de usuario</span>
          </v-card-title>
          <v-card-text>
            <v-container grid-list-md>
              <v-layout wrap>
                <v-flex xs12 sm12 md12>
                  <div class="name mb-3">Nombre actual: <b>{{name}}</b></div>
                  <v-text-field v-model="newDisplayName" label="Nuevo nombre de usuario:" required></v-text-field>
                </v-flex>
              </v-layout>
            </v-container>
            <small>*indicates required field</small>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" flat @click.native="dialog = false">Close</v-btn>
            <v-btn color="blue darken-1" flat @click.native="changeDisplayName()">Save</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-layout>
  
</template>
<script>
import {mapGetters, mapActions} from 'vuex'
export default {
  data () {
    return {
      dialog: false,
      newDisplayName: ''
    }
  },
  computed: {
    ...mapGetters({name: 'getDisplayName'}),
    ...mapActions(['updateUserName'])
  },
  methods: {
    changeDisplayName () {
      this.dialog = false
      this.updateUserName[this.newDisplayName]
    }
  }
}
</script>
<style scoped>
.name{
  color: gray;
}

</style>

