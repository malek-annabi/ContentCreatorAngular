import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateClipComponent } from './update-clip.component';

describe('UpdateClipComponent', () => {
  let component: UpdateClipComponent;
  let fixture: ComponentFixture<UpdateClipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateClipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateClipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
