import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntidadeAdicionarEditarComponent } from './entidade-adicionar-editar.component';

describe('EntidadeAdicionarEditarComponent', () => {
  let component: EntidadeAdicionarEditarComponent;
  let fixture: ComponentFixture<EntidadeAdicionarEditarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntidadeAdicionarEditarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntidadeAdicionarEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
