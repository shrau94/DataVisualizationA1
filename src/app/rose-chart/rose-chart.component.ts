import { Component, OnInit } from '@angular/core';
import * as Plotly from 'plotly.js/dist/plotly';

@Component({
  selector: 'app-rose-chart',
  templateUrl: './rose-chart.component.html',
  styleUrls: ['./rose-chart.component.css']
})
export class RoseChartComponent implements OnInit  {

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
          483],
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
          'Aug 1855'],
        name: 'Zymotic diseases',
        title: 'value',
        marker: {
          color: 'rgb(181, 234, 215)',
          line: {
            color: 'rgb(71,71,71)',
            width: 1
          }
        },
        type: 'barpolar',
        hoverinfo: 'text'
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
          164],
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
          'Aug 1855'],
        name: 'Wounds & injuries',
        marker: {
          color: 'rgb(255, 183, 178)',
          line: {
            color: 'rgb(71,71,71)',
            width: 1
          }
        },
        mode: 'markers',
        type: 'barpolar',
        hoverinfo: 'text'
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
          25],
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
          'Aug 1855'],
        name: 'All other causes',
        marker: {
          color: 'rgb(199, 206, 234)',
          line: {
            color: 'rgb(71,71,71)',
            width: 1
          }
        },
        type: 'barpolar',
        hoverinfo: 'text'
      }];

    // Assigning the layout to the rose chart
    const layout = {
      title: '',
      font: {size: 12},
      width: 600,
      height: 450,
      showlegend: false,
      legend: {font: {size: 16}},
      hovermode: 'closest',
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

    const myPlot: any = document.getElementById('roseChart');
    const myPlot1: any = document.getElementById('zoomedRoseChart');
    const hoverInfo = document.getElementById('hoverInfo');

    // tslint:disable-next-line:no-shadowed-variable
    myPlot.on('plotly_hover', function(data) {
      const infotext = data.points.map(function(d) {
        return (d.theta + '<br/>' + d.data.name + ': Deaths = ' + d.r);
      });

      hoverInfo.innerHTML = infotext.join('<br/>');
    })
    // tslint:disable-next-line:no-shadowed-variable
      .on('plotly_unhover', function(data){
        hoverInfo.innerHTML = '';
      });

    // tslint:disable-next-line:no-shadowed-variable
    myPlot1.on('plotly_hover', function(data) {
      const infotext = data.points.map(function(d) {
        return (d.theta + '<br/>' + d.data.name + ': Deaths = ' + d.r);
      });

      hoverInfo.innerHTML = infotext.join('<br/>');
    })
    // tslint:disable-next-line:no-shadowed-variable
      .on('plotly_unhover', function(data){
        hoverInfo.innerHTML = '';
      });
  }

  onResize(event) {
    console.log('chart resized: ', event);
    this.makePlot();
  }
}
