<template>
	<div class="main">
		<section class="main-elements">
      <element-post-component
        v-for="note in notesDisplayPaginated"
        :note="note"
        :key="note['key']"
      ></element-post-component>
  	</section>
     <button-pagination-component 
        @loadMore="onLoadMore()" 
        :hasMore="hasMore"
        class="button-pagination"
      ></button-pagination-component>
 	</div>
</template>
<script>
  import {mapGetters} from 'vuex'
  import ElementPostComponent from '~/components/common/element/ElementPostComponent'
  import ButtonPaginationComponent from '~/components/common/buttons/ButtonPaginationComponent'
  export default {
    data () {
      return {
        pageSize: 3,
        actualAnimalsSize: 3
      }
    },
    components: {
      ElementPostComponent,
      ButtonPaginationComponent
    },
    computed: {
      ...mapGetters({notes: 'getNotes'}),
      notesDisplayPaginated () {
        return this.notes.slice(0, this.actualAnimalsSize)
      },
      hasMore () {
        return this.notes.length > this.actualAnimalsSize
      }
    },
    methods: {
      onLoadMore () {
        this.actualAnimalsSize = this.actualAnimalsSize + this.pageSize
      }
    }
  }
</script>
<style lang="scss" scoped>
  .main-elements {
    margin-top: 60px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  .material-icons material-icons-main  {
    margin: 0.2em;
  }

  @media screen and (min-width: 800px) {
    .main{
      background-image: url("~assets/fondos/fondo-main.jpg");
      background-size: 100%;
      background-repeat: no-repeat;
      background-attachment: fixed;
      padding-bottom: 5em;
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
