<template>
    <div class="section-one">
      <h1>Nuestras Mascotas</h1>
      <div class="categories">
        <div class="category">
          <nuxt-link to="/mainpets/adoption"><img src="~/assets/candidatos/modal3.jpg"></nuxt-link>
          <h2>En adopción</h2>
        </div>   
        <div class="category">  
          <nuxt-link to="/mainpets/lost"><img src="~/assets/candidatos/modal4.jpg"></nuxt-link>
          <h2>Perdidos</h2>
        </div>  
        <div class="category">  
          <nuxt-link to="/mainpets/adopted"><img src="~/assets/candidatos/modal2.jpg"></nuxt-link>
          <h2>Adoptados</h2> 
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

.section-one {
  text-align: center;
}
.categories {
  width: 90%;
  margin: auto;
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: center; 
}

.category {
  background-color: rgb(7, 78, 119);
  border: 1px solid grey;
  margin: 3%;
  opacity: 1;
  color: white;
}

.category img {
  width: 100%;
  max-width: 300px;
}

.category:hover {
  opacity: 0.7;
}

</style>
