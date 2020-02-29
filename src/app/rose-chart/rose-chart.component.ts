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
    const data = [{
      r: [788,
        503,
        844,
        1725,
        1861,
        1820,
        1205,
        477,
        508,
        802,
        382,
        483],
      theta: ['Apr 1854',
        'May 1854',
        'Jun 1854',
        'Jul 1854',
        'Aug 1854',
        'Sep 1854',
        'Oct 1854',
        'Nov 1854',
        'Dec 1854',
        'Jan 1855',
        'Feb 1855',
        'Mar 1855'],
      name: 'Zymotic diseases',
      marker: {
        color: 'rgb(230,117,113)',
        line: {
          color: 'rgb(0,0,0)',
          width: 1
        }
      },
      type: 'barpolar'
    }, {
      r: [81,
        132,
        287,
        114,
        183,
        142,
        232,
        248,
        249,
        209,
        134,
        164],
      theta: ['Apr 1854',
        'May 1854',
        'Jun 1854',
        'Jul 1854',
        'Aug 1854',
        'Sep 1854',
        'Oct 1854',
        'Nov 1854',
        'Dec 1854',
        'Jan 1855',
        'Feb 1855',
        'Mar 1855'],
      name: 'Wounds & injuries',
      marker: {
        color: 'rgba(138,183,255,0.64)',
        line: {
          color: 'rgb(0,0,0)',
          width: 1
        }
      },
      type: 'barpolar'
    }, {
      r: [170,
        128,
        106,
        131,
        324,
        361,
        172,
        157,
        137,
        131,
        133,
        125],
      theta: ['Apr 1854',
        'May 1854',
        'Jun 1854',
        'Jul 1854',
        'Aug 1854',
        'Sep 1854',
        'Oct 1854',
        'Nov 1854',
        'Dec 1854',
        'Jan 1855',
        'Feb 1855',
        'Mar 1855'],
      name: 'All other causes',
      marker: {
        color: 'rgb(127,239,170)',
        line: {
          color: 'rgb(0,0,0)',
          width: 1
        }
      },
      type: 'barpolar'
    }];
    const zoomedData = [{
      r: [788,
        503,
        844,
        1225,
        1361,
        1320,
        1205,
        477,
        508,
        802,
        382,
        483],
      theta: ['Apr 1854',
        'May 1854',
        'Jun 1854',
        'Jul 1854',
        'Aug 1854',
        'Sep 1854',
        'Oct 1854',
        'Nov 1854',
        'Dec 1854',
        'Jan 1855',
        'Feb 1855',
        'Mar 1855'],
      name: 'Zymotic diseases',
      marker: {
        color: 'rgb(230,117,113)',
        line: {
          color: 'rgb(0,0,0)',
          width: 1
        }
      },
      type: 'barpolar'
    }, {
      r: [81,
        132,
        287,
        114,
        183,
        142,
        232,
        248,
        249,
        209,
        134,
        164],
      theta: ['Apr 1854',
        'May 1854',
        'Jun 1854',
        'Jul 1854',
        'Aug 1854',
        'Sep 1854',
        'Oct 1854',
        'Nov 1854',
        'Dec 1854',
        'Jan 1855',
        'Feb 1855',
        'Mar 1855'],
      name: 'Wounds & injuries',
      marker: {
        color: 'rgba(138,183,255,0.64)',
        line: {
          color: 'rgb(0,0,0)',
          width: 1
        }
      },
      type: 'barpolar'
    }, {
      r: [170,
        128,
        106,
        131,
        324,
        361,
        172,
        157,
        137,
        131,
        133,
        125],
      theta: ['Apr 1854',
        'May 1854',
        'Jun 1854',
        'Jul 1854',
        'Aug 1854',
        'Sep 1854',
        'Oct 1854',
        'Nov 1854',
        'Dec 1854',
        'Jan 1855',
        'Feb 1855',
        'Mar 1855'],
      name: 'All other causes',
      marker: {
        color: 'rgb(127,239,170)',
        line: {
          color: 'rgb(0,0,0)',
          width: 1
        }
      },
      type: 'barpolar'
    }];
    const layout = {
      title: '',
      font: {size: 16},
      width: 600,
      height: 450,
      showlegend: false,
      legend: {font: {size: 16}},
      polar: {
        barmode: 'stack',
        bargap: 2,
        showgrid: false,
        radialaxis: {
          showgrid: false,
          visible: false,
        },
        angularaxis: {direction: 'clockwise',
          showline: false}
      }
    };
    const zoomedLayout = {
      title: '',
      font: {size: 16},
      width: 750,
      height: 550,
      legend: {font: {size: 16}},
      polar: {
        barmode: 'stack',
        bargap: 2,
        showgrid: false,
        radialaxis: {
          showgrid: false,
          visible: false,
          showline: false
        },
        angularaxis: {direction: 'anticlockwise',
          showline: false}
      }
    };
    Plotly.newPlot('roseChart', data, layout).then(function () {
    });
    Plotly.newPlot('zoomedRoseChart', zoomedData, zoomedLayout).then(function () {
    });
  }

  onResize(event) {
    console.log('chart resized: ', event);
    this.makePlot();
  }
}
