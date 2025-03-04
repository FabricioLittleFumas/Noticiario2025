import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideAbaixoComponent } from './slide-abaixo.component';

describe('SlideAbaixoComponent', () => {
  let component: SlideAbaixoComponent;
  let fixture: ComponentFixture<SlideAbaixoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SlideAbaixoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SlideAbaixoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
