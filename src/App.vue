<template>
  <div id="visual">
    <side class="visualSide"/>
    <div class="visualMain">
      <router-view />
    </div>
  </div>
</template>
<script>
import side from "@/components/Side"
export default {
  components:{
    side
  }
}
</script>
<style>
html, body, #visual {
  height: 100%;
  margin: 0px;
  padding: 0px;
}
#visual {
  display: flex;
}
.visualSide{
  flex: 0 0 200px;
  background: #545c64;
}
.visualMain{
  flex: 1;
}
</style>
