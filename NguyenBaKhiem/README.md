Nguyen Ba Khiem - MSSV: 16021303

/* thu muc tap lon source: ../INT2208-2-2018/NguyenBaKhiem/myinstrusment    */

Điều kiện cần để sử dụng được: 
-Máy tính cần có chương trình tạo máy chủ web (web server). VD: XAMPP, WAMPServer, Ampps, Webserver, ...
Các bước thực hiện:
+ Trong XAMPP: Config file httpd-vhosts.conf(../xampp/apache/conf/extra/httpd-vhosts.conf)xa và hosts(C:/Windows/System32/drivers/etc/hosts) để tạo 1 domain ảo. VD: congnghephanmem.com .
+ Trong file htdocs tạo 1 file là tên domain ảo vừa tạo copy thư mục: myinstrusment vào trong file vừa tạo.
+Mở controlpanel của XAMPP lên kích chuột vào nút start ở dòng Apache và  MySQL.
+Thêm file instrusment.sql lên cơ sở dữ liệu.
+ Mở trình duyệt gõ tên tên domain ảo vừa tạo trong đó sẽ có thư mục myinstrusment, kích chuột vào thư mục myinstrusment.
