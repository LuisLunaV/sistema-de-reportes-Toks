import { getInformation } from "../../services/moduloUno/api-get.js";
import { showBranchInformation } from "../../components/home/tableRow.js";
import { apexChart } from "../../util/index.js";

const filterByDates = async (payload) => {
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
