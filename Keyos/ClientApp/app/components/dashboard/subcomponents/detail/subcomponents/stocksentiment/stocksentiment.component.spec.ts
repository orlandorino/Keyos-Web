import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StocksentimentComponent } from './stocksentiment.component';

describe('StocksentimentComponent', () => {
  let component: StocksentimentComponent;
  let fixture: ComponentFixture<StocksentimentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StocksentimentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StocksentimentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
