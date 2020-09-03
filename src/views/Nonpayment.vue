<template>
  <div class="non-payment">
      <!-- 头部导航 -->
       <van-nav-bar
            border
            title="未付款订单"
            left-arrow
            z-index=10
            @click-left="onClickLeft" />
        
        <van-empty description="暂无订单" />
        <div class="main" v-if="false">
            <!-- 订单号 -->
            <div class="odd">
                <span class="add-title">单号：</span>
                <span class="order-number">75277215894032674890</span>
                <span class="del-btn" @click="delclick">X</span>
            </div> 
            <!-- 收货人信息 -->
            <div class="personal-data">
                <div class="consignee">
                    <span class="consignee-1">收货人:</span>
                    <span class="name">钢铁侠/</span>
                    <span class="phone">15990170555</span>
                </div>
                <!-- 收货人地址 -->
                <div class="address">收货地址:浙江/杭州/江干/九堡</div>
            </div>
            <!-- 订单商品 -->
            <div class="goods">
                <van-card
                    num="1"
                    price="1999"
                    desc="蓝绿"
                    title="西竹躺椅"
                    thumb="https://img.yzcdn.cn/vant/ipad.jpeg">
                    
                    <template #tags>
                        <div plain type="danger" class="shipments">预计2020-10-03前发货</div>
                    </template>
                </van-card>
            </div>
            <!-- 实付 -->
            <div class="money">
                <span class="pay">实付:</span>
                <span>￥1999</span>
            </div>
            <van-button type="primary" block color='#000'>去支付</van-button>
        </div>
        
        

  </div>
</template>

<script>
import { Dialog } from 'vant';
export default {
    
  data() {
    return {};
  },

  components: {
      [Dialog.Component.name]: Dialog.Component,
  },

  computed: {},

  mounted() {
      
  },

  methods: {
      onClickLeft(){
          this.$router.go(-1)
      },
      delclick(){
         Dialog.confirm({
            title: '您确定要取消订单吗？',
            message: '取消订单后，如果您使用了优惠券，优惠券会自动退还到您的账户',
            })
            .then(() => {
                // on confirm
            })
            .catch(() => {
                // on cancel
            });
      }
  }
};
</script>
<style lang='stylus' scoped>
// 头部导航
.non-payment .van-nav-bar__title
    font-weight 900

// main 样式
.main
    padding-left 17px
    padding-right 28px
    .odd
        height  52px
        line-height 52px
        font-size 14px
        border-bottom 1px solid #D2D2D2;
        .del-btn
            float right 
            color #cccccc
    .personal-data
        color #ccc
        font-size 14px
        letter-spacing 2px
        
        .consignee
            margin-top 20px
        .address
            margin-top 10px
// 订单商品
.goods
    border-top 5px solid #F3F3F3;
    border-bottom 5px solid #F3F3F3;
    margin-top 20px
    .van-card
        margin 19px 0
        background-color #fff
        .van-card__title
            color #232323
            font-size: 15px;
        .van-card__desc
            font-size: 13px;
            color: #909090;
            margin-top 5px
        .van-card__thumb
            width 96px
            height 96px
.van-card__header
    position relative
    .van-card__bottom
        width 194px
        position absolute
        top 47px
        .van-card__num
            font-size: 13px;
            color #000
    .shipments
        position absolute
        top 77px    
        color #232323
        font-size 14px
        font-weight: 500;
// 实付
.money
    font-size 14px
    margin-top 19px
    margin-bottom 20px
    .pay
        color: #909090;
</style>
