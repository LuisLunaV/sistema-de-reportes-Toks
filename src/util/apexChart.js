export const apexChart =( data )=>{

  if (!data) return;

  // Agrupar los datos por sucursal
  const reducedData = data.reduce((acc, current) => {
    const found = acc.find(item => item.name === current.Nombre);
    const index = acc.indexOf(found);
    if (index !== -1) {
      acc[index].data.push({ x: new Date(current.Fecha), y: current.Venta_Neta });
    } else {
      acc.push({
        name: current.Nombre,
        data: [{ x: new Date(current.Fecha), y: current.Venta_Neta }]
      });
    }
    return acc;
  }, []);

  // Obtener fechas únicas
  const uniqueDates = [...new Set(data.map((property) => property.Fecha))];


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
        // opposite: true,
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

      // colors: ['rgba(0, 0, 0, 0.5)'], 
      };
      const divChart = document.querySelector("#chart");
      if(divChart.childNodes[0]) divChart.innerHTML = '';
      var chart = new ApexCharts( divChart, options);
      chart.render();
}