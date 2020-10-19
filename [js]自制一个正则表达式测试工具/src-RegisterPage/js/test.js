var userAccount = document.querySelector("#userAccount"),//获取用户名
    userPass = document.querySelector("#userPass"),//获取密码
    userPass_ = document.querySelector("#userPass_"),//获取确认密码
    userName = document.querySelector("#userName"),//获取姓名
    information = document.querySelector("#information"),//获取身份证号码
    email = document.querySelector("#email"),//获取邮箱号码
    telephone = document.querySelector("#telephone"),//获取手机号码
    items = document.querySelectorAll(".item_"),//获取所有提示文段的下标
    aCho = document.querySelector("#choose"), oBtn = document.querySelector("#handup");
var test1 = false, test2 = false, test3 = false, test4 = false, test5 = false, test6 = false, test7 = false
    ;
userAccount.onfocus = function () {
    items[0].innerHTML = "6-30位字母、数字或'_'";
    items[0].style.color = "green";
};
userAccount.onblur = function () {
    var reg = /^\w{6,30}$/;
    if (this.value == "") {
        items[0].innerHTML = "请您务必写入用户名!";
        items[0].style.color = "red";
    } else {
        if (!reg.exec(userAccount.value)) {
            items[0].innerHTML = "6-30位字母、数字或'_'";
            items[0].style.color = "red";
        } else {
            items[0].innerHTML = "格式正确";
            items[0].style.color = "green";
            test1 = true;
        }
    }
};
//-------------------------------------------------------------账号结束;
userPass.onfocus = function () {
    items[1].innerHTML = "6-20位字母,数字或符号";
    items[1].style.color = "green";
};
userPass.onblur = function () {
    var reg = /^\w{6,20}$/;
    if (this.value == "") {
        items[1].innerHTML = "请您务必写入密码!";
        items[1].style.color = "red";
    } else {
        if (!reg.exec(userPass.value)) {
            items[1].innerHTML = "请输入6-20位字母,数字或符号";
            items[1].style.color = "red";
        } else {
            items[1].innerHTML = "格式正确";
            items[1].style.color = "green";
            test2 = true;
        }
    }
};
/*------------------------------------------------------------------密码结束*/
userPass_.onfocus = function () {
    items[2].innerHTML = "请确认两次密码相同";
    items[2].style.color = "green";
};
userPass_.onblur = function () {
    if (this.value == "") {
        items[2].innerHTML = "请务必再次确认密码";
        items[2].style.color = "red";
    } else {
        if (this.value != userPass.value) {
            items[2].innerHTML = "两次密码不相同";
            items[2].style.color = "red";
        } else {
            items[2].innerHTML = "格式正确";
            items[2].style.color = "green";
            test3 = true;
        }
    }
};
/*-----------------------------------------------------------------------确认密码结束*/
userName.onfocus = function () {
    items[3].innerHTML = "请输入您的中文名字";
    items[3].style.color = "green";
};
userName.onblur = function () {
    var reg = /^[\u4e00-\u9fa5]{2,5}$/;
    if (this.value == "") {
        items[3].innerHTML = "请务必写入您的姓名";
        items[3].style.color = "red";
    } else {
        if (!reg.exec(userName.value)) {
            items[3].innerHTML = "请输入中文名并确认是正确格式";
            items[3].style.color = "red";
        } else {
            items[3].innerHTML = "格式正确";
            items[3].style.color = "green";
            test4 = true
        }
    }
};
//---------------------------------------------------------------------------------姓名结束
information.onfocus = function () {
    items[4].innerHTML = "请输入您的身份证号码";
    items[4].style.color = "green";
};
information.onblur = function () {
    var reg = /^\d{17}[0-9x]$/;
    if (this.value == "") {
        items[4].innerHTML = "请您务必写入身份证号码!";
        items[4].style.color = "red";
    } else {
        if (!reg.exec(information.value)) {
            items[4].innerHTML = "请输入身份证号码正确格式";
            items[4].style.color = "red";
        } else {
            items[4].innerHTML = "格式正确";
            items[4].style.color = "green";
            test5 = true;
        }
    }
};
//------------------------------------------------------------------------身份证号码结束
email.onfocus = function () {
    items[5].innerHTML = "请输入您邮箱的正确格式";
    items[5].style.color = "green";
};
email.onblur = function () {
    var reg = /^\w+@\w+\.[a-zA-Z_]{2,4}$/;
    if (this.value == "") {
        items[5].innerHTML = "请您务必写入邮箱!";
        items[5].style.color = "red";
    } else {
        if (!reg.exec(email.value)) {
            items[5].innerHTML = "请输入邮箱正确格式";
            items[5].style.color = "red";
        } else {
            items[5].innerHTML = "格式正确";
            items[5].style.color = "green";
            test6 = true;
        }
    }
};
//----------------------------------------------------------------------邮箱结束
telephone.onfocus = function () {
    items[6].innerHTML = "请输入您的手机号码";
    items[6].style.color = "green";
};
telephone.onblur = function () {
    var reg = /^\d{11}$/;
    if (this.value == "") {
        items[6].innerHTML = "请您务11位手机号码!";
        items[6].style.color = "red";
    } else {
        if (!reg.exec(telephone.value)) {
            items[6].innerHTML = "请您务11位手机号码";
            items[6].style.color = "red";
        } else {
            items[6].innerHTML = "格式正确";
            items[6].style.color = "green";
            test7 = true;
        }
    }
};
oBtn.onclick = function () {
    if (aCho.checked == false || test1 == false || test2 == false || test3 == false || test4 == false || test5 == false
        || test6 == false || test7 == false) {
        alert(" 您的信息有误 ")
    } else {
        alert(" 登记成功 ! ")
    }
};
