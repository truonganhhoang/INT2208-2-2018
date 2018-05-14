import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

let providers = {
  "google": {
    "clientId": "GOOGLE_CLIENT_ID"
  },
  "facebook": {
    "clientId": "FACEBOOK_CLIENT_ID",
    "apiVersion": "v2.4"
  }
};

import { AppRoutingModule } from 'app/routing/app-routing.module';
import { app } from './app';
import { home } from './home';

// chương 1
import { dem10 } from 'app/luyentap/chuong1-phamvi10/dem10';
import { sub10 } from 'app/luyentap/chuong1-phamvi10/sub-10';
import { sum10 } from 'app/luyentap/chuong1-phamvi10/sum-10';
import { minMax10 } from 'app/luyentap/chuong1-phamvi10/min-max-10';

//chương 2
import { soSanh20 } from 'app/luyentap/chuong2-phamvi20/sosanh-20';
import { sub20} from 'app/luyentap/chuong2-phamvi20/sub-20';
import { sum20 } from 'app/luyentap/chuong2-phamvi20/sum-20';
import { minMax20} from 'app/luyentap/chuong2-phamvi20/min-max-20';
import { lienTruocSau20 } from 'app/luyentap/chuong2-phamvi20/lientruoc-sau-20';

//chương 3
import { soSanh100 } from 'app/luyentap/chuong3-phamvi100/sosanh-100';
import { sub100 } from 'app/luyentap/chuong3-phamvi100/sub-100';
import { sum100 } from 'app/luyentap/chuong3-phamvi100/sum-100';
import { minMax100 } from 'app/luyentap/chuong3-phamvi100/min-max-100';
import { lienTruocSau100 } from 'app/luyentap/chuong3-phamvi100/lientruoc-sau-100';

//  chương 4
import { diemDoanthang } from 'app/luyentap/chuong4-hinhhoc/diem-doanthang';
import { tamGiacVuongTron } from 'app/luyentap/chuong4-hinhhoc/tamgiac-vuong-tron';
import { demTamgiac } from 'app/luyentap/chuong4-hinhhoc/dem-so-tamgiac';

// chương 5
import { xemGio} from 'app/luyentap/chuong5-thoigian/xem-gio';

import { luyenTap } from "app/luyentap/luyentap";
import { kiemTra } from './kiemtra/kiemtra';
import { giaiTri } from './giaitri/giaitri';

import { de1 } from 'app/kiemtra/de1';
import { de2 } from 'app/kiemtra/de2';
import { de3 } from 'app/kiemtra/de3';
import { de4 } from 'app/kiemtra/de4';
import { de5 } from 'app/kiemtra/de5';

@NgModule({
  declarations: [
    app,
    home,
    dem10,
    sub10,
    sum10,
    minMax10,
    soSanh20,
    sub20,
    sum20,
    minMax20,
    lienTruocSau20,
    soSanh100,
    sub100,
    sum100,
    minMax100,
    lienTruocSau100,
    diemDoanthang,
    tamGiacVuongTron,
    demTamgiac,
    xemGio,

    luyenTap,
    kiemTra,
    giaiTri,

    de1,
    de2,
    de3,
    de4,
    de5,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [app]
})

export class AppModule { 
  constructor(){}
}


