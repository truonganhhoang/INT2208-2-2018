import { Component } from '@angular/core';

@Component({
  selector: 'tm-kns',
  templateUrl: './kns.component.html',
  styleUrls: []
})
export class KnsComponent {
  titles = [
    "TRUYỆN NGẮN",
    "QUÀ TẶNG CUỘC SỐNG"
  ];

  stories = [
    "Hưng Đạo Đại Vương",
    "Vàng Lấy Con Vua",
    "Anh Chàng Nghèo Khổ",
    "Chú Thỏ Tinh Khôn", 
    "Ông Tướng Gầy", 
    "Sự Tích Chim Đa Đa",
    "Nàng Ngón Út",
    "Hồ Ba Bể"
  ];
  
  videos = [
    "Gánh xôi của bà",
    "Lòng Tham",
    "Trái Tim Yêu Thương",
    "Chuyện Trên Vùng Cao",
    "Sói Gấu Và Cáo", 
    "Tình Mẹ",
    "Cô Gái Câm",
    "Chú Cá Thần"
  ];

}
