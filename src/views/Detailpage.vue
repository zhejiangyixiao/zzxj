<template>
  <div class="detail-page">
      <div class="box">
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
    };
  },

  components: {},

  computed: {},

  mounted() {},

  methods: {
      onClickLeft(){
          this.$router.go(-1)
      },
      onChange(index) {
      this.current = index;
    },
  }
};
</script>
<style lang='stylus' scoped>
.box{
    padding-bottom 50px
}
.detail-page{
    padding-left  10px
    padding-right  10px
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
