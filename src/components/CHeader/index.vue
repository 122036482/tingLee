<template>
  <div class="tingLee-header-container" ref="header" :class="{fiexd: isFiexd}">
    <div class="tinfLee-header-left fl">TingLee</div>
    <div class="tingLee-header-ringht fr">
      <ul class="tingLee-header-link" id="tingLee-header-link">
        <li target="_blank" class="tingLee-header-link-product fl">首页</li>
        <li
          target="_blank"
          class="tingLee-header-link-product fl"
          @mouseenter="onShowCode"
          @mouseleave="onHideCode"
        >公众号</li>
        <li target="_blank" class="tingLee-header-link-product fl">
          <a href="https://apps.apple.com/cn/app/id1486738485" target="_blank">APP下载</a>
        </li>
        <li target="_blank" class="tingLee-header-link-product fl">关于产品</li>
        <li class="seeCode" v-show="showCode">
          <img src="../../assets/imags/code.jpg" alt="code" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "CHeader",
  mounted() {
    window.addEventListener("scroll", this.onScroll, false);
  },
  data() {
    return {
      showCode: false,
      isFiexd: false
    };
  },
  methods: {
    onShowCode() {
      this.showCode = true;
    },
    onHideCode() {
      this.showCode = false;
    },
    onScroll() {
      let scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      const headerHeight = this.$refs.header.offsetHeight;
      this.isFiexd = scrollTop > (headerHeight+80) ? true : false;
    }
  }
};
</script>

<style scoped lang="less">
.tingLee-header-container {
  width: 100%;
  height: 80px;
  background-color: #ffffff;
  color: #4d555d;
  box-shadow: 1px 1px 9px 1px #4d555d;
  animation: all 5s infinite;
  .tinfLee-header-left {
    line-height: 80px;
    margin-left: 20px;
    font-size: 40px;
    color: #ffc800;
  }
  .tingLee-header-ringht {
    // line-height: 80px;
    margin-right: 20px;
    .tingLee-header-link {
      line-height: 80px;
      position: relative;
      // &:hover{
      //     color: #f01414;
      // }
      .tingLee-header-link-product {
        margin: 0 20px;
        cursor: pointer;
      }
      .seeCode {
        width: 120px;
        height: 120px;
        // box-shadow: 2px 2px 2px 2px #999999;
        position: absolute;
        left: 50px;
        top: 50px;
        z-index: 100;
        img {
          width: 100%;
        }
      }
    }
  }
}
.fiexd{
    position: fixed;
    top:0;
    z-index: 90;
    animation: all 5s infinite;
    background-color: rgba(0, 0, 0, .2);
    color: #ffffff
}
</style>
