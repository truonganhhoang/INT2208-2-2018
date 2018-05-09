import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from "@angular/core";
import { RouterTestingModule } from '@angular/router/testing';
import { luyentapComponent } from './luyentap.component';


describe('luyentapComponent (template)', () => {
    beforeEach(() => {
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
        TestBed.configureTestingModule( {
            declarations: [luyentapComponent],
            imports: [ RouterTestingModule ]
        });
        TestBed.compileComponents();
    });

    it ('should open the page "Luyện tập"', async(() => {
        const fixture = TestBed.createComponent(luyentapComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));

    it ('should click link to practice', async(() => {
        const fixture = TestBed.createComponent(luyentapComponent);
        const a = fixture.debugElement.query(By.css('a'));
        a.triggerEventHandler('click', null);
        fixture.detectChanges();
        expect(a).toBeTruthy();
    }));
});