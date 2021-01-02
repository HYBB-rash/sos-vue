<template>
  <div>
    <el-card class="box-card" shadow="hover" style="margin: 15px">
      <div slot="header" class="clearfix">
        <el-row>
          <!-- 问卷标题 -->
          <el-col :span="6"><div class="grid-content">
            <span style="text-align: left" :key='card.title'>{{ card.title }}</span>
          </div></el-col>
          <!-- 间隔 -->
          <el-col :span="7"><div class="grid-content"></div></el-col>
          <!-- 问卷的ID -->
          <el-col :span="3">
            <div class="grid-content" style="text-align: center" :key='card.id'>
              <small>ID:{{ card.id + Date.now() % 10000000}}</small>
            </div>
          </el-col>
          <!-- 当前的问卷发布状态 -->
          <el-col :span="2">
            <div class="grid-content" style="text-align: center" :key='card.status'>
              <small v-if="card.status === 1" style="color: #409EFF">●未发布</small>
              <small v-else-if="card.status === 0" style="color: #F56C6C">●已结束</small>
              <small v-else-if="card.status === 2" style="color: #909399">●已删除</small>
              <small v-else-if="card.status === 4" style="color: #909399">●已发布</small>
              <small v-else-if="card.status === 3" style="color: #E6A23C">●重要问卷</small>
            </div>
          </el-col>
          <!-- 参与问卷的人数 -->
          <el-col :span="2">
            <div class="grid-content" style="text-align: center" :key='card.count'>
              <small>答题卷:{{card.count}}</small>
            </div>
          </el-col>
          <!-- 问卷的发布日期 -->
          <el-col :span="4">
            <div class="grid-content" style="text-align: right" :key='card.date'>
              <small>{{card.day}}</small>
            </div>
          </el-col>
        </el-row>

<!--        <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>-->
      </div>
      <div>
        <!-- 功能按钮 -->
        <el-row v-if="card.status !== 2">
          <el-col :span="1">
            <el-tooltip class="item" effect="dark" content="删除该问卷" placement="bottom">
              <i class="el-icon-delete" @click="setTrash(card.id)"></i>
            </el-tooltip>
          </el-col>
          <!--  -->
          <el-col :span="1" class="grid-content">
            <el-tooltip class="item" effect="dark" content="编辑问卷" placement="bottom" v-if="card.status !== 0">
              <i class="el-icon-edit" @click="edit(card.id)"></i>
            </el-tooltip>
          </el-col>
          <el-col :span="1" class="grid-content">
            <el-tooltip class="item" effect="dark" content="发布问卷" placement="bottom" v-if="card.status !== 0 && card.status !== 4">
              <i class="el-icon-s-promotion" @click="setSend(card.id)"></i>
            </el-tooltip>
          </el-col>
          <el-col :span="1" class="grid-content">
            <el-tooltip class="item" effect="dark" content="导出问卷" placement="bottom">
              <i class="el-icon-download" @click="downloadSurvey(card.id)"></i>
            </el-tooltip>
          </el-col>
          <!-- 开头的一段距离间隔 -->
          <el-col :span="8"><div class="grid-content"></div></el-col>
<!--          &lt;!&ndash; 编辑按钮 &ndash;&gt;-->
<!--          <el-col :span="4"><div class="toRight">-->
<!--            <el-button style="box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.1)"-->
<!--                       :disabled="card.status === 0 || card.status === 4"-->
<!--                       @click="setSend(card.id)">-->
<!--              <i class="el-icon-edit" style="color: #67C23A"></i>send问卷</el-button>-->
<!--          </div></el-col>-->
          <!-- 发送问卷按钮 -->
          <el-col :span="4" class="grid-content"><div class="toRight">
            <el-button
              @click="getAddress"
              :disabled="card.status === 0 || card.status !== 4"
              style="box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.1)">
              <i class="el-icon-document" style="color: #409EFF"></i>发送问卷</el-button>
          </div></el-col>
          <!-- 分析与下载按钮-->
          <el-col :span="4"><div class="toRight">
            <el-button @click="analyzeCharts(card.id)"
                       :disabled="card.status === 1"
              style="box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.1)">
              <i class="el-icon-cpu"
                 style="color: #E6A23C"></i>分析&下载</el-button>
          </div></el-col>
          <!-- 停止问卷按钮 -->
          <el-col :span="4"><div class="toRight">
            <el-button @click="stopSurvey(card.id)"
                       :disabled="card.status === 0"
              style="box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.1)">
              <i class="el-icon-circle-close" style="color: #F56C6C"></i>停止问卷</el-button>
          </div></el-col>
        </el-row>
      </div>
    </el-card>
  </div>

</template>

<script>
export default {
  name: 'SurveyCard',
  props: ['card'],
  data () {
    return {
    }
  },
  methods: {
    edit (id) {
      this.$confirm('如果您要重新编辑问卷，将清除所有问卷的答案，是否继续', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.clearAnsBySurveyId(id)
        this.$store.state.create.id = id
        this.$axios
          .post('/edit', {
            id: id
          })
          .then(successResponse => {
            this.$store.commit({
              type: 'refreshEdit',
              editForm: successResponse.data.result
            })
          })
        this.$router.replace({path: '/create'})
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '取消操作'
        })
      })
    },
    clearAnsBySurveyId (id) {
      console.log('demo!!!')
      this.$axios
        .post('/answer/clear', {
          id: id
        })
        .then(successResponse => {
          if (successResponse.data.code === 200) {
            this.$message.info('初始化成功')
          } else if (successResponse.data.code === 400) {
            this.$message.error('初始化失败')
          }
        })
    },
    getAddress () {
      const address = this.$store.state.user.address + this.$props.card.id
      console.log(address)
      this.$alert(address, '请复制下面的地址发送给填写问卷的用户', {
        confirmButtonText: '收到，已经复制'
      })
    },
    stopSurvey (id) {
      this.$axios
        .post('/stop', {
          id: id
        })
        .then(successResponse => {
          if (successResponse.data.code === 200) {
            this.$axios.post('/survey', {id: this.$store.state.userToken.id})
              .then(successResponse => {
                if (successResponse.data.code === 200) {
                  this.$store.commit({
                    type: 'pushSurveyMessage',
                    result: successResponse.data.result
                  })
                }
              })
          } else {
            this.$message.error('状态更新失败')
          }
        })
    },
    analyzeCharts (id) {
      this.$axios
        .post('/analyze', {
          id: id
        })
        .then(successResponse => {
          if (successResponse.data.code === 200) {
            console.log(successResponse.data.result)
          }
          this.$store.commit({
            type: 'refreshRowData',
            rowData: successResponse.data.result
          })
        })
      this.$router.replace({path: '/analyze'})
    },
    setUnImportant (surveyId) {
      this.$axios
        .post('/unimportant', {
          id: surveyId
        })
        .then(successResponse => {
          if (successResponse.data.code === 200) {
            this.$store.commit('changSurveyStatus', {
              id: surveyId,
              status: 1
            })
          }
        })
    },
    setTrash (surveyId) {
      this.clearAnsBySurveyId(surveyId)
      this.$axios
        .post('/trash', {
          id: surveyId
        })
        .then(successResponse => {
          if (successResponse.data.code === 200) {
            this.$store.commit('removeSurveyMessage', {
              id: surveyId
            })
          }
        })
    },
    setSend (surveyId) {
      this.$axios
        .post('/send', {
          id: surveyId
        })
        .then(successResponse => {
          if (successResponse.data.code === 200) {
            this.$store.commit('changSurveyStatus', {
              id: surveyId,
              status: 4
            })
          }
        })
    },
    downloadSurvey (surveyId) {
      this.$axios
        .post('/excel/survey', {
          id: surveyId
        }, {
          responseType: 'blob'
        })
        .then(res => {
          let blob = new Blob([res.data], {type: 'application/ms-excel;charset=utf-8'})
          let downloadElement = document.createElement('a')
          let href = window.URL.createObjectURL(blob)
          downloadElement.href = href
          downloadElement.download = Date.now() + '.xls'
          document.body.appendChild(downloadElement)
          downloadElement.click()
          document.body.removeChild(downloadElement)
          window.URL.revokeObjectURL(href)
        })
    }
  }
}
</script>

<style>
  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 90%;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 12px;
  }
  .toRight{
    text-align: right;
  }
</style>
