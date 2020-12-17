<template>
  <div>
    <el-button class="create-button" type="primary" @click="open" round>创建问卷</el-button>
    <el-menu
      class="choices"
      default-active="0"
      @select="handleSelect"
      active-text-color="red"
      style="box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.1)">
      <el-menu-item index="0">
        <i class="el-icon-question"></i>
        <span slot="title">全部问卷</span>
      </el-menu-item>
      <el-menu-item index="1">
        <i class="el-icon-star-on"></i>
        <span slot="title">重要问卷</span>
      </el-menu-item>
      <el-menu-item index="2">
        <i class="el-icon-truck"></i>
        <span slot="title">回收站</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'LeftMenu',
  data () {
    return {
      show: 0
    }
  },
  methods: {
    handleSelect (key, keyPath) {
    },
    open () {
      this.$store.commit({
        type: 'resetCreate'
      })
      this.$prompt('请输入问卷标题', '创建问卷', {
        confirmButtonText: '确定',
        cancelButtonText: '取消'
      }).then(({ value }) => {
        this.$store.state.create.surveyTitle = value
        this.$router.replace({path: '/create'})
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '取消输入'
        })
      })
    }
  }
}
</script>

<style scoped>
  .choices {
    position: fixed;
    /*margin-left: 35%;*/
    /*left: -650px;*/
    margin-left: 2%;
    top: 150px;
    width: 250px;
  }
  .create-button {
    position: fixed;
    /*margin-left: 35%;*/
    /*left: -650px;*/
    margin-left: 2%;
    width: 250px;
  }
</style>
