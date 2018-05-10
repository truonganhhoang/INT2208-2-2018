//login with facebook
//[1] Load len cac than phan can thiet
        window.fbAsyncInit = function() {
            FB.init({
            appId      : '2094976137389135',
            cookie     : true,  
            xfbml      : true, 
            version    : 'v2.8' 
    });
        // kiem tra trang thai hien tai    
        FB.getLoginStatus(function(response) {
            statusChangeCallback(response);
    });
  };

    //[2] xu ly trang thai dang nhap
    function statusChangeCallback(response) {
        // nguoi dung da dang nhap fb va da dang nahp vao ung dung
    if (response.status === 'connected') {
      alert('ban da dang nhap thanh cong');
    }
    // nguoi dung da dang nhap nhung chua dang nhap ung dung
     else if (response.status === 'not_authorized') {
        alert('ban chua dang nhap thanh cong');
     }
     // nguoi dung chua dang nhap FB
     else{
        alert('ban chua dang nhap thanh cong facebook');
    }
  }
  //[3] yeu cau dang nhap FB
    function RequestLoginFB() {
            window.location = 'http://graph.facebook.com/oauth/authorize?client_id=2094976137389135&scope=public_profile,email,user_likes&redirect_uri=http://tieuconghoa.tk';
        }
        // [4] Hiển thị nút đăng nhập
        function ShowLoginButton() {
            document.getElementById('btb').setAttribute('style', 'display:block');
            document.getElementById('lbl').setAttribute('style', 'display:none');
        }
        // [5] Chào mừng người dùng đã đăng nhập
        function ShowWelcome() {
            document.getElementById('btb').setAttribute('style', 'display:none');            
            FB.api('/me', function (response) {
                var name = response.name;
                var username = response.username;
                var id = response.id;
                document.getElementById('lbl').innerHTML = 'Tên=' + name + ' | username=' + username + ' | id=' + id;
                document.getElementById('lbl').setAttribute('style', 'display:block');
            });
        }

//box messsege to support
      $(document).ready(function() {
        function detectmob() {
          if( navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i)   || navigator.userAgent.match(/BlackBerry/i) )
          {
            return true;
          }
           else {
            return false;
          }
        }
           var t={
            delay: 125, overlay: $(".fb-overlay"), widget: $(".fb-widget"), button: $(".fb-button")
            };
           setTimeout(function() {
            $("div.fb-livechat").fadeIn()
          }, 
          8 * t.delay); if(!detectmob()) {
            $(".ctrlq").on("click", function(e) {
              e.preventDefault(), t.overlay.is(":visible") ? (t.overlay.fadeOut(t.delay), t.widget.stop().animate({
                bottom: 0, opacity: 0}, 2 * t.delay, function(){
                  $(this).hide("slow"), t.button.show()
                })) : t.button.fadeOut("medium", function() {
                t.widget.stop().show().animate( {
                  bottom: "30px", opacity: 1
                }, 2 * t.delay), t.overlay.fadeIn(t.delay)
              })})}});