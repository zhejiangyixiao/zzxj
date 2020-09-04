<template>
  <div class="home">
    <!-- 头部导航栏 -->
    <header>
      <div class="scan"></div>
      <div class="title">
        <img src="../assets/images/nav-logo@2x.png" alt />
      </div>
      <div class="search"></div>
    </header>

    <!-- 轮播图 + 索引点 + 导航按钮-->
    <div class="swiper-box">
      <!-- 轮播图一 -->
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white" @change="onChange">
        <van-swipe-item v-for="(item,index) in arrSwiper" :key="index">
          <img :src="item.src" alt />
        </van-swipe-item>
        <template #indicator>
          <div class="custom-indicator"></div>
        </template>
      </van-swipe>

      <!-- 索引点 -->
      <div class="swiper-nav">
        <div class="swiper-nav-ul">
          <div v-for="(item,index) in arrSwiper" :key="index" :class="{'active':current==index}"></div>
        </div>
      </div>

      <!-- 导航按钮 -->
      <div class="class-box">
        <van-grid clickable :column-num="4" :border="false">
          <van-grid-item
            v-for="(item,index) in arrClass"
            :key="index"
            :text="item.text"
            :icon="item.icon"
            to="/"
          />
        </van-grid>
      </div>
      <div class="border"></div>
    </div>

    <!-- 首页内容：造作定义作品 + 造作定义作品-->
    <div class="make-shop">
      <div class="make-shop-ul">
        <!-- 造作定义作品 -->
        <div class="make-shop-li">
          <div class="make-shop-li-title">
            <h3>造作定义作品</h3>
            <p>27国100+设计大师签名作品，五年百万用户</p>

            <!-- 轮播图二 -->
            <div class="make-shop-nav">
              <div class="custom-indicator">{{ current2 + 1 }}/{{arrSwiper2.length}}</div>
            </div>
          </div>
          <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white" @change="onChange2">
            <!-- 轮播图内容 -->
            <van-swipe-item v-for="(item,index) in arrSwiper2" :key="index">
              <div>
                <img :src="item.img" alt />
              </div>
              <div style="position: relative">
                <!-- 商品名字 -->
                <h4>{{item.name}}</h4>
                <!-- 价格 -->
                <span class="price">￥999起</span>
                <!-- 商品介绍 -->
                <p>{{item.msg}}</p>
                <!-- 商品详情：2色可选 -->
                <div class="make-shop-li-box">
                  <span v-for="(item1,index1) in item.tag" :key="index1">{{item1}}</span>
                </div>
              </div>
            </van-swipe-item>
            <template #indicator>
              <div class="custom-indicator"></div>
            </template>
          </van-swipe>
        </div>

        <!-- 造作超值好物推荐 -->
        <div class="make-shop-li">
          <div class="make-shop-li-title">
            <h3>造作超值好物推荐</h3>
            <p>6件超值单品，3组控件组搭，点亮全家</p>

            <!-- 轮播图三 -->
            <div class="make-shop-nav">
              <div class="custom-indicator">{{ current3 + 1 }}/{{arrSwiper3.length}}</div>
            </div>
          </div>
          <!-- 轮播图内容 -->
          <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white" @change="onChange3">
            <van-swipe-item v-for="(item,index) in arrSwiper3" :key="index">
              <div>
                <img :src="item.img" alt />
              </div>
              <div style="position: relative">
                <!-- 商品名字 -->
                <h4>{{item.name}}</h4>
                <!-- 价格 -->
                <span class="price">￥{{item.price}}起</span>
                <!-- 商品介绍 -->
                <p>{{item.msg}}</p>
                <!-- 商品详情：2色可选 -->
                <div class="make-shop-li-box">
                  <span v-for="(item1,index1) in item.tag" :key="index1">{{item1}}</span>
                </div>
              </div>
            </van-swipe-item>
            <template #indicator>
              <div class="custom-indicator"></div>
            </template>
          </van-swipe>
        </div>
      </div>
    </div>

    <!-- 首页内容：百万用户实景晒单 -->
    <div class="show-box">
      <h2>百万用户实景晒单</h2>
      <div class="list-box">
        <!-- 晒单内容 -->
        <!-- 第一列 -->
        <div class="list-box-ul">
          <div class="list-box-li" v-for="(item,index) in arrShow" :key="index">
            <template v-if="index%2==0">
              <div>
                <img :src="item.img" alt />
              </div>
              <div class="msg">{{item.msg}}</div>
              <div class="user-box">
                <div class="head-img">
                  <img :src="item.headImg" alt />
                </div>
                <div class="name">{{item.name}}</div>
                <div class="address">{{item.address}}</div>
              </div>
            </template>
          </div>
        </div>

        <!-- 第二列 -->
        <div class="list-box-ul">
          <div class="list-box-li" v-for="(item,index) in arrShow" :key="index">
            <template v-if="index%2!=0">
              <div>
                <img :src="item.img" alt />
              </div>
              <div class="msg">{{item.msg}}</div>
              <div class="user-box">
                <div class="head-img">
                  <img :src="item.headImg" alt />
                </div>
                <div class="name">{{item.name}}</div>
                <div class="address">{{item.address}}</div>
              </div>
            </template>
          </div>
        </div>
      </div>

      <!-- 需要跳转到-发现-全部 -->
      <div class="look-btn-box">
        <div class="look-btn">
          <span>查看更多晒单</span>
        </div>
      </div>
    </div>

    <!-- 首页内容：全品目录 -->
    <div class="all-shop-box">
      <div class="all-shop-title">
        <h2>全品目录</h2>
      </div>

      <!-- 内容 -->
      <div class="add-shop-ul">
        <div class="allClass-box" v-for="(item,index) in arrAllShop" :key="index">
          <!-- icon -->
          <div class="allClass-img">
            <img :src="item.icon" alt />
          </div>

          <!-- 沙发部分 -->
          <div class="allClass-name">{{item.className}}</div>
          <div class="shop-list-ul">
            <!-- 商品内容 -->
            <div class="shop-list-li" v-for="(item1,index1) in item.arrItems" :key="index1">
              <div class="shop-img">
                <img :src="item1.img" alt />
              </div>
              <div class="shop-name">{{item1.name}}</div>
              <div class="shop-price">￥{{item1.price}}起</div>
              <div class="shop-tag-list">
                <span v-for="(item2,index2) in item1.arrTags" :key="index2">{{item2}}</span>
              </div>
            </div>
            <div class="shop-list-li">
              <div class="more">
                <span>更多沙发</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      current: 0,
      current2: 0,
      current3: 0,
      current4: 0,
      arrClass: [
        {
          icon: require("../assets/images/icon01@2x.png"),
          text: "世界设计"
        },
        {
          icon: require("../assets/images/icon02@2x.png"),
          text: "欧洲制造"
        },
        {
          icon: require("../assets/images/icon03@2x.png"),
          text: "免费送装"
        },
        {
          icon: require("../assets/images/icon04@2x.png"),
          text: "7日退还"
        }
      ],
      arrSwiper: [
        {
          src: require("../assets/images/banner01@2x.png")
        },
        {
          src: require("../assets/images/banner01@2x.png")
        },
        {
          src: require("../assets/images/banner01@2x.png")
        },
        {
          src: require("../assets/images/banner01@2x.png")
        },
        {
          src: require("../assets/images/banner01@2x.png")
        }
      ],
      arrSwiper2: [
        {
          img: require("../assets/images/img-01@2x.png"),
          name: "熊猫茶几",
          price: "999",
          msg: "永不过时的黑白经典，释放一屋年轻感，来自造作生活研究所",
          tag: ["2色可选"]
        },
        {
          img: require("../assets/images/img-01@2x.png"),
          name: "熊猫茶几",
          price: "999",
          msg: "永不过时的黑白经典，释放一屋年轻感，来自造作生活研究所",
          tag: ["2色可选"]
        },
        {
          img: require("../assets/images/img-01@2x.png"),
          name: "熊猫茶几",
          price: "999",
          msg: "永不过时的黑白经典，释放一屋年轻感，来自造作生活研究所",
          tag: ["2色可选"]
        },
        {
          img: require("../assets/images/img-01@2x.png"),
          name: "熊猫茶几",
          price: "999",
          msg: "永不过时的黑白经典，释放一屋年轻感，来自造作生活研究所",
          tag: ["2色可选"]
        },
        {
          img: require("../assets/images/img-01@2x.png"),
          name: "熊猫茶几",
          price: "999",
          msg: "永不过时的黑白经典，释放一屋年轻感，来自造作生活研究所",
          tag: ["2色可选"]
        },
        {
          img: require("../assets/images/img-01@2x.png"),
          name: "熊猫茶几",
          price: "999",
          msg: "永不过时的黑白经典，释放一屋年轻感，来自造作生活研究所",
          tag: ["2色可选"]
        },
        {
          img: require("../assets/images/img-01@2x.png"),
          name: "熊猫茶几",
          price: "999",
          msg: "永不过时的黑白经典，释放一屋年轻感，来自造作生活研究所",
          tag: ["2色可选"]
        },
        {
          img: require("../assets/images/img-01@2x.png"),
          name: "熊猫茶几",
          price: "999",
          msg: "永不过时的黑白经典，释放一屋年轻感，来自造作生活研究所",
          tag: ["2色可选"]
        }
      ],
      arrSwiper3: [
        {
          img: require("../assets/images/img-001@2x.png"),
          name: "画板玄关柜",
          price: "2999",
          msg: "全实木手感，坚固耐用越实木，来自造作生活研究所",
          tag: ["2色可选"]
        },
        {
          img: require("../assets/images/img-001@2x.png"),
          name: "画板玄关柜",
          price: "2999",
          msg: "全实木手感，坚固耐用越实木，来自造作生活研究所",
          tag: ["2色可选"]
        },
        {
          img: require("../assets/images/img-001@2x.png"),
          name: "画板玄关柜",
          price: "2999",
          msg: "全实木手感，坚固耐用越实木，来自造作生活研究所",
          tag: ["2色可选"]
        },
        {
          img: require("../assets/images/img-001@2x.png"),
          name: "画板玄关柜",
          price: "2999",
          msg: "全实木手感，坚固耐用越实木，来自造作生活研究所",
          tag: ["2色可选"]
        },
        {
          img: require("../assets/images/img-001@2x.png"),
          name: "画板玄关柜",
          price: "2999",
          msg: "全实木手感，坚固耐用越实木，来自造作生活研究所",
          tag: ["2色可选"]
        },
        {
          img: require("../assets/images/img-001@2x.png"),
          name: "画板玄关柜",
          price: "2999",
          msg: "全实木手感，坚固耐用越实木，来自造作生活研究所",
          tag: ["2色可选"]
        },
        {
          img: require("../assets/images/img-001@2x.png"),
          name: "画板玄关柜",
          price: "2999",
          msg: "全实木手感，坚固耐用越实木，来自造作生活研究所",
          tag: ["2色可选"]
        },
        {
          img: require("../assets/images/img-001@2x.png"),
          name: "画板玄关柜",
          price: "2999",
          msg: "全实木手感，坚固耐用越实木，来自造作生活研究所",
          tag: ["2色可选"]
        },
        {
          img: require("../assets/images/img-001@2x.png"),
          name: "画板玄关柜",
          price: "2999",
          msg: "全实木手感，坚固耐用越实木，来自造作生活研究所",
          tag: ["2色可选"]
        }
      ],
      arrShow: [
        {
          img: require("../assets/images/rectangle@2x.png"),
          msg: "简洁，大方，百搭，我喜欢的风格，还没有入...",
          headImg: require("../assets/images/profile-photo1@2x.png"),
          name: "月色江南",
          address: "镇江"
        },
        {
          img: require("../assets/images/img-2.png"),
          msg: "深海沉睡床垫含有乳胶，真的很软，躺在上面...",
          headImg: require("../assets/images/profile-photo2@2x.png"),
          name: "叮当麻麻",
          address: "萍乡"
        },
        {
          img: require("../assets/images/img-3.png"),
          msg: "有型有款，颜色搭配也能找到默契的点缀，比...",
          headImg: require("../assets/images/profile-photo3@2x.png"),
          name: "Priscilla",
          address: "北京"
        },
        {
          img: require("../assets/images/img-4@2x.png"),
          msg: "漂亮的造型，富有美感的设计，摆在家里客厅...",
          headImg: require("../assets/images/profile-photo4@2x.png"),
          name: "不太会造作...",
          address: "北京"
        }
      ],
      arrAllShop: [
        {
          icon: require("../assets/images/icon-1@2x.png"),
          className: "沙发SOFA",
          arrItems: [
            {
              img: require("../assets/images/img1@2x.png"),
              name: "造作星期天沙发",
              price: "2999",
              arrTags: ["3色可选"]
            },
            {
              img: require("../assets/images/img-2@2x(1).png"),
              name: "云团沙发",
              price: "3599",
              arrTags: ["3色可选"]
            },
            {
              img: require("../assets/images/img-3@2x(1).png"),
              name: "Sofa T",
              price: "4599",
              arrTags: ["2色可选"]
            },
            {
              img: require("../assets/images/img-4@2x(1).png"),
              name: "鹅卵石沙发",
              price: "2699",
              arrTags: ["2色可选"]
            },
            {
              img: require("../assets/images/img-5@2x.png"),
              name: "半月湾沙发",
              price: "4599",
              arrTags: ["2色可选"]
            }
          ]
        }
      ]
    };
  },
  methods: {
    onChange(index) {
      this.current = index;
    },
    onChange2(index) {
      this.current2 = index;
    },
    onChange3(index) {
      this.current3 = index;
    },
    onChange4(index) {
      this.current4 = index;
    }
  }
};
</script>

<style lang="stylus" scoped>
.home {
  padding-bottom: 50px;
}

img {
  width: 100%;
}

header {
  display: flex;
  flex-direction: row;
  padding: 0 15px 10px;
}

.scan, .search {
  width: 20px;
  height: 20px;
  margin-top: 12px;
  background-size: contain;
  background-repeat: no-repeat;
}

.scan {
  background-image: url('../assets/images/nav-scan@2x.png');
}

.search {
  background-image: url('../assets/images/nav-search@2x.png');
}

.title {
  width: 160px;
  margin: 5px 75px 0;
}

.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  text-align: center;
}

.swiper-nav-ul {
  width: 75px;
  display: flex;
  flex-direction: row;
  margin: 0 auto;
}

.swiper-nav-ul div {
  width: 5px;
  height: 5px;
  margin: 5px;
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 50%;
}

.swiper-nav-ul div.active {
  background-color: rgb(0, 0, 0);
}

.border {
  height: 3px;
  background-color: rgba(0, 0, 0, 0.05);
}

.make-shop-li {
  position: relative;
  padding: 35px 0 20px;
}

.make-shop-li-title {
  padding: 0 30px;
}

.make-shop-li .van-swipe-item {
  padding: 0 30px;
}

.make-shop-li h3 {
  font-size: 22px;
  margin-bottom: 10px;
}

.make-shop-li h4 {
  text-align: left;
  font-size: 16px;
  margin: 10px 0;
  color: #000;
}

.make-shop-li p {
  text-align: left;
  width: 275px;
  font-size: 12px;
  line-height: 1.4;
  color: #d1d1d1;
  margin-bottom: 15px;
}

.make-shop-li-box {
  display: flex;
  flex-direction: row;
}

.make-shop-li-box span {
  color: #afafaf;
  background-color: #f6f6f6;
  padding: 5px;
  font-size: 12px;
}

.make-shop-li .price {
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 12px;
  font-weight: 700;
  color: #000;
}

.make-shop-nav {
  position: absolute;
  top: 50px;
  right: 30px;
  font-size: 16px;
}

.show-box h2 {
  padding: 35px 30px 0;
  font-size: 22px;
  margin-bottom: 25px;
}

.list-box {
  display: flex;
  flex-direction: row;
  padding: 0 25px 20px;
}

.list-box-ul {
  width: 50%;
  padding: 0 5px;
}

.list-box-li .msg {
  font-size: 12px;
  font-weight: 700;
  line-height: 1.5;
  margin-top: 5px;
}

.user-box {
  overflow: hidden;
  font-size: 12px;
  line-height: 20px;
  margin-top: 20px;
}

.list-box-li .head-img {
  float: left;
  width: 20px;
  height: 20px;
  margin-right: 10px;
}

.list-box-li .name {
  float: left;
  color: #7c7c7c;
}

.list-box-li .address {
  float: right;
  color: #b9b9b9;
}

.look-btn-box {
  padding: 0 30px;
}

.look-btn {
  background-color: #f5f5f5;
  height: 50px;
  text-align: center;
  line-height: 45px;
}

.look-btn span {
  font-size: 12px;
  padd-right: 20px;
  background-image: url();
}

.all-shop-box {
  margin-top: 55px;
}

.all-shop-title {
  position: relative;
  padding: 0 30px;
}

.all-shop-box h2 {
  padding-bottom: 20px;
  border-bottom: 2px solid #e0e0e0;
  margin-bottom: 40px;
}

.allClass-img {
  width: 35px;
  height: 26px;
  margin: 0 auto 5px;
}

.allClass-name {
  text-align: center;
  margin-bottom: 20px;
  color: #000;
}

.shop-list-ul {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 0 25px;
}

.shop-list-li {
  width: 50%;
  padding: 0 5px;
  text-align: center;
  font-size: 12px;
  color: #000;
}

.shop-name {
  font-size: 14px;
  font-weight: 700;
  margin-top: 5px;
}

.shop-price {
  font-weight: 700;
  margin: 10px 0;
}

.shop-tag-list {
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
}

.shop-tag-list span {
  color: #afafaf;
  background-color: #f6f6f6;
  padding: 5px;
  font-size: 12px;
  margin: 0 auto;
}

.all-shop-nav {
  position: absolute;
  top: 10px;
  right: 30px;
  font-size: 16px;
}

.shop-list-li .more {
  width: 93px;
  height: 93px;
  border: 5px solid #777777;
  margin: 25px auto;
  padding: 25px;
}
</style>