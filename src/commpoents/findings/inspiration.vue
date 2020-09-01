<template>
<!-- 发现-灵感页 -->
    <div class="inspiration">
        <ul>
            <li v-for="(item,index) in inspiration_list" :key="index">
                <van-image
                    width="100%"
                    height="211"
                    lazy-load
                    :src="item.img"
                    />
                <p>
                    <span class="title">{{ item.title }}</span>
                    <span class="des">{{ item.ctx }}</span>
                </p>
            </li>
        </ul> 
    </div>
</template>

<script>
import { mapState } from "vuex";
    export default {
        data() {
            return {

            }
        },
        created(){
            this.$store.dispatch("getinspirationData");
        },
        computed: {
            ...mapState(["inspiration_list"]),
        },
    }
</script>

<style lang="stylus" scoped>
.inspiration
    li
        p
            width 100%
            height 109px
            padding 19px 20px
            display flex
            flex-direction column
            justify-content center
            .title
                font-size 16px
                font-weight 800
                margin-bottom 13px
                font-family PingFang
            .des
                width 281px
                font-size 12px
                font-family PingFang SC
                color #A3A3A3
</style>