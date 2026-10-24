import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarksOfStudentsComponent } from './marks-of-students.component';

describe('MarksOfStudentsComponent', () => {
  let component: MarksOfStudentsComponent;
  let fixture: ComponentFixture<MarksOfStudentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MarksOfStudentsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarksOfStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
