<template>
  <el-card>
    <!-- 问题编辑时应用的表单 -->
    <el-form v-if="dynamicValidateForm.flag"
             label-width="100px">
      <el-row>
        <div style="text-align: right">
          <i class="el-icon-remove-outline"
             @click="removeQuestion(dynamicValidateForm.id)"
             style="right: auto; color: #909399"></i>
        </div>
      </el-row>
      <!-- 显示选择的题目类型 -->
      <el-row style="text-align: center; margin: 5px">
        <el-row style="margin: 25px">
          <h3 v-if="Number(dynamicValidateForm.type) === 0"><span>单选题</span></h3>
          <h3 v-else-if="Number(dynamicValidateForm.type) === 1"><span>多选题</span></h3>
          <h3 v-else-if="Number(dynamicValidateForm.type) === 2"><span>评价题</span></h3>
          <h3 v-else-if="Number(dynamicValidateForm.type) === 3"><span>评分题</span></h3>
        </el-row>
      </el-row>
      <!-- 问卷标题 -->
      <el-form-item prop="" label="问题">
        <el-input v-model="dynamicValidateForm.question" style="width: 80%;"></el-input>
      </el-form-item>
      <!-- 当选择的题型为选择题类型时，显示每个需要显示的选项 -->
      <el-form-item v-for="(choice, index) in dynamicValidateForm.choices"
                    v-if="Number(dynamicValidateForm.type) === 0 || Number(dynamicValidateForm.type) === 1"
                    :label="'选项' + (index + 1)"
                    :key="choice.key"
                    :prop="'choices.' + index + '.value'">
        <el-input style="width: 80%" v-model="choice.value"></el-input>
        <el-button @click.prevent="removeChoice(choice)">删除</el-button>
      </el-form-item>
      <!-- 编辑完后可以点击完成查看实际的显示效果 -->
      <el-form-item v-if="Number(dynamicValidateForm.type) === 0 || Number(dynamicValidateForm.type) === 1">
        <el-button type="" @click="submitForm('dynamicValidateForm')">提交</el-button>
        <el-button @click="addChoice">新增选项</el-button>
        <el-button @click="resetForm('dynamicValidateForm')">重置</el-button>
      </el-form-item>
    </el-form>
    <el-form v-else v-model="dynamicValidateForm">
      <!-- 题目内容 -->
      <el-row><h4 style="margin-top: 5%; margin-left: 5%">{{dynamicValidateForm.question}}</h4></el-row>
      <el-row><div class="grid-content"></div></el-row>
      <!-- 根据题目类型分类渲染不同的问题选项 -->
      <el-row style="margin-top: 5%; margin-left: 5%;">
        <el-form-item v-if="Number(dynamicValidateForm.type) === 0">
          <el-radio-group v-model="dynamicValidateForm.ans">
            <el-radio v-for="(choice, index) in dynamicValidateForm.choices"
                      :label="index"
                      :key="choice.key" style="display: block; margin: 10px">
              {{choice.value}}
            </el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item v-else-if="Number(dynamicValidateForm.type) === 1">
          <el-checkbox-group v-model="dynamicValidateForm.multi">
            <div v-for="(item, index) in dynamicValidateForm.choices" :key="index" >
              <el-checkbox style="display: block;"
                           :label="index"
                           name="type">{{item.value}}</el-checkbox>
            </div>
          </el-checkbox-group>
        </el-form-item>
        <el-form-item v-else-if="Number(dynamicValidateForm.type) === 2">
          <el-input type="textarea" :autosize="{ minRows: 10, maxRows: 40}"
                    placeholder="请输入你的答案" v-model="dynamicValidateForm.context">
          </el-input>
        </el-form-item>
        <el-form-item v-else-if="Number(dynamicValidateForm.type) === 3">
          <el-rate v-model="dynamicValidateForm.rate"
                   :icon-classes="['icon-rate-face-1', 'icon-rate-face-2', 'icon-rate-face-3']"
                   void-icon-class="icon-rate-face-off"
                   :colors="['#99A9BF', '#F7BA2A', '#FF9900']">
          </el-rate>
        </el-form-item>
      </el-row>
    </el-form>
    <!-- 调整用的功能按钮 -->
    <div v-if="flag" style="text-align: right; width: 90%">
      <el-button>
        <span v-if="dynamicValidateForm.flag" @click="trans">确定</span>
        <span v-else @click="trans">编辑</span>
      </el-button>
    </div>
  </el-card>
</template>

<script>
import '@/assets/fonts/style.css'
export default {
  name: 'Question',
  props: ['dynamicValidateForm', 'flag'],
  data () {
    return {
    }
  },
  methods: {
    removeQuestion (key) {
      this.$store.commit({
        type: 'removeQuestion',
        key: key
      })
    },
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        console.log(this.dynamicValidateForm.choices[4].value)
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    },
    removeChoice (item) {
      const index = this.dynamicValidateForm.choices.indexOf(item)
      if (index !== -1) {
        this.dynamicValidateForm.choices.splice(index, 1)
      }
    },
    addChoice () {
      this.dynamicValidateForm.choices.push({
        value: '',
        key: Date.now()
      })
    },
    trans () {
      this.dynamicValidateForm.flag = !this.dynamicValidateForm.flag
    }
  }
}
</script>

<style scoped>
  .grid-content {
    border-radius: 4px;
    min-height: 12px;
  }
</style>
