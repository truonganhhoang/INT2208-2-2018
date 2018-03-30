import { Component } from '@angular/core';

@Component({
    selector: 'luyen-tap',
    styleUrls: ['./luyentap.component.css'],
    template: `
   <h1>Toán 1</h1>
    <div class="container">
    <div class="row">

        <div class="col-sm-6">
            <h2> Các số và phép toán trong phạm vi 10</h2>
            <a routerLink="/demden5" routerLinkActive="active">Đếm đến 5</a>
            <br>
            <a routerLink="/cacsovapheptinhtrongphamvi10" routerLinkActive="active">Các số và phép toán trong phạm vi 10</a>
            <br>
            <a routerLink="/timminmaxphamvi10" routerLinkActive="active">Tìm số lớn nhất bé nhất trong phạm vi 10</a>
            <br>
            <br>
        </div>
        <div class="col-sm-6">
            <h2>Các số và phép toán trong phạm vi 20</h2>
            <a routerLink="/sosanh20" routerLinkActive="active">So sánh 2 số phạm vi 20</a>
            <br>
            <a routerLink="/calsub20" routerLinkActive="active">Phép trừ 20</a>
            <br>
            <a routerLink="/calsum20" routerLinkActive="active">Phép cộng 20</a>
            <br>
            <a routerLink="/minmax20" routerLinkActive="active">Tìm số nhỏ nhất, lớn nhất trong phạm vi 20</a>
            <br>
            <a routerLink="/lientruocsau20" routerLinkActive="active">Tìm số liền trước, số liền sau phạm vi 20</a>
            <br>
            <br>
        </div>
    </div>
        <router-outlet></router-outlet>
    <div class="row">
        <div class="col-sm-6">
            <h2>Các số và phép toán trong phạm vi 100</h2>
            <a routerLink="/sosanh100" routerLinkActive="active">So sánh 2 số phạm vi 100</a>
            <br>
            <a routerLink="/calsub100" routerLinkActive="active">Phép trừ phạm vi 100</a>
            <br>

            <a routerLink="/calsum100" routerLinkActive="active">Phép cộng phạm vi 100</a>
            <br>
            <a routerLink="/minmax100" routerLinkActive="active">Tìm số nhỏ nhất, lớn nhất trong phạm vi 100</a>
            <br>
            <a routerLink="/lientruocsau100" routerLinkActive="active">Tìm số liền trước, số liền sau phạm vi 100</a>
            <br>
        </div>
        <div class="col-sm-6">
            <h2>Hình học</h2>

            <a routerLink="/diemdoanthang" routerLinkActive="active">Điểm và đoạn thẳng</a>
            <br>
            <a routerLink="/demtamgiac" routerLinkActive="active">Đếm số hình tam giác</a>
            <br>
            <br>
            
        </div>
    </div>
    <div class="row">
        <div class="col-sm-6">
        <h2>Thời gian</h2>
            <a routerLink="/xemgio" routerLinkActive="active">Xem giờ</a>
            <br>
        </div>
    </div>
        <router-outlet></router-outlet>
    </div>

    `,
})

export class luyentapComponent {

}