<template>
  <div>
<!--    <el-button class="create-button" type="primary" @click="open" round>创建问卷</el-button>-->

    <el-menu
      collapse-transition
      class="choices"
      default-active="0"
      @select="handleSelect"
      active-text-color="red"
      style="box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.1)">
      <el-menu-item index="10">
        <el-button type="text" @click="open">
          <i class="el-icon-success" style="color: #67C23A;"></i>
          <span>确认问卷制作完成</span>
        </el-button>
      </el-menu-item>
      <el-menu-item index="0">
        <i class="el-icon-question"></i>
        <span slot="title">单选题</span>
      </el-menu-item>
      <el-menu-item index="1">
        <i class="el-icon-check"></i>
        <span slot="title">多选题</span>
      </el-menu-item>
      <el-menu-item index="2">
        <i class="el-icon-star-on"></i>
        <span slot="title">评价题</span>
      </el-menu-item>
      <el-menu-item index="3">
        <i class="el-icon-s-data"></i>
        <span slot="title">评分题</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'CreateLeftMenu',
  data () {
    return {
      show: 0
    }
  },
  methods: {
    handleSelect (key) {
      if (Number(key) !== 10) {
        this.$emit('onEmitType', key)
      } else {
        console.log('nimasile')
      }
    },
    open () {
      this.$confirm('是否确认提交该问卷', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$store.state.create.userId = this.$store.state.user.id
        this.$axios
          .post('/create', {
            survey: this.$store.state.create
          })
          .then(successResponse => {
            if (successResponse.data.code === 200) {
              this.$message({
                type: 'info',
                message: '创建成功'
              })
              this.$router.replace({path: '/index'})
            }
          })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '请继续修改您的问卷'
        })
      })
    }
  }
}
</script>

<style scoped>
.choices {
  position: fixed;
  /*margin-left: 50%;*/
  /*left: -650px;*/
  margin-left: 2%;
  top: 100px;
  width: 250px;
}
</style>
