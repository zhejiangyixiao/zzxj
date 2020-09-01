<template>
    <div>
        <!-- 导航栏 -->
        <van-nav-bar  left-text="返回" >
            <template #left>
                <img src="../assets/style/index-img/nav-scan.png" alt="" width="21px" height="19px">
            </template>
            <template #title>
                <img src="../assets/style/index-img/nav-logo.png" alt="" width="161px" height="15px">
            </template>
            <template #right>
               <img src="../assets/style/index-img/nav-search.png" alt="" width="17px" height="19px">
            </template>
        </van-nav-bar>

        <!-- 轮播图 -->
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
            <van-swipe-item>1</van-swipe-item>
            <van-swipe-item>2</van-swipe-item>
            <van-swipe-item>3</van-swipe-item>
            <van-swipe-item>4</van-swipe-item>
        </van-swipe>

    </div>
</template>

<script>
    export default {
    
    }
</script>

<style lang="stylus" scoped>
    .my-swipe .van-swipe-item 
        color: #fff;
        font-size: 20px;
        line-height: 150px;
        text-align: center;
        background-color: #39a9ed;
    
</style>