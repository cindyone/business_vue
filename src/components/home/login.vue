<template>
    <div>
        <div class="login">
            <div class="com-name items">
                <div class="item">
                    <div class="item-img">
                        <img src="../../assets/logo.png" alt="" width="50px" height="50px">
                    </div>
                    <div class="item-text">
                        <label for="">{{item.fullName}}</label>
                        <div class="area">{{item.country.name}}&nbsp;&nbsp;{{item.province.name}}&nbsp;&nbsp;{{item.city.name}}&nbsp;&nbsp;{{item.district.name}}</div>
                        <div class="address">{{item.address}}</div>
                    </div>
                </div>
            </div>
            <div class="form-group">
                <input ref="passWord" placeholder="请输入密码" type="password" v-model="passWord" />
                <input type="button" id="login" class="btn btn-info" @click="login" value="登录">
            </div>
        </div>
        <div class="bottom">
            <div>
                <router-link to="addCompany">不是该企业？</router-link>
            </div>
            <div>
                <router-link to="addCompany">忘记密码？</router-link>
            </div>
        </div> 
    </div>
</template>

<script>
import bus from '../../utils/bus';
export default {
    data() {
        return {
            passWord: '',
            item: {
                "id": 0,
                "fullName": "江苏五水环境工程有限公司",
                "logo": "huanbao.png",
                "address": "南莫镇建设东路3号（镇政府东侧）",
                "country": {
                    "id": "156", 
                    "name": "中国"
                },
                "province": {
                    "id": "320000",
                    "name": "江苏省"
                },
                "city": {
                    "id": "320600",
                    "name": "南通市"
                },
                "district": {
                    "id": "320621",
                    "name": "海安县"
                }
            }
        }
    },
    created() {

    },
    beforeDestroy() {},
    mounted() {},
    methods: {
        login() {
            let self = this
            var passWord = this.passWord
            if(passWord==''||passWord=='请输入密码'){
                bus.$emit('alertMsg','密码不能为空！')
            }else {
                self.$store.dispatch('_login')
                bus.$on('login',function(data){
                    self.$router.push('/loginIndex?id='+data[0].id)
                })
            }
        }
    }
}
</script>

<style scoped>
.com-name {
    border-bottom: 1px solid #888888;
}

.item {
    height: 100px;
    padding: 10px 0;
    display: flex;
    justify-content: flex-start;
}

.item-img {
    border-radius: 50px;
    width: 60px;
    height: 60px;
    margin: 10px 20px;
    background-color: #ccc;
    overflow: hidden;
}

.item-img img {
    margin: 5px;
}

.item-text {
    width: 300px;
    text-align: start;
}

.item-text label {
    padding-top: 5px;
    font-size: 16px;
}

.form-group {
    padding: 50px 60px;
    border-bottom: 1px solid #888;
}

.form-group>input {
    height: 40px;
    width: 100%;
    text-align: center;
    outline: none;
}

.btn {
    margin-top: 30px;
    height: 40px;
    width: 100%;
}
</style>
