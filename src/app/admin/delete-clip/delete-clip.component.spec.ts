import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteClipComponent } from './delete-clip.component';

describe('DeleteClipComponent', () => {
  let component: DeleteClipComponent;
  let fixture: ComponentFixture<DeleteClipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteClipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteClipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
