const tbody = document.querySelector('tbody');
const tableRowHtml =( properties )=>{
    const html = `<tr>
    <td class='alinear'>${properties.Id_Local}</td>
    <td class='alinear'>${properties.Nombre}</td>
    <td class='alinear'>$${properties.Venta_Neta}</td>
    <td class='alinear'>$${properties.Ticket_Promedio}</td>
    <td class='alinear'>${properties.Numero_De_Tickets}</td>
    <td class='alinear'>${properties.Fecha}</td>

  </tr>`;

  tbody.innerHTML += html;
}

const showBranchInformation =( data )=>{
  if(tbody.childElementCount>0) tbody.innerHTML = '';
  data.forEach( tableRowHtml );
};

export{
  showBranchInformation
}

    // <td class='alinear'>$${properties.Venta_Total}</td>