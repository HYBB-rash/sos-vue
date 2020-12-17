<template>
  <el-menu
    class="choices"
    default-active="0"
    @select="handleSelect"
    active-text-color="red"
    style="box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.1); margin: 100px 10% 10px;">
    <el-menu-item index="0">
      <i class="el-icon-question"></i>
      <span slot="title">提交答案</span>
    </el-menu-item>
    <el-menu-item index="1">
      <i class="el-icon-star-on"></i>
      <span slot="title">重置问卷</span>
    </el-menu-item>
  </el-menu>
</template>

<script>
export default {
  name: 'AnsLeftMenu',
  methods: {
    handleSelect (key, keyPath) {
      console.log(key)
      if (Number(key) === 0) {
        console.log(this.$store.state.answer.forms)
        this.$axios
          .post('/submit', {
            ans: this.$store.state.answer
          })
          .then(successResponse => {
            if (successResponse.data.code === 200) {
              this.$message.success('成功提交问卷')
              this.$router.replace({path: '/'})
            }
          })
      }
      console.log()
    }
  }
}
</script>

<style scoped>

</style>
