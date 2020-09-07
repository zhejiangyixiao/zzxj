<template>
  <div class="discount-container">
    <!-- 添加地址页面 -->
    <!-- 头部 -->
    <van-nav-bar title="我的优惠券" left-arrow @click-left="onClickLeft" />

    <!-- 标签头 -->
    <van-tabs animated>
      <van-tab title="未使用">
        <div class="input-box">
          <input type="text" placeholder="请输入优惠券兑换码" class="oInput" />
          <button class="btn">兑换</button>
        </div>
        <img src="../assets/style/mine-img/myhead.png" alt class="noCard" />
        <p>还没有优惠券</p>
      </van-tab>
      <van-tab title="已使用">
        <img src="../assets/style/mine-img/myhead.png" alt class="noCard" />
        <p>还没有优惠券</p>
      </van-tab>
      <van-tab title="已过期">
        <img src="../assets/style/mine-img/myhead.png" alt class="noCard" />
        <p>还没有优惠券</p>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
// 地址选择js文件引入
import Area from "../assets/script/mineArea";

export default {
  data() {
    return {
      checked: true
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

.discount-container {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #fff;
  z-index: 10;
}

.input-box {
  width: 100%;
  display: flex;
}

// 输入优惠券号输入框
.oInput {
  flex: 1;
  margin: 15px;
  width: 370px;
  height: 50px;
  padding: 0 60px 0 10px;
  border: 1px solid #ccc;
  position: relative;
  background: #f6f6f6;
}

// input框placeholder默认颜色修改
input::-ms-input-placeholder {
  color: #aaa;
  font-size: 14px;
}

input::-webkit-input-placeholder {
  color: #aaa;
  font-size: 14px;
}

input::-moz-placeholder {
  color: #aaa;
  font-size: 14px;
}

// 兑换按钮位置
.btn {
  position: absolute;
  right: 30px;
  top: 27px;
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

