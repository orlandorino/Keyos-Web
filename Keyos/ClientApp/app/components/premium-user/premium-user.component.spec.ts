import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PremiumUserComponent } from './premium-user.component';

describe('PremiumUserComponent', () => {
  let component: PremiumUserComponent;
  let fixture: ComponentFixture<PremiumUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PremiumUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PremiumUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
