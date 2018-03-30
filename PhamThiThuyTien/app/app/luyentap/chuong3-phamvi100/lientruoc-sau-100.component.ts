import { Component } from '@angular/core';

@Component({
    selector: 'so-lien-truoc-sau-100',
    styleUrls:['template-lientruoc-sau.css'],
    templateUrl: 'lientruoc-sau-100.component.html',
})

export class SoLienTruocSau100Component {
    _num = Math.floor(Math.random() * 99 + 1);
    _nameQues = "Tìm số liền trước của: ";
    _nameAns = 'Số liền trước là : ';
    showAns = true;
    nextLess = false;
    endLessPer = false;
    endLess = false;
    count = 0;
    count_true = 0;
    init() {
        var _signal = Math.floor(Math.random() * 2 + 1);
        if (_signal == 1) {
            this._nameQues = "Tìm số liền trước của: ";
            this._nameAns = "Số liền trước là: ";
        } else {
            this._nameQues = "Tìm số liền sau của: ";
            this._nameAns = "Số liền sau là: ";
        }
        this._num = Math.floor(Math.random() * 99 + 1);
    }

    rightAns(): void {      // trả lời đúng thêm một sao vào khối có id = starAward
        var img = document.createElement("IMG");
        img.setAttribute("src", "./assets/image/true.png");
        document.getElementById("starAward").appendChild(img);

    }
    checkAns(value) {
        if (this._nameQues == "Tìm số liền trước của: ") {
            if (value == '') {
                alert("Bạn phải điền giá trị vào ô trống!");
            }
            else if (parseInt(value) == (this._num - 1)) {
                this.rightAns();
                this.count += 1;
                this.count_true += 1;
                this.init();
                if (this.count == 5) {
                    this.showAns = false;
                    this.nextLess = true;
                    this.endLessPer = true;
                }
            }
            else {
                this.count += 1;
                this.init();
                if (this.count == 5) {
                    this.showAns = false;
                    this.nextLess = true;
                    this.endLess = true;
                }
            }
        } else {
            if (parseInt(value) == (this._num + 1)) {
                this.rightAns();
                this.count += 1;
                this.count_true += 1;
                this.init();
                if (this.count == 5) {
                    this.showAns = false;
                    this.nextLess = true;
                    this.endLessPer = true;
                }
            }
            else {
                this.count += 1;
                this.init();
                if (this.count == 5) {
                    this.showAns = false;
                    this.nextLess = true;
                    this.endLess = true;
                }
            }
        }

    }


}