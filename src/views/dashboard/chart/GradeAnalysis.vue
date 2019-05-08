<template>
  <div :class="className" :style="{height:height,width:width}"/>
</template>

<script>
import echarts from 'echarts'
require('echarts/theme/macarons') // echarts theme
import { debounce } from '@/utils'

export default {
  props: {
    className: {
      type: String,
      default: 'chart'
    },
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '350px'
    },
    autoResize: {
      type: Boolean,
      default: true
    },
    chartData: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      chart: null,
      sidebarElm: null
    }
  },
  watch: {
    chartData: {
      deep: true,
      handler(val) {
        this.setOptions(val)
      }
    }
  },
  mounted() {
    this.initChart()
    if (this.autoResize) {
      this.__resizeHandler = debounce(() => {
        if (this.chart) {
          this.chart.resize()
        }
      }, 100)
      window.addEventListener('resize', this.__resizeHandler)
    }

    // 监听侧边栏的变化
    this.sidebarElm = document.getElementsByClassName('sidebar-container')[0]
    this.sidebarElm && this.sidebarElm.addEventListener('transitionend', this.sidebarResizeHandler)
  },
  beforeDestroy() {
    if (!this.chart) {
      return
    }
    if (this.autoResize) {
      window.removeEventListener('resize', this.__resizeHandler)
    }

    this.sidebarElm && this.sidebarElm.removeEventListener('transitionend', this.sidebarResizeHandler)

    this.chart.dispose()
    this.chart = null
  },
  methods: {
    sidebarResizeHandler(e) {
      if (e.propertyName === 'width') {
        this.__resizeHandler()
      }
    },
    setOptions({ yuwenData, shuxueData, yingyuData, huaxueData, wuliData, lishiData, diliData, zhengzhiData } = {}) {
      this.chart.setOption({
        xAxis: {
          data: ['第一月考', '第二月考', '期中', '第三月考', '第四月考', '期末'],
          boundaryGap: false,
          axisTick: {
            show: false
          }
        },
        grid: {
          left: 10,
          right: 10,
          bottom: 20,
          top: 30,
          containLabel: true
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross'
          },
          padding: [5, 10]
        },
        yAxis: {
          axisTick: {
            show: false
          }
        },
        legend: {
          data: ['语文', '数学', '英语', '物理', '政治', '化学', '地理', '历史']
        },
        series: [{
          name: '语文', itemStyle: {
            normal: {
              color: '#ff0000',
              lineStyle: {
                color: '#ff0000',
                width: 2
              },
              areaStyle: {
                color: '#ff0000'
              }
            }
          },
          smooth: true,
          type: 'line',
          data: yuwenData,
          animationDuration: 2800,
          animationEasing: 'cubicInOut'
        },
        {
          name: '英语', itemStyle: {
            normal: {
              color: '#f3b99d',
              lineStyle: {
                color: '#f3b99d',
                width: 2
              },
              areaStyle: {
                color: '#f3b99d'
              }
            }
          },
          smooth: true,
          type: 'line',
          data: yingyuData,
          animationDuration: 2800,
          animationEasing: 'cubicInOut'
        },
        {
          name: '物理', itemStyle: {
            normal: {
              color: '#aeacd2',
              lineStyle: {
                color: '#aeacd2',
                width: 2
              },
              areaStyle: {
                color: '#aeacd2'
              }
            }
          },
          smooth: true,
          type: 'line',
          data: wuliData,
          animationDuration: 2800,
          animationEasing: 'cubicInOut'
        },
        {
          name: '政治', itemStyle: {
            normal: {
              color: '#6ebace',
              lineStyle: {
                color: '#6ebace',
                width: 2
              },
              areaStyle: {
                color: '#6ebace'
              }
            }
          },
          smooth: true,
          type: 'line',
          data: zhengzhiData,
          animationDuration: 2800,
          animationEasing: 'cubicInOut'
        },
        {
          name: '地理', itemStyle: {
            normal: {
              color: '#ffff00',
              lineStyle: {
                color: '#ffff00',
                width: 2
              },
              areaStyle: {
                color: '#ffff00'
              }
            }
          },
          smooth: true,
          type: 'line',
          data: diliData,
          animationDuration: 2800,
          animationEasing: 'cubicInOut'
        },
        {
          name: '历史', itemStyle: {
            normal: {
              color: '#5a96fa',
              lineStyle: {
                color: '#5a96fa',
                width: 2
              },
              areaStyle: {
                color: '#5a96fa'
              }
            }
          },
          smooth: true,
          type: 'line',
          data: lishiData,
          animationDuration: 2800,
          animationEasing: 'cubicInOut'
        },
        {
          name: '化学', itemStyle: {
            normal: {
              color: '#FF005A',
              lineStyle: {
                color: '#FF005A',
                width: 2
              },
              areaStyle: {
                color: '#FF005A'
              }
            }
          },
          smooth: true,
          type: 'line',
          data: huaxueData,
          animationDuration: 2800,
          animationEasing: 'cubicInOut'
        },
        {
          name: '数学',
          smooth: true,
          type: 'line',
          itemStyle: {
            normal: {
              color: '#3888fa',
              lineStyle: {
                color: '#3888fa',
                width: 2
              },
              areaStyle: {
                color: '#3888fa'
              }
            }
          },
          data: shuxueData,
          animationDuration: 2800,
          animationEasing: 'quadraticOut'
        }]
      })
    },
    initChart() {
      this.chart = echarts.init(this.$el, 'macarons')
      this.setOptions(this.chartData)
    }
  }
}
</script>
