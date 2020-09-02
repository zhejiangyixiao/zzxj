<template>
  <div class="cart">
    <van-nav-bar title="购物车"  :border="false" fixed placeholder :left-arrow="isBack">
        <template #right>
            <span class="nav_right" v-if="!isEmpty">编辑</span>
        </template>
    </van-nav-bar>

    <section class="emptyCtx" v-if="isEmpty">
      <van-empty
          class="custom-image"
          image="https://img.yzcdn.cn/vant/custom-empty-image.png"
          description="购物车中没有商品"
        />
        <guesslike />
    </section>
    <!-- 购物车不为空显示以下部分 -->
    <section class="listCtx" v-else>

      <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
          <van-swipe-cell v-for="index in 9" :key="index">
            <van-checkbox v-model="checked" shape="square" checked-color="#07c160"/>
            <van-card
              num="2"
              desc="晨灰"
              title="云团床"
              thumb="https://img.yzcdn.cn/vant/cat.jpeg"
            >
              <template #price>
                <span>￥4599</span>
              </template>
            </van-card>
            <template #right>
              <van-button square text="删除" type="danger" class="delete-button" />
            </template>
          </van-swipe-cell>
      </van-pull-refresh>

      <!-- 下单结算 -->
      <div class="orderBar van-hairline--top" >
        <div class="left">
          <van-checkbox v-model="checked" shape="square" checked-color="#07c160">
            全选
          </van-checkbox>
          <span>￥4599</span>
        </div>
        <div class="right van-hairline--left" :class="{active:checked}">
          下单
        </div>
      </div>
    </section>

  </div>
</template>

<script>
import guesslike from '@/compoents/cart/guesslike';

export default {
  data() {
    return {
      // 购物车是否有东西，有无数据显示不同
      isEmpty:false,
      // 是否显示后退按钮，根据不同页面进入 isback动态变化 由上一个页面传入也行，到时候在修改
      isBack:false,
      refreshing: false,
      checked:false
    }
  },
  components:{
    guesslike,
  },
  methods: {
    onRefresh() {
      this.refreshing = true
      setTimeout(() => {
        this.$toast('刷新成功');
        this.isLoading = false;
        this.refreshing = false
      }, 1000);
    },
    loading(){
      
    }
  },
};
</script>

<style lang="stylus" scope>
.van-nav-bar__title
        font-weight 800
.cart
    background #f6f6f6
    .nav_right
        font-size 12px
        color #aaa
    .custom-image .van-empty__image 
      width: 90px;
      height: 90px;
    .van-nav-bar .van-icon
      color #aaa
    .van-button
      height 100%
    .van-card__thumb img
      border-radius 0
      // 有数据的购物车
    .listCtx
      .van-swipe-cell
        position relative
        .van-checkbox
          position absolute
          left 5px
          top 50%
          margin-top -10px
          width 20px
          height 20px
          z-index 99
        .van-card
          padding-left 35px
          background white
          margin-top 0
          margin-bottom 8px
      .orderBar
        height 50px
        width 100%
        position fixed
        bottom 50px
        left 0
        background white
        z-index 99
        font-size 13px
        display flex
        align-items center
        .left
          padding 0 5px
          width 60%
          height 100%
          display flex
          justify-content space-between
          align-items center
        .right
          height 100%
          width 40%
          display flex
          align-items center
          justify-content center
          background #ccc
          color white
        .active
          background black


</style>