import { Component } from '@angular/core';
import { MinMaxQuestion} from 'app/luyentap/chuong1-phamvi10/min-max-class';

@Component({
    selector: 'min-max-question-detail',
    styleUrls: ['min-max-100.css'],
    templateUrl:'min-max-100-template.component.html',
}

)

export class MinMax100QuestionComponent {
    MINMAX: MinMaxQuestion[] =[
        {
            name_ques: "Tìm số lớn nhất trong các số sau.",
            n_1: 35,
            n_2: 43,
            n_3: 90,
            n_4: 65,
            n_5: 27,
            true_ans: 90
        },
        {
            name_ques: "Tìm số lớn nhất trong các số sau.",
            n_1: 68,
            n_2: 37,
            n_3: 70,
            n_4: 65,
            n_5: 72,
            true_ans: 72
        },
        {
            name_ques: "Tìm số nhỏ nhất trong các số sau.",
            n_1: 60,
            n_2: 48,
            n_3: 27,
            n_4: 58,
            n_5: 50,
            true_ans: 27
        },
        {
            name_ques: "Tìm số nhỏ nhất trong các số sau.",
            n_1: 50,
            n_2: 61,
            n_3: 90,
            n_4: 63,
            n_5: 48,
            true_ans: 48
        },
        {
            name_ques: "Tìm số lớn nhất trong các số sau.",
            n_1: 70,
            n_2: 45,
            n_3: 61,
            n_4: 36,
            n_5: 38,
            true_ans: 70
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
            if(this.count_true == this.MINMAX.length && this.x == 5){
                this.showAns = false;
                this.endPer = true;
                this.nextLess = true;
                
            }
        } else {
            this.imgFalse(this.x);
            if( this.x <= this.MINMAX.length) this.x += 1;
            if(this.x == 5 ){
                this.showAns = false;
                this.endLess = true;
                this.nextLess = true;
               
            }
        }
    }
}