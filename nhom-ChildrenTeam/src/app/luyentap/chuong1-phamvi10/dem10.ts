// mô tả câu hỏi
import { Component } from '@angular/core';
import { CountQuestion } from "../count-question";

@Component({
    selector: 'dem10',
    styleUrls: ['../../css/dem10.css'],
    template: `
<section>
    <h1>Bài 1 - Chương 1: Đếm trong phạm vi 10</h1>
    <h2 class="type" >Điền số thích hợp vào ô trống.</h2>
    <div class="container">
        <div class="row">
            <!-- cột hiển thị câu hỏi -->
            <div class="col-sm-1"></div>
            <div class="col-sm-6 col-xs-12">
                <!-- câu hỏi hiện trong panel -->
                <div class="panel panel-body panel-primary" id="divQues">
                    <div *ngIf="showAns">
                        <!-- hiển thị câu hỏi -->
                        <h3><strong>{{QUESTIONES[count].name_ques}}</strong></h3>
                        <div id="getImgQues"><img src={{QUESTIONES[count].link_img}} /></div>
                        <div id="ans" >
                            <input type="text" style="text-align: center" #result id="ketqua">
                        </div>
                        <div id="submit_ans">
                            <button type="button" (click)="checkAns(result.value); result.value=''" id="kiemtra">Kiểm tra</button>
                        </div>
                    </div>
                    <!-- chuyển sang bài tiếp theo -->
                    <div *ngIf="nextLess">
                        <div id="newLess">
                            <!-- hoàn thành cả 10 câu hỏi đúng -->
                            <div *ngIf="endPer">
                                <h2><strong>Chúc mừng bạn đã hoàn thành xuất sắc bài học 1!</strong></h2>
                                <h2>Bạn đã đạt được 10/10 sao.</h2>
                                <h2><strong>Chuyển đến bài học mới nào</strong></h2>
                            </div>
                            <div *ngIf="endLess">
                                <h2><strong>Chúc mừng bạn đã hoàn thành bài học 1!</strong></h2>
                                <h2>Bạn đã đạt được {{count_true}}/10 sao.</h2>
                                <h2><strong>Chuyển đến bài học mới nào</strong></h2>
                            </div>
                            <h2><a routerLink="/sub10" routerLinkActive="active">Bài 2 - chương 1: Phép trừ trong phạm vi 10. </a></h2>
                            <router-outlet></router-outlet>
                        </div>
                    </div>
                </div>
            </div>
            <!-- cột hiển thị số sao -->
            <div class="col-sm-4">
                <!-- số sao hiện trong panel -->
                <h2 class="type1"><strong>Số sao đạt được </strong></h2>
                <br>
                <div class="panel panel-body panel-primary" id="panel_star">
                    <div id="starAward">
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
  `,
})

export class dem10 {
    QUESTIONES: CountQuestion[] = [{
        name_ques: "Có bao nhiêu con voi trên hình?",
        link_img: "./assets/image/1voi.PNG",
        true_ans: 1
     }, {
        name_ques: "Có bao nhiêu con muỗi ? ",
        link_img: "./assets/image/6muoi.PNG",
        true_ans: 6
    }, {
        name_ques: "Có bao nhiêu cầu vồng? ",
        link_img: "./assets/image/2cauVong.PNG",
        true_ans: 2
    }, {
        name_ques: "Có bao nhiêu quả bóng trên hình?",
        link_img: "./assets/image/3bong.PNG",
        true_ans: 3
    }, {
        name_ques: "Có bao nhiêu món quà ? ",
        link_img: "./assets/image/7qua.PNG",
        true_ans: 7
    }, {
        name_ques: "Có bao nhiêu người? ",
        link_img: "./assets/image/9nguoi.PNG",
        true_ans: 9
    }, {
        name_ques: "Có bao nhiêu con vịt?",
        link_img: "./assets/image/5vit.PNG",
        true_ans: 5
    }, {
        name_ques: "Có bao nhiêu con thỏ ?",
        link_img: "./assets/image/3nam.jpg",
        true_ans: 4
    },  {
        name_ques: "Có bao nhiêu cái chén?",
        link_img: "./assets/image/10chen.PNG",
        true_ans: 10
        
    }, {
        name_ques: "Có bao nhiêu con ngựa trong hình?",
        link_img: "./assets/image/8ngua.PNG",
        true_ans: 8
        
    }];

    showAns = true; // hiện câu hỏi 
    nextLess = false;
    count = 0; //số câu hỏi
    count_true = 0; //số câu trả lời đúng
    endPer = false; //trả lời đúng hết tất cả các câu hỏi
    endLess = false; 

    rightAns(): void {      // trả lời đúng thêm một sao vào khối có id = starAward
        var img = document.createElement("IMG");
        img.setAttribute("src", "./assets/image/true.png");
        document.getElementById("starAward").appendChild(img);
    }

    checkAns(value) {
        if (parseInt(value) == this.QUESTIONES[this.count].true_ans) {
            this.rightAns();          // thêm 1 ngôi sao vào trong khung 
            this.count_true += 1;     // số câu đúng tăng thêm 1
            if (this.count <= this.QUESTIONES.length)
                this.count += 1;            // chỉ số đối tượng tăng lên 1
            if (this.count_true == this.QUESTIONES.length ) {  // chỉ số bằng độ dài, số câu đúng = độ dài                
                this.showAns = false;
                this.nextLess = true;
                this.endPer = true;
            }
        } else { 
            if (this.count <= this.QUESTIONES.length)
                this.count += 1;
        }
        if (this.count == this.QUESTIONES.length && this.endPer == false) {                
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