<template>
    <div class="test">
        <!-- <van-swipe class="my-swipe" ref="banner"  indicator-color="white" :loop="false" @change="onChange" width="275">
            <van-swipe-item>1</van-swipe-item>
            <van-swipe-item class="odd">2</van-swipe-item>
            <van-swipe-item>3</van-swipe-item>
            <van-swipe-item class="odd">4</van-swipe-item>
        </van-swipe> -->



        <!-- 轮播图 -->
        <swiper ref="mySwiper" :options="swiperOptions">
            <div class="swiper-slide" v-for="(item, index) in bannerlist" :key="index">
            <img :src="item.src" alt="">
            </div>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>

    </div>
</template>

<script>

    export default {
        data() {
            return {
                swiperOptions: {
                    lidesPerView: 'auto',
                    centeredSlides: true,
                    watchSlidesProgress: true,
                    paginationClickable: true,
                    slidesPerView: 1.1,
                    spaceBetween: 10,
                    loop: false,
                    autoplay: false,
                    pagination: {
                        el: '.swiper-pagination',
                        type : 'fraction',
                    }
                },
                count:1,
                bannerlist:[
                    {
                    src: require("../assets/images/banner01@2x.png")
                    },
                    {
                    src: require("../assets/images/banner01@2x.png")
                    },
                    {
                    src: require("../assets/images/banner01@2x.png")
                    },
                    {
                    src: require("../assets/images/banner01@2x.png")
                    },
                    {
                    src: require("../assets/images/banner01@2x.png")
                    }
                ]
            }
        },
        mounted(){
            console.log(this.$refs.banner.$el.firstChild.style.cssText);
        },
        methods: {
            
        },
    }
</script>

<style lang="stylus">
.test
    .swiper-container
        width 100%
        height 200px
        img
            width 100%
            height 100%
    
</style>