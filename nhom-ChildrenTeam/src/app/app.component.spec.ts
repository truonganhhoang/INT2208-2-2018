import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from "@angular/core";
import { RouterTestingModule } from '@angular/router/testing';

import { AppComponent } from './app.component';

describe('AppComponent (templateUrl)', () => {
    beforeEach(() => {
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
        TestBed.configureTestingModule( {
            declarations: [AppComponent],
            imports: [ RouterTestingModule ]
        });
        TestBed.compileComponents();
    });

    it ('should exist AppComponent', async(() => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));

    it ('should support clicking a button', async(() => {
        const fixture = TestBed.createComponent(AppComponent);
        const btn = fixture.debugElement.query(By.css('button'));
        const app = fixture.debugElement.componentInstance;
        btn.triggerEventHandler('click', app.notice());
        fixture.detectChanges();
        expect(app.notice()).toBeUndefined();
    }));
});
