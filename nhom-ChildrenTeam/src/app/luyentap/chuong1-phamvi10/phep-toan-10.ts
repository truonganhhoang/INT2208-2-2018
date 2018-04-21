import { Component, OnInit } from '@angular/core';

import { CalQuestion } from './cal-question';

@Component({
    selector: 'phep-toan-10',
    styleUrls :['./phep-toan-10.css'],
    templateUrl: './cal-question-detail.html',
}

)

export class phepToan10 {   
   
    CALQUESTIONS: CalQuestion[] = [{
        id: '01',    
        question: '5 + 3= ',  
        ans: 8
    }, {
        id: '02',
        question:'6 - 4 = ',
        ans: 2
    }, {
        id: '03',
        question:'2 - 0 = ',
        ans: 2
    }, {
        id: '04',
        question:'2 + 7 = ',
        ans: 9
    }, {
        id: '05',
        question:'10 - 3 = ',
        ans: 7
    }, {
        id: '06',
        question:'0 + 10 = ',   
        ans: 10
    }, {
        id: '07',
        question:'7 - 4 = ',
        ans: 3
    }, {
        id: '08',
        question: '3 + 1 = ',
        ans: 4
    }, {
        id: '09',
        question:'9 - 3 = ',
        ans: 6
    }, {
        id: '10',
        question: '1 + 4 = ',
        ans: 5
    }];

    x = 0;
    showAns = true; // hiện câu hỏi 
    
    nextLess = false;
   
    count_true = 0;
    endLessPer = false;
    endLess = false;
    
    rightAns(): void {      // trả lời đúng thêm một sao vào khối có id = starAward
        var img = document.createElement("IMG");
        img.setAttribute("src", "./assets/image/true.png");
        document.getElementById("starAward").appendChild(img);

    }

    checkAns(value){
        if(parseInt(value) == this.CALQUESTIONS[this.x].ans)
        {
            this.rightAns();
            this.count_true += 1;
            if(this.x < 10) {
                this.x += 1;
            }

            if(this.x == 10 && this.count_true == 10){
                this.showAns = false;
                this.nextLess = true;
                this.endLessPer = true;
                
            }
        }
        else {
            if(this.x < 10 ){
                this.x += 1; 
            }
            if (this.x == 10) {
               
                this.showAns = false;
                this.nextLess = true;
                this.endLess = true;
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