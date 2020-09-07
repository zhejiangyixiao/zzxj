<template>
  <div class="collect">
    <van-nav-bar title="我的收藏" left-arrow @click-left="onClickLeft" />
    <van-tabs v-model="active" color="#000" line-width="25px" sticky animated swipeable>
      <van-tab title="商品">
        <div class="collect-ul">
          <van-card
            price="3299.00"
            title="新深海沉睡床垫"
            thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
          />
          <van-card
            price="4296.00"
            title="云帛床"
            thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
          />
        </div>
      </van-tab>
      <van-tab title="设计师">
        <div class="box">
          <div class="none-img">
            <img src="../assets/style/mine-img/myhead.png" alt />
          </div>
          <p>还没有收藏的设计师</p>
        </div>
      </van-tab>
      <van-tab title="其他">
        <div class="box">
          <div class="none-img">
            <img src="../assets/style/mine-img/myhead.png" alt />
          </div>
          <p>还没有其他收藏</p>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    }
  }
};
</script>

<style lang="stylus" scoped>
.cf {
  overflow: hidden;
}

.fl {
  float: left;
}

.collect {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #f6f6f6;
}

.collect-li {
  padding: 15px 20px;
  margin-top: 5px;
  background-color: #fff;
}

.collect-img {
  width: 85px;
  height: 85px;
  background-color: red;
  margin-right: 15px;
}

.collect-txt h4 {
  font-size: 14px;
  margin-top: 20px;
  margin-bottom: 10px;
}

.collect-txt h6 {
  font-size: 14px;
}

.box {
  margin-top: 100px;
}

.none-img {
  width: 130px;
  height: 130px;
  border-radius: 50%;
  margin: 0 auto 20px;
}

.none-img img {
  width: 100%;
}

.box p {
  font-size: 12px;
  color: #a7a7a7;
  text-align: center;
}
.van-card{
    background-color: #fff;
    margin-top: 7px;
}
.van-card__title{
    padding-top: 15px;
    padding-left: 15px;
    font-size:14px;
    font-weight :700;
}
.van-card__price{
    padding-bottom: 20px;
    padding-left: 15px;
    font-size:14px;
    font-weight :700;
}
</style>