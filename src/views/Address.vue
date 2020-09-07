<template>
  <div class="addHad-container">
    <!-- 已有地址时-->
    <!-- 头部 -->
    <van-nav-bar title="管理新收货地址" left-arrow @click-left="onClickLeft" />

    <!-- 已经存在的地址信息 -->

    <div class="address-list" v-for="(item,index) in list" :key="index" @click="toEdit">
      <van-icon name="records" />
      <p class="addName">{{item.address_username}}</p>
      <p class="addtel">{{item.address_phone}}</p>
      <p class="addText">
        <span class="isDefault" v-if="item.isDefault==='0'">默认</span>
        <span class="addText">{{item.address_area}}{{item.address_detail}}</span>
      </p>
    </div>

    <!-- 添加地址按钮，跳转添加路由页面 -->
    <van-button type="primary" size="large" to="/addressAdd">添加新收货地址</van-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          address_id: 1,
          address_username: "张三",
          address_phone: "121646654656",
          address_area: "浙江杭州江干",
          address_detail: "九和路7号",
          isDefault: "0"
        }
      ]
    };
  },
  components: {},

  computed: {},

  mounted() {},

  methods: {
    onClickLeft() {
      // this.$router.go(-1);
      this.$router.push("/mine");
    },
    toEdit() {
      this.$router.push("/addressAdd");
    }
  }
};
</script>
<style lang='stylus' scoped>
@import '../assets/style/mineStyle.css';

.addHad-container {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #eee;
  z-index: 10;
}

.address-list {
  width: 100%;
  background: #fff;
  margin-top: 10px;
  color: #000;
  padding: 10px;
  position: relative;

  .van-icon {
    position: absolute;
    right: 15px;
    top: 10px;
  }

  p {
    font-size: 16px;
    margin: 10px 0;
    font-family: PingFang;
    font-weight: 800;
  }

  .addText {
    width: 100%;
    display: flex;
    align-items: center;
  }

  span {
    font-size: 14px;
    font-weight: normal;
    margin: 0 5px;
  }

  .isDefault {
    display: block;
    width: 40px;
    height: 18px;
    background: #000;
    color: #ffffff;
    text-align: center;
  }
}

.van-button {
  width: 340px;
  height: 51px;
  background-color: #000;
  border: #666;
  position: absolute;
  bottom: 33px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 15px;
  font-family: PingFang SC;
  font-weight: 500;
  color: #FEFEFE;
  line-height: 20px;
}
</style>

