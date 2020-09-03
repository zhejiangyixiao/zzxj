<template>
  <div class="detail-page" >
      <!-- 下滑显示的透明头部导航 -->
      <div class="opacity-nav" v-on:scroll.passive="onScroll" v-if="showAbs" :style="opacityStyle">
            <div class="opacity-nav-title">
                <span>造作星期天沙发</span>
                <van-tabs v-model="active" background='#F8F8F8' line-width=20px >
                    <van-tab title="商品"></van-tab>
                    <van-tab title="参数"></van-tab>
                    <van-tab title="组合"></van-tab>
                    <van-tab title="推荐"></van-tab>
                </van-tabs>
                
            </div>
        </div>
      <div class="box" >
      <!-- <div class="box" v-on:scroll.passive="onScroll"> -->
          <!-- 头部导航 -->
        <van-nav-bar
            :border='false'
            left-arrow
            z-index=10
            @click-left="onClickLeft"
            >
            <template #right>
                <van-icon name="ellipsis" size="18" />
            </template>
        </van-nav-bar>
        
        
        <!-- 商品轮播图 -->
        <van-swipe  @change="onChange">
            <van-swipe-item>1</van-swipe-item>
            <van-swipe-item>2</van-swipe-item>
            <van-swipe-item>3</van-swipe-item>
            <van-swipe-item>4</van-swipe-item>
            <template #indicator>
                <div class="custom-indicator">
                    {{ current + 1 }}/4
                </div>
            </template>
        </van-swipe>
        <!-- 商品名称 价格 -->
        <div class="message">
            <div class="title">
                <span>美术馆墙镜</span>
            </div>
            <div class="describe">
                <span>现代的丰饶，空间的画作</span>
            </div>
            <div class="money">
                <span class="renm">￥</span>
                <span class="price">899</span>
            </div>
        </div>
        <!-- 相关服务 -->
        <van-row>
            <van-col span="6"><van-icon name="passed" />世界设计</van-col>
            <van-col span="6"><van-icon name="passed" />欧标制作</van-col>
            <van-col span="6"><van-icon name="passed" />免费配送</van-col>
            <van-col span="6"><van-icon name="passed" />7日退款</van-col>
        </van-row>
        <!-- 已选规格 -->
          <div class="specification">
              <span class="specification-1">已选</span>
              <span>灰绿</span>
              <span>大款</span>
              <span class="specification-ellipsis"><van-icon name="ellipsis" /></span>
          </div>
      <!-- 商品导航 -->
      <van-goods-action left-arrow
        z-index=10>
          <span><van-goods-action-icon icon="chat-o" text="" /></span>
        <span><van-goods-action-icon icon="shop-o" text="" /></span>
        
        <van-goods-action-button color="#fff" type="danger" text="立即购买" 
        style="color: unset"
        />
        <van-goods-action-button color="#000" type="warning" text="加入购物车" />
      </van-goods-action>
  </div>

</template>

<script>
export default {
  data() {
    return {
        current: 0,
        active:'0',
        showAbs:false,
        opacityStyle:{
            opacity:1
        },
         showpop: false,
    };
  },

  components: {},

  computed: {},

  mounted() {
      document.addEventListener('scroll', () => {
         this.onScroll()
      }, true);
  },

  methods: {
      onClickLeft(){
          this.$router.go(-1)
      },
      onChange(index) {
      this.current = index;
    },
    onScroll(){
        console.log(document.documentElement.scrollTop);
        const top =document.documentElement.scrollTop;

        if(top>0){
            let opacity = top / 60;
            opacity = opacity > 1 ? 1:opacity;
            this.opacityStyle = {opacity};
            this.showAbs = true
        }else{
            this.showAbs = false
        }
    },
  },

};
</script>
<style lang='stylus' scoped>
.box{
    padding-bottom 50px
    padding-top 80px
    padding-left  10px
    padding-right  10px
}
.detail-page{
    
}
// 头部导航
.van-nav-bar{
    width 355px
    position fixed
    top 0
    background-color transparent
}
.van-nav-bar .van-nav-bar__left{
    height 20px
}
.van-icon-ellipsis{
    z-index 10

}
//透明的导航
.opacity-nav{
    width 375px
    height 80px
    background-color #F8F8F8
    z-index 5
    position fixed
    top 0
    
}
.opacity-nav-title{
    color #000000
    font-size 14px
    text-align center
    margin-top 15px

}
.van-tabs{
    margin-top 10px
}

// 轮播图样式
.custom-indicator {
    position: absolute;
    right: 5px;
    bottom: 5px;
    padding: 2px 5px;
    font-size: 12px;
    background: rgba(0, 0, 0, 0.1);
}
.van-swipe{
    height  200px
    background-color yellow 
}
// 商品名称 价格
.message{
    margin-top 20px
} 
.message .title{
    font-size 16px
    font-weight 900
}
.describe{
    font-size 14px
    color #000
    margin-top 10px
}
.money{
    margin-top 30px
    height 50px
    border-bottom  1px solid #ccc
    .renm{
        font-size 1px
    }
}
// 相关服务
.van-row{
    height 60px
}
.van-col{
    font-size 14px
    line-height 60px
}
.van-ceil{
  padding 0
}
// 商品规格
.specification{
    height 60px
    border-bottom  1px solid #ccc
    font-size 14px
    margin-top 5px
    span {
        line-height 60px
        margin-right  10px
    }
}
.specification .specification-1{
    margin-right  20px
    font-weight 900
}
.specification .specification-ellipsis{
    font-size 30px
    float right
    margin-top 5px
}
// 商品搭配
.match{
    height 60px
    font-size 14px
    margin-top 5px
    span {
        line-height 60px
        margin-right  10px
    }
}
.match .match-1{
    margin-right  20px
    font-weight 900
}
.match .match-match{
    float right
    font-size 20px
}
.match .match-2{
    background-color red
    color #ffffff
    font-size 8px
    padding 2px
}
// 图文介绍
.image-text{
    width 100%
    img{
        width 100%
    }
    span {
    }
}
.image-text-1{ 
    font-size 16px
    font-weight 900
}
.image-text-2{
    font-size 12px
    color #000
}

// 商品导航
.van-goods-action-button--last{
    border-radius 0
}
.van-goods-action-button--first{
    color #000
    border-radius 0
}
.van-goods-action-icon{
    border-right 1px solid #ccc
}
.van-goods-action{
    border-bottom  1px solid #ccc
}
</style>
