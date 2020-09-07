<template>
    <div class="collect">
        <van-nav-bar title="我的收藏" left-arrow @click-left="onClickLeft" />
        <van-tabs v-model="active" color="#000" line-width="25px" sticky swipeable>
            <van-tab title="商品">
                <div class="collect-ul">
                    <div class="collect-li cf">
                        <div class="collect-img fl">
                            <img src alt />
                        </div>
                        <div class="collect-txt fl">
                            <h4>新深海沉睡床垫</h4>
                            <h6>￥3299起</h6>
                        </div>
                    </div>
                    <div class="collect-li cf">
                        <div class="collect-img fl">
                            <img src alt />
                        </div>
                        <div class="collect-txt fl">
                            <h4>云帛床</h4>
                            <h6>￥4296起</h6>
                        </div>
                    </div>
                </div>
            </van-tab>
            <van-tab title="设计师">
                <div class="box">
                    <div class="none-img">
                        <img src alt />
                    </div>
                    <p>还没有收藏的设计师</p>
                </div>
            </van-tab>
            <van-tab title="其他">
                <div class="box">
                    <div class="none-img">
                        <img src alt />
                    </div>
                    <p>还没有其他收藏</p>
                </div>
            </van-tab>
        </van-tabs>
    </div>
</template>

<script>
export default {
    data() {
        return {
            active: 0,
        };
    },
    methods: {
        onClickLeft() {
            this.$router.go(-1);
        }
    }
};
</script>

<style lang="stylus" scoped>
.cf {
    overflow: hidden;
}

.fl {
    float: left;
}

.collect {
    background-color: #f7f6f6;
    height: 100%;
}

.collect-li {
    padding: 15px 20px;
    margin-top: 5px;
    background-color: #fff;
}

.collect-img {
    width: 85px;
    height: 85px;
    background-color: red;
    margin-right: 15px;
}

.collect-txt h4 {
    font-size: 14px;
    margin-top: 20px;
    margin-bottom: 10px;
}

.collect-txt h6 {
    font-size: 14px;
}

.box {
    margin-top: 100px;
}

.none-img {
    width: 130px;
    height: 130px;
    background-color: red;
    border-radius: 50%;
    margin: 0 auto 20px;
}

.box p {
    font-size: 12px;
    color: #a7a7a7;
    text-align: center;
}
</style>