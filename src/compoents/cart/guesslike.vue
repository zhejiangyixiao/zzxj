<template>
    <div class="guesslike">
        <header>猜你喜欢</header>
        <van-grid :border="true" :column-num="2" >
            <van-grid-item class="van-hairline--bottom van-hairline--right" :class="{active:index % 2 === 0}" v-for="index in 9" :key="index">
                <van-image src="https://img.yzcdn.cn/vant/apple-1.jpg" lazy-load/>
                <div class="ctx">
                    <div class="title van-ellipsis">云帛床|优美舒适永不进口螺丝刀记录卡房间里睡大觉风口浪尖</div>
                    <div class="des van-ellipsis">舒软体验和间接视觉，二者领袋记录咖啡机离开的健康分离焦虑可视对讲风口浪尖</div>
                    <div class="price">￥4295起</div>
                    <van-tag color="#f6f6f6" text-color="#bbb">四色可选</van-tag>
                </div>
            </van-grid-item>
        </van-grid>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                isOdd:true,
            }
        },
    }
</script>

<style lang="stylus" scoped>
.guesslike
    background #ffffff
    .active 
        border-right none 
    header 
        font-size 15px
        font-weight 900
        width 100%
        height 50px
        line-height 50px
        text-align center
    .ctx 
        width 170px
        font-size 13px
        div 
            margin 5px 0
        .title
            width 100%
            font-weight 900
            color #2d2d2d
            font-size 15px
        .des
            width 100%
            color #ccc
        .price
            font-weight 900
            color #2d2d2d
        .van-tag
            padding 3px
            font-size 10px
            margin 10px 0
        
</style>