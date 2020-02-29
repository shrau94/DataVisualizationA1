import { Component, OnInit } from '@angular/core';
import * as Plotly from 'plotly.js/dist/plotly';

@Component({
  selector: 'app-minard-chart',
  templateUrl: './minard-chart.component.html',
  styleUrls: ['./minard-chart.component.css']
})
export class MinardChartComponent implements OnInit {
  ngOnInit() {
    this.makePlot();
  }

  makePlot() {
    const troop_data = [
      {
        'LONP': 24,
        'LATP': 54.9,
        'SURV': 340000,
        'DIR': 'A',
        'DIV': 1
      },
      {
        'LONP': 24.5,
        'LATP': 55,
        'SURV': 340000,
        'DIR': 'A',
        'DIV': 1
      },
      {
        'LONP': 25.5,
        'LATP': 54.5,
        'SURV': 340000,
        'DIR': 'A',
        'DIV': 1
      },
      {
        'LONP': 26,
        'LATP': 54.7,
        'SURV': 320000,
        'DIR': 'A',
        'DIV': 1
      },
      {
        'LONP': 27,
        'LATP': 54.8,
        'SURV': 300000,
        'DIR': 'A',
        'DIV': 1
      },
      {
        'LONP': 28,
        'LATP': 54.9,
        'SURV': 280000,
        'DIR': 'A',
        'DIV': 1
      },
      {
        'LONP': 28.5,
        'LATP': 55,
        'SURV': 240000,
        'DIR': 'A',
        'DIV': 1
      },
      {
        'LONP': 29,
        'LATP': 55.1,
        'SURV': 210000,
        'DIR': 'A',
        'DIV': 1
      },
      {
        'LONP': 30,
        'LATP': 55.2,
        'SURV': 180000,
        'DIR': 'A',
        'DIV': 1
      },
      {
        'LONP': 30.3,
        'LATP': 55.3,
        'SURV': 175000,
        'DIR': 'A',
        'DIV': 1
      },
      {
        'LONP': 32,
        'LATP': 54.8,
        'SURV': 145000,
        'DIR': 'A',
        'DIV': 1
      },
      {
        'LONP': 33.2,
        'LATP': 54.9,
        'SURV': 140000,
        'DIR': 'A',
        'DIV': 1
      },
      {
        'LONP': 34.4,
        'LATP': 55.5,
        'SURV': 127100,
        'DIR': 'A',
        'DIV': 1
      },
      {
        'LONP': 35.5,
        'LATP': 55.4,
        'SURV': 100000,
        'DIR': 'A',
        'DIV': 1
      },
      {
        'LONP': 36,
        'LATP': 55.5,
        'SURV': 100000,
        'DIR': 'A',
        'DIV': 1
      },
      {
        'LONP': 37.6,
        'LATP': 55.8,
        'SURV': 100000,
        'DIR': 'R',
        'DIV': 1
      },
      {
        'LONP': 37.5,
        'LATP': 55.7,
        'SURV': 98000,
        'DIR': 'R',
        'DIV': 1
      },
      {
        'LONP': 37,
        'LATP': 55,
        'SURV': 97000,
        'DIR': 'R',
        'DIV': 1
      },
      {
        'LONP': 36.8,
        'LATP': 55,
        'SURV': 96000,
        'DIR': 'R',
        'DIV': 1
      },
      {
        'LONP': 35.4,
        'LATP': 55.3,
        'SURV': 87000,
        'DIR': 'R',
        'DIV': 1
      },
      {
        'LONP': 34.3,
        'LATP': 55.2,
        'SURV': 55000,
        'DIR': 'R',
        'DIV': 1
      },
      {
        'LONP': 33.3,
        'LATP': 54.8,
        'SURV': 37000,
        'DIR': 'R',
        'DIV': 1
      },
      {
        'LONP': 32,
        'LATP': 54.6,
        'SURV': 24000,
        'DIR': 'R',
        'DIV': 1
      },
      {
        'LONP': 30.4,
        'LATP': 54.4,
        'SURV': 20000,
        'DIR': 'R',
        'DIV': 1
      },
      {
        'LONP': 29.2,
        'LATP': 54.4,
        'SURV': 20000,
        'DIR': 'R',
        'DIV': 1
      },
      {
        'LONP': 28.5,
        'LATP': 54.3,
        'SURV': 20000,
        'DIR': 'R',
        'DIV': 1
      },
      {
        'LONP': 28.3,
        'LATP': 54.4,
        'SURV': 20000,
        'DIR': 'R',
        'DIV': 1
      },
      {
        'LONP': 24,
        'LATP': 55.1,
        'SURV': 60000,
        'DIR': 'A',
        'DIV': 2
      },
      {
        'LONP': 24.5,
        'LATP': 55.2,
        'SURV': 60000,
        'DIR': 'A',
        'DIV': 2
      },
      {
        'LONP': 25.5,
        'LATP': 54.7,
        'SURV': 60000,
        'DIR': 'A',
        'DIV': 2
      },
      {
        'LONP': 26.6,
        'LATP': 55.7,
        'SURV': 40000,
        'DIR': 'A',
        'DIV': 2
      },
      {
        'LONP': 27.4,
        'LATP': 55.6,
        'SURV': 33000,
        'DIR': 'A',
        'DIV': 2
      },
      {
        'LONP': 28.7,
        'LATP': 55.5,
        'SURV': 30000,
        'DIR': 'R',
        'DIV': 2
      },
      {
        'LONP': 29.2,
        'LATP': 54.3,
        'SURV': 30000,
        'DIR': 'R',
        'DIV': 2
      },
      {
        'LONP': 28.5,
        'LATP': 54.2,
        'SURV': 30000,
        'DIR': 'R',
        'DIV': 2
      },
      {
        'LONP': 28.3,
        'LATP': 54.3,
        'SURV': 28000,
        'DIR': 'R',
        'DIV': 2
      },
      {
        'LONP': 27.5,
        'LATP': 54.5,
        'SURV': 20000,
        'DIR': 'R',
        'DIV': 2
      },
      {
        'LONP': 26.8,
        'LATP': 54.3,
        'SURV': 12000,
        'DIR': 'R',
        'DIV': 2
      },
      {
        'LONP': 26.4,
        'LATP': 54.4,
        'SURV': 14000,
        'DIR': 'R',
        'DIV': 2
      },
      {
        'LONP': 24.6,
        'LATP': 54.5,
        'SURV': 8000,
        'DIR': 'R',
        'DIV': 2
      },
      {
        'LONP': 24.4,
        'LATP': 54.4,
        'SURV': 4000,
        'DIR': 'R',
        'DIV': 2
      },
      {
        'LONP': 24.2,
        'LATP': 54.4,
        'SURV': 4000,
        'DIR': 'R',
        'DIV': 2
      },
      {
        'LONP': 24.1,
        'LATP': 54.3,
        'SURV': 4000,
        'DIR': 'R',
        'DIV': 2
      },
      {
        'LONP': 24,
        'LATP': 55.2,
        'SURV': 22000,
        'DIR': 'A',
        'DIV': 3
      },
      {
        'LONP': 24.5,
        'LATP': 55.3,
        'SURV': 22000,
        'DIR': 'A',
        'DIV': 3
      },
      {
        'LONP': 24.6,
        'LATP': 55.8,
        'SURV': 6000,
        'DIR': 'R',
        'DIV': 3
      },
      {
        'LONP': 24.2,
        'LATP': 54.4,
        'SURV': 6000,
        'DIR': 'R',
        'DIV': 3
      },
      {
        'LONP': 24.1,
        'LATP': 54.3,
        'SURV': 6000,
        'DIR': 'R',
        'DIV': 3
      }
    ];
    const city_data = [
      {
        'LONC': 24,
        'LATC': 55,
        'CITY': 'Kowno'
      },
      {
        'LONC': 25.3,
        'LATC': 54.7,
        'CITY': 'Wilna'
      },
      {
        'LONC': 26.4,
        'LATC': 54.4,
        'CITY': 'Smorgoni'
      },
      {
        'LONC': 26.8,
        'LATC': 54.3,
        'CITY': 'Molodexno'
      },
      {
        'LONC': 27.7,
        'LATC': 55.2,
        'CITY': 'Gloubokoe'
      },
      {
        'LONC': 27.6,
        'LATC': 53.9,
        'CITY': 'Minsk'
      },
      {
        'LONC': 28.5,
        'LATC': 54.3,
        'CITY': 'Studienska'
      },
      {
        'LONC': 28.7,
        'LATC': 55.5,
        'CITY': 'Polotzk'
      },
      {
        'LONC': 29.2,
        'LATC': 54.4,
        'CITY': 'Bobr'
      },
      {
        'LONC': 30.2,
        'LATC': 55.3,
        'CITY': 'Witebsk'
      },
      {
        'LONC': 30.4,
        'LATC': 54.5,
        'CITY': 'Orscha'
      },
      {
        'LONC': 30.4,
        'LATC': 53.9,
        'CITY': 'Mohilow'
      },
      {
        'LONC': 32,
        'LATC': 54.8,
        'CITY': 'Smolensk'
      },
      {
        'LONC': 33.2,
        'LATC': 54.9,
        'CITY': 'Dorogobouge'
      },
      {
        'LONC': 34.3,
        'LATC': 55.2,
        'CITY': 'Wixma'
      },
      {
        'LONC': 34.4,
        'LATC': 55.5,
        'CITY': 'Chjat'
      },
      {
        'LONC': 36,
        'LATC': 55.5,
        'CITY': 'Mojaisk'
      },
      {
        'LONC': 37.6,
        'LATC': 55.8,
        'CITY': 'Moscou'
      },
      {
        'LONC': 36.6,
        'LATC': 55.3,
        'CITY': 'Tarantino'
      },
      {
        'LONC': 36.5,
        'LATC': 55,
        'CITY': 'Malo-jarosewli'
      }
    ];
    const temp_data = [
      {
        'LONT': 37.6,
        'TEMP': 0,
        'DAYS': 6,
        'MON': 'Oct',
        'DAY': 18
      },
      {
        'LONT': 36,
        'TEMP': 0,
        'DAYS': 6,
        'MON': 'Oct',
        'DAY': 24
      },
      {
        'LONT': 33.2,
        'TEMP': -9,
        'DAYS': 16,
        'MON': 'Nov',
        'DAY': 9
      },
      {
        'LONT': 32,
        'TEMP': -21,
        'DAYS': 5,
        'MON': 'Nov',
        'DAY': 14
      },
      {
        'LONT': 29.2,
        'TEMP': -11,
        'DAYS': 10,
        'MON': '',
        'DAY': ''
      },
      {
        'LONT': 28.5,
        'TEMP': -20,
        'DAYS': 4,
        'MON': 'Nov',
        'DAY': 28
      },
      {
        'LONT': 27.2,
        'TEMP': -24,
        'DAYS': 3,
        'MON': 'Dec',
        'DAY': 1
      },
      {
        'LONT': 26.7,
        'TEMP': -30,
        'DAYS': 5,
        'MON': 'Dec',
        'DAY': 6
      },
      {
        'LONT': 25.3,
        'TEMP': -26,
        'DAYS': 1,
        'MON': 'Dec',
        'DAY': 7
      }
    ];

    const data = [];
    let i = 0;
    for (i = 0; i < troop_data.length - 1; i++) {
      const trace = {};
      if (troop_data[i].DIV === troop_data[i + 1].DIV) {
        trace['x'] = [troop_data[i].LONP, troop_data[i + 1].LONP];
        trace['y'] = [troop_data[i].LATP, troop_data[i + 1].LATP];
        trace['line'] = {
          'color': troop_data[i].DIR === 'A' ? 'rgb(230,196,132)' : 'rgb(122,122,122)',
          'width': (troop_data[i].SURV / 10000 * 2),
          'shape': 'spline'
        };
        trace['mode'] = 'lines+text';
        trace['scatter'] = 'scatter';
        trace['hoverinfo'] = 'none';
        if (i === 0) {
          trace['showlegend'] = true;
          trace['name'] = 'Troops Advancing (width shows the survivor counts)';
        } else if (i === troop_data.length - 2) {
          trace['showlegend'] = true;
          trace['name'] = 'Troops Returning (width shows the survivor counts)';
        } else {
          trace['showlegend'] = false;
        }
        data.push(trace);
      }
    }

    const xdata = [], ydata = [], texts = [];
    for (i = 0; i < temp_data.length; i++) {
      xdata.push(temp_data[i].LONT);
      ydata.push(temp_data[i].TEMP);
      texts.push(temp_data[i].TEMP + '°C (' + temp_data[i].DAY + ' ' + temp_data[i].MON + ')');
    }
    const trace7 = {
      x: xdata,
      y: ydata,
      line: {
        'color': 'rgb(122,122,122)',
        'width': 2
      },
      mode: 'lines+text+markers',
      type: 'scatter',
      yaxis: 'y2',
      xaxis: 'x2',
      hoverinfo: 'none',
      text: texts,
      textposition: 'bottom',
      'textfont': {
        'size': 16,
        'color': 'rgb(0,0,0)',
        'family': 'sans serif'
      },
      name: 'Temperature'
    };
    data.push(trace7);

    const annotations = [];
    for (i = 0; i < city_data.length; i++) {
      const annotation = {
        'x': city_data[i].LONC,
        'y': city_data[i].LATC,
        'ax': -10,
        'ay': -30.01667022705078,
        'tag': '',
        'font': {
          'size': 18,
          'color': 'rgb(0,0,0)',
          'family': 'sans serif'
        },
        'text': city_data[i].CITY,
        'xref': 'x',
        'yref': 'y',
        'align': 'center',
        'bgcolor': 'rgba(0,0,0,0)',
        'opacity': 1,
        'xanchor': 'auto',
        'yanchor': 'auto',
        'arrowhead': 1,
        'arrowsize': 1,
        'borderpad': 1,
        'showarrow': false,
        'arrowcolor': '',
        'arrowwidth': 0,
        'bordercolor': '',
        'borderwidth': 1
      };
      annotations.push(annotation);
    }

    annotations.push({
      'x': 24,
      'y': 54.9,
      'ax': -10,
      'ay': -30.01667022705078,
      'tag': '',
      'font': {
        'size': 11,
        'color': 'rgb(0,0,0)',
        'family': 'sans serif'
      },
      'text': 'Troop 1',
      'xref': 'x',
      'yref': 'y',
      'align': 'center',
      'bgcolor': 'rgba(0,0,0,0)',
      'opacity': 1,
      'xanchor': 'auto',
      'yanchor': 'auto',
      'arrowhead': 1,
      'arrowsize': 1,
      'borderpad': 1,
      'showarrow': false,
      'arrowcolor': '',
      'arrowwidth': 0,
      'bordercolor': '',
      'borderwidth': 1
    });

    annotations.push({
      'x': 24,
      'y': 55.2,
      'ax': -10,
      'ay': -30.01667022705078,
      'tag': '',
      'font': {
        'size': 11,
        'color': 'rgb(0,0,0)',
        'family': 'sans serif'
      },
      'text': 'Troop 3',
      'xref': 'x',
      'yref': 'y',
      'align': 'center',
      'bgcolor': 'rgba(0,0,0,0)',
      'opacity': 1,
      'xanchor': 'auto',
      'yanchor': 'auto',
      'arrowhead': 1,
      'arrowsize': 1,
      'borderpad': 1,
      'showarrow': false,
      'arrowcolor': '',
      'arrowwidth': 0,
      'bordercolor': '',
      'borderwidth': 1
    });

    annotations.push({
      'x': 24,
      'y': 55.1,
      'ax': -10,
      'ay': -30.01667022705078,
      'tag': '',
      'font': {
        'size': 11,
        'color': 'rgb(0,0,0)',
        'family': 'sans serif'
      },
      'text': 'Troop 2',
      'xref': 'x',
      'yref': 'y',
      'align': 'center',
      'bgcolor': 'rgba(0,0,0,0)',
      'opacity': 1,
      'xanchor': 'auto',
      'yanchor': 'auto',
      'arrowhead': 1,
      'arrowsize': 1,
      'borderpad': 1,
      'showarrow': false,
      'arrowcolor': '',
      'arrowwidth': 0,
      'bordercolor': '',
      'borderwidth': 1
    });


    let layout = {};
    layout = {
      'font': {
        'size': 18,
        'color': 'rgb(33, 33, 33)',
        'family': 'sans serif'
      },
      'smith': false,
      'title': 'CHARLES JOSEPH MINARD’S MAP OF NAPOLEON’S RUSSIA CAMPAIGN',
      'width': 1200,
      'xaxis': {
        'type': 'linear',
        'dtick': 50,
        'tick0': 0,
        'ticks': '',
        'title': '',
        'anchor': 'y',
        'mirror': true,
        'nticks': 0,
        'ticklen': 5,
        'autotick': true,
        'position': 0,
        'showgrid': false,
        'showline': true,
        'tickfont': {
          'size': 0,
          'color': '',
          'family': ''
        },
        'zeroline': false,
        'autorange': true,
        'gridcolor': '#ddd',
        'gridwidth': 1,
        'linecolor': '#939393',
        'linewidth': 0.5,
        'rangemode': 'normal',
        'tickangle': 'auto',
        'tickcolor': '#000',
        'tickwidth': 1,
        'titlefont': {
          'size': 0,
          'color': '',
          'family': ''
        },
        'overlaying': false,
        'showexponent': 'all',
        'zerolinecolor': '#000',
        'zerolinewidth': 1,
        'exponentformat': 'e',
        'showticklabels': false
      },
      'xaxis2': {
        'type': 'linear',
        'dtick': 50,
        'tick0': 0,
        'ticks': '',
        'title': '',
        'anchor': 'y2',
        'mirror': false,
        'nticks': 0,
        'ticklen': 5,
        'autotick': true,
        'position': 0,
        'showgrid': false,
        'showline': true,
        'tickfont': {
          'size': 0,
          'color': '',
          'family': ''
        },
        'zeroline': false,
        'autorange': true,
        'gridcolor': '#ddd',
        'gridwidth': 1,
        'linecolor': '#939393',
        'linewidth': 0.5,
        'rangemode': 'normal',
        'tickangle': 'auto',
        'tickcolor': '#000',
        'tickwidth': 1,
        'titlefont': {
          'size': 0,
          'color': '',
          'family': ''
        },
        'overlaying': false,
        'showexponent': 'all',
        'zerolinecolor': '#000',
        'zerolinewidth': 1,
        'exponentformat': 'e',
        'showticklabels': false
      },
      'yaxis': {
        'type': 'linear',
        'dtick': 2,
        'tick0': 0,
        'ticks': '',
        'title': '',
        'anchor': 'x',
        'mirror': true,
        'nticks': 0,
        'ticklen': 5,
        'autotick': true,
        'position': 0,
        'showgrid': false,
        'showline': true,
        'tickfont': {
          'size': 0,
          'color': '',
          'family': ''
        },
        'zeroline': false,
        'autorange': true,
        'gridcolor': '#ddd',
        'gridwidth': 1,
        'linecolor': '#939393',
        'linewidth': 0.5,
        'rangemode': 'normal',
        'tickangle': 'auto',
        'tickcolor': '#000',
        'tickwidth': 1,
        'titlefont': {
          'size': 0,
          'color': '',
          'family': ''
        },
        'overlaying': false,
        'showexponent': 'all',
        'zerolinecolor': '#000',
        'zerolinewidth': 1,
        'exponentformat': 'e',
        'showticklabels': false,
        domain: [0.25, 1]
      },
      'yaxis2': {
        'title': '',
        domain: [0, 0.25],
        'type': 'linear',
        'dtick': 2,
        'tick0': 0,
        'ticks': '',
        'anchor': 'x',
        'mirror': true,
        'nticks': 0,
        'ticklen': 5,
        'autotick': true,
        'position': 0,
        'showgrid': false,
        'showline': true,
        'tickfont': {
          'size': 0,
          'color': '',
          'family': ''
        },
        'zeroline': false,
        'autorange': false,
        'gridcolor': '#ddd',
        'gridwidth': 1,
        'linecolor': '#939393',
        'linewidth': 0.5,
        'rangemode': 'normal',
        'tickangle': 'auto',
        'tickcolor': '#000',
        'tickwidth': 1,
        'range': [-40, 5],
        'titlefont': {
          'size': 0,
          'color': '',
          'family': ''
        },
        'overlaying': false,
        'showexponent': 'all',
        'zerolinecolor': '#000',
        'zerolinewidth': 1,
        'exponentformat': 'e',
        'showticklabels': false
      },
      'bargap': 0.2,
      'boxgap': 0.3,
      'height': 650,
      'legend': {
        'orientation': 'h',
        'font': {
          'size': 0,
          'color': '',
          'family': ''
        },
        'bgcolor': '#fff',
        'xanchor': 'auto',
        'yanchor': 'auto',
        'traceorder': 'normal',
        'bordercolor': '#000',
        'borderwidth': 1
      },
      'margin': {
        'b': 100,
        'l': 80,
        'r': 80,
        't': 100,
        'pad': 0,
        'autoexpand': true
      },
      'barmode': 'stack',
      'boxmode': 'overlay',
      'autosize': false,
      'dragmode': 'zoom',
      'hovermode': 'x',
      'titlefont': {
        'size': 0,
        'color': '',
        'family': ''
      },
      'separators': '.,',
      'showlegend': true,
      'annotations': annotations,
      'bargroupgap': 0,
      'boxgroupgap': 0.3,
      'hidesources': false,
      'plot_bgcolor': 'rgba(255,255,255,0)',
      'paper_bgcolor': '#fff'
    };
    let config = {};
    config = {showSendToCloud: true};
    Plotly.newPlot('myDiv', data, layout, config);
  }

  onResize(event) {
    console.log('chart resized: ', event);
    this.makePlot();
  }
}
