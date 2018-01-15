<template>
<div class="form-horizontal">
    <div class="form-group row">
        <label for="text-input" class="control-label col-sm-2">Nombre:</label>
        <div class="col-sm-10">
            <input class="form-control" v-model="name" type="text" placeholder="Nombre del animal" id="text-input">
        </div>
    </div>
    <div class="form-group row">
        <label for="text-input" class="control-label col-sm-2">Ciudad:</label>
        <div class="col-sm-10">
            <input class="form-control" v-model="ubication" type="text" placeholder="Ciudad" id="text-input">
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
            <input class="form-control" v-model="age" type="number" placeholder="En años" id="number-input">
        </div>
    </div>
    <div class="form-group row">
        <label for="file-input" class="control-label col-sm-2">Imagen</label>
        <div class="col-sm-10">
            <input class="form-control" type="file" value="0" @change="filesChange($event.target.files)" id="file-input">
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
           <nuxt-link to="/apppet/">
                <button class="btn btn-default" @click="addAnimal" >Enviar</button>
            </nuxt-link>
        </div>
         <div class="col-sm">
            <button type="reset" class="btn btn-default" @click="cancel">Cancelar</button>
        </div>
    </div>
</div>
</template>
<script>
import {mapGetters, mapActions} from 'vuex'
export default {
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
      date: '',
      pictures: []
    }
  },
  computed: {
    ...mapGetters({
      animals: 'getAnimals'
    })
  },
  methods: {
    filesChange (files) {
      this.pictures = [...files]
      console.log(this.pictures)
    },
    addAnimal: function () {
      this.uploadImages(this.pictures).then(picUrls => {
        const newAnimal = {
          name: this.name,
          src: '12',
          classButton: 'adoption',
          classDiv: this.getSizeImage(),
          user: 'paco123',
          weight: '3,75',
          age: this.age,
          microchip: 'Si',
          animalPhoto: picUrls,
          ubication: this.ubication,
          date: this.getFecha()
        }
        this.setAddAnimal(newAnimal)
      })
    },
    getFecha: function () {
      var today = new Date()
      var dd = today.getDate()
      var mm = today.getMonth() + 1
      var yyyy = today.getFullYear()
      if (dd < 10) {
        dd = '0' + dd
      }
      if (mm < 10) {
        mm = '0' + mm
      }
      today = dd + '/' + mm + '/' + yyyy
      return today
    },
    getSizeImage: function () {
      var dado = Math.floor(Math.random() * 10) + 1
      console.log(dado)
      if (dado > 1) {
        return 'element'
      } else {
        return 'element featured'
      }
    },
    cancel () {
      this.$router.push('/apppet')
    },
    ...mapActions(['setAddAnimal', 'uploadImages'])
  }
}
</script>

<style lang="scss" scoped>
.form-horizontal{
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

    .form-horizontal{width:50%;
    }
}
</style>
