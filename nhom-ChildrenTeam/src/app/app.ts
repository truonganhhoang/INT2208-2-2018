import { Component } from '@angular/core';
import {home} from './home';
import { AppRoutingModule } from 'app/routing/app-routing.module';

@Component({
    selector: 'app-root',
    templateUrl: './app.html',
    styleUrls: ['./css/app.css'],
    
})

export class app {
     refresh():void {
    var timeOutSet = setTimeout(function() {
      location.reload(true);
      clearTimeout(timeOutSet);
    }, 300);
  }
}
