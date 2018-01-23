<template>
    <v-layout row justify-center>
      <v-dialog v-model="dialog" persistent max-width="500px">
        <v-btn dark icon slot="activator" class="ml-5">
          <v-icon color="grey">edit</v-icon>
        </v-btn>
        <v-card>
          <v-card-title>
            <span class="headline">Nombre y apellidos</span>
          </v-card-title>
          <v-card-text>
            <v-container grid-list-md>
              <v-layout wrap>
                <v-flex xs12 sm12 md12>
                  
                  <v-text-field label="Nuevo nombre:" required></v-text-field>
                </v-flex>
                <v-flex xs12 sm12 md12>
                  <v-text-field label="Nuevos apellidos:" required></v-text-field>
                </v-flex>
              </v-layout>
            </v-container>
            <small>*indicates required field</small>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" flat @click.native="dialog = false">Close</v-btn>
            <v-btn color="blue darken-1" flat @click.native="dialog = false">Save</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-layout>
  
</template>
<script>
export default {
  data () {
    return {
      dialog: false
    }
  }
}
</script>
<style scoped>

</style>

