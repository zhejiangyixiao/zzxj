<template>
  <div class="add-container">
    <!-- 添加地址页面 -->
    <!-- 头部 -->
    <van-nav-bar title="设置" left-arrow @click-left="onClickLeft" />

    <!-- options -->
    <van-cell title="个人资料" is-link to="/mineData" />
    <van-cell title="账户安全" is-link />
    <van-cell title="消息推送提醒">
      <template #right-icon>
        <van-switch v-model="checked" active-color="green" size="22" />
      </template>
    </van-cell>
    <van-cell title="清除图片缓存" is-link value="36.16MB" />
    <van-cell title="问题反馈" is-link />
    <van-cell title="推荐给朋友" is-link />
    <van-cell title="关于我们" is-link />

    <van-button type="primary" size="large" to="/login">退出登录</van-button>
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
    },
  }
};
</script>
<style lang='stylus' scoped>
@import '../assets/style/mineStyle.css';

.add-container {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #F6F6F6;
  z-index: 10;
}

.van-cell__title {
  font-size: 13px;
  font-family: PingFang;
  font-weight: 800;
  color: #232323;
  line-height: 20px;
}

.van-icon, .van-cell__value span {
  color: #232323;
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

