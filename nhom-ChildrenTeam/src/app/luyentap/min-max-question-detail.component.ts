import { Component } from '@angular/core';
import { MinMaxQuestion} from './min-max-question';

@Component({
    selector: 'min-max-question-detail',
    styleUrls: ['min-max-question-detail.component.css'],
    template:`
        <h1>Bài toán: Tìm số lớn nhất, tìm số nhỏ nhất.</h1>
        <h2 class = "type">Chọn đáp án đúng.</h2>
        <div class="row">
            <div class = "col-md-2"></div>

            <div class="col-md-8">
                <div id="tableCheck">
                    <table>
                        <tr>
                            <th>Câu 1</th>
                            <th>Câu 2</th> 
                            <th>Câu 3</th>
                            <th>Câu 4</th>
                            <th>Câu 5</th>
                        </tr>
                        <tr>
                            <td id="0"></td>
                            <td id="1"></td>
                            <td id="2"></td>
                            <td id="3"></td>
                            <td id="4"></td>
                        </tr>
                    </table>
                </div>
                <br>
                <div class="panel panel-body panel-primary">
                    <div *ngIf="showAns">
                        <h2> {{MINMAX[x].name_ques}} </h2>
                        <br>
                        <form>
                            <button type ="button" #vl1 value= {{MINMAX[x].n_1}} (click)="checkAns(vl1.value)">{{MINMAX[x].n_1}}</button>
                            <button type ="button" #vl2 value= {{MINMAX[x].n_2}} (click)="checkAns(vl2.value)">{{MINMAX[x].n_2}}</button>
                            <button type ="button" #vl3 value= {{MINMAX[x].n_3}} (click)="checkAns(vl3.value)">{{MINMAX[x].n_3}}</button>
                            <button type ="button" #vl4 value= {{MINMAX[x].n_4}} (click)="checkAns(vl4.value)">{{MINMAX[x].n_4}}</button>
                            <button type ="button" #vl5 value= {{MINMAX[x].n_5}} (click)="checkAns(vl5.value)">{{MINMAX[x].n_5}}</button>
                        </form>
                    </div>
                    <div *ngIf="nextLess">
                        <div *ngIf="endPer">
                            <h2>Chúc mừng bạn đã hoàn thành xuất sắc bài học.</h2>
                        </div>
                        <div *ngIf="endLess">
                            <h2>Chúc mừng bạn đã hoàn thành bài học.</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-2"></div>
        </div>
    `,
}

)

export class MinMaxQuestionDetailComponent {
    MINMAX: MinMaxQuestion[] =[
        {
            name_ques: "Tìm số lớn nhất trong các số sau.",
            n_1: 5,
            n_2: 4,
            n_3: 9,
            n_4: 6,
            n_5: 2,
            true_ans: 9
        },
        {
            name_ques: "Tìm số lớn nhất trong các số sau.",
            n_1: 8,
            n_2: 3,
            n_3: 7,
            n_4: 6,
            n_5: 2,
            true_ans: 8
        },
        {
            name_ques: "Tìm số nhỏ nhất trong các số sau.",
            n_1: 6,
            n_2: 4,
            n_3: 2,
            n_4: 8,
            n_5: 5,
            true_ans: 2
        },
        {
            name_ques: "Tìm số nhỏ nhất trong các số sau.",
            n_1: 5,
            n_2: 1,
            n_3: 9,
            n_4: 6,
            n_5: 2,
            true_ans: 1
        },
        {
            name_ques: "Tìm số lớn nhất trong các số sau.",
            n_1: 7,
            n_2: 4,
            n_3: 1,
            n_4: 6,
            n_5: 3,
            true_ans: 7
        }
    ];
    x = 0;
    showAns = true;
    count_true = 0 ;
    nextLess = false;
    endPer = false;
    endLess = false;

    imgTrue(id){
        var img = document.createElement("IMG");
        img.setAttribute("src", "./assets/image/dung.png");
        document.getElementById(id).appendChild(img);
    }
    imgFalse(id){
        var img = document.createElement("IMG");
        img.setAttribute("src", "./assets/image/sai.png");
        document.getElementById(id).appendChild(img);
    }

    checkAns(value){
        if(value == this.MINMAX[this.x].true_ans){
            this.count_true += 1;
            this.imgTrue(this.x);
            if( this.x <= this.MINMAX.length) this.x += 1;
            if(this.count_true == this.MINMAX.length ){
                this.showAns = false;
                this.endPer = true;
                this.nextLess = true;

            }
        } else {
            this.imgFalse(this.x);
            if( this.x <= this.MINMAX.length) this.x += 1;
            if(this.count_true == this.MINMAX.length ){
                this.showAns = false;
                this.endLess = true;
                this.nextLess = true;

            }
        }
    }
}