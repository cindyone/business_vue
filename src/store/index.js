import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);
import axios from 'axios'
import bus from '../utils/bus'; 

const store = new Vuex.Store({
    state: {
        // url: "business.homevalley.net"
        url: "http://127.0.0.1/member",
        
        test01: {
            name: 'Wise Wrong'
        },
        test02: {
            tell: '12312345678'
        }
   
    },
    mutations: {
        //接口
        // 搜索企业全称
        // _searchName(state,data){
        //     $.ajax({
        //         type: "GET",
        //         dataType: "json",
        //         url: state.url + '/user_statistics_phone.php',
        //         success: function(res) {
        //             console.log(res);
        //             this.$bus.emit('set_pc_data', res);
        //         },
        //         error: function(res) {},
        //     });
        // }
    },
    actions: {
        // 搜索企业名称
        _searchName (context,data) {
            axios.get(context.state.url+'/user_statistics_phone.php',data)
            .then( res => {
                bus.$emit('_searchName',res.data)
            })
            .catch( err => {
                console.log(err)
            })
        }
    }
});
export default store
