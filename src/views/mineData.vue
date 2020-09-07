<template>
    <div class="information">
        <van-nav-bar title="我的资料" left-arrow @click-left="onClickLeft" />
        <div class="mineMsg">
            <!-- <van-cell v-for="(item,index) in mineList" :key="index" :title="item" is-link value /> -->
            <van-cell title="头像" is-link @click="showPopup1">
                <template #right-icon>
                    <div class="head-icon">
                        <img src="../assets/images/profile-photo1.png" alt />
                    </div>
                </template>
            </van-cell>
            <van-cell title="昵称" is-link :value="name" @click="showPopup3" />
            <van-cell title="生日" is-link :value="date" @click="showPopup" />
            <van-cell title="性别" is-link :value="sex" @click="showPopup2(sex)" />
        </div>
        <van-popup v-model="show" position="bottom">
            <van-datetime-picker
                v-model="currentDate"
                type="date"
                title="选择年月日"
                :min-date="minDate"
                :max-date="maxDate"
                @cancel="showPopup"
                @confirm="confirm"
                :formatter="formatter"
            />
        </van-popup>
        <van-popup v-model="show1" position="bottom">
            <div class="popup-box">
                <div class="popup-top">
                    <div @click="showPopup1">拍照</div>
                    <div @click="showPopup1">从手机相册选择</div>
                </div>
                <div class="popup-bottom" @click="showPopup1">取消</div>
            </div>
        </van-popup>
        <van-popup v-model="show2" position="bottom">
            <div class="popup-sex">
                <div class="popup-li">请选择性别</div>
                <div class="popup-li" @click="showPopup2('男')">男</div>
                <div class="popup-li" @click="showPopup2('女')">女</div>
                <div class="popup-li" @click="showPopup2('其他')">其他</div>
            </div>
        </van-popup>
        <van-popup v-model="show3" position="bottom" :closeable="true" :style="{ height: '100%' }">
            <div class="popup-name">
                <input type="text" v-model="names" placeholder="请输入昵称" />
                <button @click="upName">确认修改</button>
            </div>
        </van-popup>
    </div>
</template>

<script>
export default {
    data() {
        return {
            active: 1,
            show: false,
            show1: false,
            show2: false,
            show3: false,
            minDate: new Date(1955, 0, 1),
            maxDate: new Date(2020, 10, 1),
            currentDate: new Date(2000, 0, 1),
            date: "点击设置生日",
            sex: "点击设置性别",
            name: "点击设置昵称",
            names: ""
        };
    },
    methods: {
        upName() {
            this.name = this.names;
            this.showPopup3();
        },
        formatDate(date) {
            let y = date.getFullYear();
            let m = date.getMonth() + 1;
            let w = date.getDate();
            return y + "-" + m + "-" + w;
        },
        formatter(type, val) {
            if (type === "year") {
                return val + "年";
            }
            if (type === "month") {
                return val + "月";
            }
            if (type === "day") {
                return val + "日";
            }
            return val;
        },
        onClickLeft() {
            this.$router.go(-1);
        },
        showPopup() {
            this.show = !this.show;
        },
        showPopup1() {
            this.show1 = !this.show1;
        },
        showPopup2(sex) {
            this.show2 = !this.show2;
            this.sex = sex;
        },
        showPopup3() {
            this.show3 = !this.show3;
        },
        confirm(value) {
            this.showPopup();
            this.date = this.formatDate(value);
        }
    }
};
</script>

<style lang="stylus" scoped>
.body{
    background:#fff
}
.cf {
    overflow: hidden;
}

.fl {
    float: left;
}

.information {
    background-color: #f7f6f6;
    height: 100%;
}

.mineMsg {
    margin-top: 5px;
}

.van-cell {
    line-height: 35px;
    font-weight: 700;
}

.van-cell__value {
    font-weight: 400;
    color: #60a67b;
}

.van-icon {
    margin-top: 5px;
}

.head-icon{
    width: 40px;
    height: 40px;
    background-color: red;
    border-radius: 50%;
}

.van-popup {
    background-color: rgba(0, 0, 0, 0);
}

.popup-box {
    padding: 10px;
    color: #2e8dfc;
    font-size: 18px;
    line-height: 55px;
    text-align: center;
}

.popup-box .popup-top {
    background-color: #f0f0f0;
    border-radius: 13px;
}

.popup-box .popup-bottom {
    background-color: #fff;
    border-radius: 13px;
    margin-top: 10px;
}

.popup-top>div:nth-child(1) {
    border-bottom: 1px solid #dbdbdb;
}

.popup-sex {
    background-color: #fff;
    padding: 0 10px;
}

.popup-li {
    line-height: 45px;
    text-align: center;
    border-top: 1px solid #dbdbdb;
    font-size: 14px;
}

.popup-li:nth-child(1) {
    text-align: left;
    color: #93d1b5;
}

.popup-name {
    height:100%;
    background-color: #fff;
}

.popup-name input {
    width: 250px;
    margin: 50px 60px 0;
    line-height: 40px;
    padding-left: 20px;
    border-radius: 12px;
}

.popup-name button {
    width: 250px;
    margin: 30px 60px 0;
    line-height: 40px;
    border-radius: 12px;
}
</style>