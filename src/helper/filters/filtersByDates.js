import { getInformation } from "../../services/moduloUno/api-get.js";
import { showBranchInformation } from "../../components/home/tableRow.js";
const filterByDates = async (payload) => {
  const { Sucursales } = await getInformation();

  if (!payload.ConsultDay) {
    const startDate = payload.RangeDate[0];
    const endDate = payload.RangeDate[1];

    const filteredDates = Sucursales.filter((sucursal) => {
      if (sucursal.Fecha >= startDate && sucursal.Fecha <= endDate) {
        return sucursal;
      }
    });

    return showBranchInformation(filteredDates);
  }

  const filteredDates = Sucursales.filter((sucursal) => {
    return sucursal.Fecha === payload.ConsultDay;
  });
  return showBranchInformation(filteredDates);
};

export { filterByDates };
