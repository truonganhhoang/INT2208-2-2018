import { Component } from '@angular/core';

@Component({
    selector: 'cal-sub-100',
    styleUrls:['template-sub-sum.css'],
    templateUrl: 'cal-sub-100.component.html',
})

export class Sub100Question {
    showAns = true;
    nextLess = false;
    endLessPer = false;
    endLess = false;
    count = 0;
    a = Math.floor((Math.random() * 100) + 1);
    b = Math.floor((Math.random() * 100) + 0);
    sub_1 = Math.max(this.a, this.b);
    sub_2 = Math.min(this.a, this.b);

    rand() {
        var num_1 = Math.floor((Math.random() * 100) + 1);
        var num_2 = Math.floor((Math.random() * 100) + 0);
        this.sub_1 = Math.max(num_1, num_2);
        this.sub_2 = Math.min(num_1, num_2);
    }
    rightAns(): void {      // trả lời đúng thêm một sao vào khối có id = starAward
        var img = document.createElement("IMG");
        img.setAttribute("src", "./assets/image/true.png");
        document.getElementById("starAward").appendChild(img);

    }

    checkAns(value) {
        if (value == '') {
            alert("Bạn phải điền giá trị vào ô trống!");
        }
        else if (value != ' ' && parseInt(value) == (this.sub_1 - this.sub_2)) {

            this.rightAns();
            this.rand();
            this.count += 1;

            if (this.count == 5) {
                this.showAns = false;
                this.nextLess = true;
                this.endLessPer = true;
            }
        } else if (value != '') {
            this.count += 1;
            this.rand();
            if (this.count == 5) {
                this.showAns = false;
                this.nextLess = true;
                this.endLess = true;
            }
        }
    }
}

