import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateFollowUpDialogComponent } from './create-follow-up-dialog.component';

describe('CreateFollowUpDialogComponent', () => {
  let component: CreateFollowUpDialogComponent;
  let fixture: ComponentFixture<CreateFollowUpDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateFollowUpDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateFollowUpDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
