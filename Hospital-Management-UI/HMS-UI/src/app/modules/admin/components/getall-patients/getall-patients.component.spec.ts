import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetallPatientsComponent } from './getall-patients.component';

describe('GetallPatientsComponent', () => {
  let component: GetallPatientsComponent;
  let fixture: ComponentFixture<GetallPatientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetallPatientsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetallPatientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
