<template>
    <div class="jumbotron container">
        <div class="table">
            <div class="title">
                <div class="company">归心谷企业站</div>
                <div class="add" style="display: none;">添加岗位</div>
                <div class="login-out" style="display: none;">登出</div>
            </div>
            <div class="tab-cont">
                <h4>添加企业</h4>
                <form id="myForm" name="myForm" class="form form-horizontal">
                    <div class="basic-info">
                        <label for="">基础信息</label>
                        <div class="form-group container">
                            <div class="col-md-12">
                                <label class="col-sm-12 col-md-12">企业全称<span class="required">*</span></label>
                                <div class="col-md-6">
                                    <input type="text" name="fullName" class="com-fullName" autocomplete="off">
                                </div>
                            </div>
                            <div class="col-md-12 add-pad err exist hide" >该企业已存在！</div>
                            <div class="col-sm-12 col-md-6 add-pad">
                                <label class="">企业简称<span class="required">*</span></label>
                                <div class="">
                                    <input type="text" name="name" class="" id="" placeholder="" autocomplete="off">
                                </div>
                            </div>
                            <div class="col-sm-12 col-md-6 add-pad">
                                <label class="">英文名称<span class="required">*</span></label>
                                <div class="">
                                    <input type="text" name="enName" class="" id="" placeholder="" autocomplete="off">
                                </div>
                            </div>
                            <label class="col-md-1 col-sm-12 add-pad">Logo</label>
                            <div class="img-cont col-md-5 col-sm-6 add-pad">
                                <div class="upload-img-container">
                                    <img class="avatar-img" id="img" name="logo" src="../../assets/logo.png" width="80px" height="80px">
                                </div>
                                <div class="img-msg">
                                    <div class="img-txt">图片格式必须为：png，bmp，jpeg，jpg，gif; 不可大于2M;
                                        建议使用png格式图片，以保持最佳效果；建议图片尺寸为144px*144px
                                    </div>
                                    <div class="img-info">
                                        <button class="btn btn-default btn-xs" id="">上传</button>
                                        <input type="file" id="imgFile" accept="image/*" name="file" 
                                        onchange="fileUpload(this)" />
                                    </div>
                                </div>
                            </div>
                            <div class="err-format err col-sm-12 ol-md-12 add-pad hide">图片格式错误</div>
                            <div class="err-size err col-md-12 col-sm-12 add-pad hide">图片大小错误</div>
                            <label class="col-sm-12 col-md-12 add-pad">企业简介<span class="required">*</span></label>
                            <div class="col-sm-12 col-md-12 add-pad">
                                <textarea name="intro" id="" class="form-control" rows="5"></textarea>
                            </div>
                        </div>
                    </div>
                    <div id="accordion">
                        <div>
                            <p>
                                <span>联系方式</span><img class="unopen" src="../../assets/logo.png">
                            </p>
                            <div class="form-group">
                                <div class="col-sm-12 col-md-6 add-pad">
                                    <label class="">电话<span class="required">*</span></label>
                                    <div class="">
                                        <input type="text" name="phone" class="" id="" placeholder="">
                                    </div>
                                </div>
                                <div class="col-sm-12 col-md-6 add-pad">
                                    <label class="">邮箱<span class="required">*</span></label>
                                    <div class="">
                                        <input type="email" name="email" class="" id="" placeholder="">
                                    </div>
                                </div>
                                <div class="col-sm-12 col-md-12">
                                    <label class="col-md-12">网址<span class="required">*</span></label>
                                    <div class="col-md-6">
                                        <input type="text" name="website" class="" id="" placeholder="">
                                    </div>
                                </div>
                                <div class="form-group flex-bt col-md-6 col-ms-12">
                                    <div class="place">
                                        <label class="" for="name">国家</label>
                                        <div>
                                            <select class="control" name="country">
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="place">
                                        <label class="" for="name">省</label>
                                        <div>
                                            <select class="control" name="province">
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="place">
                                        <label class="" for="name">市</label>
                                        <div>
                                            <select class="control" name="city">
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="place">
                                        <label class="" for="name">区</label>
                                        <div>
                                            <select class="control" name="distrct">
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-12 col-md-12 add-pad">
                                    <label class="">地址<span class="required">*</span></label>
                                    <div class="">
                                        <input type="text" name="place" class="" id="" placeholder="">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <p>
                                <span>企业信息</span><img class="unopen" src="../../assets/logo.png">
                            </p>
                            <div class="form-group">
                                <div class="col-md-6 col-sm-12 add-pad">
                                    <label class="" for="name">企业性质<span class="required">*</span></label>
                                    <select class="col-md-12" name="">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </select>
                                </div>
                                <div class="col-md-6 col-sm-12 add-pad">
                                    <label class="" for="name">行业领域<span class="required">*</span></label>
                                    <select class="col-md-12" name="">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </select>
                                </div>
                                <div class="col-md-12 col-sm-12">
                                    <label class="col-sm-12 col-md-12">主营业务<span class="required">*</span></label>
                                    <div class="col-md-12">
                                        <textarea name="mainBusiness" id="" class="form-control" rows="5"></textarea>
                                    </div>
                                </div>
                                <div class="col-md-6 col-sm-12 add-pad">
                                    <label class="" for="name">企业规模<span class="required">*</span></label>
                                    <select class="col-md-12" name="scale">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </select>
                                </div>
                            </div>
                        </div>  
                        <div>
                            <p>
                                <span>经办人</span><img class="unopen" src="../../assets/logo.png">
                            </p>
                            <div class="form-group">
                                <div class="col-md-12">
                                    <label class="col-md-12">姓名<span class="required">*</span></label>
                                    <div class="col-md-6">
                                        <input type="text" class="" id="operName" name="operName" placeholder="" autocomplete="off">
                                    </div>
                                </div>
                                <div class="col-sm-12 col-md-6 add-pad">
                                    <label class="">电话<span class="required">*</span></label>
                                    <div class="">
                                        <input type="text" class="" id="operPhone" name="operPhone" placeholder="" autocomplete="off">
                                    </div>
                                </div>
                                <div class="col-sm-12 col-md-6 add-pad">
                                    <label class="">邮箱<span class="required">*</span></label>
                                    <div class="">
                                        <input type="email" class="" id="operEmail" name="operEmail" placeholder="" autocomplete="off">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="bottom">
                        <a class="btn btn-default return" type="button">返回登录</a>
                        <a class="btn btn-info" id="formInfo" type="button"
                         data-target="#myModal">添加企业</a>
                    </div>

                </form>
            </div>
        </div>

        <div class="modal fade" id="myModal" tabindex="-1" role="dialog"
         aria-labelledby="myModalLabel" aria-hidden="true">
            <div class="modal-content">
                    <h4 class="modal-title" id="myModalLabel">企业添加成功</h4>
                    <div class="modal-item">请设置登录密码</div>
                    <input class="modal-item" type="text" value="请输入密码" id="showPwd" />
                    <input class="modal-item" type="password" id="pwd" style="display: none"/>
                    <input class="modal-item" type="text" value="请重复密码" id="showPwd2" />
                    <input class="modal-item" type="password" id="pwd2" style="display: none"/>
                    <a type="button" id="pwdSet" class="modal-item btn btn-info">登录</a>
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

.table {
    margin: 0 auto;
    width: 800px;
    border: 1px solid #888;
}

.title {
    text-indent: 15px;
    border-bottom: 1px solid #888;
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

.tab-cont {
    padding: 20px;
}

.basic-info {
    border: 1px solid #888;
    position: relative;
}
.basic-info>label {
    height: 40px;
    line-height: 40px;
    margin: 0;
    padding-left: 20px;
}
.tab-cont p {
    font-size: 16px;
}

/* 表单 */
.form {
    /* border: 1px solid #888;
    padding: 10px; */
}
.form input {
    width: 100%;
}
.required {
    color: red;
}
.err {
    color: red;
    font-size: 12px;
}
.add-pad {
    padding: 0 15px 0 30px;
}
.form-group>div {
    padding-top: 10px;
}
.form-control {
    border: 1px solid rgb(163, 163, 163);
    border-radius: 0;
    width: 100%;
}
.form-group label {
    font-weight: 400;
    padding-top: 10px;
}

.avatar-img {
    border: 3px solid #ccc;
}
.logo {
    display: flex;
}
.img-cont {
    display: flex;
}
.img-msg {
    padding-left: 10px;
}
.img-txt {
    color: #ccc;
    font-size: 10px;
}
.img-info {
    position: relative;
}
.img-info>button {
    border: 1px solid #888;
    width: 60px;
    margin: 5px 0;
}
#imgFile {
    position: absolute;
    margin-top: 5px;
    top: 0;
    left: 0;
    opacity: 0;
    width: 60px;
    height: 20px;
    line-height: .8;
}

.bottom {
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
}
.bottom button {
    height: 35px;
    width: 100px;
    border-radius: 5px;
}

select {
    height: 26px;
}


/* 下拉菜单 */
#accordion {
    width: 100%;
}

#accordion>div {
    border: 1px solid #888;
    border-top: none;
    padding: 0 20px;
}

#accordion>div>p {
    width: 100%;
    height: 40px;
    text-align: center;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0;
}

#accordion>div>p>span {
    font-weight: 600;
    font-size: 14px;
}
#accordion>div>p>img {
    width: 18px;
    height: 18px;
}
.open {
    display: none;
}
.unopen {
    display: block;
}

#accordion>div>div {
    display: none;
}
#accordion>div:first-child>div{
    /* display: block; */
}

/* 模态框 */
.modal {
    padding-right: 0!important;
}
.modal-content {
    margin: 100px auto;
    width: 400px;
    height: 270px;
    border: 1px solid #000;
    border-radius: 0;
    box-shadow: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.modal-item {
    font-size: 12px;
    margin-top: 20px;
    text-align: center;
}
.modal-content>input {
    width: 280px;
    line-height: 28px;
}
.modal-content>a {
    width: 120px;
}



.control {
    width: 100%;
    height: 26px;
    box-sizing: border-box;
}
.flex-bt {
    display: flex;
    justify-content: space-between;
}
.place {
    width: 100%;
    height: 51px;
}

.place {
    padding-left: 0;
    padding-right: 15px;
}
.place:last-child{
    padding-right: 0;
}

#com-edit {
    position: absolute;
    right: 20px;
    top: 10px;
    font-size: 12px;
    z-index: 5;
}

</style>
