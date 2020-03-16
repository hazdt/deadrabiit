<template>
  <span class="square_box perfect_center_b" :class="{'hover':status}">{{num}}</span>
</template>

<script>
  export default {
    name: 'square',
    components: {},
    props: {
      num:null,
      status: Boolean
    },
    data() {
      return {}
    },
    computed: {},
    beforeMount() {
    
    },
    beforeDestroy() {
    
    },
    watch: {},
    methods: {}
  }
</script>

<style scoped lang="less">
.square_box{
  float: left;
  position: relative;
  width: 150px;
  height: 150px;
  line-height: 150px;
  border: 2px solid #000;
  background-color: rgba(255,255,255,.5);
  text-align: center;
  color: #fff;
  font-size: 30px;
  font-weight: 900;
  opacity: 0;
  &:before{
    width: 130px;
    height: 130px;
    border: 2px solid #000;
  }
  &.hover{
    opacity: 1;
  }
}
</style>
