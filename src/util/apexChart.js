export const apexChart =()=>{
    var options = {
        series: [{
        name: 'series1',
        data: [40, 50, 35, 10, 49, 60, 20, 11, 125] 
      }],
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
        categories: ['2023-01-01', '2023-01-02', '2023-01-03', '2023-01-04', '2023-01-05', '2023-01-06', '2023-01-07', '2023-01-08', '2023-01-09']
      },
      tooltip: {
        x: {
          format: 'dd/MM/yy HH:mm'
        },
      },
      colors: ['rgba(0, 0, 0, 0.5)'] 
      };

      var chart = new ApexCharts(document.querySelector("#chart"), options);
      chart.render();
}