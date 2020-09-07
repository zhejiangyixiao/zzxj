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
            <van-swipe-item>
                <img src="../assets/style/index-img/detail-1.png" alt="">
            </van-swipe-item>
            <van-swipe-item>
                <img src="../assets/style/index-img/detail-1.png" alt="">
            </van-swipe-item>
            <van-swipe-item>
                <img src="../assets/style/index-img/detail-1.png" alt="">
            </van-swipe-item>
            <van-swipe-item>
                <img src="../assets/style/index-img/detail-1.png" alt="">
            </van-swipe-item>
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
                <span class="collect-btn">
                    <van-icon name="like-o"  @click="collect" v-if="likebtn"/>
                    <van-icon name="like"  color='red' class="red-collect" v-if="redbtn" @click="redcollect"/>
                </span>
                
                    
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
         <DetailSpecs/>
        <!-- 商品搭配 -->
        <div class="match">
            <span class="match-1">搭配</span>
            <span class="match-2">优惠</span>
            <span>设计师首选组合，最高可省￥253</span>
            <span class="match-match"><van-icon name="arrow" /></span>
        </div>
        <!-- list 图片加文案 -->
        <ul class="image-text">
            <li>
                <p>
                    <img src="../assets/style/index-img/detail-1.png" alt="">
                </p>
                <p>
                    <span class="image-text-1">现代的丰饶，空间的画作</span>
                </p>
                <p>
                    <span class="image-text-2">画框式精细木框，NCS油画色彩，大小装饰银镜</span>
                </p>
            </li>
        </ul>
      </div>
      <!-- 底部选择导航 -->
      <div class="footer-nav van-hairline--top">
          <span class="van-hairline--right" >
            <van-icon name="service-o"  :size="20" color="#000"/>
          </span>
          <span class="van-hairline--right">
            <van-icon name="cart-o" :size="20" color="#000"/>
          </span>
          <QuitBuy/>
          <AddCart/>
      </div>

  </div>

</template>

<script>
import DetailSpecs from '../compoents/detailPop/DetailSpecs'
import QuitBuy from '../compoents/detailPop/QuitBuy'
import AddCart from '../compoents/detailPop/AddCart'
import {Toast}from "vant";
export default {
  data() {
    return {
        current: 0,
        active:'0',
        showAbs:false,
        redbtn:false,
        likebtn:true,
        opacityStyle:{
            opacity:1
        },
    };
  },
  

  components: {
    DetailSpecs,
    QuitBuy,
    AddCart
  },

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
    collect(){
        this.redbtn=true;
        this.likebtn=false;
        Toast('收藏成功');
    },
    redcollect(){
        this.redbtn=false;
        this.likebtn=true;
        Toast('取消收藏成功');
    }

  },
}

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
.collect-btn{
    float right
}
.red-collect{
    float right
    z-index 10

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

// 底部选择导航
.footer-nav{
  width 100%
  height 49px
  position fixed
  bottom 0
  left 0
  background #FFF
  z-index 10 
  display flex
  align-items center
  span{
    display inline-block
    text-align center
    width 62px
    height 31px
  }
  

  

}

</style>
