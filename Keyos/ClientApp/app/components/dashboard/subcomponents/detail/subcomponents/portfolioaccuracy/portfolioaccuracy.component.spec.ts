import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioaccuracyComponent } from './portfolioaccuracy.component';

describe('PortfolioaccuracyComponent', () => {
  let component: PortfolioaccuracyComponent;
  let fixture: ComponentFixture<PortfolioaccuracyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfolioaccuracyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioaccuracyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
