import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookdialogComponent } from './bookdialog.component';

describe('BookdialogComponent', () => {
  let component: BookdialogComponent;
  let fixture: ComponentFixture<BookdialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookdialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
