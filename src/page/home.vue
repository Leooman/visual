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
  .el-card{
    text-align: center;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
</style>

