import { Component } from '@angular/core';
import { Hinh } from './hinh';

@Component({
    selector: 'tam-giac-vuong-tron',
    styleUrls:['../../css/hinh.css'],
    templateUrl: 'tamgiac-vuong-tron.html',
})

export class tamGiacVuongTron {
    hinh: Hinh[] = [
        {
            link_img: "./assets/image/tamgiac5.PNG",
            ans_A: "Hình tam giác",
            ans_B: "Hình vuông",
            ans_C: "Hình tròn",
            true_ans: "Hình tam giác"
        },
        {
            link_img: "./assets/image/tron2.PNG",
            ans_A: "Hình tam giác",
            ans_B: "Hình vuông",
            ans_C: "Hình tròn",
            true_ans: "Hình tròn"
        },
        {
            link_img: "./assets/image/vuong4.PNG",
            ans_A: "Hình tròn",
            ans_B: "Hình tam giác",
            ans_C: "Hình vuông",
            true_ans: "Hình vuông"
        },
        {
            link_img: "./assets/image/tamgiac8.PNG",
            ans_A: "Hình vuông",
            ans_B: "Hình tam giác",
            ans_C: "Hình tròn",
            true_ans: "Hình tam giác"
        },
        {
            link_img: "./assets/image/vuong6.PNG",
            ans_A: "Hình tam giác",
            ans_B: "Hình vuông",
            ans_C: "Hình tròn",
            true_ans: "Hình vuông"
        },
        {
            link_img: "./assets/image/tron5.PNG",
            ans_A: "Hình tam giác",
            ans_B: "Hình vuông",
            ans_C: "Hình tròn",
            true_ans: "Hình tròn"
        },
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
        if (value == this.hinh[this.x].true_ans) {
            this.count_true += 1;
            this.imgTrue(this.x);
            if (this.x < this.hinh.length) this.x += 1;
            if (this.count_true == 6 && this.x == 6) {
                this.showAns = false;
                this.theEnd = true;
            }
        } else {
            this.imgFalse(this.x);
            if (this.x < this.hinh.length) this.x += 1;
            if (this.x == 6) {
                this.showAns = false;
                this.nextLess = true;
                this.theEnd = true;
            }
        }
    }
}
