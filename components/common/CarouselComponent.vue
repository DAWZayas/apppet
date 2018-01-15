<template>
    <div class="container">
        <div id="carouselExampleIndicators" class="carousel slide position" data-ride="carousel">
      <div class="carousel-inner" role="listbox">
        <div class="carousel-item active">
          <img class="d-block img-fluid" src="~/assets/candidatos/modal2.jpg" alt="First slide">
          <div class="carousel-caption d-md-block">
            <h3>Te están esperando</h3>
            <p>La lealtad de un animal no conoce límites</p>
          </div>
        </div>
        <div class="carousel-item">
          <img class="d-block img-fluid" src="~/assets/candidatos/modal3.jpg" alt="Second slide">
          <div class="carousel-caption d-none d-md-block">
            <h3>No compres, adopta!</h3>
            <p>no son juguetes que se pueden tirar</p>
          </div>
        </div>
        <div class="carousel-item">
          <img class="d-block img-fluid" src="~/assets/candidatos/modal4.jpg" alt="Third slide">
          <div class="carousel-caption d-none d-md-block">
            <h3>Respétalos y cuídalos!</h3>
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

.position {
  height: 220px;
}

.position img {
  height: 250px;
}

@media screen and (min-width: 480px) {
  h3 {
    font-size: 2.3rem;
  }
}

@media (min-width: 768px){
  .position {
    height: 600px;
    margin: auto;
    width: 90%;
  }

  .position img {
    width: 100%;
    height: 600px;
  }
}

</style>
