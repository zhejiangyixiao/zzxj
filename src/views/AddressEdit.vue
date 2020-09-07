<template>
  <div class="add-container">
    <!-- 修改地址页面 -->
    <!-- 头部 -->
    <van-nav-bar
      title="编辑我的收货地址"
      left-arrow
      right-text="删除"
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />

    <AddrMsg />
  </div>
</template>

<script>
import AddrMsg from "../compoents/Mine/AddrMsg";

export default {
  data() {
    return {};
  },

  components: {
    AddrMsg
  },

  computed: {},

  mounted() {},

  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    onClickRight() {
      this.$dialog
        .confirm({
          title: "提示",
          message: "您确定要删除该收货地址吗？"
        })
        .then(() => {
          // on confirm
          this.$router.push("/address");
        })
        .catch(() => {
          // on cancel
        });
    }
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

.add-container .van-nav-bar .van-icon {
  color: black;
}

</style>

