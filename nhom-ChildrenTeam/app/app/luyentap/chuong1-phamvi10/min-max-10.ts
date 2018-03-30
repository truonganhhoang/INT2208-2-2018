import { Component } from '@angular/core';
import { MinMaxQuestion} from './min-max-class';

@Component({
    selector: 'min-max-question-detail',
    styleUrls: ['min-max-10.css'],
    templateUrl:'min-max-template.component.html',
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
            if(this.count_true == 5 && this.x == 5 ){
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