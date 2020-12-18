<template>
  <el-container>
    <el-main>
      <el-row>
        <el-col :offset="2" :span="10"><charts v-bind:id="1" style="margin: 2%"></charts></el-col>
        <el-col :offset="2" :span="10"><charts v-bind:id="2" style="margin: 2%"></charts></el-col>
        <el-col :offset="2" :span="10"><charts v-bind:id="3" style="margin: 2%"></charts></el-col>
      </el-row>
    </el-main>
  </el-container>
</template>

<script>
import Charts from '../Common/Charts'
export default {
  name: 'Analyze',
  components: {Charts}
}
</script>

<style scoped>

</style>
