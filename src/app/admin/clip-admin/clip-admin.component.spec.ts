import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClipAdminComponent } from './clip-admin.component';

describe('ClipAdminComponent', () => {
  let component: ClipAdminComponent;
  let fixture: ComponentFixture<ClipAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClipAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClipAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
