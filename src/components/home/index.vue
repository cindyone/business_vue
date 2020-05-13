<template>
  <div class="hello">
    <div class="alert alert-danger aninated empty" role="alert">企业名称不能为空！</div>
    <div class="alert alert-danger new" role="alert">该企业不存在，请点击新企业注册！</div>
     
    <div class="alsrtInfo" :style="{display: displayStates}" ref="alertMsg">
        <div class="profPrompt_test">{{alertMsg}}</div>
    </div>

    <div class="total">
        <div class="title">
            <h1>归心谷企业站</h1>
        </div>
        <div class="search">
            <div class="sear">
                <router-view></router-view>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
    import bus from '../../utils/bus'; 
    export default {
        data() {
            return {
                path: '',
                alertMsg: '',
                displayStates: 'none'
            }
        },
        created() {
            bus.$on('alertMsg', this.handleData)
        },
        beforeDestroy() {
            bus.$off('alertMsg')
        },
        mounted() {
            this.$router.push('./search')
            
                this.path = this.$route.path
                console.log(this.path)
        },
        methods: {
            handleData(data){
                // this.common.alertDia(data)                
                this.displayStates = 'block'
                this.alertMsg = data
                // 延迟2秒后消失
                window.setTimeout(() => {
                  this.displayStates = 'none'
                }, 1000)
            },
            getPath() {
            }
        }
    }
</script>

<style lang="scss" scoped>
/* 提示信息 */
  .alsrtInfo{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 10;
    // background: rgba(0, 0, 0, 0.1);
    .profPrompt_test{
      padding: 30px 10px;
      width: 480px;
      overflow: hidden;
      line-height: 28px;
      border: 1px solid #888;
      color: red;
      position: absolute;
      background-color: #fbfbfb;
      top: 370px;
      left: 50%;
      font-size: 14px;
      font-family: Gotham-Book;
      opacity: 1;
      z-index: 10000;
      text-align: center;
      transform: translate(-50%, -50%);
    }
  }
 


.total{
    width: 800px;
    margin: 80px auto;
    background: #fff;
    border: 1px solid #888;
    padding: 40px;
}
.title{
    text-align: center;
    /* margin: 40px 0; */
}
.title h1{
    font-size: 36px;
    margin: 0 0 60px 0;
}
.search{
    position: relative;
    margin: 0 auto;
    width: 450px;
    height: 350px;
    box-sizing: border-box;
    border: 1px solid #888 ;
    margin-bottom: 50px;
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
.sear {
    width: 100%;
    height: 350px;
}
</style>
