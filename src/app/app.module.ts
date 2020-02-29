import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { RoseChartComponent } from './rose-chart/rose-chart.component';
import {AppRoutingModule} from './app-routing.module';
import { CustomMinardChartComponent } from './custom-minard-chart/custom-minard-chart.component';
import { MinardChartComponent } from './minard-chart/minard-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    RoseChartComponent,
    CustomMinardChartComponent,
    MinardChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
