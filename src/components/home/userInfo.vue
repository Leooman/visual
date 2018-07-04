<template>
  <el-card>
    <img :src="userInfo.avatar">
    <div>
      <span>{{userInfo.user_name}}</span>
      <div>
        <time>{{ currentDate }}</time>
      </div>
    </div>
  </el-card>
</template>

<script>
export default {
  props: {
    userInfo: {
      type: Object,
      required: true,
      default: false
    }
  },
  data () {
    return {
      currentDate:this.getCurrentTime()
    }
  },
  computed: {
    
  },
  methods: {
  	getCurrentTime(){
      let i=new Date()
      let time=i.getFullYear() + '年' + ((i.getMonth()+1) < 10 ? '0'+(i.getMonth()+1) : (i.getMonth()+1))+'月'+ (i.getDate() < 10 ? '0'+i.getDate() : i.getDate()) + '日 '+ (i.getHours() < 10 ? '0'+i.getHours() : i.getHours()) + ':'+ (i.getMinutes() < 10 ? '0'+i.getMinutes() : i.getMinutes()) + ':'+ (i.getSeconds() < 10 ? '0'+i.getSeconds() : i.getSeconds())
      return time
    }
  }
}
</script>

<style lang="less">

</style>