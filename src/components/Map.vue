<template>
  <div id="EC"></div>
</template>
<script>
import { myTooltipC } from "@/plugins/mapChart";
import { mapData, geoCoordMap } from "@/config";
export default {
  data() {
    return {};
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      let convertData = function(data) {
        let res = [];
        for (let i = 0; i < data.length; i++) {
          let geoCoord = geoCoordMap[data[i].name];
          if (geoCoord) {
            res.push({
              name: data[i].name,
              value: geoCoord.concat(data[i].value)
            });
          }
        }
        return res;
      };

      let box = document.getElementById("EC");
      let EC = echarts.init(box);
      let myTooltip = new myTooltipC("EC");
      let op = {
        title: {
          top: 20,
          text: "",
          subtext: "",
          left: "center",
          textStyle: {
            color: "#fff"
          }
        },
        backgroundColor: "transparent",
        tooltip: {
          trigger: "item",
          triggerOn: "click",
          backgroundColor: "transparent",
          position(pos) {
            let position = myTooltip.getPosOrSize("pos", pos);
            return position;
          },
          formatter(params) {
            let text = `地点：${params.name}\n数量：${params.value[2]}`;
            let tooltipDom = myTooltip.getTooltipDom(text);
            return tooltipDom;
          }
        },
        legend: {
          show: false
        },
        geo: {
          map: "china",
          label: {
            emphasis: {
              show: false
            }
          },
          roam: false,
          itemStyle: {
            normal: {
              areaColor: "#323c48",
              borderColor: "#f00"
            },
            emphasis: {
              areaColor: "#2a333d"
            }
          }
        },
        series: [
          {
            name: "Tooltip Test",
            type: "effectScatter",
            coordinateSystem: "geo",
            data: convertData(mapData),
            symbolSize: function(val) {
              return val[2] / 5;
            },
            showEffectOn: "render",
            rippleEffect: {
              brushType: "stroke"
            },
            hoverAnimation: true,
            label: {
              normal: {
                formatter: "{b}",
                position: "right",
                show: true
              }
            },
            itemStyle: {
              normal: {
                color: "#f4e925",
                shadowBlur: 10,
                shadowColor: "#333"
              }
            },
            zlevel: 1
          }
        ]
      };
      EC.setOption(op, true);

      let timer = null;
      const autoPlay = _ => {
        let index = 0;
        if (timer) clearInterval(timer);
        timer = setInterval(_ => {
          EC.dispatchAction({
            type: "showTip",
            seriesIndex: 0,
            dataIndex: index
          });
          index++;
          if (index >= mapData.length) {
            index = 0;
          }
        }, 10000);
      };
      autoPlay();
      let delay = null;
      box.addEventListener("mousemove", e => {
        if (delay) clearTimeout(delay);
        if (timer) clearInterval(timer);
        delay = setTimeout(_ => {
          autoPlay();
        }, 2000);
      });
    }
  }
};
</script>
<style lang="less" scoped>
#EC {
  width: 100%;
  margin-top: 0.5rem;
  height: calc(~"(100% - .5rem)");
}
</style>