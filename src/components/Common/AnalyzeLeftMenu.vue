<template>
  <el-menu
    class="choices"
    default-active="0"
    @select="handleSelect"
    active-text-color="red"
    style="box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.1); margin: 100px 10% 10px;">
    <el-menu-item index="0">
      <i class="el-icon-question"></i>
      <span slot="title">导出到excel</span>
    </el-menu-item>
  </el-menu>
</template>

<script>
export default {
  name: 'AnalyzeLeftMenu',
  methods: {
    handleSelect (key, keyPath) {
      this.$axios
        .post('/excel', {
          excelData: this.$store.state.analyze.rowData
        }, {
          responseType: 'blob'
        })
        .then(res => {
          let blob = new Blob([res.data], {type: 'application/ms-excel;charset=utf-8'})
          let downloadElement = document.createElement('a')
          let href = window.URL.createObjectURL(blob)
          downloadElement.href = href
          downloadElement.download = Date.now() + '.xls'
          document.body.appendChild(downloadElement)
          downloadElement.click()
          document.body.removeChild(downloadElement)
          window.URL.revokeObjectURL(href)
        })
        // .then(successResponse => {
        //   if (successResponse.data.code === 200) {
        //     console.log(successResponse.data.result)
        //   }
        // })
    }
  }
}
</script>

<style scoped>

</style>
