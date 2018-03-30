import { Component } from '@angular/core';

@Component({
    selector: 'count-20-question',
    templateUrl: 'sosanh-20.component.html',
    styleUrls: ['sosanh-20.component.css'],
})

export class SoSanh20Component {
    num_1 = Math.floor((Math.random() * 20) + 0);
    num_2 = Math.floor((Math.random() * 20) + 0);
    showAns = true;
    count = 0;
    nextLess = false;
    endLessPer = false;
    endLess = false;
    count_true = 0;

    rightAns(): void {      // trả lời đúng thêm một sao vào khối có id = starAward
        var img = document.createElement("IMG");
        img.setAttribute("src", "./assets/image/true.png");
        document.getElementById("starAward").appendChild(img);

    }

    rand() {
        this.num_1 = Math.floor((Math.random() * 10) + 0);
        this.num_2 = Math.floor((Math.random() * 10) + 0);
    }

    checkAns(value) {
        if (this.num_1 < this.num_2 && value == "<") {
            this.rightAns();
            this.count += 1;
            this.count_true +=1;
            this.rand();
        } else if (this.num_1 > this.num_2 && value == ">") {
            this.count += 1;
            this.rightAns();
            this.count_true +=1;
            this.rand();
            this.num_2 = Math.floor((Math.random() * 10) + 0);
        } else if (this.num_1 == this.num_2 && value == "=") {
            this.count += 1;
            this.rightAns();
            this.count_true +=1;
            this.rand();
        } else {
            this.count += 1;
            this.rand();
        }
        if (this.count == 5 && this.count_true == 5) {

            this.showAns = false;
            this.nextLess = true;
            this.endLessPer = true;
        } else if(this.count == 5) {
            this.showAns = false;
            this.nextLess = true;
            this.endLess = true;   
        }

    }


}