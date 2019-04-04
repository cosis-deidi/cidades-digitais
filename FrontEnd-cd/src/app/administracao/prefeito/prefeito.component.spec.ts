import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrefeitoComponent } from './prefeito.component';

describe('PrefeitoComponent', () => {
  let component: PrefeitoComponent;
  let fixture: ComponentFixture<PrefeitoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrefeitoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrefeitoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
