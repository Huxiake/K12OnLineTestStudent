<template>
  <div class="card-container">
    <el-card
      v-for="(item, index) in exam"
      :key="index"
      class="examCard"
      shadow="hover"
      @click.native="item.isExam ? 0 : handleExam(item.id)">
      <div class="cardLeft">
        <div class="examName">{{ item.name }}</div>
        <div class="examDate">
          <svg-icon icon-class="date"/>
          <span>{{ $moment(item.beginTime).format('YYYY-MM-DD') }}</span>
          <span>至</span>
          <span>{{ $moment(item.endTime).format('YYYY-MM-DD') }}</span>
        </div>
      </div>
      <div v-if="!item.isExam" class="cardRight">
        <div class="examNum">
          <div>
            <span v-if="item.totalPeople < 10" style="color:#ff669b;margin-right: -9px;">0</span>
            <span style="color:#ff669b">{{ item.totalPeople }}</span>
            <span>/</span>
            <span v-if="item.donePeople < 10" style="color:#3888fa;margin-right: -9px;">0</span>
            <span style="color:#3888fa">{{ item.donePeople }}</span>
          </div>
          <div style="font-size: 12px;color: #707070">
            <span>已交卷</span>
            <span style="margin-left: 1em">考试人数</span>
          </div>
        </div>
      </div>
      <div v-if="item.isExam" class="cardRight">
        <div class="examNum">
          <div>
            <div style="color:#73ae4f;margin:0 auto;width: 64px">{{ item.examGrade }}分</div>
          </div>
          <div style="font-size: 12px;color: #707070;">
            <div style="width: 36px;margin: 0 auto">已交卷</div>
          </div>
        </div>
      </div>
      <div style="clear: both"/>
    </el-card>
  </div>
</template>

<script>
import { getExamList } from '@/api/exam'

export default {
  data() {
    return {
      exam: []
    }
  },
  created() {
    this.examList()
  },
  methods: {
    examList() {
      getExamList().then(res => {
        if (res.data.code === 0) {
          this.exam = res.data.data.rows
          console.log(this.exam)
        }
      })
    },
    handleExam(id) {
      this.$router.push({
        name: 'examdetails',
        params: { id: id }
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
    margin-bottom: 20px;
    .cardLeft {
      float: left;
      .examName {
        margin-bottom: 20px;
        font-size: 20px;
        font-weight: bold;
      }
      .examDate {
        font-size: 14px;
      }
    }
    .cardRight {
      float: right;
      height: 60px;
      .examNum{
        width: 120px;
        font-size: 30px;
      }
    }
    // .el-card__body::after {
    //   content: "";
    //   clear: both;
    // }
  }
</style>
