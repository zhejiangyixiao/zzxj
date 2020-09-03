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
            <li >
              <img src="https://dss3.baidu.com/-rVXeDTa2gU2pMbgoY3K/it/u=2220142200,2504523423&fm=202&mola=new&crop=v1" alt="">
              <p>做工精致的美术馆陈列柜，颜色非常漂亮！放在餐倒计时卡的接口</p>
              <div class="tx">
                  <div class="txfz"></div>
                  <span>潘潘</span>
              </div>
              <span class="dd">重庆</span>
            </li>
            <li >
              <img src="https://dss3.baidu.com/-rVXeDTa2gU2pMbgoY3K/it/u=2220142200,2504523423&fm=202&mola=new&crop=v1" alt="">
              <p>做工精致的美术馆陈列柜，颜色非常漂亮！放在餐倒计时卡的接口</p>
              <div class="tx">
                  <div class="txfz"></div>
                  <span>潘潘</span>
              </div>
              <span class="dd">重庆</span>
            </li>
            <li >
              <img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2346604092,295321359&fm=26&gp=0.jpg" alt="">
              <p>做工精致的美术馆陈列柜，颜色非常漂亮！放在餐倒计时卡的接口</p>
              <div class="tx">
                  <div class="txfz"></div>
                  <span>潘潘</span>
              </div>
              <span class="dd">重庆</span>
            </li>
        </ul>
        <ul class="ContentList">
          <li >
              <img src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=199184469,673028679&fm=26&gp=0.jpg" alt="">
              <p>做工精致的美术馆陈列柜，颜色非常漂亮！放在餐倒计时卡的接口</p>
              <div class="tx">
                  <div class="txfz"></div>
                  <span>潘潘</span>
              </div>
              <span class="dd">重庆</span>
          </li>
          <li >
              <img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2915767995,973876714&fm=26&gp=0.jpg" alt="">
              <p>做工精致的美术馆陈列柜，颜色非常漂亮！放在餐倒计时卡的接口</p>
              <div class="tx">
                  <div class="txfz"></div>
                  <span>潘潘</span>
              </div>
              <span class="dd">重庆</span>
          </li>
        </ul>
      </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: ["全部", "沙发", "椅凳", "柜架", "床·床具", "桌几"],
      isActive: 0
    };
  },
  methods: {
    changeStyle(i) {
      this.isActive = i;
    }
  },
  mounted() {}
};
</script>
<style lang="stylus">
.jxsd {
  width 100%
  overflow hidden
  margin-top 20px
  .topNavList {
    height: 27px;
    width 500px
    display: inline-flex;
    flex-wrap nowrap
    li {
      height: 27px;
      font-size: 11px;
      background: #EEE;
      line-height: 27px;
      padding: 0 13px;
      margin-right: 13px;
    }

    .active {
      color: #FAFAFA;
      background: #418E5A;
    }
  }

  .sdList {
    display: flex;
    justify-content: space-between;
    width: 355px;
    margin-top: 22px;

    .ContentList {
      display: flex;
      flex-direction: column;

      li {
        width: 170px;
        position: relative;
        color: #000;
        margin-bottom: 43px;

        img {
          width: 100%;
        }

        p {
          width: 160px;
          word-break: break-all;
          text-overflow: ellipsis;
          line-height: 25px;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2; // 这里是超出几行省略
          overflow: hidden;
          font-size: 13px;
          margin-bottom: 35px;
        }

        .tx {
          position: absolute;
          left: 0;
          bottom: 0;
          width: 103px;
          display: flex;
          justify-content: flex-start;
          align-items: center;

          .txfz {
            width: 16px;
            height: 16px;
            border-radius: 100%;
            border: 1px solid #000;
            display: inline-block;
          }

          span {
            font-size: 13px;
            color: #323232;
            line-height: 13px;
            margin-left: 7px;
            display: inline-block;
            margin-top: -3px;
          }
        }

        .dd {
          display: inline-block;
          position: absolute;
          right: 0;
          bottom: 0;
          font-size: 13px;
          color: #A3A3A3;
        }
      }
    }
  }
}
</style>