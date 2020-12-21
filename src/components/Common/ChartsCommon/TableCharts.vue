<template>
  <el-card>
    <el-container style="width: 600px; height: 400px;">
      <el-main>
        <el-row><h2>{{this.$props.title}}</h2></el-row>
        <el-row v-for="(item, index) in this.$props.data" :key="index">
          <span>{{item}}</span>
        </el-row>
      </el-main>
    </el-container>
  </el-card>
</template>

<script>
export default {
  name: 'TableCharts',
  props: ['id', 'title', 'data'],
  data () {
    return {
    }
  }
}
</script>

<style scoped>

</style>
