import { Component } from '@angular/core';
import { CalQuestion } from './cal-question';

@Component({
    selector: 'cal-question-detail',
    styleUrls :['./cal-question-detail.component.css'],
    template:`
        <h1>Bài 2: Chương 1: Các phép toán trong phạm vi 10.</h1>
        <h2 class = "type">Điền số thích hợp vào ô trống</h2>
        <div class="row">
            <div class="col-md-1"></div>
            <div class="col-md-6">
                <div class="panel panel-body panel-primary" id = "divQuesCal">
                    <div *ngIf="showAns">
                    <!-- chứa câu hỏi -->
                        <div id="cauhoi">
                            <h2>{{CALQUESTIONS[x].num_1}}{{CALQUESTIONS[x].signal}}{{CALQUESTIONS[x].num_2}} = <input type="text" #result id = "ketqua"> </h2>
                        </div>
                     <!-- kiểm tra giá trị điền vào ô trống -->   
                        <div id="submit_ans">
                            <button type="button" (click)="checkAns(result.value); result.value=''" id="kiemtra">Kiểm tra</button>
                        </div>
                    </div>
                    <!-- chuyển sang bài tiếp theo -->
                    <div *ngIf="nextLess">
                        <div id="newLess">
                            <!-- hoàn thành cả 5 câu hỏi đúng -->
                            <div *ngIf="endLessPer">
                                <h2><strong>Chúc mừng bạn đã hoàn thành xuất sắc bài học 2!</strong></h2>
                                <h2><strong>Chuyển đến bài học mới nào</strong></h2>
                            </div>
                            <div *ngIf="endLess">
                                <h2><strong>Chúc mừng bạn đã hoàn thành bài học 2!</strong></h2>
                                <h2><strong>Chuyển đến bài học mới nào</strong></h2>
                            </div>
                            <a routerLink="/timminmaxphamvi10" routerLinkActive="active">Bài 3 - chương 1: Tìm số lớn nhất bé nhất trong phạm vi 10. </a>
                        <router-outlet></router-outlet>
                        </div>
                    </div>
                
                </div>
                
            </div>
            <div class="col-md-4">
                 <!-- số sao hiện trong panel -->
                <h2 class="type1"><strong>Số sao đạt được </strong></h2>
                <br>
                <div class="panel panel-body panel-primary" id="panel_star">
                    <div id="starAward">
                    </div>
                </div>
            </div>
            <div class="col-md-1"></div>
        </div>
    `,
   
}

)

export class CalQuestionDetailComponent {
   CALQUESTIONS: CalQuestion[] = [
  {
      id: '01',
      num_1: 3, 
      num_2: 4,
      signal: ' + ',
      ans: 7
  },
  {
      id: '02',
      num_1: 4,
      num_2: 2,
      signal: ' + ',
      ans: 6
  },
  {
      id: '03',
      num_1: 8,
      num_2: 3,
      signal: ' - ',
      ans: 5
  },
  {
      id: '04',
      num_1: 6,
      num_2: 3,
      signal: ' + ',
      ans: 9
  },
  {
      id: '05',
      num_1: 9,
      num_2: 2,
      signal: ' - ',
      ans: 7
  }]

    x = 0;
     nameQues = true;
    showAns = true; // hiện câu hỏi 
    nextLess = false;
    stt = true;
    count_true = 0;
    endLessPer = false;
    endLess = false;

    rightAns(): void {      // trả lời đúng thêm một sao vào khối có id = starAward
        var img = document.createElement("IMG");
        img.setAttribute("src", "./assets/image/true.png");
        document.getElementById("starAward").appendChild(img);

    }

    checkAns(value){
        if(parseInt(value) == this.CALQUESTIONS[this.x].ans)
        {
            this.rightAns();
            this.count_true += 1;
            if(this.x < 5) {
                this.x += 1;
            }
            if(this.x == 4 && this.count_true == 4){
                this.showAns = false;
                this.nextLess = true;
                this.endLessPer = true;
            }
        }
        else {
            if(this.x < 5 ){
                this.x += 1; 
            }
            if (this.x == this.CALQUESTIONS.length) {
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