<template>
  <div class="findings">
    <van-nav-bar
      title="发现"
      :border="false"
    />
    <van-tabs class="van-hairline--bottom">
      <van-tab 
      v-for="(item,index) in topNav" 
      :title="item" 
      :key="index"
      :border="true"

      >
      </van-tab>
    </van-tabs>

  </div>
</template>
<script>
export default {
  data() {
    return {
      topNav:['精选晒单','灵感','品牌','实体店','媒体报道','设计师']
    }
  },
}
</script>
<style lang="stylus">
.findings
  .van-nav-bar__title
    font-weight bold
    font-size 16px
    color #000
  .van-tabs
    padding-right 15px
    .van-tabs__wrap
      .van-tabs__nav
        padding 0 0 15px 20px
        .van-tab 
          padding 0
          margin-right 47px
        .van-tabs__line
            background-color #000  
          .van-tab__text
            font-size 13px
            color #000
            font-weight bold
</style>