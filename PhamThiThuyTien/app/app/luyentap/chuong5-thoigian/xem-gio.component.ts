import { Component } from '@angular/core';
import { Clock } from './clock';

@Component({
    selector: 'xem-gio',
    styleUrls:['clock-template.css'],
    templateUrl: 'xem-gio.component.html',
})

export class XemGioComponent {
    clocks: Clock[] = [
        {
            link_img: "./assets/image/clock4.png",
            ans_A: "10 giờ 10 phút",
            ans_B: "2 giờ 50 phút",
            ans_C: "3 giờ kém 10 phút",
            true_ans: "10 giờ 10 phút",
        },
        {
            link_img: "./assets/image/clock2.png",
            ans_A: "12 giờ 15 phút",
            ans_B: "3 giờ",
            ans_C: "12 giờ",
            true_ans: "3 giờ",
        },
        {
            link_img: "./assets/image/clock3.png",
            ans_A: "11 giờ",
            ans_B: "11 giờ 55 phút",
            ans_C: "12 giờ 55 phút",
            true_ans: "11 giờ 55 phút",
        },
        {
            link_img: "./assets/image/clock.png",
            ans_A: "12 giờ 40 phút",
            ans_B: "11 giờ 40 phút",
            ans_C: "8 giờ",
            true_ans: "8 giờ",
        },
        {
            link_img: "./assets/image/clock1.jpg",
            ans_A: "1 giờ 45 phút",
            ans_B: "9 giờ 5 phút",
            ans_C: "1 giờ kém 15 phút",
            true_ans: "1 giờ kém 15 phút",
        }
    ];

    x = 0;
    showAns = true;
    count_true = 0;
    nextLess = false;
    theEnd = false;

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
        if (value == this.clocks[this.x].true_ans) {
            this.count_true += 1;
            this.imgTrue(this.x);
            if (this.x < this.clocks.length) this.x += 1;
            if (this.count_true == 5 && this.x == 5) {
                this.showAns = false;
                this.theEnd = true;
            }

        } else {
            this.imgFalse(this.x);
            if (this.x < this.clocks.length) this.x += 1;
            if (this.x == 5) {
                this.showAns = false;
                this.nextLess = true;
                this.theEnd = true;
            }
        }
    }
}
