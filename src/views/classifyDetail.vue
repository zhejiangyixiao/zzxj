<template>
<!-- /分类-全屋系列 -->

  <div class="museum" >
      <div class="top" >
          <van-icon class="left" name="arrow-left" color="white" />
          <h2>美术馆全屋系列</h2>
      </div>
      <!-- 顶部图片 -->
    <div class="imgbox">
            <img src="https://img.yzcdn.cn/vant/cat.jpeg" alt="">            
        </div>        
    <!-- 中间的选择按钮 -->
    <div class="choose" :class="{fixed:height>100}" @scroll="changetop" ref="choosebox">
        <span @click="changesmall"></span>
        <div class="big" @click="changebig"></div>
    </div>
        <!-- 商品列表 -->
        <ul>
            <li v-for="(item,index) in museumlist" :key="index" :class="{liwidth:flag}">                
                <div class="showimg" :class="{showimgheight:flag}" >
                    <img :src="item.img" alt="">
                </div>
                <h4>{{item.title}} </h4>
                <div class="sprice">
                    <p>￥{{item.sprice}} </p>
                    <span>￥{{item.oldsprice}} </span>
                </div>
                <div class="smallbox">
                    <i></i>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import axios from 'axios';
    export default {
        data(){
            return{
                flag:false,
                height:0,
                fixed:true,
                museumlist:[],
                ilist:[],
                height1:0,//到顶部的距离
                top:{top:40},
                size:{size:24}
            }
        },
        mounted(){
            //整个页面的数据
            axios.get('https://www.fastmock.site/mock/33a1db282ee306b6797173eda503c793/hangy/museum')
            .then( (response)=> {
                this.museumlist=response.data;
            })
            .catch(function (error) {
                console.log(error) }),
            window.addEventListener('scroll',()=>{
                // this.onscroll()
                this.changetop()
            })
        },
        methods:{
            handleScrollx() {
	        // console.log(document.documentElement.scrollTop)
            },
            changesmall(){
                this.falg=false;
            },
            changebig(){
                this.flag=true;
            },
            onscroll(){
                // this.height=document.documentElement.scrollTop;
            //    console.log(this.height)
            },
            changetop(){                
                // this.height1=this.$refs.choosebox.getBoundingClientRect().top-40
                console.log(this.height1)
            }            
        }
    }
</script>

<style lang="stylus" scoped>
.museum{
    width:100%;
    height:136px;
    position:relative;
    // 顶部的图片
    .imgbox{
        width:100%;
        height:100%;
        background:red;    
        img{
            width:100%;
            height:100%;
        }
    }  
    // 顶部图片的文字  
    .top{       
        line-height:80px;
        height:40px;
        width:100%;
        background:pink;
        position:fixed;
        top:0;
        left:0;
        z-index :2;
        .left{           
            display :block;
            width:32px;
            height:32px;
            z-index :2;
            padding:6px 0 0 0 ;
        }
        .changebck{
            background-image:url("../assets/img/icon1-1.png");
        }
        h2{
            position:fixed;
            left:90px;
            top:10px;
            width: 170px;
            height: 23px;
            font-size: 24px;
            font-family: PingFang SC;
            font-weight: bold;
            line-height: 20px;
            // position:absolute;
            // left:50%;
            // top:50%;
            // transform:translate(-50%,-50%);
        }
    }
    
    // 中间的选择按钮    
    .choose{
        display:flex;
        width:100%;
        align-items:center;
        height:52px;
        background:#fff;
        span{
            width:16px;
            height:16px;
            margin:0 16px;
            background:url(../assets/img/icon-2@2x.png);
            background-size:17px;
        }
        .big{
            width:16px;
            height:16px;
            background:#ccc;
            z-index :2;
        }
    }
    .fixed{
        position:fixed;
        top:40px;
        left:0;
        background:#fff;
        z-index :2;
    }
// 显示商品列表
    ul{
        width:100%;
        display:flex;
        justify-content:space-between;
        flex-wrap:wrap;        
        li{            
            position:relative;
            padding-bottom:30px;
            display:flex;
            justify-content :center;
            flex-direction :column;
            width:184px;         
        .liwidth{
            width:375px;
        }       
            .showimg{
                width:100%;
                height:184px;
                img{
                    width:100%;
                    height:100%;
                }
            }
            .showimgheight{
                height:375px;
            }
            h4{
                width: 100%;
                height: 13px;
                font-size: 13px;
                font-weight: bold;
                line-height: 20px;
                text-align:center;
                margin:16px 0;
            }
            .sprice{
                width:100%;
                display:flex;
                justify-content :center;
                p{
                    font-size: 13px;
                    font-weight: bold;
                    color: #D93026;
                    line-height: 13px;
                    float:left;
                }
            span{
                    font-size: 11px;
                    font-weight: bold;
                    color: #000000;
                    text-decoration:line-through;
                    float:left;
                    margin-left:5%;
                }
            }
            
            .smallbox{
                width:100%;
                height:10px;
                display:flex;
                margin-top:10px;
                justify-content :center;
                i{               
                    display block;
                    width:10px;
                    height:10px;
                    border-radius:50%;
                    background :red;
                }
            }
            
        }
    }
}
</style>