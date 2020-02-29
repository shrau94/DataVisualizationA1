import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RoseChartComponent} from './rose-chart/rose-chart.component';

const routes: Routes = [
  { path: 'rosechart', component: RoseChartComponent }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ],
})

export class AppRoutingModule {}
