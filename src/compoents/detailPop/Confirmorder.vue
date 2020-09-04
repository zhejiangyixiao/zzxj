<template>
  <div class="confirm-older">
      <van-nav-bar
        title="订单确认"
        left-arrow
        fixed
        placeholder 
        z-index=10
        border
        @click-left="onClickLeft"
      />
      <!-- 添加地址 -->
      <div class="dzl">
          <p>您需要我们送到哪里？</p>
          <div class="dz" @click="toAddress">
              <span>添加收获地址</span>
              <van-icon name="arrow" :size="16" color="#8F8F8F"/>
          </div>
          <div class="xy">
            <input type="checkbox">
            <span>我已阅读并同意</span>
            <a href="#" >《造作物流及售后协议》</a>
          </div>
      </div>
      <!-- 价格明细 -->
      <div class="price-detail">
          <p>您的订单价格明细</p>
          <div class="price">
              <li>
                <span>商品合计</span>
                <span class="jg">￥4998</span>
                </li>
              <li>
                <span>运费</span>
                <span class="jg">请选择地址</span>
                </li>
              <li>
                <span>实付</span>
                <span class="jg">￥4998</span>
              </li>
          </div>
      </div>
      <!-- 是否开发票 -->
      <div class="invoice">
        <p>您是否需要发票？</p>
        <div class="fp van-hairline--top">
          <div class="one">
             <input type="checkbox">
             <span>我要开发票</span>
          </div>
          <van-icon name="arrow" color="#8F8F8F" :size="14" />
        </div>
      </div>
      <!-- 备注添加 -->
      <div class="increase-remarks">
        <p>如果还有别的需要，备注一句</p>
       <textarea ></textarea>
      </div>
      <!-- 商品清单 -->
      <div class="qdList">
        <p>您的商品清单</p>
        <div class="goodList">
            <div class="tophead">
              <span>单品</span>
            </div>
            <li>
              <div class="imgbx">

              </div>
              <div class="rightT">
                <p class="title">西竹躺椅</p>
                <p class="types">蓝绿</p>
                <p class="gettime">预计2020-09-03前发货</p>
                <div class="priceO">
                    <span>￥4998</span>
                    <span>x1</span>
                </div>
              </div>
            </li>
        </div>
      </div>
      <!-- 底部结算 -->
      <div class="js">
          <span>￥4998</span>
          <button>马上结算</button>
      </div>
  </div>
  
</template>
<script>
export default {
  data() {
    return {
      isColor:false
    }
  },
  methods: {
    onClickLeft(){
      this.$router.go(-1)
    },
    toAddress(){
      this.$router.push('/address')
    },
  },
}
</script>
<style lang="stylus">
.confirm-older
  width 100%
  background #F5F5F5
  z-index 10
  .van-icon
    color #000
  .van-nav-bar__title
    font-weight bold 
  .dzl
    margin-top 20px
    width 100%
    height 170px
    background #fff
    padding-top 26px
    padding-left 17px
    p
      font-size 20px
      color #232323
      font-weight bold
    .dz 
      width 327px
      height 34px
      background #fff
      margin-top 33px
      margin-left 4px
      display flex
      justify-content space-between
      color #8F8F8F
      border-bottom 1px solid #8F8F8F
      span 
        font-size 13px
    .xy
      margin-top 22px
      font-size 13px
      height 16px
      display flex
      justify-content flex-start
      align-items center
      input 
        width 16px
        height 16px
      input[type="checkbox"] 
        -webkit-appearance none /*清除复选框默认样式*/
        border 1px solid #000
        vertical-align middle
        width 18px
        height 18px
        float left
        margin-top 0
        margin-right 0 !important
        border-radius 0
      input[type="checkbox"]:checked 
        background url(../../assets/im/icon-3.png) /*复选框的背景图*/
        background-size 16px
      span 
        margin-left 11px
        color #000
      a
        color #418D59
        margin-left 18px
      
  .price-detail
    margin-top 10px
    background #fff
    width 100%
    height 168px
    padding-top 33px
    padding-left 16px
    p
      font-size 20px
      color #232323
      font-weight bold
    .price
      width 311px
      margin-left 4px
      display  flex
      flex-direction column
      margin-top 20px
      li
        display flex
        width 100%
        justify-content space-between
        font-size 13px
        margin-bottom 10px
        .jg
          color #8F8F8F
  .invoice
    width 100%
    height 130px
    margin-top 10px
    background #fff
    padding-top 20px
    padding-left 16px
    p
      font-size 20px
      color #232323
      font-weight bold
    .fp
      width 327px
      height 36px
      background #fff
      margin-top 19px
      margin-left 4px
      display flex
      justify-content space-between
      align-items flex-end
      color #8F8F8F
      .one
        display flex
        justify-content center
        align-items center
        color #000
        font-size 12px
        input 
          width 16px
          height 16px
        input[type="checkbox"] 
          -webkit-appearance none /*清除复选框默认样式*/
          border 1px solid #000
          vertical-align middle
          width 18px
          height 18px
          float left
          margin-top 0
          margin-right 0 !important
          border-radius 0
        input[type="checkbox"]:checked 
          background url(../../assets/im/icon-3.png) /*复选框的背景图*/
          background-size 16px
        span 
          margin-left 12px 
  .increase-remarks
    width 100%
    height 183px
    margin-top 10px
    background #fff
    padding-top 23px
    padding-left 17px
    p
      font-size 20px
      color #232323
      font-weight bold
    textarea
      width 325px
      height 76px
      margin-left 4px
      margin-top 23px
      border 1px solid #8F8F8F

  .qdList
    width 353px
    margin-top 33px
    margin-left 11px
    height 300px
    p
      font-size 20px
      color #232323
    .goodList
      margin-top 20px
      width 100%
      background #fff
      .tophead 
        width 100%
        height 43px
        background #fff
        font-size 17px
        color #232323
        padding-top 16px
        padding-left 13px
      li 
        width 100%
        height 121px
        border-top 1px solid #909090
        background #fff
        padding-left 25px
        padding-top 11px
        padding-bottom 20px
        display flex
        .imgbx 
          width 95px
          height 95px
          border 1px solid #ccc
        .rightT
          flex  1
          
          margin-left 11px
          display flex
          flex-direction column
          justify-content space-between
          .title
            font-size 15px
            font-weight bold
          .types
            font-size 13px
            color #909090
          .gettime  
            font-size 13px
            color #909090
          .priceO
            width 100%
            display flex
            font-size 13px
            justify-content space-between
            
  .js
    width 100%
    margin-top 18px
    height 55px
    position fixed
    left 0
    bottom 0
    background #fff
    display flex
    justify-content space-between
    align-items center
    padding-left 14px
    span 
      font-size 18px
      color #000
    button  
      width 116px
      height 100%
      background #000
      text-align center
      line-height 100%
      color #fff
      border 0
</style>