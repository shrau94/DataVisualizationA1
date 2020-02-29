import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RoseChartComponent} from './rose-chart/rose-chart.component';
import {CustomMinardChartComponent} from './custom-minard-chart/custom-minard-chart.component';
import {MinardChartComponent} from './minard-chart/minard-chart.component';

const routes: Routes = [
  { path: 'rosechart', component: RoseChartComponent },
  { path: 'minardchart1', component: CustomMinardChartComponent},
  { path: 'minardchart2', component: MinardChartComponent}
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ],
})

export class AppRoutingModule {}
