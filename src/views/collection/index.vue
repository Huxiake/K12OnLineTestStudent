<template>
  <div class="card-container">
    <el-table
      :data="gradeData"
    >
      <el-table-column
        prop="场次名"
        align="center"
        label="场次名"
      />
      <el-table-column
        prop="科目"
        align="center"
        label="科目"
      />
      <el-table-column
        prop="题目数量"
        align="center"
        label="题目数量"
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
export default {
  data() {
    return {
      gradeData: [
        {
          场次名: '第一月考',
          科目: '数学',
          题目数量: '20',
          分数: '119'
        },
        {
          场次名: '第一月考',
          科目: '语文',
          题目数量: '30',
          分数: '128'
        },
        {
          场次名: '第一月考',
          科目: '英语',
          题目数量: '30',
          分数: '85'
        },
        {
          场次名: '第一月考',
          科目: '物理',
          题目数量: '30',
          分数: '80'
        },
        {
          场次名: '第一月考',
          科目: '化学',
          题目数量: '35',
          分数: '70'
        },
        {
          场次名: '第一月考',
          科目: '生物',
          题目数量: '30',
          分数: '81'
        },
        {
          场次名: '期中',
          科目: '数学',
          题目数量: '30',
          分数: '106'
        },
        {
          场次名: '期中',
          科目: '语文',
          题目数量: '30',
          分数: '130'
        },
        {
          场次名: '期中',
          科目: '英语',
          题目数量: '30',
          分数: '66'
        },
        {
          场次名: '期中',
          科目: '物理',
          题目数量: '30',
          分数: '70'
        },
        {
          场次名: '期中',
          科目: '化学',
          题目数量: '30',
          分数: '82'
        },
        {
          场次名: '期中',
          科目: '生物',
          题目数量: '30',
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
