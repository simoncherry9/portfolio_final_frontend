import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarAptitudesComponent } from './editar-aptitudes.component';

describe('EditarAptitudesComponent', () => {
  let component: EditarAptitudesComponent;
  let fixture: ComponentFixture<EditarAptitudesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarAptitudesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarAptitudesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
