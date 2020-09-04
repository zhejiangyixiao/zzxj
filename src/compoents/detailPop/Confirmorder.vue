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
          <div class="dz van-hairline--top-bottom"></div>

      </div>
      <!-- 价格明细 -->
      <div class="price-detail">

      </div>
      <!-- 是否开发票 -->
      <div class="invoice">

      </div>
      <!-- 备注添加 -->
      <div class="increase-remarks">

      </div>
      <!-- 商品清单 -->
      <div class="qdList">
        <p>您的商品清单</p>
        <div class="goodList">

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
  methods: {
    onClickLeft(){
      this.$router.go(-1)
    }
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
        width 315px
        height 34px
        background pink
  .price-detail
    margin-top 10px
    background #fff
    width 100%
    height 168px
  .invoice
    width 100%
    height 130px
    margin-top 10px
    background #fff
  .increase-remarks
    width 100%
    height 183px
    margin-top 10px
    background #fff
  .qdList
    width 353px
    margin-top 33px
    margin-left 11px
    .goodList
      margin-top 20px
      width 100%
      height 100px
      background pink
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