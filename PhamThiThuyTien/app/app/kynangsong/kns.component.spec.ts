import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { KnsComponent } from 'app/kynangsong/kns.component';
import { DebugElement } from "@angular/core";

describe('KnsComponent (templateUrl)', () => {
    beforeEach(() => {
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
        TestBed.configureTestingModule( {
            declarations: [KnsComponent],
        });
        TestBed.compileComponents();
    });

    it ('should open the page "Kỹ năng sống"', async(() => {
        const fixture = TestBed.createComponent(KnsComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));

    it('should have as titles "TRUYỆN NGẮN" and "QUÀ TẶNG CUỘC SỐNG"', async(() => {
        const fixture = TestBed.createComponent(KnsComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app.titles[0]).toEqual("TRUYỆN NGẮN");
        expect(app.titles[1]).toEqual("QUÀ TẶNG CUỘC SỐNG");
    }));

    it ('should render "TRUYỆN NGẮN" in h2 tag', async(() => {
        const fixture = TestBed.createComponent(KnsComponent);
        const comp = fixture.debugElement.nativeElement;
        const app = fixture.debugElement.componentInstance;
        fixture.detectChanges();
        expect(comp.querySelector('h2').textContent).toContain('TRUYỆN NGẮN');
    }));

    it ('should have as "Hưng Đạo Đại Vương" story', async(() => {
        const fixture = TestBed.createComponent(KnsComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app.stories[0]).toEqual("Hưng Đạo Đại Vương");
    }));

    it ('should render "Hưng Đạo Đại Vương" in list-group-item class', async(() => {
        const fixture = TestBed.createComponent(KnsComponent);
        const comp = fixture.debugElement.nativeElement;
        const app = fixture.debugElement.componentInstance;
        fixture.detectChanges();
        expect(comp.querySelector('.list-group-item').textContent).toContain('Hưng Đạo Đại Vương');
    }));

    it ('should click link to read "Hưng Đạo Đại Vương" story or watch "Gánh Xôi Của Bà" video', async(() => {
        const fixture = TestBed.createComponent(KnsComponent);
        const a = fixture.debugElement.query(By.css('a'));
        a.triggerEventHandler('click', null);
        fixture.detectChanges();
        expect(a).toBeTruthy();
    }));
   
});