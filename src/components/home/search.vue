<template>
    <div class="search-cont">
        <div class="form-group">
            <input type="text" class="form-control" v-model="fullName"
             @keyup.enter="search" @blur="onBlur" @focus="onFocus">
        </div>
        <div class="btn">
            <input type="button" value="搜索" @click="search">
        </div>
    </div>    
</template>

<script>
    import bus from '../../utils/bus'
    import data from '../../utils/data' 
    export default {
        data() {
            return {
                fullName: '点击输入企业全称',
                msg: '输入信息不能为空！',
            }
        },
        mounted() {
        },
        methods: {
            onFocus() {
                if(this.fullName == '点击输入企业全称')
                this.fullName = ''
            },
            onBlur() {
                if(this.fullName == ''){
                    this.fullName = '点击输入企业全称'
                }
            },
            search() {
                console.log(this.fullName)
                let self = this
                var name = self.fullName
                if(name=='点击输入企业全称'||name==''){
                    bus.$emit('alertMsg','输入内容不能为空！')
                }else {
                    self.$store.dispatch('_searchName')
                    bus.$on('searchName',function(data){
                        if(data.length == 1){
                            self.$router.push('/login?id='+data[0].id)
                        }else{
                            self.$router.push('/searchResult?keyword='+name)
                        }
                    })
                }
            }
        },
        beforeDestroy() {
            this.$bus.off('searchName')
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
/* 提示信息 */

.search-cont {
    position: relative;
    margin: 0 auto;
    width: 70%;
    height: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
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
