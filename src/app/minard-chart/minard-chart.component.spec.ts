import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinardChartComponent } from './minard-chart.component';

describe('MinardChartComponent', () => {
  let component: MinardChartComponent;
  let fixture: ComponentFixture<MinardChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinardChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinardChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
