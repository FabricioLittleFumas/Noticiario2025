import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticiaHomeComponent } from './noticia-home.component';

describe('NoticiaHomeComponent', () => {
  let component: NoticiaHomeComponent;
  let fixture: ComponentFixture<NoticiaHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NoticiaHomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoticiaHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
