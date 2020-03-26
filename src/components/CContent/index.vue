<template>
    <swiper ref="mySwiper" :options="swiperOptions">
        <swiper-slide>
            <img src="../../assets/imags/cover.jpg" alt="" class="slide-img">
            <img src="../../assets/imags/find.jpg" alt="" class="slide-img">
            <img src="../../assets/imags/down.jpg" alt="" class="slide-img">
            <img src="../../assets/imags/query.jpg" alt="" class="slide-img">
        </swiper-slide>
        <swiper-slide>
            <img src="../../assets/imags/language.jpg" alt="" class="slide-img">
            <img src="../../assets/imags/Skill.jpg" alt="" class="slide-img">
            <img src="../../assets/imags/speed.jpg" alt="" class="slide-img">
            <img src="../../assets/imags/Notes.jpg" alt="" class="slide-img">
        </swiper-slide>
<!--        <swiper-slide>Slide 3</swiper-slide>-->
<!--        <swiper-slide>Slide 4</swiper-slide>-->
<!--        <swiper-slide>Slide 5</swiper-slide>-->
        <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
</template>

<script>
    export default {
        name: "CContent",
        data() {
            return {
                swiperOptions: {
                    pagination: {
                        el: '.swiper-pagination'
                    },
                    // Some Swiper option/callback...
                }
            }
        },
        computed: {
            swiper() {
                return this.$refs.mySwiper.$swiper
            }
        },
        mounted() {
            console.log('Current Swiper instance object', this.swiper)
            // this.swiper.slideTo(3, 1000, false)
        }
    }
</script>

<style scoped lang="less">
.swiper-container{
    height: 568px;
    /*background-color: #666666;*/
    .swiper-slide{
        display: flex;
        justify-content: center;
        flex-direction: row;
        .slide-img{
            flex: 1;
            margin: auto 20px;
            height: 500px;
        }
    }
}
</style>
