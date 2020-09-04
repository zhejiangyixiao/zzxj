<template>
  <div>
    <!-- nav -->
    <van-nav-bar title="个人资料" left-text left-arrow @click-left="onClickLeft" />

    <!-- 修改头像 -->
    <!-- <van-cell is-link title="头像" @click="showHeadicon = true"/> -->
    <van-cell is-link title="头像" @click="showHeadicon = true">
      <!-- 使用 right-icon 插槽来自定义右侧图标 -->
      <template #default>
        <van-icon name="http://adai.vip/images/wode/cart.png" class="search=icon" />
      </template>
    </van-cell>
    <van-action-sheet
      v-model="showHeadicon"
      :actions="actionsHeadicon"
      @select="onSelectHeadicon"
      cancel-text="取消"
      close-on-click-action="true"
      @cancel="onCancel"
    />

    <!-- 修改昵称 -->
    <!-- <van-cell title="昵称" is-link /> -->
    <van-cell is-link @click="showPopupNickname">昵称</van-cell>
    <van-popup v-model="showNickname" position="bottom" closeable :style="{ height: '100%' }">
      <div class="content">
        <van-form @submit="onSubmitNickname">
          <van-field
            label-align="center"
            v-model="username"
            name="昵称"
            label="昵称"
            placeholder="昵称"
            :rules="[{ required: true, message: '请输入昵称' }]"
          />
          <div style="margin: 16px;">
            <van-button round block type="info" native-type="submit">确认修改</van-button>
          </div>
        </van-form>
      </div>
    </van-popup>

    <!-- 修改生日 -->
    <van-cell is-link @click="showPopupBirthday">生日</van-cell>
    <van-popup v-model="showBirthday" position="bottom" :style="{ height: '309px' }">
      <van-datetime-picker
        v-model="currentDate"
        type="date"
        :min-date="minDate"
        :max-date="maxDate"
      />
    </van-popup>

    <!-- 修改性别 -->
    <van-cell is-link title="性别" @click="showSex = true" />
    <van-action-sheet
      v-model="showSex"
      :actions="actionsSex"
      @select="onSelectSex"
      cancel-text="取消"
      close-on-click-action
      @cancel="onCancel"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 头像
      showHeadicon: false,
      actionsHeadicon: [{ name: "拍照" }, { name: "从手机相册选择" }],

      // 昵称
      showNickname: false,

      // 生日
      showBirthday: false,
      minDate: new Date(1900, 0, 1),
      maxDate: new Date(),
      currentDate: new Date(1980, 0, 1),

      // 性别
      showSex: false,
      actionsSex: [{ name: "男" }, { name: "女" }, { name: "其他" }]
    };
  },

  methods: {
    //   头像
    onSelectHeadicon(item) {
      // 默认情况下点击选项时不会自动收起
      // 可以通过 close-on-click-action 属性开启自动收起
      this.showHeadicon = false;
      //   Toast(item.name);
    },

    // 昵称
    showPopupNickname() {
      this.showNickname = true;
    },

    showPopupBirthday() {
      this.showBirthday = true;
    },
    // 文本提交
    onSubmitNickname(values) {
      console.log("submit", values);
    },

    // 性别
    onSelectSex(item) {
      // 默认情况下点击选项时不会自动收起
      // 可以通过 close-on-click-action 属性开启自动收起
      this.showSex = false;
      Toast(item.name);
    },

    onCancel() {
      Toast("取消");
    }
  }
};
</script>

<style lang="stylus" scoped>
.content {
  padding: 46px 16px;
}

 .search-icon {
    font-size: 16px;
    line-height: inherit;
  }
</style>