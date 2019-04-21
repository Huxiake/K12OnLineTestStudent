<template>
  <div class="card-container">
    <el-card class="examCard" shadow="hover">
      <div class="cardLeft">
        <div class="examName">2019学年度期中考试</div>
        <div class="examDate">
          <svg-icon icon-class="date"/>
          <span>2019-05-01</span>
          <span>至</span>
          <span>2019-05-08</span>
        </div>
      </div>
      <div class="cardRight">
        <div class="examNum">
          <div>
            <span style="color:#ff669b">20</span>
            <span>/</span>
            <span style="color:#3888fa">55</span>
          </div>
          <div style="font-size: 12px;color: #707070">
            <span>已交卷</span>
            <span style="margin-left: 1em">考试人数</span>
          </div>
        </div>
      </div>
      <div style="clear: both"/>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      test: ''
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
        font-size: 30px;
      }
    }
    // .el-card__body::after {
    //   content: "";
    //   clear: both;
    // }
  }
</style>
