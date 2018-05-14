import { Component } from '@angular/core';

@Component({
    selector: 'giai-tri',
    styleUrls: ['../css/giaitri.css'],
    template: `
    <div class="container">
        <div class="row">
            <div class="col-md-6">
                <h2>
                <b>
                    <a href="http://truyencotich.vn/truyen-co-tich/co-tich-viet-nam" target="_blank" title="Truyện Ngắn">TRUYỆN NGẮN</a>
                </b>
                </h2>
                <div class="list-group">
                    <b>
                    <button type="button" class="list-group-item">
                        <a href="http://truyencotich.vn/truyen-co-tich/co-tich-viet-nam/ba-luoi-riu.html" target="_blank">Ba lưỡi rìu</a>
                    </button>
                    </b>
                    <b>
                    <button type="button" class="list-group-item">
                        <a href="http://truyencotich.vn/truyen-co-tich/co-tich-viet-nam/su-tich-hoa-sen.html" target="_blank">Sự tích hoa sen</a>
                    </button>
                    </b>
                    <b>
                    <button type="button" class="list-group-item">
                        <a href="http://truyencotich.vn/truyen-co-tich/co-tich-viet-nam/mieng-trau-ky-dieu.html" target="_blank">Miếng trầu kì diệu</a>
                    </button>
                    </b>
                    <b>
                    <button type="button" class="list-group-item">
                        <a href="http://truyencotich.vn/truyen-co-tich/co-tich-viet-nam/cau-be-tich-chu.html" target="_blank">Cậu bé Tích Chu</a>
                    </button>
                    </b>
                    <b>
                    <button type="button" class="list-group-item">
                        <a href="http://truyencotich.vn/truyen-co-tich/co-tich-viet-nam/bat-canh-he.html" target="_blank">Bát canh hẹ</a>
                    </button>
                    </b>
                    <b>
                    <button type="button" class="list-group-item">
                        <a href="http://truyencotich.vn/truyen-co-tich/co-tich-viet-nam/an-khe-tra-vang.html" target="_blank">Ăn khế trả vàng</a>
                    </button>
                    </b>
                    <b>
                    <button type="button" class="list-group-item">
                        <a href="http://truyencotich.vn/truyen-co-tich/co-tich-the-gioi/con-coc-khong-vang-loi.html" target="_blank">Con cóc không vâng lời</a>
                    </button>
                    </b>
                    <b>
                    <button type="button" class="list-group-item">
                        <a href="http://truyencotich.vn/truyen-co-tich/co-tich-the-gioi/co-be-hai-mat.html" target="_blank">Cô bé hai mắt</a>
                    </button>
                    </b>
                </div>
                <strong>
                <h3> 
                    <a href="http://truyencotich.vn/" target="_blank">Xem thêm truyện ngắn</a>
                </h3> 
                </strong>
            </div>
            <div class="col-md-6">
                <h2>
                <b>
                    <a href="https://www.youtube.com/channel/UCGk3yw5k_xQUS_KSDCC6Nhw/videos" target="_blank" title="Quà Tặng Cuộc Sống">QUÀ TẶNG CUỘC SỐNG</a>
                </b>
                </h2>
                <div class="list-group">
                    <b>
                    <button type="button" class="list-group-item" >
                        <a href="https://www.youtube.com/watch?v=OjiXYFaqufU" target="_blank">Mừng sinh nhật</a>
                    </button>
                    </b>

                    <b>
                    <button type="button" class="list-group-item" >
                        <a href="https://www.youtube.com/watch?v=_XyfuoA4ewQ">Ăn cơm với muối</a>
                    </button>
                    </b>

                    <b>
                    <button type="button" class="list-group-item" >
                        <a href="https://www.youtube.com/watch?v=Llr5vMByRaw" target="_blank">Thư của bố</a>
                    </button>
                    </b>

                    <b>
                    <button type="button" class="list-group-item" >
                        <a href="https://www.youtube.com/watch?v=0pXXMimkN9E" target="_blank">Tấm vé về tuổi thơ</a>
                    </button>
                    </b>

                    <b>
                    <button type="button" class="list-group-item" >
                        <a href="https://www.youtube.com/watch?v=60o5PqwIAjM" target="_blank">Lời nói dối</a>
                    </button>
                    </b>

                    <b><button type="button" class="list-group-item" >
                        <a href="https://www.youtube.com/watch?v=6rCxWT93bqc" target="_blank">Sao băng</a>
                    </button>
                    </b>

                    <b>
                    <button type="button" class="list-group-item" >
                        <a href="https://www.youtube.com/watch?v=hK2o8ciHtDA" target="_blank">Trái tim của bố</a>
                    </button> 
                    </b>

                    <b>
                    <button type="button" class="list-group-item" >
                        <a href="https://www.youtube.com/watch?v=M5qOfb1Lk84" target="_blank">Lớp học hy vọng</a>
                    </button> 
                    </b>

                </div>
                <strong>
                <h3>
                    <a href="https://www.youtube.com/channel/UCGk3yw5k_xQUS_KSDCC6Nhw/videos" target="_blank">Xem thêm quà tặng cuộc sống</a>
                </h3> 
                </strong>
            </div>
        </div>
    </div>
    `,
})

export class giaiTri {
    titles = [
        "TRUYỆN NGẮN",
        "QUÀ TẶNG CUỘC SỐNG"
      ];
    
      stories = [
        "Ba lưỡi rìu",
        "Sự tích hoa sen",
        "Miếng trầu kì diệu",
        "Cậu bé Tích Chu", 
        "Bát canh hẹ", 
        "Ăn khế trả vàng",
        "Con cóc không vâng lời",
        "Cô bé hai mắt"
      ];
      
      videos = [
        "Mừng sinh nhật",
        "Ăn cơm với muối",
        "Thư của bố",
        "Tấm vé về tuổi thơ",
        "Lời nói dối", 
        "Sao băng",
        "Trái tim của bố",
        "Lớp học hy vọng"
      ];
    
}