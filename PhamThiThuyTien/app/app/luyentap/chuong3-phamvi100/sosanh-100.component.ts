import { Component } from '@angular/core';

@Component({
    selector: 'count-100-question',
    styleUrls:['sosanh-100.component.css'],
    templateUrl: 'sosanh-100.component.html',
})

export class SoSanh100Component {
    num_1 = Math.floor((Math.random() * 100) + 1);
    num_2 = Math.floor((Math.random() * 100) + 1);
    showAns = true;
    count = 0;
    nextLess = false;
    endLessPer = false;
    endLess = false;

    rightAns(): void {      // trả lời đúng thêm một sao vào khối có id = starAward
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
        if (this.count == 5) {

            this.showAns = false;
            this.nextLess = true;
            this.endLessPer = true;
        }
    }


}