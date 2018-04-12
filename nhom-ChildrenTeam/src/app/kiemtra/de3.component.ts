import { Component } from '@angular/core';
import { test } from './test';

@Component({
    selector: 'de3',
    templateUrl: 'de.component.html',
    styleUrls: ['de.component.css'],

})

export class De3Component {
    tests: test[] = [
        {
            name_que: "Thực hiện phép tính",
            name_link: "",
            conten_ques: "30 + 40 = ??? ",
            input_ans: "",
            true_ans: 70
        },
        {
            name_que: "Gia đình Hải gồm có bố mẹ Hải, anh trai Hải, em gái Hải và Hải. Hỏi gia đình Hải có tất cả mấy người?",
            name_link: "",
            conten_ques: "",
            input_ans: "",
            true_ans: 5
        },
        {
            name_que: "Thực hiện phép tính",
            name_link: "",
            conten_ques: "26 + 32 = ??? ",
            input_ans: "",
            true_ans: 58
        },
        {
            name_que: "Hình dưới có bao nhiêu hình tròn màu đỏ",
            name_link: "./assets/image/3do.jpg",
            conten_ques: "",
            input_ans: "",
            true_ans: 3
        },
        {
            name_que: "Số lớn nhất trong các số sau ?",
            name_link: "",
            conten_ques: "56, 45, 34, 78, 49, 23",
            input_ans: "",
            true_ans: 78
        },
        {
            name_que: "Tìm số nhỏ nhất trong dãy số sau ?",
            name_link: "",
            conten_ques: "82, 56, 27, 38, 40, 28",
            input_ans: "",
            true_ans: 27
        },
        {
            name_que: "Thực hiện phép tính sau.",
            name_link: "",
            conten_ques: "32 + 48 = ???",
            input_ans: "",
            true_ans: 80
        },
        {
            name_que: "Đếm số đồng hồ xuất hiện trong hình.",
            name_link: "./assets/image/4dongho.jpg",
            conten_ques: "",
            input_ans: "",
            true_ans: 4
        },
        {
            name_que: "Điền số thích hợp",
            name_link: "",
            conten_ques: "13cm + 34 cm = ??? cm",
            input_ans: "",
            true_ans: 47
        },
         {
            name_que: "Thực hiện phép tính sau.",
            name_link: "",
            conten_ques: "29 + 36= ???",
            input_ans: "",
            true_ans: 65
        }

    ];
    showGuide = true;
    showChoice = false;
    showChoiceCheck = false;
    first = true;

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


    cauhoi() {
        this.showGuide = false;
        for (var i = 0; i < this.tests.length; i++) {
            var d1 = document.createElement("DIV");
            d1.setAttribute("class", "panel panel-body panel-primary");
            d1.setAttribute("id", "q" + i);
            document.getElementById("divQues").appendChild(d1); // thêm panel vào col
            // tạo tên câu hỏi h3
            var h3 = document.createElement("H3");
            var txt1 = document.createTextNode(this.tests[i].name_que);
            h3.appendChild(txt1);
            document.getElementById("q" + i).appendChild(h3); // thêm h3 vào panel
            // tạo hình ảnh
            var img = document.createElement("IMG");
            img.setAttribute("src", this.tests[i].name_link);
            document.getElementById("q" + i).appendChild(img);    // thêm img vào panel
            //tạo nội dung nếu là tính toán h2
            var h2 = document.createElement("H2");
            var txt2 = document.createTextNode(this.tests[i].conten_ques);
            h2.appendChild(txt2);
            document.getElementById("q" + i).appendChild(h2);     // thêm h2 vào panel
            // tạo input h2, input
            var ip = document.createElement("INPUT");
            ip.setAttribute("type", "text");
            ip.setAttribute("id", "ip" + i);
            ip.setAttribute("style", "text-align: center");
            document.getElementById("q" + i).appendChild(ip);
        }
        this.showChoice = true;
        this.showChoiceCheck = true;

    }

    checkAns() {
        this.first = false;
        this.showChoiceCheck = false;
        var j;
        var diem = 0 ; 
        for (j = 0; j < this.tests.length; j++) {
            var txtkq = (<HTMLInputElement>document.getElementById("ip" + j)).value;
            if (parseInt(txtkq) == this.tests[j].true_ans) {
                this.imgTrue("q"+j);
                diem = diem + 1;
            }
            else {
                this
                .imgFalse("q"+j);
                diem = diem + 0;
            }
        }
        typeof diem;
        var d1 = diem.toString();
        var txt2 = document.createTextNode(d1);
        document.getElementById("scoreValue").appendChild(txt2);
    }
}