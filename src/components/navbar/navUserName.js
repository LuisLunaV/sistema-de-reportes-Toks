import { RadioRange } from '../../class/dateClasses/RadiosRange.class.js';

const divUserName = document.querySelector('#cont-name-perfil');
const userNameHtml =( name )=>{
   const html = `<span id="numero-empleado"><i class="bi bi-person-fill-check me-2"></i>${name}</span>`;
   divUserName.innerHTML = html ;
}


 
const showUserName = () =>{
    const radioRange = new RadioRange();
    const { User_Name } = JSON.parse( sessionStorage.getItem('user'));
    userNameHtml( User_Name );

    // ejecutamos la consulta actual
    radioRange.setRadioDate('radioHoy');
    radioRange.setRadioDate('radioHoyResp');

}

export{
    showUserName
}