import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticiaLateralComponent } from './noticia-lateral.component';

describe('NoticiaLateralComponent', () => {
  let component: NoticiaLateralComponent;
  let fixture: ComponentFixture<NoticiaLateralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NoticiaLateralComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoticiaLateralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
