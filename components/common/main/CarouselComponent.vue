<template>
  <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
    <div class="carousel-inner" role="listbox">
      <div class="carousel-item active">
        <img class="d-block img-fluid" src="~/assets/candidatos/modal2.jpg" alt="First slide">
        <div class="carousel-caption d-md-block">
          <h3>Te están esperando</h3>
          <p>Su lealtad no conoce límites</p>
        </div>
      </div>
      <div class="carousel-item">
        <img class="d-block img-fluid" src="~/assets/candidatos/modal3.jpg" alt="Second slide">
        <div class="carousel-caption d-md-block">
          <h3>No compres, adopta!</h3>
          <p>No son juguetes que se pueden tirar</p>
        </div>
      </div>
      <div class="carousel-item">
        <img class="d-block img-fluid" src="~/assets/candidatos/modal4.jpg" alt="Third slide">
        <div class="carousel-caption d-md-block">
          <h3>Cuídalos!</h3>
          <p>Hasta que no amas a un animal una parte de tu alma está dormida</p>
        </div>
      </div>
    </div>
    <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
</template>

<script>

export default {
  data () {
    return {
    }
  },
  components: {
  }
}

</script>

<style lang="scss" scoped>

:root {
  box-sizing: border-box;
}

#carouselExampleIndicators {
  width: 100%;
  margin-top: 10%;
  background: #4db6ac;
  background: linear-gradient(to right,  #2c6d66, #ffffff, #2c6d66);
}

.carousel {
  height: auto;
}

.carousel img {
  height: 280px;
}

h3, p {
  font-weight: 800;
}

@media screen and (min-width: 480px) {

  #carouselExampleIndicators {
    width: 100%;
    margin-top: 5%;
  }

  .carousel {
    height: auto;
  }

  h3 {
    font-size: 2rem;
  }

  p {
    font-size: 1.2rem;
  }

  .carousel img {
    margin: 0 auto;
    width: 100%;
    height: 400px;
  }
}

@media (min-width: 768px){
  
  #carouselExampleIndicators {
    width: 100%;
    margin-top: 0%;
  }

  h3 {
    font-size: 3rem;
  }

  p {
    font-size: 1.5rem;
  }

  .carousel img {
    width: 100%;
    height: 550px;
  }
}

@media (min-width: 1024px){

	.carousel img {
    width: 70%;
    height: 700px;
  }
}
</style>
