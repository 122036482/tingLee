<template>
<div>
  <swiper ref="mySwiper" :options="swiperOptions">
    <swiper-slide>
      <img src="../../assets/imags/cover.jpg" alt class="slide-img" />
    </swiper-slide>
    <swiper-slide>
      <img src="../../assets/imags/find.jpg" alt class="slide-img" />
    </swiper-slide>
    <swiper-slide>
      <img src="../../assets/imags/down.jpg" alt class="slide-img" />
    </swiper-slide>
    <swiper-slide>
      <img src="../../assets/imags/Notes.jpg" alt class="slide-img" />
    </swiper-slide>
    <swiper-slide>
      <img src="../../assets/imags/query.jpg" alt class="slide-img" />
    </swiper-slide>
    <swiper-slide>
      <img src="../../assets/imags/Skill.jpg" alt class="slide-img" />
    </swiper-slide>
    <swiper-slide>
      <img src="../../assets/imags/speed.jpg" alt class="slide-img" />
    </swiper-slide>
    <swiper-slide>
      <img src="../../assets/imags/language.jpg" alt class="slide-img" />
    </swiper-slide>
    <div class="swiper-scrollbar" slot="scrollbar"></div>
  </swiper>
  </div>
</template>

<script>
import {swiperOptions} from '../../api/config.js'
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
    // this.swiper.slideTo(3, 1000, false)
  }
};
</script>

<style scoped lang="less">
.swiper-container {
  margin:10px 0;
  height: 568px;
  /*background-color: #666666;*/
//   width: 310px;
  .swiper-slide {
    width: 100%;
    height: 100%;
    .slide-img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
