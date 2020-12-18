<template>
  <div>
    <el-card class="box-card">
      <div :id="this.$props.id" style="width: 600px; height: 400px;"></div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'Charts',
  props: ['id'],
  methods: {
    drawChart () {
      let myChart = this.$echarts.init(document.getElementById(this.$props.id))
      let option = {
        title: {
          text: 'Echarts demo'
        },
        tooltip: {},
        legend: {
          data: ['data']
        },
        xAxis: {
          data: ['aaa', 'bbb', 'ccc', 'ddd', 'eee', 'fff']
        },
        yAxis: {},
        series: [
          {
            name: 'data',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
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
  .box-card {
    width: 90%;
  }
</style>
