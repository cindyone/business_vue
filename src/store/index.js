import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);
import axios from 'axios'
import bus from '../utils/bus'; 

const store = new Vuex.Store({
    state: {
        // url: "business.homevalley.net",
        // url: "http://127.0.0.1/member",
        url: "http://localhost:4040/static"
    },
    mutations: {
    },
    actions: {
        // 搜索企业名称
        _searchName (context,data) {
            // axios.get(context.state.url+'/user_statistics_phone.php',data)
            axios.get(context.state.url+'/data.json')
            .then( res => {
                bus.$emit('searchName',res.data.rows)
                // console.log('hahahh'+'测试'+res.data.rows[0].fullName)
            })
            .catch( err => {
                console.log(err)
            })
        },
        // 进入登录页面
        _enterLogin (context,id) {
            axios.get(context.state.url+'/data.json',id)
            .then( res => {
                bus.$emit('enterLogin',res.data.rows[2])
                console.log(JSON.stringify(res.data.rows[id]))
                console.log(res.data.rows[2])
                console.log(res.data.rows[0].id)
            })
            .catch( err => {
                console.log(err)
            })
        },
        // 登录
        _login (context,id) {
            axios.get(context.state.url+'/data.json',id)
            .then( res => {
                bus.$emit('login',res.data.rows)
                console.log('hahahh'+'测试'+JSON.stringify(res.data.rows[id]))
            })
            .catch( err => {
                console.log(err)
            })
        }
    }
});
export default store
