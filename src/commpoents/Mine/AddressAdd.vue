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

    <van-popup v-model="show" position="bottom" :style="{ height: '40%' }">
      <van-area
        title="城市选择"
        :area-list="areaList"
        :columns-placeholder="['请选择', '请选择', '请选择']"
        @change="changeAddr"
        @cancel="cancelChoose"
        @confirm="chooseThis"
      />
    </van-popup>

    <van-button type="primary" size="large">保存并使用</van-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      tel: "",
      addCity: "",
      addText: "",
      show: false,
      checked: false,
      areaList: {
        province_list: {
          110000: "北京市",
          120000: "天津市"
        },
        city_list: {
          110100: "北京市",
          120100: "天津市",
        },
        county_list: {
          110101: "东城区",
          110102: "西城区",
          110105: "朝阳区",
          110106: "丰台区",
          120101: "和平区",
          120102: "河东区",
          120103: "河西区",
          120104: "南开区",
          120105: "河北区"
        }
      }
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
      this.showAddr =
        this.resAddr[0].name +
        "-" +
        this.resAddr[1].name +
        "-" +
        this.resAddr[2].name;
      console.log(this.resAddr, "即将传给后端的省市区信息");
      console.log(this.showAddr);
      this.addCity = this.showAddr;
    },
    cancelChoose() {
      console.log(1);
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
@import '../../assets/style/style.css';

.add-container {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #eee;
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
  background-color: #eee;
}

.van-checkbox p {
  font-size: 16px;
  color: #646566;
}

.van-button {
  background-color: #000;
  border: #666;
  color: #fff;
  font-size: 18px;
  position: absolute;
  bottom: 0;
}
</style>

