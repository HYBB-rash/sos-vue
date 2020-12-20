<template>
  <div>
    <el-card>
      <div :id="this.$props.id" style="width: 600px; height: 400px;"></div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'PieCharts',
  props: ['id', 'title', 'data'],
  methods: {
    drawChart () {
      let myChart = this.$echarts.init(document.getElementById(this.$props.id))
      let option = {
        title: {
          text: this.$props.title,
          left: 'center',
          top: 20,
          textStyle: {
            color: '#ccc'
          }
        },

        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },

        visualMap: {
          show: false,
          min: 80,
          max: 600,
          inRange: {
            colorLightness: [0, 1]
          }
        },
        series: [
          {
            name: '访问来源',
            type: 'pie',
            radius: '55%',
            center: ['50%', '50%'],
            data: this.$props.data
              .sort(function (a, b) { return a.value - b.value }),
            roseType: 'radius',
            label: {
              color: 'rgba(255, 255, 255, 0.3)'
            },
            labelLine: {
              lineStyle: {
                color: 'rgba(255, 255, 255, 0.3)'
              },
              smooth: 0.2,
              length: 10,
              length2: 20
            },
            itemStyle: {
              color: '#c23531',
              shadowBlur: 200,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            },

            animationType: 'scale',
            animationEasing: 'elasticOut',
            animationDelay: function (idx) {
              return Math.random() * 200
            }
          }
        ]
      }
      myChart.setOption(option)
    }
  },
  mounted () {
    this.drawChart()
  }
}
</script>

<style scoped>

</style>
