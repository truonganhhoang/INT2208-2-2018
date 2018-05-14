import { Component } from '@angular/core';

@Component({
    selector: 'luyen-tap',
    styleUrls: ['../css/luyentap.css'],
    template: `
   <div class="container">
        <div class="row">
            <h1 style="text-align: center; font-size: 50px; color: brown">Toán 1</h1>
            <div class="col-xs-10 col-sm-6">
                <div class="panel panel-body panel-primary" id="c1">
                    <h2> Các số và phép toán trong phạm vi 10</h2>
                    <a routerLink="/dem10" routerLinkActive="active">Đếm đến 10</a>
                    <br>
                    <a routerLink="/sub10" routerLinkActive="active">Phép trừ</a>
                        <br>
                        <a routerLink="/sum10" routerLinkActive="active">Phép cộng</a>
                        <br>
                        <a routerLink="/minmax10" routerLinkActive="active">Tìm số lớn nhất, nhỏ nhất</a>
                    </div>
                </div>
            <div class="col-xs-10 col-sm-6">
                <div class="panel panel-body panel-primary" id="c2">
                    <h2>Các số và phép toán trong phạm vi 20</h2>
                    <a routerLink="/sosanh20" routerLinkActive="active">So sánh 2</a>
                    <br>
                    <a routerLink="/sub20" routerLinkActive="active">Phép trừ</a>
                    <br>
                    <a routerLink="/sum20" routerLinkActive="active">Phép cộng</a>
                    <br>
                    <a routerLink="/minmax20" routerLinkActive="active">Tìm số lớn nhất, nhỏ nhất</a>
                    <br>
                    <a routerLink="/lientruocsau20" routerLinkActive="active">Tìm số liền trước, số liền sau</a>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-xs-10 col-sm-6">
                <div class="panel panel-body panel-primary" id="c3">
                    <h2>Các số và phép toán trong phạm vi 100</h2>
                    <a routerLink="/sosanh100" routerLinkActive="active">So sánh 2</a>
                    <br>
                    <a routerLink="/sub100" routerLinkActive="active">Phép trừ</a>
                    <br>
                    <a routerLink="/sum100" routerLinkActive="active">Phép cộng</a>
                    <br>
                    <a routerLink="/minmax100" routerLinkActive="active">Tìm số lớn nhất, nhỏ nhất</a>
                    <br>
                    <a routerLink="/lientruocsau100" routerLinkActive="active">Tìm số liền trước, số liền sau</a>
                    <br>
                </div>
            </div>
            <div class="col-xs-10 col-sm-6">
                <div class="panel panel-body panel-primary" id="c4">
                    <h2>Hình học</h2>
                    <a routerLink="/diemdoanthang" routerLinkActive="active">Điểm và đoạn thẳng</a>
                    <br>
                    <a routerLink="/tamgiacvuongtron" routerLinkActive="active">Hình tam giác, hình vuông, hình tròn</a>
                    <br>  
                    <a routerLink="/demtamgiac" routerLinkActive="active">Đếm số hình tam giác</a>
                    <br>    
                </div>             
            </div>
            <div class="col-xs-10 col-sm-6">
                <div class="panel panel-body panel-primary" id="c4">
                    <h2>Thời gian</h2>
                    <a routerLink="/xemgio" routerLinkActive="active">Xem giờ</a>
                    <br>
                </div>
            </div>
        </div>
        <router-outlet></router-outlet>
    </div>
    `,
})

export class luyenTap{}