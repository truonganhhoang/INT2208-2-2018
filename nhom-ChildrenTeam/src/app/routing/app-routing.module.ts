import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from  'app/app.component';
import { HomeComponent } from 'app/home.component';

import { CountQuestionDetailComponent } from 'app/luyentap/chuong1-phamvi10/count-question-detail.component';
import { CalQuestionDetailComponent } from 'app/luyentap/chuong1-phamvi10/cal-question-detail.component';
import { luyentapComponent } from 'app/luyentap/luyentap.component';
import { MinMaxQuestionDetailComponent } from 'app/luyentap/chuong1-phamvi10/min-max-10';

import { SoSanh20Component } from 'app/luyentap/chuong2-phamvi20/sosanh-20.component';
import { Sub20Question } from 'app/luyentap/chuong2-phamvi20/sub-20-question.component';
import { Sum20Question } from 'app/luyentap/chuong2-phamvi20/sum-20-question.component';
import { MinMax20QuestionComponent } from 'app/luyentap/chuong2-phamvi20/min-max-20-question.component';
import { SoLienTruocSau20Component } from 'app/luyentap/chuong2-phamvi20/lientruoc-sau-20.component';

import { SoSanh100Component } from 'app/luyentap/chuong3-phamvi100/sosanh-100.component';
import { Sub100Question } from 'app/luyentap/chuong3-phamvi100/cal-sub-100.component';
import { Sum100Question } from 'app/luyentap/chuong3-phamvi100/cal-sum-100.component';
import { MinMax100QuestionComponent } from 'app/luyentap/chuong3-phamvi100/min-max-100.component';
import { SoLienTruocSau100Component } from 'app/luyentap/chuong3-phamvi100/lientruoc-sau-100.component';

// kiểm tra
import { KiemTraComponent } from 'app/kiemtra/kiemtra.component';
import { De1Component } from 'app/kiemtra/de1.component';
import { De2Component } from 'app/kiemtra/de2.component';
import { De3Component } from 'app/kiemtra/de3.component';

import { giaitriComponent } from 'app/giaitri/giaitri.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },

  { path: 'luyentap', component: luyentapComponent },
  { path: 'demden5', component: CountQuestionDetailComponent },
  { path: 'cacsovapheptinhtrongphamvi10', component: CalQuestionDetailComponent },
  { path: 'timminmaxphamvi10', component: MinMaxQuestionDetailComponent },

  { path: 'sosanh20', component: SoSanh20Component },
  { path: 'calsub20', component: Sub20Question },
  { path: 'calsum20', component: Sum20Question },
  { path: 'minmax20', component: MinMax20QuestionComponent },
  { path: 'lientruocsau20', component: SoLienTruocSau20Component },

  { path: 'sosanh100', component: SoSanh100Component },
  { path: 'calsub100', component: Sub100Question },
  { path: 'calsum100', component: Sum100Question },
  { path: 'minmax100', component: MinMax100QuestionComponent },
  { path: 'lientruocsau100', component: SoLienTruocSau100Component },

  { path: 'kiemtra', component: KiemTraComponent },
  { path: 'de1', component: De1Component },
  { path: 'de2', component: De2Component },
  { path: 'de3', component: De3Component },

  { path: 'giaitri', component: giaitriComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
