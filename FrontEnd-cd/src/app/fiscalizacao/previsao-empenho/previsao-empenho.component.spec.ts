import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrevisaoEmpenhoComponent } from './previsao-empenho.component';

describe('PrevisaoEmpenhoComponent', () => {
  let component: PrevisaoEmpenhoComponent;
  let fixture: ComponentFixture<PrevisaoEmpenhoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrevisaoEmpenhoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrevisaoEmpenhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
