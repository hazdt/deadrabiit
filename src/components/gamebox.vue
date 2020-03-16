<template>
  <div class="gamebox" id="gameBox">
    <div class="move_box" :style="mapDataOrigin">
      <template v-for="item in list">
        <template v-for="val in item">
          <square :num="val" :status="typeof val === 'number'"></square>
        </template>
        <br>
      </template>
    </div>
    <img class="rabbit perfect_center" src="../images/rabbit.png" alt="">
    <div
      v-show="show"
      v-hotkey="{
        'esc': onClose,
        'ctrl+enter': onShow
      }"
    >
  	  Press `esc` to close me!
    </div>
    <button v-clipboard="Copy_to_clipboard">
      Copy to clipboard
    </button>
    
  </div>
</template>

<script>
  import square from './square.vue';
  
  export default {
    name: 'gamebox',
    components: {
      square
    },
    props: {},
    data: function () {
      return {
        // 起点
        origin: [2, 2],
        // 当前位置点
        nowPoint: [2, 2],
        // 终点
        terminus: [5, 2],
        // 地图位置样式
        mapStyle: {},
        // 地图
        list: [
          ['0', '0', '0', '0', '0'],
          ['0',  0 ,  1 ,  0 , '0'],
          ['0',  1 ,  1 ,  1 , '0'],
          ['0',  1 ,  2 ,  1 , '0'],
          ['0', '1', '2', '1', '0'],
          ['0', '1', '2', '1', '0'],
          ['0', '1', '1', '1', '0'],
          ['0', '0', '1', '0', '0'],
        ],
        mapDataOrigin: {
          transform: 'translate(0, 0)'
        },
        show: true
      }
    },
    computed: {
    
    },
    watch: {
      nowPoint:function (n,o) {
        console.log(n,o);
        console.log('nowPoint');
        this.mapDataOrigin = {
          transform: 'translate(-'+ (this.nowPoint[0] - 2) * 150 + 'px, -'+ (this.nowPoint[1] - 2) * 150 + 'px)'
        }
      }
    },
    created(){
      const that = this;
      console.log('that.nowPoint-->>>',that.nowPoint);
      let point = this.nowPoint;
      document.onkeydown = function (e) {
        let e1 = e || event || window.event || arguments.callee.caller.arguments[0]
        let key = e1.keyCode;
        switch (key) {
          case 37:
            // 左
            point[1] += 1;
            break;
          case 38:
            // 上
            point[0] -= 1;
            break;
          case 39:
            // 右
            point[1] -= 1;
            break;
          case 40:
            // 下
            point[0] += 1;
            break;
        }
        that.nowPoint = point;
        console.log(that.nowPoint);
      }
    },
    methods: {
      onClose:function () {
        this.show = false;
      },
      onShow:function () {
        this.show = true;
      },
      Copy_to_clipboard:function () {
        return 'zyy张延勇hazdt_ziang'
      }
    },
    mounted() {
    
    }
  }
</script>

<style scoped lang="less">
  .gamebox {
    z-index: 1;
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    -o-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    width: 750px;
    height: 750px;
    overflow: hidden;
    
    .move_box {
      position: absolute;
      top: 0;
      left: 0;
      -webkit-transition: all .3s;
      -moz-transition: all .3s;
      -ms-transition: all .3s;
      -o-transition: all .3s;
      transition: all .3s;
    }
    
    .rabbit {
      z-index: 2;
    }
  }
</style>
