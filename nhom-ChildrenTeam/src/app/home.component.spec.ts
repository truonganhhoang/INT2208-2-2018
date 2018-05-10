import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from "@angular/core";

import { HomeComponent } from 'app/home.component';

describe('HomeComponent (templateUrl)', () => {
    beforeEach(() => {
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
        TestBed.configureTestingModule( {
            declarations: [HomeComponent],
        });
        TestBed.compileComponents();
    });

    it ('should open the homepage', async(() => {
        const fixture = TestBed.createComponent(HomeComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));

    it('should have as titles "Luyện tập", "Kiểm tra" and "Kỹ năng sống"', async(() => {
        const fixture = TestBed.createComponent(HomeComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app.titles[0]).toEqual("Luyện tập");
        expect(app.titles[1]).toEqual("Kiểm tra");
        expect(app.titles[2]).toEqual("Kỹ năng sống");
    }));

    it ('should render "Luyện tập" in h3 tag', async(() => {
        const fixture = TestBed.createComponent(HomeComponent);
        const comp = fixture.debugElement.nativeElement;
        const app = fixture.debugElement.componentInstance;
        fixture.detectChanges();
        expect(comp.querySelector('h3').textContent).toContain('Luyện tập');
    }));

});