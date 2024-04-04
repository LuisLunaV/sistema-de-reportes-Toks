import { validateSessionToken } from './validators/validateSessionToken.js'
export const singOff = () => {
  const btnCerrar = document.querySelector("#cerrarSesion");

  btnCerrar.addEventListener("click", () => {
    limpiarSessionStorage();
    validateSessionToken();
  });
};

function limpiarSessionStorage() {
  sessionStorage.removeItem("token");
  sessionStorage.removeItem("user");
}
