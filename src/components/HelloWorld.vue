<template>
  <div class="hello">
    <div class="alert alert-danger empty" role="alert">企业名称不能为空！</div>
    <div class="alert alert-danger new" role="alert">该企业不存在，请点击新企业注册！</div>
 
    <div class="jumbotron container">
        <div class="title">
            <h1>归心谷企业站</h1>
        </div>
        <form class="search">
            <div class="form-group">
                <input type="text" name="inputName" value="点击输入企业全称" class="form-control" id="inputName"
                 onFocus="if (value =='点击输入企业全称'){value =''}" onBlur="if (value ==''){value='点击输入企业全称'}">
            </div>
            <div class="btn">
                <input type="button" value="搜索">
            </div>
            <a href="addCompany.html" class="tip">新企业？</a>
        </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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

.jumbotron{
    min-height: 710px;
}
.title{
    text-align: center;
    margin: 60px 0;
}
.title h1{
    font-size: 40px;
}
.search{
    position: relative;
    margin: 0 auto;
    padding: 80px;
    width: 500px;
    height: 400px;
    border: 1px solid #888 ;
}
.form-group{
    margin-top: 50px;
}
.search input{
    text-align: center;
}
.search .btn{
    width: 100%;
    margin-top: 20px;
    padding: 0;
    background-color: #4e79f0;
    box-sizing: border-box;
}
.btn input{
    width: 100%;
    padding: 6px 12px;
    background-color: transparent;
    outline: none;
    box-sizing: border-box;
    border: none;
    color: #fff;
}
.tip{
    position: absolute;
    left: 30px;
    bottom: 10px;
    font-size: 14px;
}

</style>
