<template>
  <userInfo :userInfo="userInfo"></userInfo>
</template>

<script>
import {mapState} from 'vuex'
export default {
  components: {
    userInfo: () => import('../components/home/userInfo'),
  },
  data () {
    return {
      
    }
  },
  computed: {
    ...mapState({
      userInfo:state => state.userInfo
    })
  },
  methods: {
    
  }
}
</script>

<style lang="less" scoped>
  
</style>

