<template>
    <div class="showpop">
      <van-cell  @click="showPopup">
        <div class="leftTitle">
          <span class="boldfont">已选</span>
          <span >蓝绿</span>
        </div>
          <van-icon name="ellipsis" :size="30"/>
      </van-cell>
      <van-popup 
          v-model="show"
          position="bottom" 
          :style="{ height: '80%' }"
          closeable 
        >
          <div class="popupTop">
            <div class="imgbox">
                <img :src="specsList.imgurl" alt="">
            </div>
            <div class="zhPrice">
               <p>￥{{specsList.price}}</p>
              <div class="yh">优惠</div>
              <span>组合购买更优惠</span>
              <van-icon name="arrow" :size="13"/>
            </div>
          </div>
          <div class="middle">
            少部分地区目前物流受限，客服会在发货前跟您确认
          </div>
          <div class="addCut">
            <span @click="cutAmount">-</span>
            <input type="text" :value="count">
            <span  @click="addAmount">+</span>
          </div>
          <div class="color">
            <p>颜色</p>
            <div class="kuang"
                v-for="(item ,index) in specsList.Imgurl"
                :key="index"
                :class="{active:iscolor===index}"
                @click="changeColor(index)"
            >
              <img :src="item" alt="">
            </div>
          </div>
          <p class="tz">今天下单，将与2020-09-03前发货，大件家具会致电确认</p>
          <div class="btnList">
            <button class="mustbuy" @click="changeRoute">立即购买</button>
            <button class="addcart" @click="addcount">加入购物车</button>
          </div>
        </van-popup>
    </div>
</template>
<script>
import axios from 'axios';
export default {
  data() {
    return {
      show: false,
      specsList:[],
      iscolor:0,
      count:1,
    }
  },
  mounted() {
      axios.get('https://www.fastmock.site/mock/5691905aeae0f096be9afafb0fe7afdb/study/pop')
      .then( (response)=> {
          this.specsList= response.data.result
      })
      .catch(function (error) {
        // handle error
        console.log(error);
  })
  },
  methods: {
    showPopup() {
      this.show = true;
    
    },
    changeColor(i){
      this.iscolor = i
    },
    changeRoute(){
      this.$router.push('/confirmorder')
    },
    addcount(){
      this.show = false
      // 点击提示并且购物车数量+1
      setTimeout(()=>{
        this.$toast({
        message:'添加购物车成功',
        position:'bottom',
      })
      },1000)
      this.$emit('addCount',this.count)
    },
    addAmount(){
      this.count++;
    },
    cutAmount(){
      this.count--;
      if(this.count<=1){
        this.count = 1
      }
    }
  },
}
</script>
<style lang="stylus">
.showpop
  .van-cell
    width 100%
    height 68px
    border-top 7px solid #F5F5F5
    padding 0
    border-bottom 1px solid #EFEFEF
    .van-cell__value
      display flex
      align-items center
      justify-content space-between
      font-size 12px
      .boldfont
        font-weight bold
        margin-right 28px
  .van-popup
    width 100%
    display flex
    flex-direction column
    justify-content flex-start
    .van-icon
      font-size 16px
      color #000  
    .popupTop
      width 100%
      height 121px
      padding 20px 0 20px 16px
      border-bottom 7px solid #F0F0F0
      display flex
      .imgbox
        width 74px
        height 74px
        border 1px solid #ccc
        img 
          width 100%
          height 100%
      .zhPrice
        padding-top 24px
        margin-left 10px
        p
        font-size 13px
        color #E66A6A
        .yh
          width 29px
          height 17px
          background #E66A6A
          display inline-block
          text-align center
          line-height 17px
          font-size 10px
          color #FFF
          margin-top 10px
        
        span 
          font-size 15px
          color #000
          margin-left 12px
          margin-right 5px
    .middle
      margin-top 20px
      width 348px
      height 43px
      border-top 1px solid #909090
      border-bottom 1px solid #909090
      font-size 15px
      color #616161
      line-height 43px
      margin-left 12px
    .addCut
      width 134px
      height 40px
      border 1px solid #B8B8B8
      margin 20px 0 21px 16px
      display flex
      span
        width 39px
        height 100%
        text-align center
        
        line-height 140%
      input 
        width 56px
        height 100%
        border 0
        border-left 1px solid #B8B8B8
        border-right 1px solid #B8B8B8
        line-height 100%
        text-align center
    .color
      margin-left 16px
      p
      font-size 15px
      font-weight bold
      color #232323
      .kuang
        width 35px
        height 35px
        border 1px solid #909090
        float left
        margin-right 26px
        margin-top 13px
        margin-bottom 19px
        img   
          width 100%
          height 100%
      .active
        border 1px solid #000
        
     
      
        
    .tz
      font-size 13px
      color #616161
      margin-left 16px
    .btnList
      width 100%
      height 49px
      position absolute
      left 0
      bottom 0
      font-size 15px
      .mustbuy
        width 50%
        height 100%
        background #fff
        text-align center
        line-height 100%
        border 0
        border-top 1px solid #ccc
      .addcart
        width 50%
        height 100%
        background #000
        text-align center
        line-height 100%
        color #fff
        border 0
</style>
