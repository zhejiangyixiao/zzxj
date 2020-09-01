<template>
  <div>
    <router-view></router-view>
    <van-tabbar v-model="active" route placeholder>
      <van-tabbar-item v-for="(item,index) in list" :key="index" :to="item.to">
        <span>{{ item.title}}</span>
        <template #icon="props">
          <img :src="props.active ? item.icon.active : item.icon.inactive" />
        </template>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
// 将图片存为变量
const icon01 = require("@/assets/logo.png")
export default {
  data() {
    return {
      active:0,
      // 图片路径未设置  后续进行设置 icon 是两张图片的话 需要设置变量
      list: [
        {
          to: "/home",
          title: "首页",
          icon: {
            active: icon01,
            inactive: "https://img.yzcdn.cn/vant/user-inactive.png"
          }
        },
         {
          to: "/findings",
          title: "发现",
          icon: {
            active: "https://img.yzcdn.cn/vant/user-active.png",
            inactive: "https://img.yzcdn.cn/vant/user-inactive.png"
          }
        },
        {
          to: "/classify",
          title: "分类",
          icon: {
            active: "https://img.yzcdn.cn/vant/user-active.png",
            inactive: "https://img.yzcdn.cn/vant/user-inactive.png"
          }
        },
        {
          to: "/cart",
          title: "购物车",
          icon: {
            active: "https://img.yzcdn.cn/vant/user-active.png",
            inactive: "https://img.yzcdn.cn/vant/user-inactive.png"
          }
        },
        {
          to: "/mine",
          title: "我的",
          icon: {
            active: "https://img.yzcdn.cn/vant/user-active.png",
            inactive: "https://img.yzcdn.cn/vant/user-inactive.png"
          }
        }
      ]
    };
  }
};
</script>

<style lang="stylus" scoped></style>