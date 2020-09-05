<template>
  <div class="jxsd">
      <!-- 头部选项类型块 -->
      <ul class="topNavList">
        <li
          v-for="(item,index) in list"
          :key="index"
          :class="{active:isActive ===index}"
          @click="changeStyle(index)"
        >{{item}}</li>
      </ul>
      <!-- 中间晒单 -->
      <div class="sdList">
        <ul class="ContentList">
            <li  v-for="(item,index) in listLeft" :key="index">
              <img :src="item.imgurl" alt="">
              <p>{{item.assess}}</p>
              <div class="tx">
                  <div class="txfz">
                    <img :src="item.tx" alt="">
                  </div>
                  <span>{{item.name}}</span>
              </div>
              <span class="dd">{{item.dd}}</span>
            </li>
        </ul>
        <ul class="ContentList">
          <li v-for="(item,index) in listRight" :key="index">
             <img :src="item.imgurl" alt="">
              <p>{{item.assess}}</p>
              <div class="tx">
                  <div class="txfz">
                    <img :src="item.tx" alt="">
                  </div>
                  <span>{{item.name}}</span>
              </div>
              <span class="dd">{{item.dd}}</span>
          </li>
        </ul>
      </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data() {
    return {
      list: ["全部", "沙发", "椅凳", "柜架", "床·床具", "桌几"],
      isActive: 0,
      listLeft:[],
      listRight:[]
    };
  },
  methods: {
    changeStyle(i) {
      this.isActive = i;
    }
  },
  mounted() {
    axios.get('https://www.fastmock.site/mock/5691905aeae0f096be9afafb0fe7afdb/study/list')
  .then( (response)=> {
      this.listLeft = response.data.result.resultLeft
      this.listRight =response.data.result.resultRight
  })
  }
};
</script>
<style lang="stylus">
.jxsd 
  width 100%
  overflow hidden
  margin-top 10px
  .topNavList 
    height 27px;
    width 500px
    display: inline-flex;
    flex-wrap nowrap
    li 
      height: 27px;
      font-size: 11px;
      background: #EEE;
      line-height: 27px;
      padding: 0 13px;
      margin-right: 13px;
    .active 
      color: #FAFAFA;
      background: #418E5A;
  .sdList 
    display flex
    justify-content space-between
    width 355px
    margin-top 22px
    .ContentList 
      display flex
      flex-direction column
      li 
        width 170px
        position relative
        color #000
        margin-bottom 43px
        img 
          width 100%
        p 
          width 160px
          word-break break-all
          text-overflow ellipsis
          line-height 25px
          display -webkit-box
          -webkit-box-orient vertical
          -webkit-line-clamp: 2 // 这里是超出几行省略
          overflow hidden
          font-size 13px
          margin-bottom 35px
        .tx 
          position absolute
          left 0
          bottom 0
          display flex
          justify-content flex-start
          align-items center
          .txfz 
            width: 16px;
            height: 16px;
            display flex
            justify-content center
            align-items center
            display: block;
            img 
              width 100%
              height 100%
              display block
          span 
            font-size 13px
            color #323232
            line-height 13px
            margin-left 7px
            display inline-block
            margin-top -3px
            width 90px
            text-overflow ellipsis
            white-space nowrap
            overflow hidden
        .dd 
          display inline-block
          position absolute
          right 0
          bottom 0
          font-size 13px
          color #A3A3A3
 
</style>