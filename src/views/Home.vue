<template>
  <div class="box" ref="name"  style="width:100px">shouye</div>
</template>

<script>
export default {
  data(){
    return{
      data: {
        isActive: true,
        
      }
    }
  },
  mounted() {
    // console.log(this.$refs.name.style.width)
  }
}
</script>

<style>
.box{
  width:200px;
  height:400px;
  background:red;
  color:white;
}
.active{
  color:blue;
}
</style>