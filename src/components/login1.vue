<template>
<div class="loginbox">
    <van-form @submit="onSubmit">
      <van-field
        v-model="username"
        name="用户名"
        placeholder="请输入手机号/邮箱"
        :rules="[{ required: true, message: '' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="密码"
        placeholder="请输入验证码"
        :rules="[{ required: true, message: '' }]"
      />
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit">
          登入
        </van-button>
      </div>
    </van-form>   
    <div class="btnbox">
      <div class="btn">
      <button @click="sendmsg">获取验证码</button> 
      </div>
    </div>    
    </div>
</template>

<script>
export default {
   data() {
    return {
      username: '',
      password: '',
    };
  },
  methods:{
    onSubmit(values) {
      console.log('submit', values);
    },
    sendmsg(){
      // 向用户发送并获取验证码数据
    }
  }  
}
</script>

<style lang="stylus" scoped>
@import "../assets/style/login.css";
.loginbox{
  position:relative;
  margin:0;
  padding:0;
  .btnbox{    
      background:#fff;
      padding-left:20px;
      overflow: hidden;
      position:absolute;
      left:196px;
      top:96px;
    .btn{      
      width:114px;
      height:50px;
      border:1px solid #727272;
      font-weight: 500;
      color: #727272;
      text-align :center;
      line-height :40px;
    button{
      border:none;
      font-size:15px;      
    }
  }
  }  
}
</style>