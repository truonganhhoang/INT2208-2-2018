<?php
    //goi thu vien
include('lib/SMTP.php');
include "lib/PHPMailer.php"; 
    $nFrom = "Yukikhiem.vn";    //mail duoc gui tu dau, thuong de ten cong ty ban
    $mFrom = 'duoinhungconmuak@gmail.com';  //dia chi email cua ban 
    $mPass = '14111998k';       //mat khau email cua ban
    $nTo = 'Huudepzai'; //Ten nguoi nhan
    $mTo = 'dinhhuugt@gmail.com';   //dia chi nhan mail
    $mail             = new PHPMailer;
    $body             = 'Bạn đang tìm hiểu về cách gửi email bằng php mailler trên freetuts.net chúc các bạn có         những phút giây vui vẻ.';   // Noi dung email
    $title = 'Hướng dẫn gửi mail bằng PHPMailer';   //Tieu de gui mail
    $mail->IsSMTP();             
    $mail->CharSet  = "utf-8";
    $mail->SMTPDebug  = 0;   // enables SMTP debug information (for testing)
    $mail->SMTPAuth   = true;    // enable SMTP authentication
    $mail->SMTPSecure = "ssl";   // sets the prefix to the servier
    $mail->Host       = "smtp.gmail.com";    // sever gui mail.
    $mail->Port       = 587;         // cong gui mail de nguyen
    // xong phan cau hinh bat dau phan gui mail
    $mail->Username   = $mFrom;  // khai bao dia chi email
    $mail->Password   = $mPass;              // khai bao mat khau
    $mail->SetFrom($mFrom, $nFrom);
    $mail->AddReplyTo('info@freetuts.net', 'Freetuts.net'); //khi nguoi dung phan hoi se duoc gui den email nay
    $mail->Subject    = $title;// tieu de email 
    $mail->MsgHTML($body);// noi dung chinh cua mail se nam o day.
    $mail->AddAddress($mTo, $nTo);
    // thuc thi lenh gui mail 
    if(!$mail->Send()) {
        echo 'Co loi!';

    } else {

        echo 'mail của bạn đã được gửi đi hãy kiếm tra hộp thư đến để xem kết quả. ';
    }
    ?>