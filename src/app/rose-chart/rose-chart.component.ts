import { Component, OnInit } from '@angular/core';
import * as Plotly from 'plotly.js/dist/plotly';

@Component({
  selector: 'app-rose-chart',
  templateUrl: './rose-chart.component.html',
  styleUrls: ['./rose-chart.component.css']
})
export class RoseChartComponent implements OnInit  {
  private myPlot;

  ngOnInit() {
    this.makePlot();
  }

  makePlot() {
    // Assigning data to the Rose chart
    const data = [
      {
        r: [788,
          503,
          844,
          1725,
          2761,
          2120,
          1205,
          477,
          508,
          802,
          382,
          483,
          189],
        theta: ['Sep 1854',
          'Oct 1854',
          'Nov 1854',
          'Dec 1854',
          'Jan 1855',
          'Feb 1855',
          'Mar 1855',
          'Apr 1855',
          'May 1855',
          'Jun 1855',
          'Jul 1855',
          'Aug 1855',
          'Sep 1855'],
        name: 'Zymotic diseases',
        title: 'value',
        marker: {
          color: 'rgb(127,239,170)',
          line: {
            color: 'rgb(0,0,0)',
            width: 1
          }
        },
        type: 'barpolar',
        hoverinfo: 'r'
      },
      {
        r: [81,
          132,
          287,
          114,
          83,
          42,
          32,
          48,
          49,
          209,
          134,
          164,
          276],
        theta: ['Sep 1854',
          'Oct 1854',
          'Nov 1854',
          'Dec 1854',
          'Jan 1855',
          'Feb 1855',
          'Mar 1855',
          'Apr 1855',
          'May 1855',
          'Jun 1855',
          'Jul 1855',
          'Aug 1855',
          'Sep 1855'],
        name: 'Wounds & injuries',
        marker: {
          color: 'rgb(230,117,113)',
          line: {
            color: 'rgb(0,0,0)',
            width: 1
          }
        },
        mode: 'markers',
        type: 'barpolar',
        hoverinfo: 'r'
      },
      {
        r: [70,
          128,
          106,
          131,
          324,
          361,
          172,
          57,
          37,
          31,
          33,
          25,
          20],
        theta: ['Sep 1854',
          'Oct 1854',
          'Nov 1854',
          'Dec 1854',
          'Jan 1855',
          'Feb 1855',
          'Mar 1855',
          'Apr 1855',
          'May 1855',
          'Jun 1855',
          'Jul 1855',
          'Aug 1855',
          'Sep 1855'],
        name: 'All other causes',
        marker: {
          color: 'rgba(138,183,255,0.64)',
          line: {
            color: 'rgb(0,0,0)',
            width: 1
          }
        },
        type: 'barpolar',
        hoverinfo: 'r'
      }];

    // Assigning the layout to the rose chart
    const layout = {
      title: '',
      font: {size: 12},
      width: 600,
      height: 450,
      showlegend: false,
      legend: {font: {size: 16}},
      polar: {
        barmode: 'stack',
        bargap: 0,
        showgrid: false,
        radialaxis: {
          showgrid: false,
          visible: false,
        },
        angularaxis: {
          direction: 'clockwise',
          showline: false
        }
      }
    };
    const zoomedLayout = {
      title: '',
      font: {size: 12},
      width: 750,
      height: 650,
      legend: {font: {size: 16}},
      hovermode: 'closest',
      polar: {
        barmode: 'stack',
        bargap: 0,
        showgrid: false,
        radialaxis: {
          showgrid: false,
          visible: false,
          showline: false
        },
        angularaxis: {
          direction: 'anticlockwise',
          showline: false
        }
      }
    };

    // Defining the Config of the plot
    let config = {};
    config = {
      showSendToCloud: true,
      displayModeBar: false
    };
    Plotly.newPlot('roseChart', data, layout, config).then(function () {
    });
    Plotly.newPlot('zoomedRoseChart', data, zoomedLayout, config).then(function () {
    });

  }

  onResize(event) {
    console.log('chart resized: ', event);
    this.makePlot();
  }
}
