<template>
  <div class="element">
    <v-progress-circular v-show="loadingWorkoutImage" indeterminate color="grey" class="spinner"></v-progress-circular>
    <img v-show="loadedWorkoutImage" @load="handleLoadedImage" :src="animal.animalPhoto ? animal.animalPhoto[0] : img[this.images]">
    <div>
      <div class="favorite-icon">
        <v-btn v-if="!owner" flat icon color="red" class="button-favorite" @click="favorite">
          <v-icon :class="'favorite-' + this.heart">{{ this.heart ? 'favorite' : 'favorite_border' }} </v-icon>
        </v-btn>
        <v-btn v-else flat icon color="light-blue" class="button-favorite" @click="edit">
          <v-icon>edit</v-icon>
        </v-btn>          
      </div>
      <div class="element-info">
        <div class="info-icons">
          <v-icon class="icon place" :class="animal.selectAnimalAlert + '-data'">place</v-icon>
          <v-icon class="icon time" :class="animal.selectAnimalAlert + '-data'">access_time</v-icon>
        </div>
        <div class="info-data" >
          <span class="ubication">Villanueva del pardillo</span>
          <span class="date">{{ animal.date }}</span>
        </div>
      </div>
      <button class="button-element" :class="!this.owner ? animal.selectAnimalAlert : animal.selectAnimalAlert + ' owner' ">
        <p class="name-pet"> {{ animal.nameAnimal }} </p>
      </button>
    </div>
  </div>
</template>
<script>
  import { mapGetters, mapActions } from 'vuex'
  export default {
    mounted () {
      if (this.favorites != null) {
        if (this.favorites[this.animal['.key']]) {
          this.heart = true
        }
      }
      if (this.animal.userUid === this.user.uid) {
        this.owner = true
      }
    },
    props: ['animal'],
    data () {
      return {
        images: this.animal.src,
        loadingWorkoutImage: true,
        loadedWorkoutImage: false,
        heart: false,
        owner: false
      }
    },
    computed: {
      ...mapGetters({
        img: 'getImages',
        user: 'getUser',
        favorites: 'getFavorite'
      })
    },
    methods: {
      ...mapActions(['setAddFavorite', 'unSetAddFavorite']),
      handleLoadedImage () {
        this.loadingWorkoutImage = false
        this.loadedWorkoutImage = true
      },
      favorite () {
        this.heart = !this.heart
        if (this.heart) {
          let info = {
            key: this.animal['.key'],
            userUid: this.user.uid,
            ownerUid: this.animal.userUid
          }
          this.setAddFavorite(info)
        } else {
          let info = {
            key: this.animal['.key'],
            userUid: this.user.uid,
            ownerUid: this.animal.userUid
          }
          this.unSetAddFavorite(info)
        }
      },
      edit () {
      }
    }
  }
</script>
<style scoped>
  .favorite-icon {
    position: absolute;
    margin-top: -140px;
    margin-left: 110px;
  }

  .favorite-true {
    font-size: 1.9rem;
  }

  .element {
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content:center;
    width: 160px;
    height: 150px;
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

  .spinner {
    margin: 40px auto;
  }

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

  .element-info {
    margin-top: -30px;
    font-size: 0.5rem;
    color: #212121;
    background-color: rgba(220, 220, 220, 0.5);
  }

  .info-data{
    display: flex;
  }

  .date, .ubication{
    width: 50%;
    justify-content: center;
  }

  .ubication{
    padding-left: 1em;
  }

  .date{
    padding-left: 3.5em;
  }

  .background-none{
    background-color: rgba(220, 220, 220, 0.5);
  }

  .icons-info{
    display: flex;
  }

  .time, .place {
    width: 50%;
  font-size: 1.6em;
  }

   .adoption-data {
    color: #75ccb9;
  }

  .lost-data{
    color: #FA5858;
  }

    .takeCare-data {
    color: #2F4F4F;
  }

  .adoption {
    background-color: #75ccb9;
    border: 1px solid #6CBDAB;
  }

  .adoption:hover {
    background-color: #6CBDAB;
    border: 1px solid #75ccb9;
  }

  .lost {
    background-color: #FA5858;
    border: 1px solid #D73B3B;
  }

  .lost:hover {
    background-color: #D73B3B;
    border: 1px solid #FA5858;
  }

  .takeCare {
    background-color: #959191;
    border: 1px solid #807777;
  }

  .takeCare:hover {
    background-color: #807777;
    border: 1px solid #959191;
  }

  .owner {
    background-color: #03a9f4!important;
    border: 1px solid #039be5!important;
  }

  .owner:hover {
    background-color: #039be5!important;
    border: 1px solid  #03a9f4!important;
  }

  .material-icons-main {
    color: #75ccb9;
    font-size: 1rem;
    float: right;
    margin-right: 1em;
    text-shadow: 1px 1px black;
  }
  
  .card-text {
    margin: 0.1em 2.5em;
    color: #000000;
    font-family: Verdana;
    font-size: 1rem;
  }

  .material-icons-modal {
    margin-left: 35px;
    color: #75ccb9;
  }

  .modal-header,
  .modal-footer {
    background-color: #75ccb9;
  }


  /* Mobile */
    @media screen and (min-width: 375px) {
    .element {
      width: 162.5px;
      height: 162.5px;
    }
    img {
      height: 112.5px;
    }
    .favorite-icon {
      position: absolute;
      margin-top: -160px;
      margin-left: 115px;
    }
  }
  @media screen and (min-width: 400px) {
    .element {
      width: 175px;
      height: 175px;
    }
    img {
      height: 125px;
    }
    .favorite-icon {
      position: absolute;
      margin-top: -170px;
      margin-left: 125px;
    }
     .favorite-true {
      font-size: 2rem;
    }
    .favorite-false{
      font-size: 1.8rem;
    }
  }
    @media screen and (min-width: 425px) {
    .element {
      width: 187.5px;
      height: 187.5px;
    }
    img {
      height: 112.5px;
    }
    .favorite-icon {
      position: absolute;
      margin-top: -185px;
      margin-left: 140px;
    }
  }
   @media screen and (min-width: 450px) {
    .element {
      width: 205px;
      height: 205px;
    }
    img {
      height: 150px;
    }
    .favorite-icon {
      position: absolute;
      margin-top: -200px;
      margin-left: 160px;
    }
    .favorite-icon {
      position: absolute;
      margin-top: -195px;
      margin-left: 160px;
    }
  }
   @media screen and (min-width: 500px) {
    .element {
      width: 230px;
      height: 230px;
    }
    img {
      height: 175px;
    }
    .favorite-icon {
      position: absolute;
      margin-top: -215px;
      margin-left: 180px;
    }
  }
   @media screen and (min-width: 550px) {
    .element {
      width: 255px;
      height: 255px;
    }
    img {
      height: 200px;
    }
    .favorite-icon {
      position: absolute;
      margin-top: -245px;
      margin-left: 200px;
    }
  }
  /* TABLET */
  @media screen and (min-width: 650px) {
    .favorite-icon {
      margin-top: -280px;
      margin-left: 245px;
    }
    .element {
      width: 300px;
      height: 300px;
    }
    img {
      height: 250px;
    }
     .favorite-true {
      font-size: 2.5rem;
    }
    .favorite-false{
      font-size: 2.3rem;
    }
      @media screen and (min-width: 800px) {

    .favorite-icon {
      margin-top: -190px;
      margin-left: 240px;
    }
    .element {
      height: 350px;
      width: 350px;
    }
    img {
      height: 270px;
    }
  }
    /* DESKTOP */
    @media screen and (min-width: 1024px) {
      .favorite-icon {
        margin-top: -265px;
        margin-left: 220px;
      }
      .element {
        height: 280px;
        width: 280px;
      }
      img {
        height: 200px;
      }
      
       .ubication, .date{
         font-size: 0.9rem;
      }
      .time, .place {
        font-size: 0.9rem;
      }
    }
  }
</style>
