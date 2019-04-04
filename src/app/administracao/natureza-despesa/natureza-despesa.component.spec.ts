import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NaturezaDespesaComponent } from './natureza-despesa.component';

describe('NaturezaDespesaComponent', () => {
  let component: NaturezaDespesaComponent;
  let fixture: ComponentFixture<NaturezaDespesaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NaturezaDespesaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NaturezaDespesaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
