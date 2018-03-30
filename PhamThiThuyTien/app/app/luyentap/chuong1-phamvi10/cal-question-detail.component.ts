import { Component, OnInit } from '@angular/core';

import { CalQuestion } from './cal-question';

@Component({
    selector: 'cal-question-detail',
    styleUrls :['./cal-question-detail.component.css'],
    templateUrl: './cal-question-detail.html',
}

)

export class CalQuestionDetailComponent {
    
   
    CALQUESTIONS: CalQuestion[] = [
    {
      id: '01',    
      question: '3 + 4 = ',  
      ans: 7
  },
  {
      id: '02',
      question:'4 + 2 = ',
      ans: 6
  },
  {
      id: '03',
      question:'8 - 3 = ',
      
      ans: 5
  },
  {
      id: '04',
      question: '6 + 3 = ',
      ans: 9
  },
  {
      id: '05',
      question: '9 - 2 = ',
      ans: 7
  }
];

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
            if(this.x < 5) {
                this.x += 1;
            }

            if(this.x == 5 && this.count_true == 5){
                this.showAns = false;
                this.nextLess = true;
                this.endLessPer = true;
                
            }
        }
        else {
            if(this.x < 5 ){
                this.x += 1; 
            }
            if (this.x == 5) {
               
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