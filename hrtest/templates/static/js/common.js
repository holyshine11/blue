// common js
$(document).ready(function(){
    
    // login popup
    $(".popupLogin .loginBtn button").click(function(){
        $(".popupLogin").addClass("active");
        $(".loginBg").addClass("active");
        return false;
    });  

    // header
    $("header li").hover(
        function(){
            $(this).children("nav").stop().slideDown(800);
            $(this).siblings().children("nav").stop().slideUp();
        },
        function(){
            $(this).children("nav").stop().slideUp(800);
        }
    );

});

// login
document.getElementById('logIn').onclick = function (){
    alert('로그아웃 하시겠습니까?');
    this.innerText = "Log out";
};

// login popup
// var $popupLogin = getElementsByTagName(".popupLogin");
// var $loginBg = getElementsByTagName(".loginBg");
// document.querySelectorAll('.loginBtn').onclick = function (){
//     alert("로그인 하시겠습니까?");
//     // $popupLogin.classList.add('active');
//     // $loginBg.classList.add('active');
// };