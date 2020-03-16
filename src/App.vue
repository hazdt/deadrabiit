<template>
  <div id="app">
    <game-box></game-box>
  </div>
</template>

<script>
  import GameBox from './components/gamebox.vue';

export default {
  name: 'app',
  components: {
    GameBox
  }
}
</script>

<style lang="less">
  * {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  body,h1,h2,h3,h4,h5,h6,ul,ol,li,p,form,dt,dd,input,textarea,th,td,fieldset,legend,dl,dt,dd,figure{margin:0;padding:0;}
  fieldset,img{border:0 none}
  ul,ol,li{list-style:none}
  table{border-spacing:0}
  input,textarea,select{font-family:inherit;font-size:inherit;font-weight:inherit}
  *:focus{outline:none}
  q:before,q:after{content:""}
  h1,h2,h3,h4,h5,h6{font-size:100%;font-weight:normal}
  body,input,select,button,textarea{font:16px/1.5 Arial,Helvetica,sans-serif;}
  *,*:after,*:before{-webkit-user-select:none;-webkit-touch-callout:none;-ms-user-select: none;-webkit-tap-highlight-color:rgba(255,255,255,0);}
  html,body{background:#fff;color:#000;}
  table{border-collapse:collapse;border-spacing:0;}
  input,textarea{ border:1px solid #b8b7b3;-webkit-user-select:auto;}
  em{font-style:normal;font-weight:normal}
  sub, sup {font-size:75%;line-height:0;position:relative;vertical-align: baseline}
  sup {top: -0.5em}
  sub {bottom: -0.25em}
  img{vertical-align:top;max-width:100%;}
  a{text-decoration:none;color:#000;}
  html,body{font-family:Arial,"微软雅黑";}
  canvas{display:block;padding:0;margin:0;}
  pre{white-space:pre-wrap;word-wrap:break-word;margin:0;}
  label{font-weight: normal;}
  i{font-style: normal;}
  /* tool */
  .fl{float:left;}
  .fr{float:right;}
  .clear:before,.clear:after{content:"";display:block;clear:both;height:0;line-height:0;overflow:hidden;font-size:0;}
  .indent{text-indent:2em;}
  .posfixed{z-index: 9999;position:fixed;top: 0;left: 0;width: 100vw;height: 100vh;background: rgba(0,0,0,.5);}
  .perfect_center {
    z-index: 1;
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    -o-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }
  .perfect_center_y {
    z-index: 10000;
    position: absolute;
    top: 50%;
    -webkit-transform: translateY(-50%);
    -moz-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    -o-transform: translateY(-50%);
    transform: translateY(-50%);
  }
  .perfect_center_x {
    z-index: 10000;
    position: absolute;
    left: 50%;
    -webkit-transform: translateX(-50%);
    -moz-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    -o-transform: translateX(-50%);
    transform: translateX(-50%);
  }
  .perfect_center_b:before,
  .perfect_center_a:after {
    content: '';
    z-index: 1;
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    -o-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }
  .beyond_2line_omit {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
  }
  /* 文字高度为100%时的垂直居中 */
  .h_percent_perfect_center {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-box-pack: center;
    display: -moz-box;
    -moz-box-orient: vertical;
    -moz-box-pack: center;
    height: 100%;
  }
  
  #app {
    position: relative;
    width: 100vw;
    height: 100vh;
    background-color: #000;
    overflow: hidden;
  }
</style>
