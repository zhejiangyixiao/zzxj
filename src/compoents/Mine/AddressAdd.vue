<template>
  <div class="add-container">
    <!-- 添加地址页面 -->
    <!-- 头部 -->
    <van-nav-bar title="添加新收货地址" left-arrow @click-left="onClickLeft" />

    <!-- 输入地址信息 引得我改不好样式，自己写的-->

    <van-cell-group>
      <van-field v-model="name" label="收货人" placeholder="请输入姓名" />
      <van-field v-model="tel" label="联系方式" placeholder="请输入手机号" />
      <van-cell-group>
        <van-field
          v-model="addCity"
          label="收货地区"
          right-icon="arrow"
          placeholder="省份/城市/区县"
          @click="chooseCity"
        />
      </van-cell-group>
      <van-field v-model="addText" label="详细地址" placeholder="如街道、校区、楼栋号、门牌号" style="height:80px" />
      <van-checkbox v-model="checked" shape="square" checked-color="green">
        <p>设为默认地址</p>
      </van-checkbox>
    </van-cell-group>

    <van-popup v-model="show" position="bottom" :style="{ height: '309px' }">
      <van-area
        :area-list="areaList"
        @change="changeAddr"
        @cancel="cancelChoose"
        @confirm="chooseThis"
      />
    </van-popup>

    <van-button type="primary" size="large" to="/address">保存并使用</van-button>
  </div>
</template>

<script>
// 地址选择js文件引入
import Area from "../../assets/script/mineArea";

export default {
  data() {
    return {
      name: "",
      tel: "",
      addCity: "",
      addText: "",
      show: false,
      checked: false,
      areaList: Area
    };
  },

  components: {},

  computed: {},

  mounted() {},

  methods: {
    changeAddr(picker) {
      //value=0改变省，1改变市，2改变区
      let val = picker.getValues();
      this.resAddr = val;
    },
    //选好地址后点击确定
    chooseThis() {
      this.show = false;
      //选中地址成功后回显
      this.addCity =
        this.resAddr[0].name +
        "-" +
        this.resAddr[1].name +
        "-" +
        this.resAddr[2].name;
      console.log(this.resAddr, "即将传给后端的省市区信息");
    },
    cancelChoose() {
      this.show = false;
    },
    onClickLeft() {
      this.$router.go(-1);
    },
    chooseCity() {
      this.show = true;
    }
  }
};
</script>
<style lang='stylus' scoped>
@import '../../assets/style/mineStyle.css';

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

.van-field {
  background-color: #fff;
  margin: 10px 0;
}

.van-checkbox {
  padding: 15px;
  background: #F6F6F6;
}

.van-checkbox p {
  width: 82px;
  height: 13px;
  font-size: 13px;
  font-family: PingFang SC;
  font-weight: bold;
  color: #D0D0D0;
  line-height: 20px;
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

