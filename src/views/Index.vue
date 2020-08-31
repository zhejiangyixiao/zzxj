<template>
  <div>
    <router-view></router-view>
    <van-tabbar route placeholder active-color="black" inactive-color="#aaa">
      <van-tabbar-item
        replace
        :to="item.to"
        :icon="item.icon"
        v-for="(item,index) in list"
        :key="index"
      >{{item.title}}</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 图片路径未设置  后续进行设置
      list: [
        {
          to: "/home",
          title: "首页",
          icon: "home-o"
        },
        {
          to: "/classify",
          title: "分类",
          icon: "search"
        },
        {
          to: "/cart",
          title: "购物车",
          icon: "friends-o"
        },
        {
          to: "/mine",
          title: "我的",
          icon: "setting-o"
        }
      ]
    };
  }
};
</script>

<style lang="stylus" scoped></style>