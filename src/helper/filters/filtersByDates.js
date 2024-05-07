import { getInformation } from "../../services/moduloUno/api-get.js";
import { showBranchInformation } from "../../components/home/tableRow.js";
import { apexChart } from "../../util/index.js";
import { detectWindow } from "../../helper/detectWindow.js";

const filterByDates = async (payload) => {

  // detectamos si la ventana donde estamos es la de reportes.
  if( detectWindow() === '/reports'){
    const map = new Map();
    map.set('Dates', JSON.stringify( payload))
    const data = map.get('Dates');
    console.log( JSON.parse(data))
    return;
  }

  // detectamos si la ventana donde estamos es de rango de fechas.
  
  const { Sucursales } = await getInformation();

  if (!payload.ConsultDay) {
    const startDate = payload.RangeDate[0];
    const endDate = payload.RangeDate[1];

    const filteredDates = Sucursales.filter((sucursal) => {
   
       const sucursalFecha = sucursal.Fecha.substring(0, 10);
      if (sucursalFecha >= startDate && sucursalFecha <= endDate) {
        return sucursal;
      }
    });

    apexChart( filteredDates )
    return showBranchInformation(filteredDates);
  }

  //Fecha unica
  const filteredDates = Sucursales.filter((sucursal) => {
    const sucursalFecha = sucursal.Fecha.substring(0, 10);
    return sucursalFecha === payload.ConsultDay;
  });
  
  apexChart( filteredDates )
  return showBranchInformation(filteredDates);
};

export { filterByDates };
