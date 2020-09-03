<template>
    <div class="test">
        <div class="wrap">
            <ul>
                <li v-for="index in 10" :key="index">
                    {{ index }}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import BScroll from "better-scroll";

    export default {
        mounted(){
            this.$nextTick(() => {
                let scroll = new BScroll(".wrap", {
                    scrollY: false,
                    scrollX: true,
                    click: true
                });
            });
        }
    }
</script>

<style lang="stylus" scoped>
.test
    .wrap
        width 90%
        overflow hidden
        ul 
            display inline-flex
            background lightgreen
            li
                width 50px
                height 50px
</style>