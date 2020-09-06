<template>
  <div class="handpick">
      <!-- 顶部图标及信息 -->
      <div class="header" :class="{bck:height1<0}">
          <div class="left" :class="{active:height1<0}"></div>
          <!-- 用户信息 -->
          <div class="user" v-show="height1<0&&height2>0">
              <div class="pic">
                  <img src="" alt="">
              </div>
              <p class="name">111</p>
          </div>
          <!-- 显示文字 -->
          <h3 v-show="height2<0">看看相似晒单</h3>    
          <!-- 右侧图标 -->
          <div class="right">
              <span class="home" :class="{changebck:height1<0}"></span>              
              <span :class="{changebck2:height1<0}"></span>
          </div>          
      </div>
      <!-- 轮播图  -->
    <van-swipe class="my-swipe" 
        :autoplay="0" 
        indicator-color="white" 
        :loop="false" >
        <van-swipe-item v-for="(item,index) in bannerimg" :key="index"><img :src="item" alt=""></van-swipe-item>
      </van-swipe>
      <!-- 作者信息 -->
      <div class="user">
          <div class="headimg" ref="box">
              <!-- 此处图片为用户头像，需绑定 -->
              <img src="" alt="">
          </div>
          <div class="msg">              
            <h3>meng</h3>
            <h4>海口</h4>
          </div>
      </div>
      <div class="text">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit illo architecto inventore obcaecati
      </div>
      <!-- 获取到屏幕顶部的高度 -->
      <div class="bask" >晒单商品</div>
        <!-- 晒单商品下面的卡片 -->
        <div class="card">
            <!-- 此处图片为商品展示 需绑定 -->
            <div class="imgbox"><img src="" alt=""></div>
            <div class="textbox">
                <h3>蜻蜓椅</h3>
                <p>轻盈不占地</p>
                <h4>去看看 ></h4>
            </div>
        </div>

        <!-- 看看相似商品 -->
        <div class="bigbox">
            <h3>看看相似商品</h3>
            <div class="shopbox" ref="box1">
                <div class="showbox" v-for="item in 6" :key="item">
                    <!-- 此处图片为晒单商品图片 -->
                    <div class="showimg">
                        <img src="" alt="">
                    </div>
                    <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, et. A, laboriosam  recusandae atque earum saepe amet!</h4>
                    <div class="showuser">
                        <span>
                            <!-- 此处为用户头像图片 -->
                            <img src="" alt="">
                        </span>
                        <h4>11</h4>
                        <p>111</p>
                    </div>
                </div>
            </div>
        </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            height1:0,
            height2:0,
            show:true,
            height:0,
            // 轮播图
            bannerimg:["https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1598888839253&di=0b05ce7ef818ea64bbaaf38770351c5c&imgtype=0&src=http%3A%2F%2Fa3.att.hudong.com%2F64%2F52%2F01300000407527124482522224765.jpg","https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1598888839254&di=e994fa276a35f20ea6d58891ffd020ec&imgtype=0&src=http%3A%2F%2Fa4.att.hudong.com%2F52%2F52%2F01200000169026136208529565374.jpg"],
            // 轮播图下面的数据
            userpic:'',//用户头像
            username1:'',//用户名
            usercity:'',//用户所在地
            // 晒单商品的数据
            userimg:'',//用户头像
            username:'',//用户名
            city:'',//用户所在地
            shopname:'',//商品名
            // 看看相似商品下面的数据
            shoppic:'',//显示的图片
            shopmsg:'',//显示的内容
            shopuserpic:'',//显示用户头像
            shopusername:'',//用户名
            shopcity:''//城市
        }
    },
    mounted(){
        window.addEventListener('scroll',()=>{
            this.onscroll()
        },true)
       
    },
    methods:{
        onscroll(){
            this.height=document.documentElement.scrollTop
            this.height1=this.$refs.box.getBoundingClientRect().top-40
            this.height2=this.$refs.box1.getBoundingClientRect().top-40
        }
    }

}
</script>

<style lang="stylus" scoped>
@import '../assets/style/discover.css';
.my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    background-color: #39a9ed;
  }
//   顶部样式
.bck{
    background:#fff;
}
.header{
    position:fixed;
    top:0;
    left:0;
    width:100%;
    height:40px;
    z-index :2;
    display:flex;
    align-items:center;
    justify-content :space-between;    
    .left{
        width:32px;
        height:32px;
        border-radius:50%;
        background:url("../assets/img/icon-left.png") no-repeat;
        background-size:32px;
        margin-left:8px;
    }
    h3{
        font-size:16px;
        font-font-weight :600;
        margin-left:30px;
    }
    .user{
        width:80px;
        height:40px;
        padding-left:70px;
        display:flex;
        align-items :center;
        position:relative;

        .pic{
            width:28px;
            height:28px;
            border-radius:50%;
            background:#ccc;
            opacity:.6;
            font-size:20px;
            position:absolute;
            left:10px;
            top:-12px;
            img{
                width:100%;
                height:100%;
            }
        }
        .name{
            margin-left:4px;
            font-size:14px;
            font-weight:600;
            position:absolute;
            left:40px;
            top:-6px;
        }
    }
    .right{
        width:80px;
        height:100%;
        display:flex;
        align-items :center;
        justify-content :flex-end;
        z-index :2;
        span{
            display:block;
            margin-right:8px;
            width:32px;
            height:32px;
            border-radius:50%;
            background:url("../assets/img/icon-3.png") no-repeat;
            background-size:32px;
        }
        .home{
            background:url("../assets/img/icon-home.png") no-repeat;
            background-size:32px;
        }
        .changebck{
            background-image:url("../assets/img/icon2-2.png");
        }
        .changebck2{
            background-image:url("../assets/img/icon3-3.png");
        }
    }
    .active{
        background-image:url("../assets/img/icon1-1.png");
    }
  }
/*作者信息*/
  .user{
      margin-top:40px;
      width:100%;
      height:50px;
      display :flex;
      .headimg{
          width:30px;
          height:30px;
          border-radius:50%;
          margin-left:8px;     
          img{
              width:100%;
              height:100%;
          } 
      }
      .msg{
          display :flex;
          flex-direction: column ;          
          font-size:10px;
          margin-left:10px;    
          h3{
              margin:2px 0 4px 0;
          }
      }
  }
/*轮播图下面的文字*/
  .text{
      font-size:12px;
      padding:0 10px;
      padding-bottom:20px;
      line-height :18px;
      border-bottom:4px solid #ccc;
  }
/*晒单商品*/
  .bask{
      font-size:14px;
      font-weight :700;
      margin:20px 0 4px 10px;
  }
//   晒单商品下面的卡片
  .card{
      width:100%;
      display:flex;
      padding:10px;
      padding-bottom:8px;
      border-bottom:4px solid #ccc;
      .imgbox{
          width:60px;
          height:60px;
          background :red;
          img{
              width:100%;
              height:100%;
          }
      }
      .textbox{
          margin-left:10px;
          padding-bottom:20px;
          h3{
              font-size:12px;
              font-weight:500px;
          }
          p{
              font-size:12px;
              margin:6px 0 10px 0;
          }
          h4{
              font-size:12px;
              color:black;
          }
      }
  }
//   瀑布流
.bigbox{
    h3{
        font-size:14px;
        font-weight:600px;
        padding:16px 0 4px 10px
    }
    .shopbox{
        margin: 10px;
        column-count: 2;
        column-gap: 10px;
        .showbox{
            width:170px;
            height:280px;
            margin-bottom:10px;
            .showimg{
                width:100%;
                // 此处高度需删除
                height:200px;
                background:red;
                img{
                    width:100%;
                    height:100%;
                }           
            }
            h4{
                margin-top:4px;
                font-size:12px;
                line-height:16px;
                text-overflow :ellipsis;
                height:32px;
                overflow: hidden;
                text-space:nowrap;
            }
            .showuser{
                width:100%;
                height:30px;
                margin-top:10px;
                display:flex;
                align-items:center;
                span{
                    display :block;
                    width:14px;
                    height:14px;
                    border-radius: 50%;    
                    float:left;  
                    background:red;
                    img{
                        width:100%;
                        height:100%;
                    }              
                }
                h4{
                    padding-top:6px;
                    padding-left:6px;
                    font-size:12px;
                }
                p{
                    color:#ccc;
                    font-size:12px;
                    margin-left:110px;
                }
            }
        }
        
    }
}
</style>