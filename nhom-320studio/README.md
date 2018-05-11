# INT2208-2-2018

# Công nghệ phần mềm 2 - 2018 Nhóm 320 studio

### các thành viên :  
- Hoàng Mạnh Hưng

- Phan Nguyên Lâm
		  
- Đỗ Thanh Tâm
		  
- Nguyễn Bá Khiêm

Xây dựng ứng dụng dạy đàn : my instrument

Màn hình chính : my instrument.html

[Báo cáo dự án phần mềm](https://docs.google.com/document/d/161cTT8VulbtWLVfY7JURB7gESdgl9ezzXQQtfq2T7V0/edit)

[video demo trang web](https://bit.ly/2KQWbdd)

backend của bài tập lớn : [my instrument back end](https://github.com/truonganhhoang/INT2208-2-2018/tree/master/NguyenBaKhiem/myinstrusment)

Điều kiện cần để sử dụng được back-end: -Máy tính cần có chương trình tạo máy chủ web (web server). VD: XAMPP, WAMPServer, Ampps, Webserver, ... Các bước thực hiện:

- Trong XAMPP: Config file httpd-vhosts.conf(../xampp/apache/conf/extra/httpd-vhosts.conf)xa và hosts(C:/Windows/System32/drivers/etc/hosts) để tạo 1 domain ảo. VD: congnghephanmem.com .
	
- Trong file htdocs tạo 1 file là tên domain ảo vừa tạo copy thư mục: myinstrusment vào trong file vừa tạo. Mở controlpanel của XAMPP lên kích chuột vào nút start ở dòng Apache và MySQL

- Thêm file instrusment.sql lên cơ sở dữ liệu.
	
- Mở trình duyệt gõ tên tên domain ảo vừa tạo trong đó sẽ có thư mục myinstrusment, kích chuột vào thư mục myinstrusment.
