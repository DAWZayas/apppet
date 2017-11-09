<template>
<form>
    <div class="form-group row">
        <label for="example-text-input" class="col-2 col-form-label">Nombre</label>
        <div class="col-10">
            <input class="form-control mb-2 mr-sm-2 mb-sm-0" type="text" value="Introduce nombre del animal" id="example-text-input">
        </div>
    </div>
    <div class="form-check">
        <label class="form-check-label">
            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked>
            Macho
            <br>
            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked>
            Hembra
        </label>
    </div>
    <div class="form-check form-check-inline">
        <label class="form-check-label">
            <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1">
            Si
        </label>
    </div>
    <div class="form-group row">
        <label for="example-number-input" class="col-2 col-form-label">Peso en kg</label>
        <div class="col-10">
            <input class="form-control mb-2 mr-sm-2 mb-sm-0" type="number" value="0.0" id="example-number-input" step=".1">
        </div>
    </div>
    <div class="form-group row">
        <label for="example-number-input" class="col-2 col-form-label">Edad</label>
        <div class="col-10">
            <input class="form-control mb-2 mr-sm-2 mb-sm-0" type="number" value="0" id="example-number-input">
        </div>
    </div>
</form>
  
</template>
<script>
export default {
}
</script>
<style lang="scss" scoped>


form{
    width: 90%;
    margin: 0 auto;
    margin-top:20px; 
    border: 1px solid gray;
    border-radius: 5px;
    background-color: #75ccb9;
    padding: 1em;
    font-size: 0.8rem;
    color: white;
}
input{

}

</style>
