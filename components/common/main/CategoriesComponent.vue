<template>
  <div class="section">
    <h1>Nuestras Mascotas</h1>
    <div class="categories">
      <div class="card1">
        <div class="card-body">
          <h5 class="card-title">En adopción</h5>
          <p class="card-text">Que un perro o un gato no acabe en la calle depende de nosotros. 
            Ellos buscan una segunda oportunidad</p>
          <v-btn class="btn btn-primary" @click="onClick('adoption')">Ver más</v-btn>
        </div>
      </div>
      <div class="card2">
        <div class="card-body">
          <h5 class="card-title">Perdidos</h5>
          <p class="card-text">Encontraste o perdiste una mascota? Aqui tienes todos los aniamles perdidos y encontrados. 
            ¡Consulta ya los anuncios !.</p>
          <v-btn class="btn btn-primary" @click="onClick('lost')">Ver más</v-btn>
        </div>
      </div>
      <div class="card3">
        <div class="card-body">
          <h5 class="card-title">A cuidar</h5>
          <p class="card-text">¿Tienes que irte de viaje? Encuentra a personas en tu misma situación,
            y llega a un acuerdo para cuidar a tu mascota.</p>
          <v-btn class="btn btn-primary" @click="onClick('takeCare')">Ver más</v-btn>
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
  .btn-primary {
    width: 10%;
    background-color: #4db6ac;
    border: transparent;
  }
  .section {
    text-align: center;
    padding-top: 5%;
  }
  h1 {
    font-size: 3rem;
    font-weight: 700;
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
    width: 50rem;
    background-size: cover;
    background-position: center;
    background-blend-mode: luminosity;
    color: #fff;
    height: 260px;
    padding-top: 18%;
    //box-shadow: 5px 7px #f2f2f2;
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

  @media (min-width: 480px){
    .card1, .card2, .card3 {
      height: 270px;
      width: 48rem;
      padding-top: 15%;
    }
  }
  @media (min-width: 768px){
    .categories{
      width: 100%;
    }
    .card1, .card2, .card3 {
      height: 360px;
      width: 18rem;
      padding-top: 15%;
    }
  }
  @media (min-width: 1000px){
    .card1, .card2, .card3 {
      width: 23rem;
      padding-top: 12%;
    }
    .categories {
      width: 100%;
      justify-content: space-around;
    }
  }
  @media (min-width: 1350px){
    .section {
      padding: 2% 0;
    }
    .categories {
      width: 100%;
    }
    .card1, .card2, .card3 {
      width: 30rem;
      padding-top: 10%;
    }

  }
</style>
