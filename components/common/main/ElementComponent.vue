<template>
  <div class="element">
    <v-progress-circular v-show="loadingWorkoutImage" indeterminate color="grey" class="spinner"></v-progress-circular>
    <img v-show="loadedWorkoutImage" @load="handleLoadedImage" :src="animal.animalPhoto ? animal.animalPhoto[0] : img[this.images]">
    <div>
      <div class="favorite-icon">
        <v-btn flat icon color="red" class="button-favorite" @click="favorite">
          <v-icon>{{ this.heart ? 'favorite' : 'favorite_border' }} </v-icon>
        </v-btn>
      </div>
      <div class="element-info">
        <div class="ubication-info">
          <span class="material-icons material-icons-element-info">place</span>
          majadahonda
        </div>
        <div class="date-info">
          <span class="material-icons material-icons-element-info">access_time</span>
          {{ animal.date }}
        </div>
      </div>
      <button class="button-element" :class="animal.selectAnimalAlert">
        <p class="name-pet"> {{ animal.nameAnimal }} </p>
      </button>
    </div>
  </div>
</template>
<script>
  import { mapGetters, mapActions } from 'vuex'
  export default {
    props: ['animal'],
    data () {
      return {
        images: this.animal.src,
        loadingWorkoutImage: true,
        loadedWorkoutImage: false,
        heart: false
      }
    },
    computed: {
      ...mapGetters({
        img: 'getImages',
        user: 'getUser'
      })
    },
    methods: {
      ...mapActions(['setAddFavorite']),
      handleLoadedImage () {
        this.loadingWorkoutImage = false
        this.loadedWorkoutImage = true
      },
      favorite () {
        this.heart = !this.heart
        if (this.heart) {
          let info = {
            key: this.animal['.key'],
            userUid: this.user.uid
          }
          this.setAddFavorite(info)
        }
      }
    }
  }
</script>
<style scoped>

  .favorite-icon{
    position: absolute;
    margin-top: -117px;
    margin-left: 115px;
    
  }
  .button-favorite{
    background-color: rgb(250, 0, 0,0.05)!important;
  }

  .one {
    height: 250px;
    width: 400px;
    margin: auto;
    margin-bottom: 1em;
  }
  two {
    width: 100%;
    height: 250px;
  }
  .modal-title{
    margin: auto;
  }
  iframe{
    margin: auto;
    margin-bottom: 1em;
  }
  .element {
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content:center;
    width: 160px;
    height: 160px;
    margin: 10px 8px 6px 8px;;
    box-shadow: 0px 5px 10px #888888;
    background-color: white;
  }
  img {
    flex: 1;
    object-fit: cover;
    width: auto;
    height: 110px;
    border-radius: 5px 5px 0px 0px;
  }

  .spinner{
    margin: 40px auto;
  }
 


  /* TARGETS */
  .name-pet {
    font-size: 1rem;
    color: white;
    text-align: center;
    margin: 0;
    letter-spacing: 2px;
    font-weight: 800;
  }
  .button-element {
    color: #392E2E;
    width: 100%;
    border: none;
    font-family:  'Josefin Sans', sans-serif;
    border-radius: 0px 0px 5px 5px;
  }
  .element-info{
    font-size: 0.6rem;
    color: #C8C8C8;
    margin-left: 5px;
  }
  .material-icons-element-info{
    margin: 0;
    font-size: 0.6rem;
    color: #C8C8C8;
  }
  .adoption {
    background-color: #75ccb9;
    border: 1px solid #6CBDAB;
  }
  .adoption:hover{
    background-color: #6CBDAB;
    border: 1px solid #75ccb9;
  }
  .lost {
    background-color: #FA5858;
    border: 1px solid #D73B3B;
  }
  .lost:hover{
    background-color: #D73B3B;
    border: 1px solid #FA5858;
  }
  .takeCare {
    background-color: #959191;
    border: 1px solid #807777;
  }
  .takeCare:hover{
    background-color: #807777;
    border: 1px solid #959191;
  }
  .material-icons-main  {
    color: #75ccb9;
    font-size: 1rem;
    float: right;
    margin-right: 1em;
    text-shadow: 1px 1px black;
  }
  .card-text{
    margin: 0.1em 2.5em;
    color: #000000;
    font-family: Verdana;
    font-size: 1rem;
  }
  .material-icons-modal{
    margin-left: 35px;
    color: #75ccb9;
  }
  .modal-header,
  .modal-footer {
    background-color: #75ccb9;
  }

  @media screen and (min-width: 800px) {
    .main-elements .featured {
      grid-row: span 2;
      grid-column: span 2;
    }
    .main-elements > .element {
      border-radius: 5px;
      width: 100%;
      height: auto;
    }
    img {
      height: 120px;
      max-width: 100%;
      max-height: 100%;
      min-height: 120px;
      border-radius: 5px 5px 0px 0px;
    }
    .element-info{
      font-size: 0.7rem;
    }
    .material-icons-element-info{
      font-size: 0.7rem;
    }
    .featured .element-info{
      display: flex;
      justify-content: space-around;
      font-size: 0.9rem;
    }
    .featured .material-icons-element-info{
      font-size: 0.9rem;
    }
  }
  @media screen and (min-width: 450px){
    .element{
      width: 200px;
      height: 200px;
    }
    img{
      height: 150px;
    }
  }
  @media screen and (min-width: 550px){
    .element{
      width: 250px;
      height: 250px;
    }
    img{
      height: 200px;
    }
  }
  @media screen and (min-width: 650px){
    .element{
      width: 300px;
      height: 300px;
    }
    img{
      height: 250px;
    }
    .modal {
      width: 500px;
      margin: auto;
    }
  }
</style>
