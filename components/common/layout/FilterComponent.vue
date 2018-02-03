<template>
  <div fixed class="footer-top hidden-md-and-up">
	   <div class="container">
	      <div class="social-icons">
          <i class="icon fa fa-heart"></i>
          <i class="icon fa fa-paw" @click="onClick('allPets')"></i>
          <i class="icon fa fa-home" @click="onClick('adoption')"></i>
          <i class="icon fa fa-exclamation-triangle" @click="onClick('lost')"></i>
          <i class="icon fa fa-eye" @click="onClick('takeCare')"></i>
        </div>
      </div>
    </div>
</template>
<script>
  export default {
    data () {
      return {}
    },
    methods: {
      onClick (f) {
        if (f === 'allPets') {
          this.$router.push('/mainpets/')
        }
        if (f === 'adoption') {
          this.$router.push('/mainpets/adoption')
        }
        if (f === 'lost') {
          this.$router.push('/mainpets/lost')
        }
        if (f === 'takeCare') {
          this.$router.push('/mainpets/takeCare')
        }
      }
    }
  }
</script>
<style lang="scss" scoped>
  .footer-top {
    background-color: #f7f7f7;
    text-align: center;
  }
  .footer-top .social-icons {
    padding: 10px 0px;
  }
  .footer-top .social-icons i {
    padding: 0px 20px;
    font-size: 2rem;
    color: #aaa;
  }
  .footer-top .social-icons i:hover {
    color: #FA5858;
  }
</style>
