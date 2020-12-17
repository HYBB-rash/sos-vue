<template>
  <body id="paper">
    <el-form class="login-container" label-width="0px"
             status-icon :rules="rules"
             label-position="left" :model="loginForm">
      <h3 class="login_title">系统登陆</h3>
      <el-form-item prop="username">
        <el-input type="text" v-model="loginForm.username"
                  autocomplete="off" aria-placeholder="账号"></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input type="password" v-model="loginForm.password"
                  autocomplete="off" aria-placeholder="密码"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" class="login_button"
                   v-on:click="login">登录</el-button>
      </el-form-item>
      <el-form-item>
        <el-button type="warning" class="login_button" v-on:click="register">注册</el-button>
      </el-form-item>
    </el-form>
  </body>
</template>

<script>
export default {
  name: 'Login',
  data () {
    const checkUsername = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('请输入用户名'))
      }
    }
    const checkPassword = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('请输入密码'))
      }
    }
    return {
      loginForm: {
        id: '',
        username: '',
        password: ''
      },
      responseResult: [],
      rules: {
        username: [{validator: checkUsername, trigger: 'blur'}],
        password: [{validator: checkPassword, trigger: 'blur'}]
      }
    }
  },
  methods: {
    login () {
      var _this = this
      this.$axios
        .post('/login', {
          username: this.loginForm.username,
          password: this.loginForm.password
        })
        .then(successResponse => {
          if (successResponse.data.code === 200) {
            _this.$store.commit({
              type: 'login',
              userToken: this.loginForm
            })
            _this.$store.commit({
              type: 'setStatus',
              id: Number(successResponse.data.result)
            })
            const path = this.$route.query.redirect
            console.log(path)
            console.log({path: path === '/index' || path === undefined ? '/index' : path})
            this.$router.replace({path: path === '/index' || path === undefined ? '/index' : path})
          }
        })
        .catch(failResponse => {
        })
    },
    register () {
      this.$router.replace({path: '/register'})
    }
  }
}
</script>

<style scoped>
  #paper {
    background: url("../../assets/eva1.jpg") repeat center;
    height: 100%;
    width: 100%;
    background-size: cover;
    position: fixed;
  }
  body{
    margin: 0px;
  }
  .login-container {
    border-radius: 15px;
    background-clip: padding-box;
    margin: 90px auto;
    width: 350px;
    padding: 35px 35px 15px 35px;
    background: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
  }

  .login_title {
    margin: 0px auto 40px auto;
    text-align: center;
    color: #505458;
  }
  .login_remember {
    margin: 0px 0px 35px 0px;
    text-align: left;
  }
  .login_button {
    width: 100%;
    border: none;
  }
</style>
