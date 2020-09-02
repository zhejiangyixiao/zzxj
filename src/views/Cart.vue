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
  </div>
</template>

<script>
import guesslike from '@/compoents/cart/guesslike';

export default {
  data() {
    return {
      // 购物车是否有东西，有无数据显示不同
      isEmpty:true,
      // 是否显示后退按钮，根据不同页面进入 isback动态变化 由上一个页面传入也行，到时候在修改
      isBack:false,
    }
  },
  components:{
    guesslike,
  }
};
</script>

<style lang="stylus">
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
</style>