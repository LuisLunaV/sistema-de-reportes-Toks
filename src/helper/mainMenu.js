import { validateSessionToken } from './validators/validateSessionToken.js'

export const mainMenu =()=>{
  viewReports();
  singOff();
}

const viewReports=()=>{

  const btnViewReports = document.querySelector('#visualizar-reportes');
if( !btnViewReports )return;
btnViewReports.addEventListener('click',( event )=>{
window.location.replace('/reports')
});
}

const singOff = () => {
  const btnCerrar    = document.querySelector("#cerrarSesion"),
        btnCerrarDos = document.querySelector("#cerrarSesionDos");

  btnCerrar.addEventListener("click", () => {
    limpiarSessionStorage();
    validateSessionToken();
  });

  btnCerrarDos.addEventListener("click", () => {
    limpiarSessionStorage();
    validateSessionToken();
  });
};

function limpiarSessionStorage() {
  sessionStorage.removeItem("token");
  sessionStorage.removeItem("user");
}
