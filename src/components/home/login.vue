<template>
    <div class="login">
        <div class="com-name items">
            <div class="item">
                <div class="item-img">
                    <img src="../../assets/logo.png" alt="" width="50px" height="50px">
                </div>
                <div class="item-text">
                    <label for="" class="company-name">企业名称</label>
                    <div class="area">中国&nbsp;&nbsp;上海市&nbsp;&nbsp;上海市&nbsp;&nbsp;杨浦区</div>
                    <div class="address">中国&nbsp;&nbsp;上海市&nbsp;&nbsp;上海市&nbsp;&nbsp;杨浦区</div>
                </div>
            </div>
        </div>
        <div class="form-group">
            <input ref="passWord" placeholder="请输入密码" type="password" v-model="passWord"/>
            <input type="button" id="login" class="btn btn-info" value="登录">
        </div>
    </div>
</template>

<script></script>

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
    width: 200px;
    text-align: start;
}
.item-text label{
    padding-top: 5px;
    font-size: 16px;
}

.form-group {
    padding: 40px 60px;
}
.form-group>input {
    height: 40px;
    width: 100%;
    text-align: center;
}
.btn {
    margin-top: 50px;
    height: 40px;
    width: 100%;
}

</style>
