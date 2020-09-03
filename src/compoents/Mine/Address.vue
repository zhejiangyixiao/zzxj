<template>
  <div class="addHad-container">
    <!-- 已有地址时-->
    <!-- 头部 -->
    <van-nav-bar title="管理新收货地址" left-arrow @click-left="onClickLeft" />

    <!-- 已经存在的地址信息 -->

    <div class="address-list" v-for="(item,index) in list" :key="index">
      <van-icon name="records" @click="toEdit" />
      <!-- <van-icon name="https://b.yzcdn.cn/vant/icon-demo-1126.png" /> -->
      <p class="addName">{{item.name}}</p>
      <p class="addtel">{{item.tel}}</p>
      <p class="addText">
        <span class="isDefault" v-if="item.isDefault">默认</span>
        <span class="addText">{{item.address}}</span>
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
          id: "1",
          name: "张三",
          tel: "13000000000",
          address: "浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室",
          isDefault: true
        },
        {
          id: "1",
          name: "张三",
          tel: "13000000000",
          address: "浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室",
          isDefault: false
        }
      ]
    };
  },
  components: {},

  computed: {},

  mounted() {
    // console.log(this.list[0].name);
  },

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
@import '../../assets/style/style.css';

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

