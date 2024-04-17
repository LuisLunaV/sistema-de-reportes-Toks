export const groupDateQuantity=( data )=>{

     // Agrupar los datos por sucursal
  const reducedData = data.reduce((acc, current) => {
    const found = acc.find(item => item.name === current.Nombre);
    const index = acc.indexOf(found);
    if (index !== -1) {
      acc[index].data.push({ x: moment.utc(current.Fecha).toISOString(), y: current.Venta_Neta });
    } else {
      acc.push({
        name: current.Nombre,
        data: [{ x: moment.utc(current.Fecha).toISOString(), y: current.Venta_Neta }]
      });
    }
    return acc;
  }, []);

  // Obtener fechas únicas y formatearlas con moment.js
  const uniqueDates = [...new Set(data.map(property => moment.utc(property.Fecha).toISOString()))];
  
  const brandsAndQuantity = reducedData.map( info =>{
    return{
      name: info.name,
      venta: info.data[0].y,
    }

  });

  return {
    reducedData,
    uniqueDates,
    brandsAndQuantity
  }
};