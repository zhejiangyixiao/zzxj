<template>
  <div class="cart">
    <van-nav-bar title="购物车"  :border="false" fixed placeholder>
        <template #right>
            <span class="nav_right">编辑</span>
        </template>
    </van-nav-bar>

    <section class="content">

    </section>
  </div>
</template>

<script>
export default {};
</script>

<style lang="stylus">
.van-nav-bar__title
        font-weight 800
.cart
    background #f6f6f6
    .nav_right
        font-size 12px
        color #aaa
</style>