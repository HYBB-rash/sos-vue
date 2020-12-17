<template>
  <el-container>
    <el-aside style="margin-top: 20px">
      <left-menu @indexSelect='surveyIndex' ref="leftMenu"></left-menu>
    </el-aside>
    <el-main style="margin-left: 5%">
      <el-row>
        <h3>问卷列表</h3>
      </el-row>
      <!-- 渲染已经存在的了的问卷的信息 -->
      <h3 v-if="cards === null">您尚未创建问卷</h3>
      <el-row v-for="card in cards" :key="card.id">
        <survey-card v-bind:card="card"></survey-card>
      </el-row>
    </el-main>
  </el-container>
</template>

<script>
import NavMenu from '../Common/NavMenu'
import LeftMenu from '../Common/LeftMenu'
import SurveyCard from '../Common/SurveyCard'
export default {
  name: 'Index',
  components: {NavMenu, LeftMenu, SurveyCard},
  data () {
    return {
      cards: this.$store.state.survey.surveyMessage
    }
  },
  methods: {
    surveyIndex () {
    }
  },
  beforeCreate () {
    this.$axios.post('/survey', {id: this.$store.state.user.id})
      .then(successResponse => {
        if (successResponse.data.code === 200) {
          this.$store.commit({
            type: 'pushSurveyMessage',
            result: successResponse.data.result
          })
        }
      })
  }
}
</script>

<style scoped>

</style>
