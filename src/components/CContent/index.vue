<template>
  <div class="main">
    <div class="screen-1">
      <p class="app-introduce">追求极简，讲究实用</p>
      <div class="screen-img-container">
        <swiper ref="mySwiper" :options="swiperOptions">
          <swiper-slide>
            <img src="../../assets/imags/m-find.jpg" alt class="screen-img" />
          </swiper-slide>
          <swiper-slide>
            <img src="../../assets/imags/m-load.jpg" alt class="screen-img" />
          </swiper-slide>
          <swiper-slide>
            <img src="../../assets/imags/m-query.jpg" alt class="screen-img" />
          </swiper-slide>
          <swiper-slide>
            <img src="../../assets/imags/m-more.jpg" alt class="screen-img" />
          </swiper-slide>
          <div class="swiper-scrollbar" slot="scrollbar"></div>
        </swiper>
      </div>
    </div>

    <div class="screen-2">
      <div class="screen-2__features">
        <div class="screen-2__features__item">
          <div class="screen-2__features__item__number">高清原声</div>
          <div class="screen-2__features__item__desc">双语字幕</div>
        </div>
        <div class="screen-2__features__item">
          <div class="screen-2__features__item__number">语速调节</div>
          <div class="screen-2__features__item__desc">语句收藏</div>
        </div>
        <div class="screen-2__features__item">
          <div class="screen-2__features__item__number">字幕检查</div>
          <div class="screen-2__features__item__desc">重点复读</div>
        </div>
      </div>
      <div class="screen-img-container">
        <!-- <img src="../../assets/imags/Skill.jpg" alt class="screen-img" /> -->
        <img src="../../assets/imags/screen-2.jpg" alt class="screen-img" />
        <img src="../../assets/imags/screen-22.jpg" alt class="screen-img" />
      </div>
    </div>
    <div class="screen-3">
      <div class="screen-3__features">
        <div class="screen-3__features__item">
          <div class="screen-3__features__item__number">词典查询</div>
          <div class="screen-3__features__item__desc">生词高亮</div>
        </div>
      </div>
      <div class="screen-img-container">
        <img src="../../assets/imags/speed.jpg" alt class="screen-img" />
        <img src="../../assets/imags/Notes.jpg" alt class="screen-img" />
        <img src="../../assets/imags/query.jpg" alt class="screen-img" />
      </div>
    </div>

    <div class="screen-4">
      <div class="toDownLoad-text">功能不仅于此   <a href="https://apps.apple.com/cn/app/id1486738485">快来下载APP</a>  发现更多有趣的功能吧</div>
    </div>
  </div>
</template>

<script>
import { swiperOptions } from "../../api/config.js";
export default {
  name: "CContent",
  data() {
    return {
      swiperOptions
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper;
    }
  },
  mounted() {
    console.log("Current Swiper instance object", this.swiper);
  }
};
</script>

<style scoped lang="less">
.main {
  margin-top: 10px;
  background-color: #ffffff;
  .screen-1 {
    width: 100%;
    margin-bottom: 10px;
    .app-introduce {
      font-size: 36px;
      line-height: 36px;
      color: #f01400;
      text-align: center;
      padding: 10px 0;
    }
    .screen-img-container {
      width: 100%;
      display: flex;
      justify-content: center;
      .screen-img {
        height: auto;
        width: 320px;
      }
    }
  }
  .screen-2 {
    background-color: orangered;
    position: relative;
    width: 100%;
    padding: 10px 0;
    height: 692.547px;
    .screen-2__features {
      position: absolute;
      left: 30%;
      top: 20%;
      width: 138px;
      height: 380px;
      .screen-2__features__item {
        width: 138px;
        height: 118px;
        border: 1px solid #cb7173;
        margin: 0 20px 20px 0;
        float: left;
        border-radius: 3px;
        color: #fff;
        text-align: center;
        .screen-2__features__item__number {
          height: 36px;
          font-size: 18px;
          line-height: 36px;
          padding: 28px 0 8px;
        }
        .screen-2__features__item__desc {
          height: 36px;
          font-size: 18px;
          line-height: 14px;
        }
      }
    }
    .screen-img-container {
      position: absolute;
      left: 45%;
      .screen-img {
        display: inline-block;
        margin-left: 15px;
        height: 692.547px;
        width: 320px;
      }
    }
  }
  .screen-3 {
    background-color: darkolivegreen;
    position: relative;
    width: 100%;
    padding: 10px 0;
    height: 692.547px;
    .screen-3__features {
      position: absolute;
      left: 5%;
      top: 20%;
      width: 138px;
      height: 380px;
      .screen-3__features__item {
        width: 138px;
        height: 118px;
        border: 1px solid #cb7173;
        margin: 0 20px 20px 0;
        float: left;
        border-radius: 3px;
        color: #fff;
        text-align: center;
        .screen-3__features__item__number {
          height: 36px;
          font-size: 18px;
          line-height: 36px;
          padding: 28px 0 8px;
        }
        .screen-3__features__item__desc {
          height: 36px;
          font-size: 18px;
          line-height: 14px;
        }
      }
    }
    .screen-img-container {
      position: absolute;
      left: 20%;
      .screen-img {
        display: inline-block;
        margin-left: 15px;
        height: 692.547px;
        width: 320px;
      }
    }
  }
  .screen-4 {
    height: 100;
    overflow: hidden;
    background-color: #0c0e1b;
    color: #ffffff;
    .toDownLoad-text {
      font-size: 20px;
      line-height: 100px;
      color: #ffffff;
      text-align: center;
    }
  }
  .swiper-container {
    margin: 10px 0;
    height: 568px;
    .swiper-slide {
      width: 100%;
      height: 100%;
      .slide-img {
        height: 568px;
        width: 320px;
      }
    }
  }
}
</style>
