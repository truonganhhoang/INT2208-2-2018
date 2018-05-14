import { Component } from '@angular/core';

@Component({
    selector: 'sum-20',
    styleUrls:['../../css/sub-sum.css'],
    templateUrl: 'sum-20.html',
})

export class sum20 {
    showAns = true;
    nextLess = false;
    endPer = false;
    endLess = false;
    count = 0;
    count_true = 0;
    num_1 = Math.floor((Math.random() * 10) + 1);
    num_2 = Math.floor((Math.random() * 10) + 0);

    rightAns(): void {      // trả lời đúng thêm một sao vào khối có id = starAward
        this.count_true += 1;
        var img = document.createElement("IMG");
        img.setAttribute("src", "./assets/image/true.png");
        document.getElementById("starAward").appendChild(img);
    }

    checkAns(value) {
        if (value == '') {
            alert("Bạn phải điền giá trị vào ô trống!");
        }
        else if (value != ' ' && parseInt(value) == (this.num_1 + this.num_2)) {
            this.rightAns();
            this.num_1 = Math.floor((Math.random() * 10) + 1);
            this.num_2 = Math.floor((Math.random() * 10) + 0);
            this.count += 1;
            if (this.count_true == 10) {
                this.showAns = false;
                this.nextLess = true;
                this.endPer = true;
            }
        } else if (value != '') {
            this.num_1 = Math.floor((Math.random() * 10) + 1);
            this.num_2 = Math.floor((Math.random() * 10) + 0);
            this.count += 1;
        }
        if (this.count == 10 && this.endPer == false) {
            this.showAns = false;
            this.nextLess = true;
            this.endLess = true;
        }
    }
}

