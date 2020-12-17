<template>
  <el-container>
    <el-main style="text-align: center">
      <el-card shadow="always" style="width: 60%; margin: auto">
        <div slot="header"><h3>您的信息</h3></div>
        <el-form>
          <el-form-item>
            <el-col :span="6"><div style="text-align: right">用户名</div></el-col>
            <el-col :span="14" :offset="1">
              <el-input suffix-icon="el-icon-user"
                        v-model="$store.state.profile.username"></el-input>
            </el-col>
          </el-form-item>
          <el-form-item>
            <el-col :span="6"><div style="text-align: right">姓名</div> </el-col>
            <el-col :span="14" :offset="1">
              <el-input suffix-icon="el-icon-star-off"
                        v-model="$store.state.profile.name"></el-input>
            </el-col>
          </el-form-item>
          <el-form-item>
            <el-col :span="6"><div style="text-align: right">性别</div> </el-col>
            <el-col :span="14" :offset="1">
              <el-input suffix-icon="el-icon-female"
                        v-model="$store.state.profile.sex"></el-input>
            </el-col>
          </el-form-item>
          <el-form-item>
            <el-col :span="6"><div style="text-align: right">地址</div> </el-col>
            <el-col :span="14" :offset="1">
              <el-input suffix-icon="el-icon-house"
                        v-model="$store.state.profile.address"></el-input>
            </el-col>
          </el-form-item>
          <el-form-item>
            <el-col :span="6"><div style="text-align: right">电话</div> </el-col>
            <el-col :span="14" :offset="1">
              <el-input suffix-icon="el-icon-mobile-phone"
                        v-model="$store.state.profile.phone"></el-input>
            </el-col>
          </el-form-item>
          <el-form-item>
            <el-col :span="6"><div style="text-align: right">单位</div> </el-col>
            <el-col :span="14" :offset="1">
              <el-input suffix-icon="el-icon-office-building"
                        v-model="$store.state.profile.company"></el-input>
            </el-col>
          </el-form-item>
          <el-form-item>
            <el-col :span="6" :offset="6">
              <el-button><i  class="el-icon-finished" style="color: #42b983"></i>提交修改</el-button></el-col>
            <el-col :span="6">
              <el-button><i  class="el-icon-refresh" style="color: #409EFF"></i>重置信息</el-button></el-col>
          </el-form-item>
        </el-form>
      </el-card>
    </el-main>
  </el-container>
</template>

<script>
export default {
  name: 'Profile'
}
</script>

<style scoped>
  .messageLine {
    margin: auto;
    padding: 10px;
  }
</style>
