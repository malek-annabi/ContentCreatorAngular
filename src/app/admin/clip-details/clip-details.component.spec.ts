import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClipDetailsComponent } from './clip-details.component';

describe('ClipDetailsComponent', () => {
  let component: ClipDetailsComponent;
  let fixture: ComponentFixture<ClipDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClipDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClipDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
