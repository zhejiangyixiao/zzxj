<template>
  <div class="classfiy-container">
    <div class="search" @click="showPopup">
      <!-- 搜索框 -->
      <input type="text" />
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
      <ul class="rightlist">
        <li v-for="(item,index) in classfiy_list" :key="index"
        :style="{width : type === '1' ? '100%' : '47%'}" @click="toclassifydetail"
        >
          <img :src="item.imgUrl" alt=""
          
          />
        </li>
      </ul>
      <!-- <van-grid :border='false'>
          <van-grid-item  
          v-for="(item,index) in classfiy_list" 
          :key="index" 
          :icon="item.imgUrl"
          :style="{width : type === '1' ? '100%' : '50%'}"
          style="flex-basis: unset"
          >  -->
          <!-- 给子元素添加样式 参数type（数据接口返回的的值）  做个条件判断 改变某几个css样式， -->
          <!-- </van-grid-item>
      </van-grid> -->
    </div>
    <!-- 弹出层 -->
    <van-popup v-model="show" position="bottom" :style="{ height: '100%' }"  closeable>
      <div class="search">
      <!-- 弹出层搜索框 -->
        <input type="text" />
        <span class="popup-fdj">
          <img src="../assets/imgs/icon-fangdajing.png" alt />
        </span>
    </div>
    <!-- 历史搜索 -->
    <div class="history">
      <div class="history-text">
        <strong>
          历史搜索
        </strong>
        <span>
          <van-icon name="delete" />
        </span>
        <div class="history-cont">
          <span>你好</span>
        </div>
      </div>
    </div>
    <!-- 热门搜索 -->
    <div class="history hot-search">
      <div class="history-text">
        <strong>
          热门搜索
        </strong>
        <div class="history-cont">
          <span>云杉天丝新色</span>
          <span>沙发</span>
          <span>新家卡</span>
          <span>美术馆系列</span>
          <span>桌几</span>
        </div>
      </div>
    </div>
    </van-popup>
  </div>
</template>

<script>
import img from "../assets/imgs/img-1.png";
import {mapState} from 'vuex';
export default {
  data() {
    return {
      activeKey: "",
      type:'1',
      show:false,
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
    };
  },

  components: {},

  computed: {},

  mounted() {
      //第一次点击分类的时候 默认请求第一索引的数据
    this.$store.dispatch("getClassfiyData",{
        type:this.type
      });
  },

  methods: {
    sidebarclick(id) {
        // 
      this.type=id
      console.log(id);
      //每次点击也要获取数据
      this.$store.dispatch("getClassfiyData",{
        type:this.type
      });
    },
    toclassifydetail(){
      this.$router.push('/')
    },
    showPopup(){
       this.show = true;
    }
  },
  computed: {
    classfiy_list(){
        return this.$store.state.classfiy_list
    }
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
.rightlist{
    width 250px
    display flex
    flex-wrap  wrap
    margin-top 17px
    margin-left 10px
    li{
        width 100%
        height 135px
        margin-top 7px
        margin-left 6px
        img {
            width 100%
            height 135px
        }
    }
  
}
// 弹出层样式
.van-popup .popup-fdj {
  position: absolute;
  left 10px
  top 10px
}
.van-popup input{
  width 300px
  float right 
}

.history
  margin-top 40px
  padding-left 17px
  padding-right 11px
  font-size 14px
  span
    float right 
    font-size 16px
  .history-cont
    margin-top 40px
    display flex
    flex-direction row
    flex-wrap wrap
    span 
      background: rgba(241, 242, 243, 0.95);
      border-radius: 2px;
      padding 8px
      display flex
      flex-wrap wrap
      margin-left 5px
      margin-bottom 5px


</style>
