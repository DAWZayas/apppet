<template>
<form>
    <div class="form-group row">
        <label for="example-text-input" class="col-2 col-form-label">Nombre</label>
        <div class="col-10">
            <input class="form-control mb-2 mr-sm-2 mb-sm-0" type="text" value="Nombre del animal" id="example-text-input">
        </div>
    </div>
    <div class="form-group row">
        <label for="example-text-input" class="col-2 col-form-label">Ciudad</label>
        <div class="col-10">
            <input class="form-control mb-2 mr-sm-2 mb-sm-0" type="text" value="Ciudad" id="example-text-input">
        </div>
    </div>
    <div class="form-group row">
        <label for="sel1" class="col-2 col-form-label">Animal</label>
            <div class="col-10">
            <select class="form-control" id="sel1">
                <option>Perro</option>
                <option>Gato</option>
                <option>Otro</option>
            </select>
            </div>
    </div>
    <div class="form-group row">
        <label for="example-text-input" class="col-2 col-form-label">Raza</label>
        <div class="col-10">
            <input class="form-control mb-2 mr-sm-2 mb-sm-0" type="text" value="Raza del animal" id="example-text-input">
        </div>
    </div>
    <div class="form-check">
        <label class="form-check-label">
            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1">
            Macho
            <br>
            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1">
            Hembra
        </label>
    </div>
    <div class="form-group row">
        <label for="example-number-input" class="col-2 col-form-label">Edad</label>
        <div class="col-10">
            <input class="form-control mb-2 mr-sm-2 mb-sm-0" type="number" value="0" id="example-number-input">
        </div>
    </div>
    <div class="form-group row">
        <label for="example-file-input" class="col-2 col-form-label">Imagen</label>
        <div class="col-10">
            <input class="form-control mb-2 mr-sm-2 mb-sm-0" type="file" value="0" id="example-file-input">
        </div>
    </div>
    <div class="form-group row">
        <label for="comment" class="col-2 col-form-label">Caracter:</label>
        <div class="col-10">
            <textarea class="form-control" rows="5" id="comment"></textarea>
        </div>
    </div>
    <div class="form-group row">
        <label for="example-number-input" class="col-2 col-form-label">Teléfono</label>
        <div class="col-10">
            <input class="form-control mb-2 mr-sm-2 mb-sm-0" type="number" id="example-number-input">
        </div>
    </div>
    <input v-model="element.name" placeholder="edit me">
    <p>Message is: {{ element.name }}</p>
</form>
  
</template>
<script>
export default {
  data () {
    return {
      element: {
        name: '',
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
    }
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
    width: 90%;
    margin-left: 10px;
    
}

</style>
