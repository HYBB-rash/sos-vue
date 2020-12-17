<template>

  <el-menu
    :default-active="'/index'"
    router
    mode="horizontal"
    background-color="#FFFFFF"
    text-color="#222"
    active-text-color="red"
    style="min-width: 1300px;box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)">
    <el-menu-item v-for="(item, i) in navList" :key="i" :index="item.name">
      {{ item.navItem }}
    </el-menu-item>
    <i class="el-icon-switch-button" v-on:click="logout" style="float:right;font-size: 40px;color: #222;padding: 10px"></i>
    <span style="position: absolute; padding-top: 20px; right: 43%; font-size: 20px; font-weight: bold">
      在线问卷系统
    </span>
  </el-menu>
</template>

<script>
export default {
  name: 'NavMenu',
  data () {
    return {
      navList: [
        {name: '/login', navItem: '首页'},
        {name: '/index', navItem: '我的问卷'},
        {name: '/profile', navItem: '个人中心'}
      ]
    }
  },
  methods: {
    logout () {
      const _this = this
      this.$axios.get('/logout').then(resp => {
        if (resp.data.code === 200) {
          _this.$store.commit('logout')
          _this.$router.replace('/login')
        }
      })
    }
  }
}
</script>

<style scoped>
a{
  text-decoration: none;
}

span{
  pointer-events: none;
}

</style>
