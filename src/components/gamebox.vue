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
    <img class="rabbit perfect_center" :style="rabbitRotate" src="../images/rabbit.png" alt="">
    <!--<div
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
    </button>-->

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
        way:[
          [2, 2], [3, 2], [4, 2], [5, 2], [6, 2], [7, 2]
        ],
        mapDataOrigin: {
          transform: 'translate(0, 0)'
        },
        show: true,
        rabbitRotate: {}
      }
    },
    computed: {

    },
    watch: {

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
      },
      updateOrigin:function (key, point, rotate) {
        var that = this;
        this.nowPoint = point;
        this.mapDataOrigin = {transform: 'translate('+ (point[0] - 2) * 150 + 'px, '+ (point[1] - 2) * 150 + 'px)'};
        if(key == 37 || key == 38 || key == 39 || key == 40){
          var rotate = 'translate(-50%, -50%) rotate('+ rotate +'deg)'
          this.rabbitRotate = {transform: rotate + ' scaleX(0.5)'};
          setTimeout(function () {
            that.rabbitRotate = {transform: rotate};
            that.judgment();
          },100)
        }
      },
      judgment: function () {
        console.log('this.nowPoint-->>>',this.nowPoint);
        console.log('this.list-->>>', this.list);
        // 地图列表
        const list = this.list;
        // 正确路线
        const way = this.way;
        // 默认位置
        const origin = this.origin;
        // 当前位置
        const nowPoint = this.nowPoint;
        // 转换成list数组对应的下标
        const pos = [2 * origin[1] - nowPoint[1], 2 * origin[0] - nowPoint[0]];
        console.log(pos);
        // 获取当前位置及其周围的值
        /*const pos_val = {
          // 上
          t: list[pos[1] - 1][pos[0]],
          // 右
          r: list[pos[1]][pos[0] + 1],
          // 下
          b: list[pos[1] + 1][pos[0]],
          // 左
          l: list[pos[1]][pos[0] - 1],
          // 中间
          m: list[pos[1]][pos[0]]
        };*/
        list[pos[0]][pos[1]] *= 1;
        this.list = list;
        let status = false;
        for (let i in way) {
          const item = way[i];
          status = pos[0] === item[0] && pos[1] === item[1];
          if (status) {
            break;
          }
        }
        if (status) {
          const lastPoint = way[way.length-1];
          if(lastPoint[0] === pos[0] && lastPoint[1] === pos[1]){
            setTimeout(function () {
              alert('通过');
            }, 100)
          }
        } else {
          setTimeout(function () {
            alert('游戏结束！');
          }, 100)
        }
      }
    },
    created(){
    
    },
    mounted() {
      const that = this;
      let point = this.nowPoint;
      document.onkeydown = function (e) {
        let e1 = e || event || window.event || arguments.callee.caller.arguments[0]
        let key = e1.keyCode;

        var rotate = 0;
        switch (key) {
          case 37:
            // 左
            point[0] += 1;
            rotate = 90;
            break;
          case 38:
            // 上
            point[1] += 1;
            rotate = 180;
            break;
          case 39:
            // 右
            point[0] -= 1;
            rotate = -90;
            break;
          case 40:
            // 下
            point[1] -= 1;
            rotate = 0;
            break;
        }
        that.updateOrigin(key, point, rotate);
      }
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
      transform-origin: center center;
    }
  }
</style>
