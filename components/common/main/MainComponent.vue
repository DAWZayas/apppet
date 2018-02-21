<template>
	<div class="main">
      <transition-group name="fade" class="main-elements">
			<element-pets-component
        v-for="animal in animalsDisplayPaginated"
        :animal="animal"
        :key="animal['.key']"
      ></element-pets-component>
      </transition-group>
    <button-pagination-component @loadMore="onLoadMore()" :hasMore="hasMore" class="load-more"></button-pagination-component>
    <button-show-candidates-component></button-show-candidates-component>
  </div>
</template>
<script>
  import {mapGetters} from 'vuex'
  import ElementPetsComponent from '~/components/common/element/ElementPetsComponent'
  import ButtonShowCandidatesComponent from '~/components/common/buttons/ButtonShowCandidatesComponent'
  import ButtonPaginationComponent from '~/components/common/buttons/ButtonPaginationComponent'
  export default {
    data () {
      return {
        pageSize: 6,
        actualAnimalsSize: 6
      }
    },
    components: {
      ElementPetsComponent,
      ButtonShowCandidatesComponent,
      ButtonPaginationComponent
    },
    mounted () {
    },
    computed: {
      ...mapGetters({
        animals: 'getAnimals',
        favorites: 'getFavorite'
      }),
      invertArray () {
        this.animals.reverse()
      },
      animalsDisplayPaginated () {
        return this.animals.filter(this.typeOfAlert).slice(0, this.actualAnimalsSize)
      },
      hasMore () {
        return this.animals.filter(this.typeOfAlert).length > this.actualAnimalsSize
      }
    },
    methods: {
      onLoadMore () {
        this.actualAnimalsSize = this.actualAnimalsSize + this.pageSize
      },
      typeOfAlert (f) {
        if (this.$route.params.catagory === 'favorites' && this.favorites != null && this.favorites[f['.key']]) {
          return true
        } else if (f.selectAnimalAlert === this.$route.params.catagory || this.$route.params.catagory === undefined) {
          return true
        } else {
          return false
        }
      }
    }
  }
</script>
<style lang="scss" scoped>

.fade-enter-active, .fade-leave-active {
  transition: all 1s
}
.fade-enter, .fade-leave-to{
  opacity: 0;
}
  .info {
    background-color: #ccc;
    border-radius: 8px;
    margin-bottom: 1em;
    padding: 1em;
  }
  .main-elements {
    margin-top: 60px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  .material-icons material-icons-main  {
    margin: 0.2em;
  }
  .load-more{
    margin-bottom: 60px;
  }
  @media screen and (min-width: 800px) {
    .main{
  
      background-image: url("~assets/fondos/fondo-main.jpg");
      background-size: 100%;
      background-repeat: no-repeat;
      background-attachment: fixed;
    }
    .main-elements {
      margin: 50px auto;
      width: 100%;
      max-width: 900px;
      background-color: rgba(255, 255, 255, 0.5);
      padding: 2em 0;
      padding-bottom: 5em;
    }
  }
</style>
