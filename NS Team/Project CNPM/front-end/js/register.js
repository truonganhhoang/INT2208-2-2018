var MEMBER_API = "https://youtube-api-challenger.appspot.com/members";
var LOGIN_API = "https://youtube-api-challenger.appspot.com/authentication";

var usernameInput = document.forms["sign-up-form"]["username"];
var passwordInput = document.forms["sign-up-form"]["password"];;
var repasswordInput = document.forms["sign-up-form"]["re-password"];;
var emailInput = document.forms["sign-up-form"]["email"];;
var fullNameInput = document.forms["sign-up-form"]["fullname"];
var genderInput = document.forms["sign-up-form"]["gender"];

var birthDayInput = document.forms["sign-up-form"]["birthDate"];
var bithDayConvert = new Date(birthDayInput.value);
var milisecondConvert = bithDayConvert.getTime();


var isValidUsername = false;
var isValidPassword = false;
var isValidReenterPassword = false;
var isValidFullName = false;
var isValidEmail = false;
    

$(document).ready(function() {
    console.log("Hello");
    $("#sign-up-button").click(function(event) {
    if(isValidUsername && isValidPassword && isValidFullName &&isValidReenterPassword && isValidEmail){
        signupHandle();
    }
    });
    $("#btnSignIn").click(function(event){
        if(validateLoginData()){
            loginHandle();
        }
    });
});


function validateLoginData(){
    var usernameLoginInput = $("[name = 'usernameLogin']").val();
    var passwordLoginInput = $("[name = 'passwordLogin']").val();
    if(usernameLoginInput.length == 0){
        alert("Vui lòng nhập Username");
        return false;
    }
    else if (usernameLoginInput.length < 7){
        alert("Độ dài Username phải lớn hơn 7 kí tự. Vui lòng nhập lại.");
        return false;
    }

    if (passwordLoginInput.length == 0){
        alert("Vui lòng nhập password");
        return false;
    }
    else if(passwordLoginInput.length < 7){
        alert("Độ dài Password phải lớn hơn 7 kí tự. Vui lòng nhập lại");
        return false;
    }
    return true;
}



function loginHandle(){
    var loginData = {   
        "data": {
            "type": "MemberLogin",
            "attributes": {
            "username": $("[name='usernameLogin']").val(),
            "password": $("[name='passwordLogin']").val()
            }
        }
        }

        $.ajax({
            url: LOGIN_API,
            type: "POST",
            data: JSON.stringify(loginData),
            success : function(response){
            alert("Đăng nhập thành công");
            alert(response.data.attributes.secretToken);
            //window.location.href = "my-index.html";
            window.reload();
            console.log('Login Successful');
            localStorage.setItem("secretToken", response.data.attributes.secretToken);
            localStorage.setItem("userId", response.data.attributes.userId);
            },
            error : function(response, message){
            console.log("Fail"); 
            alert("Đăng nhập thất bại. Tên đăng nhập hoặc mật khẩu không đúng.");
            }
        });
        return false;
}

usernameInput.onkeyup = function () {
    checkValidUsername();
}

passwordInput.onkeyup = function () {
    checkValidPassword();
}

fullNameInput.onkeyup = function () {
    checkValidFullName();
}

repasswordInput.onkeyup = function () {
    checkValidReEnterPass();
}

emailInput.onkeyup = function () {
    checkvalidEmail();
}

function checkValidUsername() {
    var spanUsernameMsg = usernameInput.nextElementSibling;
    if(usernameInput.value.length < 8){
        spanUsernameMsg.classList = "error-msg";
        spanUsernameMsg.innerHTML = "*Username không hợp lệ*";
        isValidUsername = false;
        usernameInput.style = "border-color: red; box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset, 0 0 8px red; outline: 0 none;";
    }
    else {
        spanUsernameMsg.classList = "success-msg";
        spanUsernameMsg.innerHTML = "OK";
        usernameInput.style = "border-color: green; box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset, 0 0 8px greens; outline: 0 none;";
        isValidUsername = true;
    }
}

function checkValidPassword() {
    var spanPasswordMsg = passwordInput.nextElementSibling;
    if(passwordInput.value.length < 8){
        spanPasswordMsg.classList = "error-msg";
        spanPasswordMsg.innerHTML = "*Password không hợp lệ*";
        passwordInput.style = "border-color: red; box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset, 0 0 8px red; outline: 0 none;";
        isValidPassword = false;
    }
    else {
        spanPasswordMsg.classList = "success-msg";
        spanPasswordMsg.innerHTML = "OK";
        passwordInput.style = "border-color: green; box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset, 0 0 8px greens; outline: 0 none;";
        isValidPassword = true;
    }
}

function checkValidReEnterPass() {
    var spanMsg = repasswordInput.nextElementSibling;
    if(repasswordInput.value != passwordInput.value){
        spanMsg.classList = "error-msg";
        spanMsg.innerHTML = "*Password nhập lại không giống*";
        repasswordInput.style = "border-color: red; box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset, 0 0 8px red; outline: 0 none;";
        isValidReenterPassword = false;
    }
    else {
        spanMsg.classList = "success-msg";
        spanMsg.innerHTML = "OK";
        repasswordInput.style = "border-color: green; box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset, 0 0 8px greens; outline: 0 none;";
        isValidReenterPassword = true;
    }
}

function checkValidFullName() {
    var spanFullnameMsg = fullNameInput.nextElementSibling;
    if(fullNameInput.value.length < 8){
        spanFullnameMsg.classList = "error-msg";
        spanFullnameMsg.innerHTML = "*Vui lòng nhập tên đầy đủ*";
        fullNameInput.style = "border-color: red; box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset, 0 0 8px red; outline: 0 none;";
        isValidFullName = false;
    }
    else {
        spanFullnameMsg.classList = "success-msg";
        spanFullnameMsg.innerHTML = "OK";
        fullNameInput.style = "border-color: green; box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset, 0 0 8px greens; outline: 0 none;";
        isValidFullName = true;
    }
}

function checkvalidEmail() {
    var spanMsg = emailInput.nextElementSibling;
    if(emailInput.value.search("@") <0){
        spanMsg.classList = "error-msg";
        spanMsg.innerHTML = "*Email không hợp lệ*";
        emailInput.style = "border-color: red; box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset, 0 0 8px red; outline: 0 none;";
        isValidEmail = false;
    }
    else {
        spanMsg.classList = "success-msg";
        spanMsg.innerHTML = "OK";
        emailInput.style = "border-color: green; box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset, 0 0 8px greens; outline: 0 none;";
        isValidEmail = true;
    }
}

function signupHandle(){
    var member = {
        "data": {
                "type": "Member",
                "attributes": {
                    "username": usernameInput.value,
                    "password": passwordInput.value,
                    "fullName": fullNameInput.value,
                    "email": emailInput.value,
                    "birthDay": milisecondConvert,       
                    "gender": genderInput.value
                }
            }
        }

    $.ajax({
        url: MEMBER_API,
        type: "POST",
        dataType: 'json',
        data: JSON.stringify(member),
        success : function(response){
            alert("Đăng ký thành công.");
            console.log('Success');
            window.location.reload();
        },
        error : function(response, msg){
            console.log(response.status); 
            alert(response.status);
        }
    });
    return false;
}
