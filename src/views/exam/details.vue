<template>
  <div class="card-container">
    <div class="exam-top">
      <el-row type="flex" justify="center">
        <span class="examName">{{ exam.name }}</span>
      </el-row>
      <el-row type="flex" justify="center">
        <span class="examRemark">{{ exam.remark }}</span>
      </el-row>
      <el-row type="flex" justify="center">
        <span>题目总数&nbsp;{{ exam.questionNum }}</span>
        <span>试卷总分&nbsp;{{ exam.totalScore }}</span>
        <span>考试时长&nbsp;{{ exam.duration }}min</span>
        <span style="font-size: 12px; color: #707070"><svg-icon icon-class="date"/>{{ exam.beginTime }}至{{ exam.endTime }}</span>
      </el-row>
    </div>
    <div class="questionCard">
      <el-card
        v-for="(item, index) in questions"
        :key="index"
        class="examCard"
        shadow="hover">
        <span class="question">
          {{ item.content.match(/#(\S*)#/)[1] }}
        </span>
        <span style="border-bottom: solid 1px;">&nbsp;&nbsp;{{ item['value'] }}&nbsp;&nbsp;</span>
        <div class="answer">
          <el-radio-group v-model="item['value']">
            <el-radio label="A" class="option">{{ item.content.match(/##[A-Z]\s(\S*)##/g)[0].replace(/##/g, '') }}</el-radio><br>
            <el-radio label="B" class="option">{{ item.content.match(/##[A-Z]\s(\S*)##/g)[1].replace(/##/g, '') }}</el-radio><br>
            <el-radio v-if="item.content.match(/##[A-Z]\s(\S*)##/g)[2]" label="C" class="option">{{ item.content.match(/##[A-Z]\s(\S*)##/g)[2].replace(/##/g, '') }}</el-radio><br>
            <el-radio v-if="item.content.match(/##[A-Z]\s(\S*)##/g)[3]" label="D" class="option">{{ item.content.match(/##[A-Z]\s(\S*)##/g)[3].replace(/##/g, '') }}</el-radio><br>
          </el-radio-group>
        </div>
        <div class="commit">
          <el-button :ref="'btn' + item.id" type="primary" size="small" @click="commitAnswer(item.id, item.value)">提 交</el-button>
        </div>
      </el-card>
    </div>
    <!-- <div class="footcommit">
    </div> -->
    <el-row type="flex" justify="center" class="footCommit">
      <el-button type="primary" @click="hanldeExam">交 卷</el-button>
      <el-button @click="handleCancel">取 消</el-button>
    </el-row>
  </div>
</template>

<script>
import { getExamInfo, getExamDetails, answerQuestion, examSubmit } from '@/api/exam'

export default {
  data() {
    return {
      questions: [],
      exam: {
        name: '',
        remark: '',
        beginTime: '',
        endTime: '',
        totalScore: 0,
        questionNum: null,
        duration: null
      }
    }
  },
  created() {
    this.examInfo()
    this.examDetails()
  },
  methods: {
    examInfo() {
      getExamInfo(this.$route.params.id).then(res => {
        if (res.data.code === 0) {
          const data = res.data.data
          this.exam.name = data.name
          this.exam.remark = data.remark
          this.exam.beginTime = this.$moment(data.beginTime).format('YYYY-MM-DD')
          this.exam.endTime = this.$moment(data.endTime).format('YYYY-MM-DD')
          console.log(this.exam)
        }
      })
    },
    examDetails() {
      getExamDetails(this.$route.params.id).then(res => {
        if (res.data.code === 0) {
          console.log(res)
          const data = res.data.data.examQuestionList
          console.log(data)
          const dataLen = data.length
          let totalScore = 0
          this.exam.questionNum = dataLen
          this.exam.duration = dataLen * 5
          for (let i = 0; i < dataLen; i++) {
            totalScore += Number(data[i].grade)
          }
          this.exam.totalScore = totalScore
          this.questions = res.data.data.examQuestionList
        }
      })
    },
    commitAnswer(questionId, questionAnswer) {
      answerQuestion(questionId, questionAnswer).then(res => {
        if (res.data.code === 0) {
          this.$message({
            'type': 'success',
            'message': '已提交'
          })
          console.log(this.$refs['btn' + questionId][0].$el.classList.value)
          this.$refs['btn' + questionId][0].$el.innerText = '重 交'
        }
      })
    },
    hanldeExam() {
      this.$confirm('交卷后无法修改答案，请确认交卷?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        examSubmit(this.$route.params.id).then(res => {
          if (res.data.code === 0) {
            this.$message({
              'type': 'success',
              'message': '交卷成功'
            })
            this.$router.go(-1)
          }
        })
      })
    },
    handleCancel() {
      this.$confirm('还没交卷呢，退出会丢失答案的哦，是否确认返回?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$router.go(-1)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .card-container {
    margin: 20px;
  }
  .examCard {
    margin-top: 20px;
  }
  .exam-top {
    span {
      margin-left: 20px;
      font-size: 12px;
      color: #707070;
    }
    .examName {
      font-size: 30px;
      font-weight: 800;
      color: #000;
    }
    .examRemark {
      margin-top: 10px;
      margin-bottom: 10px;
      font-size: 15px;
      font-weight: 500
    }
  }
  .answer {
    .option {
      margin-top: 20px;
    }
  }
  .commit {
    margin-top: 20px;
  }
  .footCommit {
    margin-top: 20px;
  }
</style>
