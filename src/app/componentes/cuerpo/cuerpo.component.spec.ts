import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuerpoComponent } from './cuerpo.component';

describe('CuerpoComponent', () => {
  let component: CuerpoComponent;
  let fixture: ComponentFixture<CuerpoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuerpoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CuerpoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
