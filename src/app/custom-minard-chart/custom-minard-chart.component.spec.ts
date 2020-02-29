import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomMinardChartComponent } from './custom-minard-chart.component';

describe('CustomMinardChartComponent', () => {
  let component: CustomMinardChartComponent;
  let fixture: ComponentFixture<CustomMinardChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomMinardChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomMinardChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
