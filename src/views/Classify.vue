<template>
  <div class="classfiy-container">
    <div class="search">
      <!-- 搜索框 -->
      <input type="text" name id />
      <span>
        <img src="../assets/imgs/icon-fangdajing.png" alt />
      </span>
    </div>
    <div class="main">
      <!-- 左侧导航 -->
      <van-sidebar v-model="activeKey">
        <van-sidebar-item
          v-for="(item,index) in sidebarList"
          :key="index"
          :title="item.title"
          @click="sidebarclick(item.id)"
        />
      </van-sidebar>

      <!-- 右侧内容图 -->
      <!-- <ul class="rightlist">
        <li v-for="(item,index) in rightList" :key="index">
          <img :src="item.img" alt />
        </li>
      </ul> -->
      <van-grid :border='false'>
          <van-grid-item  
          :text="item.title" 
          v-for="(item,index) in classfiy_list" 
          :key="index" 
          :icon="item.imgUrl"
          :style="{width : type === '1' ? '100%' : '50%'}"
          style="flex-basis: unset"
          > 
          <!-- 给子元素添加样式 参数type（数据接口返回的的值）  做个条件判断 改变某几个css样式， -->
          </van-grid-item>
      </van-grid>
    </div>
  </div>
</template>

<script>
import img from "../assets/imgs/img-1.png";
import {mapState} from 'vuex';
export default {
  data() {
    return {
      activeKey: "",
      sidebarList: [
        {
          title: "爆款经典",
          id: "1"
        },
        {
          title: "全屋系列",
          id: "2"
        },
        {
          title: "沙发·椅凳",
          id: "3"
        }
      ],
      type:"1"
    };
  },

  components: {},

  computed: {},

  mounted() {
    this.$store.dispatch("getClassfiyData",{
        type:this.type
      });
  },

  methods: {
    sidebarclick(id) {
      console.log(id);
      this.$store.dispatch("getClassfiyData",{
        type:id
      });
    }
  },
  computed: {
    ...mapState(["classfiy_list"])
  },
};
</script>
<style lang='stylus' scoped>
// 搜索栏
.search {
  width: 344px;
  height: 41px;
  border-bottom: #000000 1px solid;
  margin: auto;
  position: relative;

  input {
    width: 344px;
    height: 40px;
    border: none;
  }

  span {
    display: inline-block;
    width: 17px;
    height: 19px;
    position: absolute;
    top: 10px;
    right: 10px;

    img {
      width: 100%;
    }
  }
}

// 分类左侧导航
.van-sidebar {
  margin-left: 6px;
}

// 小方块的大小和颜色
.van-sidebar-item--select::before {
  background-color: #000;
  width: 4px;
  height: 15px;
}

// 单个导航样式
.van-sidebar-item {
  font-size: 17px;
  background-color: #ffffff;
}

// 导航栏格子的大小
.van-sidebar {
  width: 100px;
}

// 给main设置弹性盒，
.main {
  display: flex;
}

// 右侧内容的样式
.rightlist {
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  margin-top: 17px;
  margin-left: 15px;

  li {
    width: 245px;
    height: 135px;
    margin-top: 3px;

    img {
      width: 245px;
      height: 135px;
    }
  }
}
</style>
