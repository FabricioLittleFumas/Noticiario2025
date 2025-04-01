import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticiaDeftComponent } from './noticia-deft.component';

describe('NoticiaDeftComponent', () => {
  let component: NoticiaDeftComponent;
  let fixture: ComponentFixture<NoticiaDeftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NoticiaDeftComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoticiaDeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
