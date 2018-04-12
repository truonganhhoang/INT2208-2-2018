import { Component } from '@angular/core';
import {HomeComponent} from './home.component';

import { AppRoutingModule } from 'app/routing/app-routing.module';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    
})
export class AppComponent {

     refresh():void {
    var timeOutSet = setTimeout(function() {
      location.reload(true);
      clearTimeout(timeOutSet);
    }, 300);
  }
}
