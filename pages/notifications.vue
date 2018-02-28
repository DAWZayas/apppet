<template>
  <div>
    <header-component></header-component>
    <show-notification-component></show-notification-component>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
import { HeaderComponent } from '~/components/common/layout'
import { ShowNotificationComponent } from '~/components/notifications/'
export default {
  data () {
    return {}
  },
  components: {
    HeaderComponent,
    ShowNotificationComponent
  },
  computed: {
    ...mapGetters({user: 'getUser'})
  },
  methods: {
    ...mapActions(['readNotification'])
  },
  mounted () {
    this.readNotification(this.user.uid)
  }
}
</script>
<style lang="scss">

</style>
