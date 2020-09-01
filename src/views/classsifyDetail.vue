<template>
  <div class="handpick">
      <!-- 轮播图  -->
    <van-swipe class="my-swipe" 
        :autoplay="0" 
        indicator-color="white" 
        :loop="false" >
        <van-swipe-item v-for="(item,index) in imgsrc" :key="index"><img :src="item" alt=""></van-swipe-item>
      </van-swipe>
      <!-- 作者信息 -->
      <div class="user">
          <div class="headimg">
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
      <div class="bask">晒单商品</div>
        <!-- 晒单商品下面的卡片 -->
        <div class="card">
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
            <div class="shopbox">
                <div class="showbox" v-for="item in 2" :key="item">
                    <div class="showimg">
                        <img src="" alt="">
                    </div>
                    <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, et. A, laboriosam  recusandae atque earum saepe amet!</h4>
                    <div class="showuser">
                        <span>
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
            imgsrc:["https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1598888839253&di=0b05ce7ef818ea64bbaaf38770351c5c&imgtype=0&src=http%3A%2F%2Fa3.att.hudong.com%2F64%2F52%2F01300000407527124482522224765.jpg","https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1598888839254&di=e994fa276a35f20ea6d58891ffd020ec&imgtype=0&src=http%3A%2F%2Fa4.att.hudong.com%2F52%2F52%2F01200000169026136208529565374.jpg"],
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
/*作者信息*/
  .user{
      width:100%;
      heihgt:50px;
      display :flex;
      .headimg{
          width:30px;
          height:30px;
          border-radius:50%;
          background:red;    
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
      padding:10px;
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
        padding:0 10px;
        width:100%;
        display:flex;
        justify-content :space-around;
        .showbox{
            width:170px;
            height:280px;
            background:pink;
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
                // display: -webkit-box;
				// -webkit-box-orient: vertical;
				// -webkit-line-clamp: 3;
				// overflow: hidden;
            }
            .showuser{
                width:100%;
                height:30px;
                margin-top:10px;
                background:blue;
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