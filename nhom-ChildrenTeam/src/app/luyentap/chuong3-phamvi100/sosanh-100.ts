import { Component } from '@angular/core';

@Component({
    selector: 'so-sanh-100',
    styleUrls:['../../css/sosanh.css'],
    templateUrl: 'sosanh-100.html',
})

export class soSanh100 {
    num_1 = Math.floor((Math.random() * 100) + 1);
    num_2 = Math.floor((Math.random() * 100) + 1);
    showAns = true;
    count = 0;
    count_true = 0;
    nextLess = false;
    endPer = false;
    endLess = false;

    rightAns(): void {      // trả lời đúng thêm một sao vào khối có id = starAward
        this.count_true += 1;
        var img = document.createElement("IMG");
        img.setAttribute("src", "./assets/image/true.png");
        document.getElementById("starAward").appendChild(img);
    }

    rand() {
        this.num_1 = Math.floor((Math.random() * 100) + 1);
        this.num_2 = Math.floor((Math.random() * 100) + 1);
    }

    checkAns(value) {
        if (this.num_1 < this.num_2 && value == "<") {
            this.rightAns();
            this.count += 1;
            this.rand();
        } else if (this.num_1 > this.num_2 && value == ">") {
            this.count += 1;
            this.rightAns();
            this.rand();

        } else if (this.num_1 == this.num_2 && value == "=") {
            this.count += 1;
            this.rightAns();
            this.rand();
        } else {
            this.count += 1;
            this.rand();
        }
        if (this.count_true == 10) {
            this.showAns = false;
            this.nextLess = true;
            this.endPer = true;
        } else if (this.count == 10) {
            this.showAns = false;
            this.nextLess = true;
            this.endLess = true;
        }
    }
}