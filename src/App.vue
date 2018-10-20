<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
// import './style/common.css'
export default {
  name: 'app',
  data () {
    return {
    }
  }
}
</script>

<style>
body, div, span, ul, li, a, p, h1, h2, h3, h4,h5, h6, i, b, textarea, button, input{
  padding: 0;
  margin: 0;
  list-style: none;
  font-style: normal;
  text-decoration: none;
  border: none;
  font-weight: normal;
  font-family: "Microsoft Yahei";
  font-size: 14px;
  box-sizing: border-box;
  user-select: none;
  -webkit-tap-highlight-color:transparent;
  -webkit-font-smoothing: antialiased;
}
#app {

}
div{
  border: 1px solid #000000;
}
</style>
