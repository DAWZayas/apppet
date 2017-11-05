<<template>
    <div class="element">
	    <img :src="element.src">
        <div>
		    <p class="nom">{{ element.name }}</p>
		    <i class="material-icons material-icons-main "> share&nbsp&nbspfavorite&nbsp&nbspchat_bubble&nbsp&nbsppets </i>
		    <button class="adoption"> {{ element.state }} </button>
	    </div>	
	</div>
</template>

<script>
  export default {
    props: ['element'],
    data () {
      return {
      }
    }
  }
</script>

<style>

.main-elements .featured {
	grid-row: span 2;
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
	margin-left: 0.4em;
	color: #848484;

}

button {
	width: 100%;
	border: none;
	padding: 0.2em;
	margin-top: 0.3em;
	font-family: 'Acme', sans-serif;
	font-size: 1rem;
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
</style>
