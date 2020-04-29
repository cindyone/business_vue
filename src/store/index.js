import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);
import axios from 'axios'
import bus from '../utils/bus'; 

const store = new Vuex.Store({
    state: {
        // url: "business.homevalley.net"
        url: "http://127.0.0.1/member",
    },
    mutations: {
    },
    actions: {
        // 搜索企业名称
        _searchName (context,data) {
            // axios.get(context.state.url+'/user_statistics_phone.php',data)
            axios.get('http://localhost:4040/static/data.json')
            .then( res => {
                bus.$emit('searchName',res.data.rows)
                console.log('hahahh'+'测试'+res.data.rows[0].fullName)
            })
            .catch( err => {
                console.log(err)
            })
        }
    }
});
export default store
