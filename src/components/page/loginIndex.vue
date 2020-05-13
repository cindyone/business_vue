<template>
    <div>
        <div class="jumbotron container">
        <div class="table">
            <div class="title">
                <div class="company">归心谷企业站</div>
                <div class="add">添加岗位</div>
                <div class="login-out">登出</div>
            </div>
            <div class="com-container">
                <a id="com-edit">修改企业信息</a>
                <div class="com-addr container">
                    <div class="col-md-2 com-logo"><img src="../../assets/logo.png" alt=""></div>
                    <div class="col-md-10">
                        <div class="com-addr-name">
                            <h3>${p.enName}</h3>
                            <h4>${p.fullName}</h4>
                            <h4>${p.name}</h4>
                        </div>
                        <div class="com-addr-cont">公司简介内容${p.intro}</div>
                    </div>
                </div>
                <div class="com-contact container">
                    <div class="col-md-4">电话<span>${p.phone}</span></div>
                    <div class="col-md-4">邮箱<span>${p.email}</span></div>
                    <div class="col-md-4">网址<span>${p.website}</span></div>
                    <div class="col-md-12">地址<span>${p.country.name}</span>国<span>${p.province.name}</span>省<span>${p.city.name}</span>市<span>${p.district.name}</span>区<span>${p.address}</span></div>
                </div>
                <div class="com-properties container">
                    <div class="col-md-6">企业性质<span>xxx</span></div>
                    <div class="col-md-6">行业领域<span>xxxxxxxxxx</span></div>
                    <div class="col-md-12">主营业务</div>
                    <div class="col-md-12">${p.mainBusiness}</div>
                    <div class="col-md-12">企业规模<span>${p.scale} </span></div>
                </div>
                <div class="com-operitor container">
                    <label class="col-md-12">经办人</label>
                    <div class="col-md-4">姓名<span>xxx</span></div>
                    <div class="col-md-4">电话<span>xxxxxxx</span></div>
                    <div class="col-md-4">邮箱<span>xxxxxxx</span></div>
                </div>
                <div class="com-position container">
                    <div class="com-position-cont">
                        <label>招聘岗位</label>
                        <div class="position-cont">
                            <label>暂无岗位信息</label>
                            <a class="btn btn-default" id="addPosition" role="button">添加岗位</a>
                        </div>
                    </div>
                </div> 
            </div>
            
            <div style="overflow-y:auto; overflow-x:auto; width:100%; height:625px;" class="more">
                <div class="more-head">
                    <h4>招聘职位</h4>
                    <a class="btn btn-default" role="button">添加职位</a>
                </div>
                <div class="mainDiv">
                    <!--<div class="item">
                        <div class="title">title</div>
                        <div class="content">content content content content content content content</div>
                    </div>
                    -->
                </div>
                <div class="loaddiv">
                    <img width="50px" height="50px" src="../../assets/logo.png" />
                </div>
                <div class="alink">
                    <a href="javascript:void(0);" id="btn_Page">查看更多>>></a>
                </div>
                
            </div>
        </div>
    </div>
    </div>
</template>

<script>
    export default {
        mounted() {
            
        }
    }
</script>

<style scoped>
.jumbotron {
    background: #fff;
}

.table {
    margin: 0 auto;
    width: 800px;
    /* height: 1000px; */
    border: 1px solid #888;
}

.title {
    height: 40px;
    border-bottom: 1px solid #888;
    display: flex;
    justify-content: center;
    align-items: center;
}

.title .company {
    text-indent: 15px;
    font-size: 25px;
    font-weight: 700;
    width: 600px;
}

.title .add {
    width: 120px;
    line-height: 40px;
    text-align: center;
    border-left: 1px solid #888;
    border-right: 1px solid #888;
}

.title .login-out {
    width: 40px;
    margin: 0 20px;
    border: 1px solid #888;
    text-align: center;
    color: red;
}

.com-container{
    position: relative;
    padding-top: 15px;
}
#com-edit {
    position: absolute;
    right: 20px;
    top: 10px;
    font-size: 12px;
    z-index: 5;
}

.com-container>div {
    border-bottom: 1px solid #888;
    padding: 15px 20px;
}

.com-addr-name h4{
    padding-top: 5px;
}
.com-addr-cont {
    font-size: 12px;
}
.com-container>div>div {
    /* padding-top: 10px; */
}
.com-container>div>div>span {
    padding-left: 10px;
}

.com-logo {
    padding: 0px;
}
.com-logo img {
    width: 100%;
    height: 100%;
    max-width: 130px;
    max-height: 130px;
    border: 8px solid #ccc;
}

.com-position-cont {
    padding: 10px;
    border: 1px solid #888; 
}
.com-position-cont>label {
    font-size: 18px;
}
.position-cont {
    padding: 100px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.position-cont>a {
    margin-top: 20px;
    width: 120px;
    font-size: 12px;
    border: 1px solid #888;
}

/* 带岗位 */
.more {
    margin-top: 30px;
    border-top: 1px solid #888;
    box-sizing: border-box;
}

.more-head {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 5px 10px;
}

.more-head a {
    margin: 0 20px;
    font-size: 12px;
    width: 100px;
}

.mainDiv {
    width: 100%;
    border-top: solid 1px #888;
    border-right: solid 1px #888;
}

.item {
    width: 100%;
    /* height: 150px; */
    border-bottom: solid 1px #888;
    font-size: 12px;
    padding: 15px 20px;
    /* margin: 10px; */
}
.item-child {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.pos-title {
    font-size: 16px;
    line-height: 20px;
}

.btn {
    padding: 5px 10px;
}

.pos-content a {
    border: 1px solid #888;
    border-radius: 5px;
    display: inline-block;
    width: 60px;
    text-align: center;
}
.item-children {
    line-height: 25px;
}
.alink{
    display:none;
    text-align: center;
}
.loaddiv{
   display:none; 
   text-align: center;
}

</style>