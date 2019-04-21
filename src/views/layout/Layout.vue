<template>
  <div :class="classObj" class="app-wrapper">
    <navbar/>
    <div v-if="device==='mobile'&&sidebar.opened" class="drawer-bg" @click="handleClickOutside"/>
    <!-- <sidebar class="sidebar-container"/> -->
    <el-card class="top-card">
      <div class="head"/>
      <div class="foot">
        <div class="avatar">
          <img src="@/assets/image/avatar.jpg" style="width:168px;height:168px">
        </div>
        <div class="info">
          <div class="infohead">
            <h1>
              <span style="font-size: 26px;font-weight: 600;">孙悟空</span>
              <span style="margin-left: 12px;font-size: 18px;color: #909399">菩提学院高级进阶班</span>
            </h1>
          </div>
          <!-- <div class="infofoot">
          </div> -->
        </div>
      </div>
    </el-card>
    <div class="center-container">
      <div class="navbar">
        <el-menu :default-active="$route.path" class="el-menu-demo" mode="horizontal" router>
          <el-menu-item index="/student/exam">考试中心</el-menu-item>
          <el-menu-item index="/student/grade">成绩中心</el-menu-item>
          <el-menu-item index="/student/collection">我的收藏</el-menu-item>
        </el-menu>
      </div>
      <app-main/>
    </div>
  </div>
</template>

<script>
import { Navbar, Sidebar, AppMain } from './components'
import ResizeMixin from './mixin/ResizeHandler'

export default {
  name: 'Layout',
  components: {
    Navbar,
    Sidebar,
    AppMain
  },
  mixins: [ResizeMixin],
  data() {
    return {
      activeIndex: '1'
    }
  },
  computed: {
    sidebar() {
      return this.$store.state.app.sidebar
    },
    device() {
      return this.$store.state.app.device
    },
    classObj() {
      return {
        hideSidebar: !this.sidebar.opened,
        openSidebar: this.sidebar.opened,
        withoutAnimation: this.sidebar.withoutAnimation,
        mobile: this.device === 'mobile'
      }
    }
  },
  methods: {
    handleClickOutside() {
      this.$store.dispatch('CloseSideBar', { withoutAnimation: false })
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  @import "src/styles/mixin.scss";
  .app-wrapper {
    @include clearfix;
    position: relative;
    height: 100%;
    width: 100%;
    &.mobile.openSidebar{
      position: fixed;
      top: 0;
    }
  }
  .drawer-bg {
    background: #000;
    opacity: 0.3;
    width: 100%;
    top: 0;
    height: 100%;
    position: absolute;
    z-index: 999;
  }
  .top-card {
    width: 66%;
    height: 250px;
    margin: 10px auto;
    .head{
      height: 130px;
      background-color: #d4d4d4;
    }
    .foot {
      position: relative;
      height: 120px;
      margin: 0 20px 24px;
      .info {
        padding-top: 16px;
        padding-left: 32px;
        border-left: 168px solid #f8000000;
        .infohead {
          position: relative;
          padding-right: 106px;
          margin-bottom: 16px;
          h1 {
            margin: 0;
            font: inherit;
          }
        }
      }
    }
    .avatar {
      position: absolute;
      width: 168px;
      height: 168px;
      background-color: #e7e7e7;
      top: -74px;
      left: 0;
      z-index: 1;
    }
  }
  .navbar {
    width:100%;
    height: 50px;
    font-size: 16px;
    border-bottom: 1px solid #f6f6f6;
  }
</style>

<style lang="scss">
  .top-card>div{
    &:nth-child(1){
      padding: 0;
    }
  }
</style>

