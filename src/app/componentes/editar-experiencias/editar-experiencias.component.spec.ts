import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarExperienciasComponent } from './editar-experiencias.component';

describe('EditarExperienciasComponent', () => {
  let component: EditarExperienciasComponent;
  let fixture: ComponentFixture<EditarExperienciasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarExperienciasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarExperienciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
