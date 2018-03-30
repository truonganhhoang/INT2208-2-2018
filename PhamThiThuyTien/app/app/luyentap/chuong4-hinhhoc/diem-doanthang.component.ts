import { Component } from '@angular/core';
import { CountQuestion } from 'app/luyentap/chuong1-phamvi10/count-question';
@Component({
    selector: 'diem-doanthang',
    styleUrls:['template-c4.css'],
    templateUrl: 'template-c4.component.html',
})

export class DiemDoanthang {
    countques: CountQuestion[] = [
        {
            name_ques: "Đếm số điểm nằm bên trong hình tròn.",
            link_img: "./assets/image/diem1.jpg",
            true_ans: 6
        },
        {
            name_ques: "Đếm số điểm nằm bên trong hình tứ giác.",
            link_img: "./assets/image/diem.jpg",
            true_ans: 5
        },
        {
            name_ques: "Đếm số đoạn thẳng xuất hiện.",
            link_img: "./assets/image/doanthang.jpg",
            true_ans: 7
        },
        {
            name_ques: "Đếm số điểm nằm bên ngoài hình tứ giác.",
            link_img: "./assets/image/diem.jpg",
            true_ans: 4
        },
        {
            name_ques: "Đếm số điểm nằm bên ngoài hình tròn.",
            link_img: "./assets/image/diem1.jpg",
            true_ans: 3
        }
    ];

    b3_c4_head = false;
    b2_c4_head = true;
    nameQues = true;
    showAns = true; // hiện câu hỏi 
    nextLess = false;
    x = 0;

    count_true = 0;
    endLessPer = false;
    endLess = false;

    bai3_chuong4 = false;
    bai1_chuong5 = false;

    rightAns(): void {      // trả lời đúng thêm một sao vào khối có id = starAward
        var img = document.createElement("IMG");
        img.setAttribute("src", "./assets/image/true.png");
        document.getElementById("starAward").appendChild(img);

    }

    checkAns(value) {
        if (parseInt(value) == this.countques[this.x].true_ans) {
            this.rightAns();          // thêm 1 ngôi sao vào trong khung 
            this.count_true += 1;     // số câu đúng tăng thêm 1
            if (this.x <= this.countques.length)
                this.x += 1;            // chỉ số đối tượng tăng lên 1

            if (this.x == this.countques.length && this.count_true == this.countques.length) {  // chỉ số bằng độ dài, số câu đúng = độ dài
                this.nameQues = false;
                this.showAns = false;
                this.nextLess = true;
                this.endLessPer = true;
                this.bai3_chuong4 = true;
            }

        } else {

            if (this.x <= this.countques.length)
                this.x += 1;
            if (this.x == this.countques.length) {
                this.nameQues = false;
                this.showAns = false;
                this.nextLess = true;
                this.endLess = true;
                this.bai3_chuong4 = true;
                if (this.count_true == 0) {
                    var para = document.createElement("P");
                    var t = document.createTextNode("Bạn không đạt được sao nào, cố gắng lần sau nhé!");
                    para.appendChild(t);
                    document.getElementById("panel_star").appendChild(para);
                }
            }

        }


    }
}