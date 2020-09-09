<template>
  <div class="talk-container">
    <!-- 客服中心 -->
    <!-- 头部 -->
    <van-nav-bar title="客服" left-arrow @click-left="onClickLeft" />
    <!-- 自动对话 -->
    <div class="autoTalk">
      <!-- <p class="talkTime">09/09</p> -->
      <p class="talkTime">{{currentTime}}</p>

      <div class="talkBox">
        <img src="../assets/style/mine-img/myhead.png" alt />
        <span>您好，欢迎您光临造作，请问有什么可以帮您？</span>
      </div>
    </div>
  </div>
</template>

<script>
// 地址选择js文件引入
import Area from "../assets/script/mineArea";

export default {
  data() {
    return {
      currentTime: ""
    };
  },

  components: {},

  computed: {},

  mounted() {
    // 会话框时间
    let d = new Date();
    let d1 = d.getDate() < 10 ? "0" + d.getDate() : d.getDate();
    let d2 = d.getMonth() < 10 ? "0" + d.getMonth() : d.getMonth();
    // this.currentTime = d.getDate() + "/" + (d.getMonth() + 1);
    this.currentTime = d1 + "/" + d2;
  },
  methods: {
    onClickLeft() {
      this.$router.push("/mine");
    }
  }
};
</script>
<style lang='stylus' scoped>
@import '../assets/style/mineStyle.css';

.talk-container {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #f6f6f6;
  z-index: 10;
}

.autoTalk {
  width: 100%;
  height: 120px;
  margin: 10px 0;

  // background: green;
  p {
    width: 100%;
    height: 20px;
    font-size: 16px;
    color: #cccccc;
    text-align: center;
    line-height: 30px;
  }

  .talkBox {
    width: 100%;
    height: 100px;
    // background: pink;
    display: flex;
    align-items: center;

    img {
      width: 50px;
      height: 50px;
      margin-right: 10px;
    }

    span {
      display: block;
      width: 280px;
      height: 60px;
      padding: 10px;
      background: #fff;
      border-radius: 10px;
      font-size: 16px;
      line-height: 24px;
    }
  }
}
</style>

