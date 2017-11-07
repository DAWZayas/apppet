<<template>
    <div :class="element.classDiv" >
	    <img :src="element.src">
        <div>
		    <p class="nom">{{ element.name }}</p>
		   
		    <button :class="element.classButton" @click="onToggleDetails"> {{ element.state }} </button>
	    </div>
		<div v-show="show"> 
        <div class="card-block">
        <p class="card-text">User: {{ element.user }} </p>
        <p class="card-text">Peso del animal: {{ element.weight }} </p>
        <p class="card-text">Edad del animal: {{ element.age }} </p>
        <p class="card-text">Microchip: {{ element.microchip }} </p>
        <hr>
        <i class="material-icons">question_answer</i>
        <i class="material-icons">pets</i>
        <i class="material-icons">share</i>
   
  </div>
   <div class="card-footer">
      <small class="text-muted">Fecha de publicación:{{ element.date }}</small>
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
	border-radius: 5px;
}

/* TARGETS */
.nom {
	font-size: 1.2rem;
	color: #848484;
	text-align: center;
	font-weight: 800;
	margin-top: 10px;
}

button {
	width: 100%;
	border: none;
	padding: 0.2em;
	font-family: 'Acme', sans-serif;
	border-radius: 5px;
}

.adoption {
	background-color: #D8F781;
}

.lost {
	background-color: #FA5858;
}

.adopted {
	background-color: #D8D8D8;
}

.material-icons-main  {
	color: #75ccb9;
	font-size: 1rem;
	float: right;
	margin-right: 1em;
	text-shadow: 1px 1px black;
}

.card-text{
  margin: 0.2em 1.5em;
  color: #848484;
  font-family: Verdana;
  font-size: 0.90rem;
}

</style>
