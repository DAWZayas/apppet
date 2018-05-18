<template>
  <div class="section">
    <div class="categories">
      <div class="card1">
        <div class="card-body">
          <h5 class="card-title card-title-1">En adopción</h5>
          <v-btn outline class="btn" color="white"  @click="onClick('adoption')">Ver más</v-btn>
        </div>
      </div>
      <div class="card2">
        <div class="card-body">
          <h5 class="card-title card-title-2">Perdidos</h5>
          <v-btn outline class="btn" color="white" @click="onClick('lost')">Ver más</v-btn>
        </div>
      </div>
      <div class="card3">
        <div class="card-body">
          <h5 class="card-title card-title-3">Para cuidar</h5>
          <v-btn outline class="btn" color="white" @click="onClick('takeCare')">Ver más</v-btn>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {}
    },
    methods: {
      onClick (f) {
        if (f === 'allPets') {
          this.$router.push('/mainpets/')
        }
        if (f === 'adoption') {
          this.$router.push('/mainpets/adoption')
        }
        if (f === 'lost') {
          this.$router.push('/mainpets/lost')
        }
        if (f === 'takeCare') {
          this.$router.push('/mainpets/takeCare')
        }
      }
    }
  }
</script>
<style lang="scss" scoped>
  :root {
    box-sizing: border-box;
  }

  .section {
    text-align: center;
    padding-top: 4em;
  }
  h1 {
    font-size: 3rem;
    font-weight: 700;
    margin-top: 1em;
  }
  h5 {
    font-size: 2rem;
  }
  h5, p {
    font-weight: 600;
  }
  .categories {
    width: 100%;
    margin: auto;
    text-align: center;
    display: flex;
    flex-wrap: wrap;
    justify-content: center; 
  }
  .card1,
  .card2,
  .card3 {
    width: 100%;
    background-size: cover;
    background-position: center;
    background-blend-mode: luminosity;
    color: #fff;
    height: 28vh;
    padding-top: 1em;
    
  }
  .card1 {
    background-image: url(~/assets/stories/d1.jpg);
    background-color: rgb(33, 78, 92);
  }
  .card2 {
    background-image: url(~/assets/stories/d2.jpg);
    background-color: rgb(230, 156, 152);
  }
  .card3 {
    background-image: url(~/assets/stories/d3.jpg);
    background-color: rgb(129, 98, 88);
  }

  .card-title{
    width: 50%;
    margin: 0.2em auto;
    padding: 0.3em;
    border-radius: 0.1em;
  }

  .card-title-1{
    background-color:  rgba(33, 78, 92, 0.6);
  }

  .card-title-2{
    background-color:  rgba(230, 156, 152, 0.6);
  }
  .card-title-3{
    background-color:  rgba(129, 98, 88, 0.6);
  }

  .btn{
    margin-top: 4em;
  }
  @media (min-width: 480px){
    .card1, .card2, .card3 {
      height: 280px;
      padding-top: 8em;
    }
  }
  @media (min-width: 768px){
    .categories{
      width: 100%;
      justify-content: space-around;
    }
    .card1, .card2, .card3 {
      height: 360px;
      width: 33.3%;
      padding-top: 10em;
    }
  }
  @media (min-width: 1000px){
    .card1, .card2, .card3 {
      padding-top: 8em;
    }
    .categories {
      width: 100%;
      justify-content: space-around;
    }
  }
  @media (min-width: 1350px){
    .section {
      padding-top: 2em;
    }
    .card1, .card2, .card3 {
      padding-top: 12em;
    }

  }
</style>
