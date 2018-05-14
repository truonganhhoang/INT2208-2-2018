import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from "@angular/core";
import { RouterTestingModule } from '@angular/router/testing';
import { kiemTra } from './kiemtra';

describe('kiemTra (templateUrl)', () => {
    beforeEach(() => {
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
        TestBed.configureTestingModule( {
            declarations: [kiemTra],
            imports: [ RouterTestingModule ]
        });
        TestBed.compileComponents();
    });

    it ('should open the page "Kiểm tra"', async(() => {
        const fixture = TestBed.createComponent(kiemTra);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));

    it('should have as title "Đề kiểm tra môn Toán 1"', async(() => {
        const fixture = TestBed.createComponent(kiemTra);
        const app = fixture.debugElement.componentInstance;
        expect(app.title).toEqual("Đề kiểm tra môn Toán 1");
    }));

    it ('should render title in h1 tag', async(() => {
        const fixture = TestBed.createComponent(kiemTra);
        const comp = fixture.debugElement.nativeElement;
        const app = fixture.debugElement.componentInstance;
        fixture.detectChanges();
        expect(comp.querySelector('h1').textContent).toContain('');
    }));
});
