<template>
<div>
<form class="form-horizontal">
    <div class="form-group row">
        <label for="text-input" class="control-label col-sm-2">Nombre:</label>
        <div class="col-sm-10">
            <input class="form-control" type="text" placeholder="Nombre del animal" id="text-input">
        </div>
    </div>
    <div class="form-group row">
        <label for="text-input" class="control-label col-sm-2">Ciudad:</label>
        <div class="col-sm-10">
            <input class="form-control" type="text" placeholder="Ciudad" id="text-input">
        </div>
    </div>
    <div class="form-group row">
        <label for="select1" class="control-label col-sm-2">Animal:</label>
            <div class="col-sm-10">
            <select class="form-control" id="select1">
                <option>Perro</option>
                <option>Gato</option>
                <option>Otro</option>
            </select>
            </div>
    </div>
    <div class="form-group row">
        <label for="text-input" class="control-label col-sm-2">Raza:</label>
        <div class="col-sm-10">
            <input class="form-control" type="text" placeholder="Raza del animal" id="text-input">
        </div>
    </div>
    <div class="form-group row"> 
        <div class="col-sm-offset-2 col-sm-10">
            <div class="checkbox">
                <label><input type="checkbox">Macho</label>
            </div>
            <div class="checkbox">
                <label><input type="checkbox">Hembra</label>
            </div>
        </div>
    </div>
    <div class="form-group row">
        <label for="number-input" class="control-label col-sm-2">Edad;</label>
        <div class="col-sm-10">
            <input class="form-control" type="number" placeholder="En años" id="number-input">
        </div>
    </div>
    <div class="form-group row">
        <label for="file-input" class="control-label col-sm-2">Imagen</label>
        <div class="col-sm-10">
            <input class="form-control" type="file" value="0" id="file-input">
        </div>
    </div>
    <div class="form-group row">
        <label for="comment" class="control-label col-sm-2">Descripción:</label>
        <div class="col-sm-10">
            <textarea class="form-control" rows="5" id="comment"></textarea>
        </div>
    </div>
    <div class="form-group row">
        <label for="number-input" class="control-label col-sm-2">Teléfono:</label>
        <div class="col-sm-10">
            <input class="form-control" type="number" id="number-input">
        </div>
    </div>
    <div class="btn-group inline"> 
        <div class="col-sm-offset-2">
            <button class="btn btn-default">Enviar</button>
        </div>
         <div class="col-sm">
            <button type="reset" class="btn btn-default">Cancelar</button>
        </div>
    </div>
    
</form>
<button @click="addAnimal" type="button">hhh</button>
</div>
  
</template>
<script>
import {mapGetters, mapActions} from 'vuex'
export default {
  computed: {
    ...mapGetters({
      animals: 'getAnimals'
    })
  },
  data () {
    return {
      name: '',
      src: '',
      classButton: '',
      classDiv: '',
      user: '',
      weight: '',
      age: '',
      microchip: '',
      ubication: '',
      date: ''
    }
  },
  methods: {
    addAnimal: function () {
      const newAnimal = {
        name: 'paco de lusia',
        src: require('~/assets/candidatos/dogcat.jpg'),
        classButton: 'adoption',
        classDiv: 'element featured',
        user: 'paco123',
        weight: '3,75',
        age: '2 años',
        microchip: 'Si',
        ubication: 'Villanueva del Pardillo',
        date: '06/11/2017'
      }
      this.setAddAnimal(newAnimal)
      console.log('aaa')
    },
    ...mapActions(['setAddAnimal'])
  }
}
</script>
<style lang="scss" scoped>


form{
    width: 90%;
    margin: 15px auto;
    border: 1px solid gray;
    border-radius: 5px;
    background-color: #75ccb9;
    padding: 1.2em;
    font-size: 1rem;
    color: white;
}
input{
    font-size: 0.8rem;
}

@media screen and (min-width: 768px){
    
    form {width:50%;
    }
}
</style>
