<template>
  <v-dialog v-model="dialog" max-width="400" content-class="over-dialog">
      <v-card tile>
        <v-card-actions :class="owner ? 'owner-color' : animal.selectAnimalAlert +'-color' ">
            <v-avatar size="35px">
              <img :src="ownerPhotoURL" alt="avatar" class="avatar-border">
            </v-avatar>
            <span class="title white--text">{{ ownerDisplayName }}</span>
            <v-spacer></v-spacer>
            <v-btn v-if="!owner" flat icon color="white" class="button-favorite" @click="favorite">
              <v-icon :class="'favorite-' + this.heart">{{ this.heart ? 'favorite' : 'favorite_border' }} </v-icon>
            </v-btn>
              </v-card-actions>
              <v-card-media
                :src="animal.animalPhoto ? animal.animalPhoto[0] : img[this.images]"
                height="400px"
              >
              </v-card-media>
              <v-card-actions :class="owner ? 'owner-color' : animal.selectAnimalAlert +'-color' ">
                <v-spacer></v-spacer>
                <span class="headline white--text" v-text="animal.nameAnimal"></span>       
                <v-spacer></v-spacer>                         
              </v-card-actions>
            </v-card>
    </v-dialog>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  props: ['animal', 'dialog', 'owner', 'heart'],
  computed: {
    ...mapGetters({ ownerDisplayName: 'getOwnerDisplayName', ownerPhotoURL: 'getOwnerPhotoURL' })
  },
  methods: {
    ...mapActions(['setInfoSingleAnimal'])
  },
  created () {
    this.setInfoSingleAnimal(this.animal['.key'])
  }
}
</script>
<style scoped>
  .card{
    border-radius: 15px;
    border: none;
  }

   .adoption-color {
    background-color: #75ccb9;
  }

  .lost-color {
    background-color: #FA5858;
  }

  .takeCare-color {
    background-color: #959191;
  }

  .owner-color{
    background-color: #03a9f4;
  }
</style>
