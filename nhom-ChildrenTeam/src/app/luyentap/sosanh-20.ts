import {Component} from '@angular/core';

@Component({
    selector:'so-sanh-20',
    template:`
        <p><strong>Chọn dấu thích hợp điền vào chỗ trống</strong></p>
        
        <div *ngIf="ansShow">
        <h2>{{num_1}}____{{num_2}}</h2>
        <form>
            <button type ="button" #vl1 value = "<"  (click)="checkAns(vl1.value)"> < </button>
            <button type = "button" #vl2 value = ">" (click)="checkAns(vl2.value)"> > </button>
            <button type = "button" #vl3 value="=" (click)="checkAns(vl3.value)" > = </button>
        </form>
        </div>
    `,
})

export class SoSanh20Component{
    num_1 = Math.floor((Math.random() *10) + 0);
    num_2 = Math.floor((Math.random() *10 ) + 0);
    ansShow = true;
    count=0;
    checkAns(value) {
        if(this.num_1 < this.num_2 && value == "<" ){
            this.count += 1;
            alert("chính xác < ");
            this.num_1 = Math.floor((Math.random() *10) + 0);
    this.num_2 = Math.floor((Math.random() *10 ) + 0);
        } else if(this.num_1 > this.num_2 && value == ">") {
            this.count += 1;
            alert("chính xác > !");
            this.num_1 = Math.floor((Math.random() *10) + 0);
    this.num_2 = Math.floor((Math.random() *10 ) + 0);
        } else if(this.num_1 == this.num_2 && value == "="){
            this.count += 1;
            alert("chính xác = ");
            this.num_1 = Math.floor((Math.random() *10) + 0);
    this.num_2 = Math.floor((Math.random() *10 ) + 0);
        } else {
            this.count += 1;
            alert("sai");}
            if(this.count == 5){
                this.ansShow = false;
                alert("hoàn thành");
            }
    }
    

}