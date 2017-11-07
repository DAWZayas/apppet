<template>
    <div :class="element.classDiv" >
	    <img :src="element.src">
        <div>
		    	<p class="nom">{{ element.name }}</p>
		    	<div class="button-element-more-info">
						<i class="material-icons material-icons-more-info">arrow_downward</i>
						(Click for more info...)
						<i class="material-icons material-icons-more-info">arrow_downward</i>
					</div>
		    	<button class="button-element" :class="element.classButton" data-toggle="modal" data-target="#myModal">
						 {{ element.state }}
						  </button>
	    	</div>
			 
        
   			
				<!-- Trigger the modal with a button -->
			

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
        <p class="card-text">User: {{ element.user }} </p>
        <p class="card-text">Peso del animal: {{ element.weight }} kg</p>
        <p class="card-text">Edad del animal: {{ element.age }} </p>
        <p class="card-text">Microchip: {{ element.microchip }} </p>
        <hr>
        <i class="material-icons material-icons-modal">question_answer</i>
        <i class="material-icons material-icons-modal">pets</i>
        <i class="material-icons material-icons-modal">share</i>
      </div>
      <div class="modal-footer">
				<div class="card-footer">
      		<small class="text-muted">Fecha de publicación: {{ element.date }}</small>
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
    props: ['element'],
    data () {
      return {
        show: false
      }
    },
    methods: {
      onToggleDetails: function () {
        this.show = !this.show
      }
    }
  }
</script>

<style>

.main-elements .featured {
	grid-row: span 1;
	grid-column: span 2;
}

.main-elements > .element {
	border: 0.5px solid #E6E6E6;
	border-radius: 5px;
	display: flex;
	flex-direction: column;
}

img {
	flex: 1;
	object-fit: cover;
	max-width: 100%;
	border-radius: 5px 5px 0px 0px;
}

/* TARGETS */
.nom {
	font-size: 1.2rem;
	color: #848484;
	text-align: center;
	margin: 10px 0 0 0;
	font-weight: 600;
	text-shadow: 2px 2px #D6D6D6;
}

.button-element {
	font-size: 1.2rem;
	color: #392E2E;
	width: 100%;
	border: none;
	padding: 0.3em;
	font-family: 'Acme', sans-serif;
	border-radius: 0px 0px 5px 5px;
}

.button-element-more-info{
	font-size: 0.7rem;
	color: #C8C8C8;
	text-align: center
}

.material-icons-more-info{
	margin: 0;
	font-size: 0.7rem;
	color: #C8C8C8;
}

.adoption {
	background-color: #D8F781;
	box-shadow: inset 0 0 0 2px #C2E269;
}
.adoption:hover{
	background-color: #C2E269;
	box-shadow: inset 0 0 0 2px #D8F781;
}

.lost {
	background-color: #FA5858;
	box-shadow: inset 0 0 0 2px #D73B3B;
}
.lost:hover{
	background-color: #D73B3B;
	box-shadow: inset 0 0 0 2px #FA5858;
}


.adopted {
	background-color: #D8D8D8;
	box-shadow: inset 0 0 0 2px #C7BDBD;
}

.adopted:hover{
	background-color: #C7BDBD;
	box-shadow: inset 0 0 0 2px #D8D8D8;
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

</style>
