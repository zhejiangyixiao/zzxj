<template>
  <div class="findings">
    <van-nav-bar
      title="发现"
      :border="false"
      fixed
      placeholder
      z-index="10"
    />
    <div class="tabbar">
      <van-tabs class="van-hairline--bottom" @click="onClick" v-model="active">
            <van-tab 
            v-for="(item,index) in topNav" 
            :title="item" 
            :key="index"
            :border="true"
            >
            </van-tab>
      </van-tabs>
    </div>
    
    <van-swipe class="my-swipe"   ref="banner" @change="onChange" :loop="false" :show-indicators="false" stop-propagation	>
      <van-swipe-item>
        <!-- 精选晒单 -->
        <FeaturedList/>
      </van-swipe-item>
      <van-swipe-item>
        <!-- 灵感 -->
           <inspiration />
      </van-swipe-item>
      <van-swipe-item>

      </van-swipe-item>
      <van-swipe-item>
        
        </van-swipe-item>  
      <van-swipe-item>
        
        </van-swipe-item>  
      <van-swipe-item>
        
        </van-swipe-item>  
    </van-swipe>


    
  </div>
</template>
<script>
import inspiration from '@/compoents/findings/inspiration';
import FeaturedList from '@/compoents/findings/FeaturedList';
export default {
  data() {
    return {
      topNav:['精选晒单','灵感','品牌','实体店','媒体报道','设计师'],
      active:0
    }
  },
  methods: {
    onChange(index){
      this.active = index
    },
    onClick(){
      this.$refs.banner.swipeTo(this.active)
    },

  },
  components:{
    FeaturedList,
    inspiration,
  }
 
}
</script>
<style lang="stylus">
.findings
  display flex
  flex-direction column
  justify-content flex-start
  align-items center
  .van-nav-bar__title
    font-weight bold
    font-size 16px
    color #000
  .tabbar
    position fixed
    top 46px
    left 0
    z-index 10
    .van-tabs
      width 100%
      margin-bottom 23px
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
  .my-swipe
    width 355px
    .van-swipe-item
      margin-top 51px
</style>