<template>
  <div class="card-container">
    <grade-analysis class="charts"/>
    <el-table
      :data="gradeData"
    >
      <el-table-column
        prop="场次"
        align="center"
        label="场次"
      />
      <el-table-column
        prop="科目"
        align="center"
        label="科目"
      />
      <el-table-column
        prop="时间"
        align="center"
        label="时间"
      />
      <el-table-column
        prop="分数"
        align="center"
        label="分数"
      />
    </el-table>
  </div>
</template>

<script>
import GradeAnalysis from './chart/GradeAnalysis'

export default {
  components: {
    GradeAnalysis
  },
  data() {
    return {
      gradeData: [
        {
          场次: '第一月考',
          科目: '数学',
          时间: '2019-03-01',
          分数: '119'
        },
        {
          场次: '第一月考',
          科目: '语文',
          时间: '2019-03-01',
          分数: '128'
        },
        {
          场次: '第一月考',
          科目: '英语',
          时间: '2019-03-01',
          分数: '85'
        },
        {
          场次: '第一月考',
          科目: '物理',
          时间: '2019-03-01',
          分数: '80'
        },
        {
          场次: '第一月考',
          科目: '化学',
          时间: '2019-03-01',
          分数: '70'
        },
        {
          场次: '第一月考',
          科目: '生物',
          时间: '2019-03-01',
          分数: '81'
        },
        {
          场次: '期中',
          科目: '数学',
          时间: '2019-03-01',
          分数: '106'
        },
        {
          场次: '期中',
          科目: '语文',
          时间: '2019-03-01',
          分数: '130'
        },
        {
          场次: '期中',
          科目: '英语',
          时间: '2019-03-01',
          分数: '66'
        },
        {
          场次: '期中',
          科目: '物理',
          时间: '2019-03-01',
          分数: '70'
        },
        {
          场次: '期中',
          科目: '化学',
          时间: '2019-03-01',
          分数: '82'
        },
        {
          场次: '期中',
          科目: '生物',
          时间: '2019-03-01',
          分数: '70'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
  .card-container {
    margin: 20px;
  }
</style>
