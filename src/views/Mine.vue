<template>
  <div class="Mine-container">
    <!-- 头部个人信息简介 -->
    <div class="selfMsg">
      <div class="imgBox">
        <!-- <van-image round width="80px" height="80px" src="https://img.yzcdn.cn/vant/cat.jpeg" /> -->
        <van-image round src="https://img.yzcdn.cn/vant/cat.jpeg" />
      </div>
      <div class="textBox">
        <p>188****5901</p>
        <i>icon</i>
        <span>新晋造作生活家</span>
        <van-icon name="arrow" />
        <van-icon name="comment-o" class="topRicon" />
      </div>
    </div>
    <!-- 中间图标分类 -->
    <!-- <van-grid>
      <van-grid-item icon="photo-o" text="文字" />
      <van-grid-item icon="photo-o" text="文字" />
      <van-grid-item icon="photo-o" text="文字" />
      <van-grid-item icon="photo-o" text="文字" />
      <van-grid-item icon="photo-o" text="文字" />
    </van-grid>-->
    <van-grid :border="false" :column-num="5">
      <van-grid-item v-for="(item,index) in gridList" :key="index">
        <van-image :src="item.img" />
        <p ass="gridText">{{item.text}}</p>
      </van-grid-item>
    </van-grid>

    <!-- 中间图片栏目 -->
    <van-image width="100%" height="100px" src="https://img.yzcdn.cn/vant/apple-1.jpg" />

    <!-- 下方单元格列表显示 -->
    <div class="mineMsg">
      <!-- <van-cell v-for="(item,index) in mineList" :key="index" :title="item" is-link value /> -->
      <van-cell title="会员中心" is-link value="内容" />
      <van-cell title="我的优惠券" is-link />
      <van-cell title="我的礼品卡" is-link />
      <van-cell title="我的收藏" is-link />
      <van-cell title="在线客服" is-link />
      <!-- <van-cell title="收货地址" is-link @click="toAddress" /> -->
      <van-cell title="收货地址" is-link to="/address" />
      <van-cell title="设置" is-link />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      gridList: [
        {
          img: "https://img.yzcdn.cn/vant/apple-3.jpg",
          text: "未付款"
        },
        {
          img: "https://img.yzcdn.cn/vant/apple-3.jpg",
          text: "已付款"
        },
        {
          img: "https://img.yzcdn.cn/vant/apple-3.jpg",
          text: "已完成"
        },
        {
          img: "https://img.yzcdn.cn/vant/apple-3.jpg",
          text: "其他渠道"
        },
        {
          img: "https://img.yzcdn.cn/vant/apple-3.jpg",
          text: "晒单中心"
        }
      ]
      // mineList: [
      //   "会员中心",
      //   "我的优惠券",
      //   "我的礼品卡",
      //   "我的收藏",
      //   "在线客服",
      //   "收货地址",
      //   "设置"
      // ]
    };
  },
  methods: {
    
  }
};
</script>
<style lang='stylus' scoped>
.Mine-container {
  padding: 20px 0 0 0;
}

.selfMsg {
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-around;

  // background-color: pink;
  .imgBox {
    width: 80px;
    height: 80px;

    .van-image {
      width: 100%;
      height: 100%;
    }
  }

  .textBox {
    width: 250px;
    height: 80px;
    font-size: 16px;
    margin: 0 10px;
    position: relative;

    .topRicon {
      position: absolute;
      right: 0;
      top: 0;
      font-size: 26px;
    }

    p {
      font-size: 24px;
      font-weight: bold;
      margin: 10px 0;
    }

    span {
      color: #666;
      margin-left: 10px;
    }
  }
}

.van-grid {
  margin: 20px 0;

  p {
    font-size: 14px;
    margin-top: 10px;
  }
}
</style>
