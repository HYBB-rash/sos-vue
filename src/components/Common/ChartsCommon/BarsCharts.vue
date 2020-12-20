<template>
  <div>
    <el-card>
      <div :id="this.$props.id" style="width: 600px; height: 400px;"></div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'BarsCharts',
  props: ['id', 'title', 'xData', 'data'],
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
        xAxis: {
          type: 'category',
          data: this.$props.xData
        },
        yAxis: {
          type: 'value'
        },
        series: [{
          data: this.$props.data,
          type: 'bar',
          showBackground: true,
          backgroundStyle: {
            color: 'rgba(220, 220, 220, 0.8)'
          }
        }]
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
