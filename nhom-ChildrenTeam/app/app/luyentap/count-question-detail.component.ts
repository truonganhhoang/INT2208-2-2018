// mô tả câu hỏi
import { Component } from '@angular/core';
import { CountQuestion} from "app/luyentap/count-question";

@Component({
    selector: 'count-question-detail',
    styleUrls: ['./count-question-detail.component.css'],
    template: `
    <div *ngIf="nameQues">
        <h1>Bài 1 - Chương 1: Các số trong phạm vi 10</h1>
        <h2 class = "type">Điền số thích hợp vào ô trống.</h2>
        <!-- câu hỏi 1 trong panel, kiểm tra  -->
    </div>
    <div class="row">
        <div class = "col-md-1"></div>
<!-- cột hiển thị câu hỏi -->
        <div class = "col-md-6">
        <!-- câu hỏi hiện trong panel -->
            <div class="panel panel-body panel-primary" id = "divQues">
                <div *ngIf="showNoticTrue"><h2>Chính xác!</h2></div>
                <div *ngIf="showNoticFalse"><h2>Không chính xác!</h2></div>

                <div *ngIf = "showAns">     <!-- hiển thị câu hỏi -->
                    <h3><strong>{{QUESTIONES[x].name_ques}}</strong></h3>
                    <div id = "getImgQues"><img src={{QUESTIONES[x].link_img}} /></div>
                    <div id="ans">
                        <input type="text" #result id = "ketqua">   
                    </div>
                    <div id="submit_ans">
                        <button type="button" (click)="checkAns(result.value); result.value=''" id="kiemtra">Kiểm tra</button>
                    </div>
                </div>

                <!-- chuyển sang bài tiếp theo -->
                <div *ngIf="nextLess">
                    <div id="newLess">
                        <!-- hoàn thành cả 5 câu hỏi đúng -->
                        <div *ngIf="endLessPer">
                            <h2><strong>Chúc mừng bạn đã hoàn thành xuất sắc bài học 1!</strong></h2>
                            <h2><strong>Chuyển đến bài học mới nào</strong></h2>
                        </div>
                        <div *ngIf="endLess">
                            <h2><strong>Chúc mừng bạn đã hoàn thành bài học 1!</strong></h2>
                            <h2><strong>Chuyển đến bài học mới nào</strong></h2>
                        </div>
                        <a routerLink="/cacsovapheptinhtrongphamvi10" routerLinkActive="active">Bài 2 - chương 1: Các phép toán trong phạm vi 10. </a>
                        <router-outlet></router-outlet>
                    </div>
                </div>

            </div>
        </div>

<!-- cột hiển thị số sao -->
        <div class = "col-md-4">
        <!-- số sao hiện trong panel -->
            <h2 class="type1"><strong>Số sao đạt được </strong></h2>
            <br>
            <div class="panel panel-body panel-primary" id="panel_star">
                <div id="starAward">
                </div>
            </div>
        </div>
        <div class = "col-md-1"></div>
    </div>

  `,
})

export class CountQuestionDetailComponent {
    QUESTIONES: CountQuestion[] = [{
        name_ques: "Số cá xuất hiện trên hình? ",
        link_img: "./assets/image/3ca.png",
        true_ans: 3
    }, {
        name_ques: "Số chú cá xuất hiện trên hình?",
        link_img: "./assets/image/5ca.png",
        true_ans: 5
    }, {
        name_ques: "Số cây nấm xuất hiện trên hình?",
        link_img: "./assets/image/2nam.png",
        true_ans: 2
    }, {
        name_ques: "Số cây nấm xuất hiện trên hình?",
        link_img: "./assets/image/nam.png",
        true_ans: 1
    }, {
        name_ques: "Số cá xuất hiện trên hình?",
        link_img: "./assets/image/4ca.png",
        true_ans: 4
    }];

    nameQues = true;
    showAns = true; // hiện câu hỏi 
    nextLess = false;
    x = 0;
    stt = true;
    count_true = 0;
    endLessPer = false;
    endLess = false;

    showNoticTrue = false;
    showNoticFalse = false;

    rightAns(): void {      // trả lời đúng thêm một sao vào khối có id = starAward
        var img = document.createElement("IMG");
        img.setAttribute("src", "./assets/image/true.png");
        document.getElementById("starAward").appendChild(img);

    }

    checkAns(value) {
        if (parseInt(value) == this.QUESTIONES[this.x].true_ans) {
            this.rightAns();          // thêm 1 ngôi sao vào trong khung 
            this.count_true += 1;     // số câu đúng tăng thêm 1
            if (this.x <= this.QUESTIONES.length)
                this.x += 1;            // chỉ số đối tượng tăng lên 1

            if (this.x == this.QUESTIONES.length && this.count_true == this.QUESTIONES.length) {  // chỉ số bằng độ dài, số câu đúng = độ dài
                this.nameQues = false;
                this.showAns = false;
                this.nextLess = true;
                this.endLessPer = true;

            }

        } else {

            if (this.x <= this.QUESTIONES.length)
                this.x += 1;
            if (this.x == this.QUESTIONES.length) {
                this.nameQues = false;
                this.showAns = false;
                this.nextLess = true;
                this.endLess = true;
                if (this.count_true == 0) {
                    var para = document.createElement("P");
                    var t = document.createTextNode("Bạn không đạt được sao nào, cố gắng lần sau nhé!");
                    para.appendChild(t);
                    document.getElementById("panel_star").appendChild(para);
                }
            }

        }

        
    }
}