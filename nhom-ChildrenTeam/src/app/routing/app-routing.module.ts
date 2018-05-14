import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { app } from  'app/app';
import { home } from 'app/home';

import { dem10 } from 'app/luyentap/chuong1-phamvi10/dem10';
import { sub10 } from 'app/luyentap/chuong1-phamvi10/sub-10';
import { sum10 } from 'app/luyentap/chuong1-phamvi10/sum-10';
import { luyenTap } from 'app/luyentap/luyentap';
import { minMax10 } from 'app/luyentap/chuong1-phamvi10/min-max-10';

import { soSanh20 } from 'app/luyentap/chuong2-phamvi20/sosanh-20';
import { sub20} from 'app/luyentap/chuong2-phamvi20/sub-20';
import { sum20 } from 'app/luyentap/chuong2-phamvi20/sum-20';
import { minMax20} from 'app/luyentap/chuong2-phamvi20/min-max-20';
import { lienTruocSau20 } from 'app/luyentap/chuong2-phamvi20/lientruoc-sau-20';

import { soSanh100 } from 'app/luyentap/chuong3-phamvi100/sosanh-100';
import { sub100 } from 'app/luyentap/chuong3-phamvi100/sub-100';
import { sum100 } from 'app/luyentap/chuong3-phamvi100/sum-100';
import { minMax100 } from 'app/luyentap/chuong3-phamvi100/min-max-100';
import { lienTruocSau100 } from 'app/luyentap/chuong3-phamvi100/lientruoc-sau-100';

import { diemDoanthang } from 'app/luyentap/chuong4-hinhhoc/diem-doanthang';
import { tamGiacVuongTron } from 'app/luyentap/chuong4-hinhhoc/tamgiac-vuong-tron';
import { demTamgiac } from 'app/luyentap/chuong4-hinhhoc/dem-so-tamgiac';

import { xemGio} from 'app/luyentap/chuong5-thoigian/xem-gio';

import { kiemTra } from 'app/kiemtra/kiemtra';
import { de1 } from 'app/kiemtra/de1';
import { de2 } from 'app/kiemtra/de2';
import { de3 } from 'app/kiemtra/de3';
import { de4 } from 'app/kiemtra/de4';
import { de5 } from 'app/kiemtra/de5';

import { giaiTri } from 'app/giaitri/giaitri';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: home},
  
  { path: 'luyentap', component: luyenTap },
  { path: 'dem10', component: dem10 },
  { path: 'sub10', component: sub10 },
  { path: 'sum10', component: sum10},
  { path: 'minmax10', component: minMax10 },

  { path: 'sosanh20', component: soSanh20 },
  { path: 'sub20', component: sub20},
  { path: 'sum20', component: sum20 },
  { path: 'minmax20', component: minMax20 },
  { path: 'lientruocsau20', component: lienTruocSau20 },

  { path: 'sosanh100', component: soSanh100 },
  { path: 'sub100', component: sub100 },
  { path: 'sum100', component: sum100 },
  { path: 'minmax100', component: minMax100 },
  { path: 'lientruocsau100', component: lienTruocSau100 },

  { path: 'diemdoanthang', component: diemDoanthang },
  { path: 'tamgiacvuongtron', component: tamGiacVuongTron },
  { path: 'demtamgiac', component: demTamgiac },

  { path: 'xemgio', component: xemGio },
  
  { path: 'kiemtra', component: kiemTra},
  { path: 'de1', component: de1 },
  { path: 'de2', component: de2 },
  { path: 'de3', component: de3 },
  { path: 'de4', component: de4 },
  { path: 'de5', component: de5 },

  { path: 'giaitri', component: giaiTri}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
