<template>
  <div class="card-container">
    <!-- 我的礼品卡 -->
    <!-- 头部 -->
    <van-nav-bar title="我的礼品卡" left-arrow @click-left="onClickLeft" />
    <div class="input-box">
      <van-cell-group>
        <van-field v-model="value" label="输入卡号" placeholder=" 输入兑换码" />
      </van-cell-group>
      <button class="btn">兑换</button>
    </div>
    <img src="../assets/style/mine-img/myhead.png" alt class="noCard" />
    <p>还没有礼品卡</p>
  </div>
</template>

<script>
// 地址选择js文件引入
import Area from "../assets/script/mineArea";

export default {
  data() {
    return {
      value: ""
    };
  },

  components: {},

  computed: {},

  mounted() {},
  methods: {
    onClickLeft() {
      this.$router.push('/mine');
    }
  }
};
</script>
<style lang='stylus' scoped>
@import '../assets/style/mineStyle.css';

.card-container {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #fff;
  z-index: 10;
}

// 礼品卡号输入框
.van-cell {
  margin: 15px;
  width: 340px;
  height: 50px;
  padding: 0 60px 0 10px;
  border: 1px solid #ccc;
  position: relative;
  background: #f6f6f6;
}
// 清除下边框
// [class*=van-hairline]::after {
//   border-bottom : none;
// }

// 兑换按钮位置
.btn {
  position: absolute;
  right: 30px;
  top: 70px;
  background: #000;
  color: #ffffff;
  width: 60px;
  height: 25px;
  border: none;
  font-weight: bold;
  font-size: 14px;
}

// noCard
.noCard {
  display: block;
  margin: 100px auto 10px;
  width: 160px;
  height: 160px;
}

p {
  width: 100%;
  height: 40px;
  font-size: 16px;
  line-height: 40px;
  text-align: center;
  color: #aaa;
}
</style>

