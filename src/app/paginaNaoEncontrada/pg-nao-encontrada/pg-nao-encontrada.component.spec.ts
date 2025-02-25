import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PgNaoEncontradaComponent } from './pg-nao-encontrada.component';

describe('PgNaoEncontradaComponent', () => {
  let component: PgNaoEncontradaComponent;
  let fixture: ComponentFixture<PgNaoEncontradaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PgNaoEncontradaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PgNaoEncontradaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
