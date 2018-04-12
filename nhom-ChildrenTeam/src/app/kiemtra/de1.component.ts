import { Component } from '@angular/core';
import { test } from './test';

@Component({
    selector: 'de1',
    templateUrl: 'de.component.html',
    styleUrls: ['de.component.css'],

})

export class De1Component {
    tests: test[] = [
        {
            name_que: "Thực hiện phép tính",
            name_link: "",
            conten_ques: "4 + 46 = ??? ",
            input_ans: "",
            true_ans: 50
        },
        {
            name_que: "Có bao nhiêu đồng hồ chỉ hơn 4h",
            name_link: "./assets/image/hon4h.png",
            conten_ques: "",
            input_ans: "",
            true_ans: 3
        },
        {
            name_que: "Đếm số hình tam giác hiện trên hình vẽ.(Chỉ đếm những hình được nối bởi 3 điểm)",
            name_link: "./assets/image/tamgiac2.jpg",
            conten_ques: "",
            input_ans: "",
            true_ans: 5
        },
        {
            name_que: "Thực hiện phép tính",
            name_link: "",
            conten_ques: "86 - 45 = ??? ",
            input_ans: "",
            true_ans: 41
        },
        {
            name_que: "Số lớn nhất trong các số sau ?",
            name_link: "",
            conten_ques: "56, 45, 34, 78, 49, 23",
            input_ans: "",
            true_ans: 78
        },
        {
            name_que: "Thực hiện phép tính sau.",
            name_link: "",
            conten_ques: "67 - 48 = ???",
            input_ans: "",
            true_ans: 19
        },
        {
            name_que: "Nếu hôm nay là Chủ Nhật thì ngày mai là thứ mấy? (Chỉ cần ghi số)",
            name_link: "",
            conten_ques: "",
            input_ans: "",
            true_ans: 2
        },
        {
            name_que: "Đếm số cá xuất hiện trong hình.",
            name_link: "./assets/image/3ca.png",
            conten_ques: "",
            input_ans: "",
            true_ans: 3
        },
        {
            name_que: "Thực hiện phép tính sau.",
            name_link: "",
            conten_ques: "87 - 48 = ???",
            input_ans: "",
            true_ans: 39
        },
         {
            name_que: "Thực hiện phép tính sau.",
            name_link: "",
            conten_ques: "12 + 30 = ???",
            input_ans: "",
            true_ans: 42
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