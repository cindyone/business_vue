<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.alert{
    position: fixed;
    top: -30px;
    left: 50%;
    z-index: 100;
    margin-left: -200px;
    width: 400px;
    height: 30px;
    line-height: 30px;
    padding: 0;
    text-align: center;
}
.bottom{
    width: 100%;
    height: 30px;
    line-height: 30px;
    position: absolute;
    bottom: 0;
    display: flex;
    justify-content: space-between;
    padding: 0 20px;
    font-size: 14px;
}

</style>
