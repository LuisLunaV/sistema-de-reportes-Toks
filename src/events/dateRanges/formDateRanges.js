import { RadioRange } from '../../class/dateClasses/index.js';

const formDateRanges = document.querySelector("#form-date-ranges");

export const eventDateRanges = () => {
  const radioRange = new RadioRange();
  const range = [];

  formDateRanges.addEventListener("change", ({ target }) => {
    const typeElemnt = target.type;

    switch (typeElemnt) {
      case "radio":
        radioRange.getRadioDate( target.id );
        break;

      case "select-one":
        console.log("select:", target.value);
        break;
        
      default:
        range.push(target.value);
        break;
    }

    if (range.length > 1) {
      console.log(range);
    }
  });
};
