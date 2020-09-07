<template>
    <div class="bigbox">
        <!-- 顶部左箭头 -->
         <div class="back"></div>
        <h2>zaozuo造作新家</h2>
        <!-- 切换 -->
        <van-tabs v-model="active" color="black">
        <van-tab title="快捷登入" >           
        </van-tab>
        <van-tab title="密码登入" >          
        </van-tab>        
        </van-tabs>  
        <!-- 快捷登入表单组件 -->
        <login v-if="active==0"></login>  
        <!-- 密码登入表单组件    -->
        <pass v-if="active==1"></pass> 
        <h4>忘记密码</h4>
        <!-- 底部显示 -->
        <footer>
        <p>新用户注册</p>
        <p class="line">微信登入</p>
        </footer>
    </div>    
</template>

<script>
import login from '../components/login1';
import pass from '../components/Passlogin';
    export default {
        data(){
            return{
                active:0
            }
        },
        components:{
            login,
            pass
        }
    }
</script>

<style lang="stylus" scoped>
.bigbox{
    padding:20px;
    position:relative;
     .back{
         width:14px;
         height:14px;
         background:url("../assets/img/icon-1.png") no-repeat ;
         background-size:14px;
     }
     h2{
         margin-top:42px;
         height:22px;
         width:100%;
         text-align:center;
         font-size:22px;
         line-height:22px;

     }  
    h4{        
        font-size: 15px;
        font-weight: 500;
        color: #727272;
        line-height: 20px;
        float:right;
        padding-right:12px;
    }
    footer{
        display:flex;
        width:100%;
        height:16px;
        margin-top:160px;
        justify-content :center;
        p{
            font-size:15px;
            line-height :16px;      
            font-weight: 500;
            color: #727272;
            padding:0 10px
        }
        .line{
            border-left:1px solid;
            color: #727272; 
        }
    }
}

</style>