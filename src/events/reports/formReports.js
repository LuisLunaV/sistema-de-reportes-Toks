import { formData, dateRangeChanges } from "../../helper/index.js";
const formSelectReports = document.querySelector("#form-select-reports");

export const eventSelectReports = () => {
  //Detectamos si hubo un cambio en el rango de fechas.
  dateRangeChanges();

    formSelectReports.addEventListener("submit", (e) => {
      e.preventDefault();
      const checks = document.querySelectorAll('input[type="checkbox"]:checked');
      
      checks.forEach(index =>{
        console.log(index.value)
      })
  });
};


