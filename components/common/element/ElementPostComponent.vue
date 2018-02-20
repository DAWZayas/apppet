<template>
  <div
    id="e3"
    style="max-width: 700px; margin: auto;"
    class="grey lighten-3"
  >
    <v-container
      fluid
      style="min-height: 0;"
      grid-list-lg
    >
      <v-layout row wrap>
        <v-flex xs12>
          <v-card color="blue-grey darken-2" class="white--text">
            <v-container fluid grid-list-lg>
              <v-layout row>
                <v-flex xs7>
                  <div>
                    <div class="headline"> {{ note.namePet }}  </div>
                    <hr color="white">
                    <div> {{ note.textPost }}</div>
                  </div>
                </v-flex>
                <v-flex xs5>
                  <v-card-media
                    :src="note.photoPost[0]"
                    height="125px"
                    class="pic"
                    contain
                  ></v-card-media>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>
<script>
  export default {
    props: ['note']
  }
</script>
<style scoped>
  @media screen and (min-width: 500px) {
    .pic {
      margin-top: 1em;
    }
  }

</style>
