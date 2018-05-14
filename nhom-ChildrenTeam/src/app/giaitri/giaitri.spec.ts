import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { giaiTri } from './giaitri';
import { DebugElement } from "@angular/core";

describe('giaiTri (templateUrl)', () => {
    beforeEach(() => {
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
        TestBed.configureTestingModule( {
            declarations: [giaiTri],
        });
        TestBed.compileComponents();
    });

    it ('should open the page "Giải trí"', async(() => {
        const fixture = TestBed.createComponent(giaiTri);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));

    it('should have as titles "TRUYỆN NGẮN" and "QUÀ TẶNG CUỘC SỐNG"', async(() => {
        const fixture = TestBed.createComponent(giaiTri);
        const app = fixture.debugElement.componentInstance;
        expect(app.titles[0]).toEqual("TRUYỆN NGẮN");
        expect(app.titles[1]).toEqual("QUÀ TẶNG CUỘC SỐNG");
    }));

    it ('should render "TRUYỆN NGẮN" in h2 tag', async(() => {
        const fixture = TestBed.createComponent(giaiTri);
        const comp = fixture.debugElement.nativeElement;
        const app = fixture.debugElement.componentInstance;
        fixture.detectChanges();
        expect(comp.querySelector('h2').textContent).toContain('TRUYỆN NGẮN');
    }));

    it ('should have as "Ba lưỡi rìu" story', async(() => {
        const fixture = TestBed.createComponent(giaiTri);
        const app = fixture.debugElement.componentInstance;
        expect(app.stories[0]).toEqual("Ba lưỡi rìu");
    }));

    it ('should render "Ba lưỡi rìu" in list-group-item class', async(() => {
        const fixture = TestBed.createComponent(giaiTri);
        const comp = fixture.debugElement.nativeElement;
        const app = fixture.debugElement.componentInstance;
        fixture.detectChanges();
        expect(comp.querySelector('.list-group-item').textContent).toContain('Ba lưỡi rìu');
    }));

    it ('should click link to read "Ba lưỡi rìu" story or watch "Mừng sinh nhật" video', async(() => {
        const fixture = TestBed.createComponent(giaiTri);
        const a = fixture.debugElement.query(By.css('a'));
        a.triggerEventHandler('click', null);
        fixture.detectChanges();
        expect(a).toBeTruthy();
    }));
   
});