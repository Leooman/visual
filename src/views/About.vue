<template>
    <l-map :zoom="zoom" :minZoom="3" :center="center" ref="map">
      <l-tile-layer :url="url"></l-tile-layer>
      <l-circle-marker v-for="(h,idx) in markers" :key="idx" :lat-lng="[h.lat,h.lng]" :radius="8" :fill-color="'#ff7800'" :color="'#fff'" :weight="1" :opacity="1" :fill-opacity=".8" :stroke="false">
          <l-popup>数量：{{h.count}}</l-popup>
      </l-circle-marker>
    </l-map>
</template>

<script>
import L from 'leaflet'
import {LMap,LTileLayer,LCircleMarker,LPopup} from 'vue2-leaflet'
import 'leaflet.heat'
export default {
  components: {
    LMap,
    LTileLayer,
    LCircleMarker,
    LPopup
  },
  data () {
    return {
      markers:[],
      layerGroup:null,
      zoom: 11,
      center: [39.914492, 116.404269],
      // 高德地图1  {地址01,02,03,04}
      url: "http://webrd01.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x={x}&y={y}&z={z}",
      // 高德地图2  {地址01,02,03,04}
      // url: "http://webst01.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=7&x={x}&y={y}&z={z}",
      // google 地图1
      // url: "http://www.google.cn/maps/vt/pb=!1m4!1m3!1i{z}!2i{x}!3i{y}!2m3!1e0!2sm!3i345013117!3m8!2szh-CN!3scn!5e1105!12m4!1e68!2m2!1sset!2sRoadmap!4e0",
      // google 地图2
      // url: "http://mt1.google.cn/vt/lyrs=m@207000000&hl=zh-CN&gl=CN&src=app&x={x}&y={y}&z={z}&s=Galile",
      // 百度地图
      // url: "http://online0.map.bdimg.com/onlinelabel/?qt=tile&x={x}&y={y}&z={z}&styles=pl&udt=20160426&scaler=1&p=0",
      // url: "http://online2.map.bdimg.com/onlinelabel/?qt=tile&x={x}&y={y}&z={z}&styles=pl&udt=20160321&scaler=2&p=0",
      // OpenStreetMap地图
      // url: "http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      // 初始地图
      // url: "http://{s}.tile.osm.org/{z}/{x}/{y}.png",
    }
  },
  computed: {
    
  },
  mounted(){
    let _this = this
    setTimeout(function(){
      _this.init()
    },2000)
  },
  methods: {
    markerGroup(data){
      this.LayerGroup = new L.LayerGroup()
      data.map((v) => {
        let marker=new L.circleMarker([v.lat,v.lng], {radius: 10,fillColor:'#ff7800'});
        this.LayerGroup.addLayer(marker)
      })
      this.LayerGroup.addTo(this.$refs.map.mapObject)
    },
    init(){
      const data = [{
        count:100,
        lat:'39.914492',
        lng:'116.404269'
      }]
      this.$refs.map.mapObject.setView([data[0].lat,data[0].lng],3)
      this.markers = [...data]
      // let heat=L.heatLayer(this.markers, {radius: 25})
      // this.$refs.map.mapObject.addLayer(heat)
      // setTimeout(() => {
      //   this.$refs.map.mapObject.removeLayer(heat)
      //   this.markerGroup(data)
      // }, 5000)
    }
  }
}
</script>

<style scoped>
  @import "~leaflet/dist/leaflet.css";
</style>

