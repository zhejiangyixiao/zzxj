<template>
  <div class="Mine-container">
    <!-- 头部个人信息简介 -->
    <div class="selfMsg">
      <div class="imgBox" @click="toMymsg">
        <img src="../assets/style/mine-img/myhead.png" />
      </div>
      <div class="textBox">
        <!-- 应该是获取的用户信息用户名 -->
        <p>188****5901</p>
        <p class="min-text">
          <img src="../assets/style/mine-img/zo.png" alt width="23" height="15" />
          <span>新晋造作生活家</span>
          <van-icon name="arrow" size="11px" />
        </p>
        <van-icon name="comment-o" class="topRicon" />
      </div>
    </div>
    <!-- 中间图标分类 -->
    <!-- <van-grid>
      <van-grid-item  name="../../assets/style/mine-img/icon-1.png" text="文字" />
      <van-grid-item icon="photo-o" text="文字" />
      <van-grid-item icon="photo-o" text="文字" />
      <van-grid-item icon="photo-o" text="文字" />
      <van-grid-item icon="photo-o" text="文字" />
    </van-grid>-->
    <van-grid :border="false" :column-num="5">
      <van-grid-item v-for="(item,index) in gridList" :key="index" :to="item.towhere">
        <img :src="item.img" alt />
        <p class="gridText">{{item.text}}</p>
      </van-grid-item>
    </van-grid>

    <!-- 中间图片栏目 -->
    <img src="../assets/style/mine-img/img.png" alt class="bigImg" />

    <!-- 下方单元格列表显示 -->
    <div class="mineMsg">
      <van-cell title="会员中心" is-link value="1" />
      <van-cell title="我的优惠券" is-link to="/discount" />
      <van-cell title="我的礼品卡" is-link  />
      <van-cell title="我的收藏" is-link to="mineCollect"/>
      <van-cell title="在线客服" is-link />
      <van-cell title="收货地址" is-link to="/address" />
      <van-cell title="设置" is-link to="/mineset" />
    </div>
  </div>
</template>

<script>
import icon1 from "../assets/style/mine-img/icon-1.png";
import icon2 from "../assets/style/mine-img/icon-2.png";
import icon3 from "../assets/style/mine-img/icon-3.png";
import icon4 from "../assets/style/mine-img/icon-4.png";
import icon5 from "../assets/style/mine-img/icon-5.png";
export default {
  data() {
    return {
      gridList: [
        {
          img: icon1,
          text: "未付款",
          towhere: "/nonpayment"
        },
        {
          img: icon2,
          text: "已付款",
          towhere: "/hadpay"
        },
        {
          img: icon3,
          text: "已完成",
          towhere: "/paydone"
        },
        {
          img: icon4,
          text: "其他渠道"
        },
        {
          img: icon5,
          text: "晒单中心"
        }
      ]
    };
  },
  methods: {
    toMymsg(){
      this.$router.push('/mineData');
    }
  }
};
</script>
<style lang='stylus' scoped>
.Mine-container {
  padding: 44px 0 0 0;
}

.selfMsg {
  width: 100%;
  height: 63px;
  padding: 0 10px;
  display: flex;
  align-items: center;
  justify-content: space-around;

  .imgBox {
    width: 63px;
    height: 63px;

    img {
      width: 100%;
      height: 100%;
    }
  }

  .textBox {
    width: 250px;
    height: 63px;
    padding: 5px 0;
    font-size: 16px;
    margin: 0 10px;
    position: relative;

    p {
      width: 147px;
      height: 17px;
      font-size: 22px;
      font-family: PingFang SC;
      font-weight: bold;
      color: #010101;
      line-height: 20px;
      margin-bottom: 20px;
    }

    .topRicon {
      position: absolute;
      right: 0;
      top: -10px;
      font-size: 26px;
    }

    .min-text {
      display: flex;
      align-items: center;

      span[data-v-4e42760d] {
        color: #666;
        margin-left: 10px;
        font-size: 13px;
        font-family: PingFang SC;
        font-weight: 500;
        color: #010101;
        line-height: 15px;
      }
    }

  }
}

.van-grid {
  margin: 20px 0;
  display: flex;
  align-items: center;
  justify-content: space-around;

  img {
    width: 27px;
    height: 27px;
  }

  .gridText {
    // width: 45px;
    height: 11px;
    font-size: 11px;
    font-family: PingFang SC;
    font-weight: 400;
    color: #000000;
    line-height: 20px;
    margin-top: 10px;
  }
}

.bigImg {
  width: 100%;
  height: 114px;
}

.van-cell__title {
  width: 57px;
  height: 13px;
  font-size: 14px;
  font-family: PingFang SC;
  font-weight: bold;
  color: #000000;
  line-height: 20px;
}

.van-cell__right-icon {
  color: #000;
}

.van-cell__value span {
  float: right;
  display: block;
  width: 18px;
  height: 17px;
  background: #E66A6A;
  border-radius: 50%;
  text-align: center;
  line-height: 17px;
  color: #fff;
}
</style>
