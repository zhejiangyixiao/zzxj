<template>
  <div class="password">
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
      placeholder="请输入密码"
      :rules="[{ required: true, message: '' }]"
    />
    <div style="margin: 16px;">
      <van-button round block type="info" native-type="submit">
        登入
      </van-button>
    </div>
  </van-form>
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
    methods: {
      onSubmit(values) {
        console.log('submit', values);
      },
    }
}
</script>

<style lang="stylus" scoped>
@import "../assets/style/login.css";

</style>