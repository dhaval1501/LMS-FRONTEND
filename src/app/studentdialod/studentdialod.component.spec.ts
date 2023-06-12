import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentdialodComponent } from './studentdialod.component';

describe('StudentdialodComponent', () => {
  let component: StudentdialodComponent;
  let fixture: ComponentFixture<StudentdialodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentdialodComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentdialodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
