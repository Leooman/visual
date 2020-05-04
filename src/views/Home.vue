<template>
  <div class="home">
    <Map v-if="!loading"/>
    <Loading v-if="loading"/>
  </div>
</template>

<script>
import Loading from '@/components/Loading.vue'
import Map from '@/components/Map.vue'

export default {
  name: 'Home',
  components: {
    Loading,
    Map
  },
  data(){
    return {
      loading:true
    }
  },
  mounted(){
    const _this = this
    setTimeout(() => {
      _this.loading = false
    }, 2000)
  }
}
</script>
<style lang="less" scoped>
  .home{
    height: 100%;
  }
</style>
