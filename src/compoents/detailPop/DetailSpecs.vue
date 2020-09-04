<template>
    <div class="showpop">
      <van-cell  @click="showPopup">
        <div class="leftTitle">
          <span class="boldfont">已选</span>
          <span >蓝绿</span>
        </div>
          <van-icon name="ellipsis" :size="30"/>
      </van-cell>
      <van-popup 
          v-model="show"
          position="bottom" 
          :style="{ height: '80%' }"
          closeable 
        >
          <div class="popupTop">
            <div class="imgbox">
            </div>
            <div class="zhPrice">
               <p>￥1999</p>
              <div class="yh">优惠</div>
              <span>组合购买更优惠</span>
              <van-icon name="arrow" :size="13"/>
            </div>
          </div>
          <div class="middle">
            少部分地区目前物流受限，客服会在发货前跟您确认
          </div>
          <div class="addCut">
            <span>-</span>
            <input type="text" value="1">
            <span>+</span>
          </div>
          <div class="color">
            <p>颜色</p>
            <div class="kuang"
                v-for="index in 2"
                :key="index"
            ></div>
          </div>
          <p class="tz">今天下单，将与2020-09-03前发货，大件家具会致电确认</p>
          <div class="btnList">
            <button class="mustbuy">立即购买</button>
            <button class="addcart">加入购物车</button>
          </div>
        </van-popup>
    </div>
</template>
<script>
export default {
  data() {
    return {
      show: false,
    }
  },
  methods: {
    showPopup() {
      this.show = true;
    },
  },
}
</script>
<style lang="stylus">
.showpop
  .van-cell
    width 100%
    height 68px
    border-top 7px solid #F5F5F5
    padding 0
    border-bottom 1px solid #EFEFEF
    .van-cell__value
      display flex
      align-items center
      justify-content space-between
      font-size 12px
      .boldfont
        font-weight bold
        margin-right 28px
  .van-popup
    width 100%
    display flex
    flex-direction column
    justify-content flex-start
    .van-icon
      font-size 16px
      color #000  
    .popupTop
      width 100%
      height 121px
      padding 20px 0 20px 16px
      border-bottom 7px solid #F0F0F0
      display flex
      .imgbox
        width 74px
        height 74px
        border 1px solid #ccc
      .zhPrice
        margin-top 34px
        margin-left 10px
        .yh
          width 29px
          height 17px
          background #E66A6A
          display inline-block
          text-align center
          line-height 17px
          font-size 10px
          color #FFF
          margin-top 5px
        p
        font-size 10px
        color #E66A6A
        span 
          font-size 15px
          color #000
          margin-left 12px
          margin-right 5px
    .middle
      margin-top 20px
      width 348px
      height 43px
      border-top 1px solid #909090
      border-bottom 1px solid #909090
      font-size 15px
      color #616161
      line-height 43px
      margin-left 12px
    .addCut
      width 134px
      height 40px
      border 1px solid #B8B8B8
      margin 20px 0 21px 16px
      display flex
      span
        width 39px
        height 100%
        text-align center
        
        line-height 140%
      input 
        width 56px
        height 100%
        border 0
        border-left 1px solid #B8B8B8
        border-right 1px solid #B8B8B8
        line-height 100%
        text-align center
    .color
      margin-left 16px
      p
      font-size 15px
      font-weight bold
      color #232323
      .kuang
        width 35px
        height 35px
        border 1px solid #909090
        padding 5px
        float left
        margin-right 26px
        margin-top 13px
        margin-bottom 19px
    .tz
      font-size 13px
      color #616161
      margin-left 16px
    .btnList
      width 100%
      height 49px
      position absolute
      left 0
      bottom 0
      font-size 15px
      .mustbuy
        width 50%
        height 100%
        background #fff
        text-align center
        line-height 100%
        border 0
        border-top 1px solid #ccc
      .addcart
        width 50%
        height 100%
        background #000
        text-align center
        line-height 100%
        color #fff
        border 0
</style>
