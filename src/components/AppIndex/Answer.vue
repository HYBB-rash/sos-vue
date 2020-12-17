<template>
  <div>
    <el-container ref="homePage">
      <el-aside>
        <ans-left-menu></ans-left-menu>
      </el-aside>
      <el-main>
        <survey v-bind:survey-title="$store.state.answer.surveyTitle"
                v-bind:forms="$store.state.answer.forms"
                v-bind:type="false"
                v-bind:EditFlag="false"
        ></survey>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import Survey from '../Common/Survey'
import AnsLeftMenu from '../Common/AnsLeftMenu'
export default {
  name: 'Answer',
  data () {
    return {
      clientHeight: ''
    }
  },
  components: {Survey, AnsLeftMenu},
  created () {
    this.$axios
      .post('/ans', {
        id: this.$route.params.id
      })
      .then(successResponse => {
        if (successResponse.data.code === 200) {
          this.$store.commit({
            type: 'refreshAnsPage',
            forms: successResponse.data.result
          })
          this.$store.state.answer.id = this.$route.params.id
        }
      })
  },
  mounted () {
    this.clientHeight = `${document.documentElement.clientHeight}`
    window.onresize = function () {
      this.clientHeight = `${document.documentElement.clientHeight}`
    }
  },
  watch: {
    clientHeight: function () {
      this.changeFixed(this.clientHeight)
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log()
    },
    changeFixed (clientHeight) {
      this.$refs.homePage.$el.style.height = clientHeight - 20 + 'px'
    }
  }
}
</script>

<style scoped>
  .surveyDisplay {
    width: 80%;
  }
  .submit-button {
    position: fixed;
    margin-left: 50%;
    left: -650px;
    width: 250px;
  }
</style>
