<template>
    <div>
        <div class="list" id="list" style="overflow:auto;">
            <div v-for="item in items" class="item">
                <div class="item-img">
                    <img src="../../assets/logo.png" alt="" width="50px" height="50px">
                </div>
                <div class="item-text">
                    <label for="">{{item.fullName}}</label>
                    <div class="area">{{item.country.name}}&nbsp;&nbsp;{{item.province.name}}&nbsp;&nbsp;{{item.city.name}}&nbsp;&nbsp;{{item.district.name}}</div>
                    <div class="address">{{item.address}}</div>
                </div>
                <div class="item-btn"><input type="button" class="login" :key="item.id" value="登录>"/></div>
            </div>
        </div>
    </div>
</template>

<script>
    import bus from '../../utils/bus'
    export default {
        data() {
            return {
                items: []
            }
        },
        created() {
            var self = this
            self.$store.dispatch('_searchName')
            bus.$on('searchName',function(data){
                self.items = data
                console.log(self.items)
            })
        },
        mounted() {
        },
        methods: {
        },
        beforeDestroy() {
        }
    }
</script>

<style scoped>
.list{
    border-bottom: 1px solid #888;
    width: 450px;
    height: 320px;
    margin: 0 auto;
}
.item {
    border-bottom: 1px solid #888;
    border-right: 1px solid #888;
    height: 80px;
    padding: 5px 0;
    display: flex;
    justify-content: flex-start;
}
.item-img{
    border-radius: 50px;
    width: 60px;
    height: 60px;
    margin: 10px 20px;
    background-color: #ccc;
    overflow: hidden;
}
.item-img img{
    margin: 5px;
}
.item-text{
    text-align: left;
    width: 300px;
}
.item-text label{
    padding-top: 5px;
    font-size: 16px;
}
.item-btn{
    width: 70px;
    line-height: 70px;
    padding-right: 10px;
}
.item-btn input {
    border: none;
    background: transparent;
    font-size: 20px;
    outline: none;
}
.item-btn a{
    float: right;
    color: #000;
    font-size: 20px;
}
</style>

