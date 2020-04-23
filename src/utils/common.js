
export default {
    // 提示信息
    alertDia (msg) {
        this.displayStates = 'block'
        this.alertMsg = msg
        console.log('测试成功')
        // 延迟2秒后消失
        window.setTimeout(() => {
          this.displayStates = 'none'
        }, 2000)
    },
    getErr () {
        console.log('test')
    }
  }