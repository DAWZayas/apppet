<template>
    <div :class="animal.classDiv" >
	    <img :src="img[this.images]">
        <div>
		    	<div class="element-info">
						<div class="ubication-info">
              <span class="material-icons material-icons-element-info">place</span>
               {{ animal.ubication }}
            </div>
            <div class="date-info">
              <span class="material-icons material-icons-element-info">access_time</span>
               {{ animal.date }}
            </div>
					</div>
		    	<button class="button-element" :class="animal.classButton" data-toggle="modal" data-target="#myModal">
						 <p class="name-pet">{{ animal.name }}</p>
						  </button>
	    	</div>
        <!-- Modal -->
        <div id="myModal" class="modal fade" role="dialog">
          <div class="modal-dialog modal-lg">
            <!-- Modal content-->
            <div class="modal-content">
              <div class="modal-header">
                <h4 class="modal-title">Información Detallada</h4>
              </div>
              <div class="modal-body">
                <div id="carouselExampleControls" class="carousel slide one" data-ride="carousel">
                  <div class="carousel-inner" role="listbox">
                    <div class="carousel-item active">
                      <img class="d-block img-fluid two" src="~/assets/candidatos/modal1.jpg" alt="First slide">
                    </div>
                    <div class="carousel-item">
                      <img class="d-block img-fluid two" src="~/assets/candidatos/modal1.jpg" alt="Second slide">
                    </div>
                    <div class="carousel-item">
                      <img class="d-block img-fluid two" src="~/assets/candidatos/modal1.jpg" alt="Third slide">
                    </div>
                  </div>
                  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                  </a>
                  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                  </a>
                </div>
                <p class="card-text">User: {{ animal.user }} </p>
                <p class="card-text">Peso del animal: {{ animal.weight }} kg</p>
                <p class="card-text">Edad del animal: {{ animal.age }} </p>
                <p class="card-text">Microchip: {{ animal.microchip }} </p>
                <p class="card-text">Fecha de publicación: {{ animal.date }} </p>
                <hr>
                <i class="material-icons material-icons-modal">question_answer</i>
                <i class="material-icons material-icons-modal">pets</i>
                <i class="material-icons material-icons-modal">share</i>
              </div>
              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3035.0488274840054!2d-3.8722730606964113!3d40.4741847895883!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2ses!4v1513067699202" width="400" height="250" frameborder="0" style="border:0" allowfullscreen></iframe>
              <div class="modal-footer">
                <button type="button" class="btn btn-primary" data-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
      </div>
		</div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  props: ['animal'],
  data () {
    return {
      images: this.animal.src
    }
  },
  computed: {
    ...mapGetters({
      img: 'getImages'
    })
  }
}
</script>

<style scoped>
.one {
  height: 250px;
  width: 400px;
  margin: auto;
  margin-bottom: 1em;
}

.two {
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

.adopted {
	background-color: #959191;
	border: 1px solid #807777;
}

.adopted:hover{
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
