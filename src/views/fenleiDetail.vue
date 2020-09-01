<template>
<!-- /分类-全屋系列 -->

  <div class="museum" ref="pronbit">
      <!-- 顶部的样式，需要修改 -->
      <!-- <van-nav-bar
        title="美术馆全屋系列"
        left-arrow
        fixed	
        /> -->
      <!-- 顶部图片 -->
    <div class="imgbox">
            <img src="https://img.yzcdn.cn/vant/cat.jpeg" alt="">            
        </div>        
    <h2>美术馆全屋系列</h2>
    <!-- 中间的选择按钮 -->
    <div class="choose" >
        <span></span>
        <i></i>
    </div>
        <!-- 商品列表 -->
        <ul>
            <li v-for="(item,index) in museumlist" :key="index">                
                <div class="showimg">
                    <img :src="item.img" alt="">
                </div>
                <h4>{{item.title}} </h4>
                <p>￥{{item.sprice}} </p>
                <span>￥{{item.oldsprice}} </span>
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
                fixed:true,
                museumlist:[],
                ilist:[],
            }
        },
        mounted(){
            //整个页面的数据
            axios.get('https://www.fastmock.site/mock/33a1db282ee306b6797173eda503c793/hangy/museum')
            .then( (response)=> {
                this.museumlist=response.data;
            })
            .catch(function (error) {
                console.log(error) })             
        },
        methods:{
            handleScrollx() {
	        console.log(document.documentElement.scrollTop)
	        },
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
    h2{
        width: 170px;
        height: 23px;
        font-size: 24px;
        font-family: PingFang SC;
        font-weight: bold;
        line-height: 20px;
        position:absolute;
        left:50%;
        top:50%;
        transform:translate(-50%,-50%);
    }
    // 中间的选择按钮
    .choose{
        display:flex;
        width:100%;
        align-items:center;
        height:52px;
        span{
            width:16px;
            height:16px;
            margin:0 16px;
            background:red;
        }
        i{
            width:16px;
            height:16px;
            background:#ccc;
        }
    }

// 显示商品列表
    ul{
        width:100%;
        display:flex;
        justify-content:space-between;
        flex-wrap:wrap;
        li{
            width:184px;
            position:relative;
            padding-bottom:50px;
            .showimg{
                height:184px;
                width:100%;
                background:pink
                img{
                    width:100%;
                    height:100%;
                }
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
            p{
                width: 31px;
                height: 10px;
                font-size: 13px;
                font-weight: bold;
                color: #D93026;
                line-height: 13px;
                margin-left:50px;
            }
            span{
                width: 25px;
                height: 8px;
                font-size: 11px;
                font-weight: bold;
                color: #000000;
                line-height: 8px;
                text-decoration:line-through;
                position:absolute;
                right:54px;
                bottom:50px;
            }
            .smallbox{
                width:50px;
                height:10px;
                position:absolute;
                left:70px;
                bottom:30px;
                display:flex;
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