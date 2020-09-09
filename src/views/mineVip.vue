<template>
  <div class="vip-container">
    <!-- 会员中心 -->
    <!-- 头部 -->
    <van-nav-bar title="会员中心" left-arrow @click-left="onClickLeft" />

    <!-- center-top -->
    <div class="welcomeMe">
      <div class="wel_l">
        <img src="../assets/style/mine-img/myhead.png" alt />
        <p>188****5901</p>
      </div>
      <div class="wel_r">
        <h2>欢迎</h2>
        <p>加入造作会员</p>
        <a href="javascript:;">了解会员体系</a>
      </div>
    </div>
    <!-- 会员特权 -->
    <h3>成为会员，享受丰富特权</h3>

    <div class="vipCan">
      <div class="canBox" v-for="(item,index) in vipCanList" :key="index">
        <van-icon :name="item.iconname" color=" rgb(230, 72, 72)" />
        <p>{{item.text}}</p>
        <em>{{item.text2}}</em>
      </div>
    </div>

    <van-button type="primary" size="large">一步成为会员</van-button>
  </div>
</template>

<script>
// 地址选择js文件引入
import Area from "../assets/script/mineArea";

export default {
  data() {
    return {
      checked: true,
      vipCanList: [
        {
          iconname: "medal",
          text: "￥16000升级礼",
          text2: "多档优惠低至9折"
        },
        {
          iconname: "gift",
          text: "￥400生日礼",
          text2: "价值￥400实物礼+全场88折通用券"
        },
        {
          iconname: "vip-card",
          text: "专属会员价",
          text2: "精选商品专属优惠"
        },
        {
          iconname: "photograph",
          text: "5%晒单返券",
          text2: "成交价5%全场券奖励"
        },
        {
          iconname: "bell",
          text: "会员惊喜",
          text2: "不定期会员活动 给你惊喜"
        },
        {
          iconname: "map-marked",
          text: "线下活动",
          text2: "线下活动优先受邀"
        }
      ]
    };
  },

  components: {},

  computed: {},

  mounted() {},
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    }
  }
};
</script>
<style lang='stylus' scoped>
@import '../assets/style/mineStyle.css';

.vip-container {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #fff;
  z-index: 10;
 
}

h3 {
  font-size: 18px;
  font-weight: 400;
  text-align: center;
  margin-bottom: 20px;
  
}

.vipCan {
  width: 100%;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;

  .canBox {
    width: 40%;
    height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .van-icon {
      font-size: 32px;
    }

    p {
      font-size: 14px;
      font-weight: 400;
      margin: 5px 0;
      line-height: 20px;
    }

    em {
      font-size: 12px;
      color: #ccc;
      font-weight: normal;
      width: 120px;
      text-align: center;
    }
  }
}

.welcomeMe {
  width: 100%;
  height: 170px;
  padding: 0 25px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .wel_r {
    width: 200px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    padding: 30px 0;

    h2 {
      font-size: 32px;
      color: rgb(230, 72, 72);
      font-weight: 500;
    }

    p {
      font-size: 18px;
      line-height: 20px;
      margin: 10px 0;
    }

    a {
      width: 140px;
      height: 30px;
      border: 1px solid #eee;
      font-size: 14px;
      line-height: 30px;
      text-align: center;
    }
  }

  .wel_l {
    width: 100px;
    height: 100%;
    padding: 30px 0;
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
      width: 80px;
      height: 80px;
      margin-bottom: 10px;
    }

    p {
      font-size: 16px;
      font-weight: 500;
    }
  }
}

.van-button {
  width: 340px;
  height: 51px;
  background-color: #000;
  background-color: rgb(230, 72, 72);
  border: #666;
  position: absolute;
  bottom: 33px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 15px;
  font-family: PingFang SC;
  font-weight: 600;
  color: #FEFEFE;
  line-height: 20px;
}
</style>

