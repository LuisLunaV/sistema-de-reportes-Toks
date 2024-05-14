import { selectDateRanges } from "../../helper/selectDateRanges.js";
const formDateRanges = document.querySelector("#form-date-ranges");

export const eventDateRanges = () => {
  formDateRanges.addEventListener("change", ({ target }) => {
    const typeElemnt = target.type;

    //Seleccionamos los rangos de las fechas
    selectDateRanges(typeElemnt, target);
  });
};
