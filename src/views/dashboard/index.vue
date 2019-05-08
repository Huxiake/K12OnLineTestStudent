<template>
  <div class="dashboard-container">
    <grade-analysis :chart-data="newVisitis"/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import GradeAnalysis from './chart/GradeAnalysis'

export default {
  name: 'Dashboard',
  components: {
    GradeAnalysis
  },
  data() {
    return {
      newVisitis: {
        yuwenData: [88, 82, 80, 90, 92, 73, 86],
        shuxueData: [52, 87, 74, 55, 60, 50, 49],
        yingyuData: [87, 52, 81, 74, 90, 80, 89],
        wuliData: [87, 82, 60, 74, 81, 90, 74],
        huaxueData: [55, 30, 49, 60, 58, 30, 26],
        lishiData: [87, 99, 81, 74, 80, 80, 89],
        zhengzhiData: [80, 72, 81, 74, 79, 80, 73],
        diliData: [68, 55, 71, 70, 66, 55, 60]
      }
    }
  },
  computed: {
    ...mapGetters([
      'name',
      'roles'
    ])
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
