import { Component } from '@angular/core';
import { MinMaxQuestion } from 'app/luyentap/chuong1-phamvi10/min-max-class';

@Component({
    selector: 'min-max-question-detail',
    styleUrls: ['min-max-20.css'],
    templateUrl: 'min-max-20-template.component.html',
}

)

export class MinMax20QuestionComponent {
    MINMAX: MinMaxQuestion[] = [
        {
            name_ques: "Tìm số lớn nhất trong các số sau.",
            n_1: 15,
            n_2: 10,
            n_3: 9,
            n_4: 20,
            n_5: 13,
            true_ans: 20
        },
        {
            name_ques: "Tìm số lớn nhất trong các số sau.",
            n_1: 18,
            n_2: 12,
            n_3: 7,
            n_4: 10,
            n_5: 15,
            true_ans: 18
        },
        {
            name_ques: "Tìm số nhỏ nhất trong các số sau.",
            n_1: 16,
            n_2: 14,
            n_3: 20,
            n_4: 18,
            n_5: 15,
            true_ans: 14
        },
        {
            name_ques: "Tìm số nhỏ nhất trong các số sau.",
            n_1: 15,
            n_2: 11,
            n_3: 19,
            n_4: 16,
            n_5: 12,
            true_ans: 11
        },
        {
            name_ques: "Tìm số lớn nhất trong các số sau.",
            n_1: 17,
            n_2: 14,
            n_3: 10,
            n_4: 16,
            n_5: 13,
            true_ans: 17
        }
    ];
    x = 0;
    showAns = true;
    count_true = 0;
    nextLess = false;
    endPer = false;
    endLess = false;
    imgTrue(id) {
        var img = document.createElement("IMG");
        img.setAttribute("src", "./assets/image/dung.png");
        document.getElementById(id).appendChild(img);
    }
    imgFalse(id) {
        var img = document.createElement("IMG");
        img.setAttribute("src", "./assets/image/sai.png");
        document.getElementById(id).appendChild(img);
    }

    checkAns(value) {
        if (value == this.MINMAX[this.x].true_ans) {
            this.count_true += 1;
            this.imgTrue(this.x);
            if (this.x <= this.MINMAX.length) this.x += 1;
            if (this.count_true == this.MINMAX.length && this.x == 5) {
                this.showAns = false;
                this.endPer = true;
                this.nextLess = true;
           
            }
        } else {
            this.imgFalse(this.x);
            if (this.x <= this.MINMAX.length) this.x += 1;
            if (this.x == 5) {
                this.showAns = false;
                this.endLess = true;
                this.nextLess = true;
               
            }
        }
    }
}