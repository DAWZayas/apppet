<template>
  <div class="section">
    <h1>Nuestras Mascotas</h1>
    <div class="categories">
      <div class="card" style="width: 25rem;">
        <img class="card-img-top" src="~/assets/candidatos/modal3.jpg" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">En adopción</h5>
          <p class="card-text">Que un perro o un gato no acabe en la calle depende de nosotros. 
            Ellos buscan una segunda oportunidad</p>
          <nuxt-link to="/mainpets/adoption" class="btn btn-primary">Ver más</nuxt-link>
        </div>
      </div>
      <div class="card" style="width: 25rem;">
        <img class="card-img-top" src="~/assets/candidatos/modal4.jpg" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">Perdidos</h5>
          <p class="card-text">Encontraste o perdiste una mascota? Aqui tienes todos los aniamles perdidos y encontrados. 
            ¡Consulta ya los anuncios !.</p>
          <nuxt-link to="/mainpets/lost" class="btn btn-primary">Ver más</nuxt-link>
        </div>
      </div>
      <div class="card" style="width: 25rem;">
        <img class="card-img-top" src="~/assets/candidatos/modal2.jpg" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">A cuidar</h5>
          <p class="card-text">¿Tienes que irte de viaje? Encuentra a personas en tu misma situación,
            y llega a un acuerdo para cuidar a tu mascota.</p>
          <nuxt-link to="/mainpets/takeCare" class="btn btn-primary">Ver más</nuxt-link>
        </div>
      </div>
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

.section {
  text-align: center;
  padding: 5% 0;
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
  width: 90%;
  margin: auto;
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: center; 
}
.card {
  margin: 1%;
  background-color: #edf8f7;
  box-shadow: 5px 7px #f2f2f2;
}
@media (min-width: 1024px){
  
  .section {
    padding: 2% 0;
  }

	.categories {
    width: 78%;
    justify-content: space-around;
  }

  .card {
  margin: 3%;
  }
}
</style>
