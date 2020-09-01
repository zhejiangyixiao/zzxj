<template>
  <div class="index">
    <router-view></router-view>
    <van-tabbar v-model="active" route placeholder active-color="black" inactive-color="#747474">
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
const tab01 = require("@/assets/imgs/tab01.png")
const sel_tab01 = require("@/assets/imgs/sel-tab01.png")
const tab02 = require("@/assets/imgs/tab02.png")
const sel_tab02 = require("@/assets/imgs/sel-tab02.png")
const tab03 = require("@/assets/imgs/tab03.png")
const sel_tab03 = require("@/assets/imgs/sel-tab03.png")
const tab04 = require("@/assets/imgs/tab04.png")
const sel_tab04 = require("@/assets/imgs/sel-tab04.png")
const tab05 = require("@/assets/imgs/tab05.png")
const sel_tab05 = require("@/assets/imgs/sel-tab05.png")


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
            active: sel_tab01,
            inactive: tab01
          }
        },
         {
          to: "/findings",
          title: "发现",
          icon: {
            active: sel_tab02,
            inactive: tab02
          }
        },
        {
          to: "/classify",
          title: "分类",
          icon: {
            active: sel_tab03,
            inactive: tab03
          }
        },
        {
          to: "/cart",
          title: "购物车",
          icon: {
            active: sel_tab04,
            inactive: tab04
          }
        },
        {
          to: "/mine",
          title: "我的",
          icon: {
            active: sel_tab05,
            inactive: tab05
          }
        }
      ]
    };
  }
};
</script>

<style lang="stylus" scoped>
</style>