import { groupDateQuantity } from './groupDateAndQuantity.js';
export const apexChart = (data) => {
  if (!data) return;

  const { uniqueDates, reducedData, brandsAndQuantity } = groupDateQuantity( data );

  if (uniqueDates.length< 5) {
    var options = {
      series: [{
        name: 'venta',
        data: brandsAndQuantity.map( value => value.venta)
      }
      ],
      chart: {
      height: 350,
      type: 'bar'
    },
    colors: [
      '#808B96',
      '#566573',
      '#2C3E50',
      '#273746',
      '#212F3D',
      '#1C2833',
    ],
    plotOptions: {
      bar: {
        columnWidth: '45%',
        distributed: true,
      }
    },
    dataLabels: {
      enabled: false
    },
    legend: {
      show: false
    },
    xaxis: {
      categories: brandsAndQuantity.map( value => value.name),
      labels: {
        style: {
          colors: [
            '#808B96',
            '#566573',
            '#2C3E50',
            '#273746',
            '#212F3D',
            '#1C2833',
          ],
          fontSize: '12px'
        }
      }
    },
    yaxis: {
      labels: {
        formatter: function (value) {
          return "$" + value;
        }
      }
    },
    };

  } else {
    var options = {
      series: reducedData,
      chart: {
        height: 350,
        type: 'area'
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'smooth'
      },
      xaxis: {
        type: 'datetime',
        categories: uniqueDates
      },
      yaxis: {
  
        labels: {
          formatter: function (value) {
            return "$" + value;
          }
        }
      },
      tooltip: {
        x: {
          format: 'dd/MM/yy HH:mm'
        },
      },
      colors: [
        '#808B96',
        '#566573',
        '#2C3E50',
        '#273746',
        '#212F3D',
        '#1C2833',
      ]
    };
  }



  const divChart = document.querySelector("#chart");
  if (divChart.childNodes[0]) divChart.innerHTML = '';
  var chart = new ApexCharts(divChart, options);
  chart.render();
}
