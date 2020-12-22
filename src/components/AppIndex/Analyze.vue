<template>
  <el-container>
    <el-aside>
      <analyze-left-menu></analyze-left-menu>
    </el-aside>
    <el-main>
      <el-row style="margin-top: 10px; margin-bottom: 10px; min-width: 100px" :key="index"
              justify="center" type="flex"
              v-for="(data, index) in this.$store.state.analyze.rowData">
<!--        <el-col :offset="1" :span="11"><charts v-bind:id="1" style="margin: 2%"></charts></el-col>-->
<!--        <el-col :offset="1" :span="11"><charts v-bind:id="2" style="margin: 2%"></charts></el-col>-->
<!--        <el-col :offset="1" :span="11"><charts v-bind:id="3" style="margin: 2%"></charts></el-col>-->
<!--        <el-col :offset="1" :span="11" style="margin-top: 10px; margin-bottom: 10px;"><BarsCharts v-bind:id="1"></BarsCharts> </el-col>-->
<!--        <el-col :offset="1" :span="11" style="margin-top: 10px; margin-bottom: 10px;"><LineCharts v-bind:id="2"></LineCharts> </el-col>-->
<!--        <el-col :offset="1" :span="11" style="margin-top: 10px; margin-bottom: 10px;"><PieCharts v-bind:id="3"></PieCharts></el-col>-->
<!--        <el-col :offset="1" :span="11" style="margin-top: 10px; margin-bottom: 10px;"><TableCharts v-bind:id="4"></TableCharts> </el-col>-->

<!--          <span>{{data}}</span>-->
<!--          <el-table-->
<!--            :data="data">-->
<!--            <el-table-column prop="xData" ></el-table-column>-->
<!--            <el-table-column prop="data"></el-table-column>-->
<!--          </el-table>-->
        <bars-charts v-if="data.type === 0"
                     v-bind:id="index"
                     v-bind:title="data.title"
                     v-bind:data="data.data"
                     v-bind:x-data="data.xData"></bars-charts>
        <pie-charts v-if="data.type === 1"
                    v-bind:id="index"
                    v-bind:title="data.title"
                    v-bind:data="data.data"></pie-charts>
        <table-charts v-if="data.type === 2"
                      v-bind:id="index"
                      v-bind:data="data.data"
                      v-bind:title="data.title"></table-charts>
        <line-charts v-if="data.type === 3"
                     v-bind:id="index"
                     v-bind:x-data="data.xData"
                     v-bind:title="data.title"
                     v-bind:data="data.data"></line-charts>
      </el-row>
    </el-main>
  </el-container>
</template>

<script>
// import Charts from '../Common/Charts'
import PieCharts from '../Common/ChartsCommon/PieCharts'
import LineCharts from '../Common/ChartsCommon/LineCharts'
import TableCharts from '../Common/ChartsCommon/TableCharts'
import BarsCharts from '../Common/ChartsCommon/BarsCharts'
// import FileSaver from 'file-saver'
// import XLSX from 'xlsx'
import AnalyzeLeftMenu from '../Common/AnalyzeLeftMenu'
export default {
  name: 'Analyze',
  data () {
    return {
      tableData: this.$store.state.analyze.rowData
    }
  },
  components: {AnalyzeLeftMenu, PieCharts, LineCharts, TableCharts, BarsCharts}
}
</script>

<style scoped>

</style>
