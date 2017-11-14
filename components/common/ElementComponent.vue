<template>
    <div :class="animal.classDiv" >
	    <img :src="animal.src">
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
          <div class="modal-dialog">
            <!-- Modal content-->
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal">&times;</button>
                <h4 class="modal-title">Información</h4>
              </div>
              <div class="modal-body">
                <p class="card-text">User: {{ animal.user }} </p>
                <p class="card-text">Peso del animal: {{ animal.weight }} kg</p>
                <p class="card-text">Edad del animal: {{ animal.age }} </p>
                <p class="card-text">Microchip: {{ animal.microchip }} </p>
                <hr>
                <i class="material-icons material-icons-modal">question_answer</i>
                <i class="material-icons material-icons-modal">pets</i>
                <i class="material-icons material-icons-modal">share</i>
              </div>
              <div class="modal-footer">
                <div class="card-footer">
                  <small class="text-muted">Fecha de publicación: {{ animal.date }}</small>
                </div>
                <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
      </div>
		</div>
</template>

<script>
export default {
  props: ['animal'],
  data () {
    return {
    }
  }
}
</script>

<style scoped>

.element {
	border-radius: 5px;
	display: flex;
	flex-direction: column;
	justify-content:center;
	width: 42%;
	margin: 10px 8px 6px 8px;;
  box-shadow: 0px 5px 10px #888888;
}

img {
	flex: 1;
	object-fit: cover;
  max-width: 100%;
  height: 100px;
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
  margin: 0.2em 0.5em;
  color: #848484;
  font-family: Verdana;
  font-size: 0.90rem;
}

.material-icons-modal{
	margin-left: 20px;
}


@media screen and (min-width: 800px) {
  .main-elements .featured {
    grid-row: span 2;
    grid-column: span 2;
  }

  .main-elements > .element {
    border-radius: 5px;
    width: 100%;
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
  img{
    max-width: 100%;
    height: 150px;
  }
}

@media screen and (min-width: 650px){
  img{
    max-width: 100%;
    height: 200px;
  }
}
</style>
