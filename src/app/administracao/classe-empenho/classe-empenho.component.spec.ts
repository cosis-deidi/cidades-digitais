import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClasseEmpenhoComponent } from './classe-empenho.component';

describe('ClasseEmpenhoComponent', () => {
  let component: ClasseEmpenhoComponent;
  let fixture: ComponentFixture<ClasseEmpenhoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClasseEmpenhoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClasseEmpenhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
