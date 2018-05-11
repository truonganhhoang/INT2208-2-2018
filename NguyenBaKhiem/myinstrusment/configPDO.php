<?php 




try {
	$db = new PDO("mysql:host=localhost;dbname=instrusment", "root", "");
	$db-> setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
	$db->exec('set names utf8');
} catch (Exception $e) {
	$error = $e->getMessage();
	echo $error;
}

define('SITE_URL','http://yukikhiem.vn/instrustment/' );
define('PUBLICS', 'http://yukikhiem.vn/instrusment/');
//713424696230-odfmm1v6n48pg85g1chf31oefiep452q.apps.googleusercontent.com
//-2JWlen6wsepuzymQv-a5_71
?>
<!-- 
    <script>

        // [1] Load lên các thành phần cần thiết
        window.fbAsyncInit = function () {
            FB.init({
                appId      : '166249744079581',
                cookie     : true,  // enable cookies to allow the server to access 
                                      // the session
                xfbml      : true,  // parse social plugins on this page
                version    : 'v2.8' // use graph api version 2.8
  });
            // Kiểm tra trạng thái hiện tại
            FB.getLoginStatus(function (response) {
                statusChangeCallback(response);
            });

        };

        // [2] Xử lý trạng thái đăng nhập
        function statusChangeCallback(response) {
            // Người dùng đã đăng nhập FB và đã đăng nhập vào ứng dụng
            if (response.status === 'connected') {
                ShowWelcome();
            }
            // Người dùng đã đăng nhập FB nhưng chưa đăng nhập ứng dụng
            else if (response.status === 'not_authorized') {
                ShowLoginButton();
            }
            // Người dùng chưa đăng nhập FB
            else {
                ShowLoginButton();
            }
        }

        // [3] Yêu cầu đăng nhập FB
        function RequestLoginFB() {
            window.location = 'http://graph.facebook.com/oauth/authorize?client_id=166249744079581&scope=public_profile,email,user_likes&redirect_uri=http://yukikhiem.vn';
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

    </script>
    <div id="fb-root"></div>
    <script>
        (function(d, s, id) {
          var js, fjs = d.getElementsByTagName(s)[0];
          if (d.getElementById(id)) return;
          js = d.createElement(s); js.id = id;
          js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.7&appId=166249744079581";
          fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'facebook-jssdk'));</script>



      <!-- NÚT ĐĂNG NHẬP -->
<!--       <input id="btb" type="button" value="ĐĂNG NHẬP" onclick="RequestLoginFB()" style="display:none" />
      <p id="lbl" style="display:none">BẠN ĐÃ ĐĂNG NHẬP THÀNH CÔNG!</p>
      <br />  -->



      