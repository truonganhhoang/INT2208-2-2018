import { Component } from '@angular/core';

@Component({
    selector: 'cal-sum-100',
     styleUrls:['template-sub-sum.css'],
    templateUrl: 'cal-sum-100.component.html',
})

export class Sum100Question {
    showAns = true;
    nextLess = false;
    endLessPer = false;
    endLess = false;
    count = 0;
    count_true = 0;
    num_1 = Math.floor((Math.random() * 50) + 1);
    num_2 = Math.floor((Math.random() * 50) + 0);

    rightAns(): void {      // trả lời đúng thêm một sao vào khối có id = starAward
        var img = document.createElement("IMG");
        img.setAttribute("src", "./assets/image/true.png");
        document.getElementById("starAward").appendChild(img);

    }

    checkAns(value) {
        if (value == '') {
            alert("Bạn phải điền giá trị vào ô trống!");
        }
        else if (value != ' ' && parseInt(value)   == (this.num_1 + this.num_2)) {

            this.rightAns();
            this.num_1 = Math.floor((Math.random() * 50) + 1);
            this.num_2 = Math.floor((Math.random() * 50) + 0);
            this.count += 1;
            this.count_true += 1;

            if (this.count == 5 && this.count_true == 5) {
                this.showAns = false;
                this.nextLess = true;
                this.endLessPer = true;
            }
        } else if (value != '') {
            this.num_1 = Math.floor((Math.random() * 50) + 1);
            this.num_2 = Math.floor((Math.random() * 50) + 0);
            this.count += 1;
            if (this.count == 5) {
                this.showAns = false;
                this.nextLess = true;
                this.endLess = true;
            }
        }
    }
}

