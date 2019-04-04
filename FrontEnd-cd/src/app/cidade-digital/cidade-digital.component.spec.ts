import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CidadeDigitalComponent } from './cidade-digital.component';

describe('CidadeDigitalComponent', () => {
  let component: CidadeDigitalComponent;
  let fixture: ComponentFixture<CidadeDigitalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CidadeDigitalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CidadeDigitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
