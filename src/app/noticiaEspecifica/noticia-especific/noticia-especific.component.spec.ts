import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticiaEspecificComponent } from './noticia-especific.component';

describe('NoticiaEspecificComponent', () => {
  let component: NoticiaEspecificComponent;
  let fixture: ComponentFixture<NoticiaEspecificComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NoticiaEspecificComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoticiaEspecificComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
