import { RadioRange, SelectRange, MultiCalendarRange } from '../../class/dateClasses/index.js';

const formDateRanges = document.querySelector("#form-date-ranges");
const startDateInput = document.querySelector('#start-date'),
      endDateInput   = document.querySelector('#end-date');
export const eventDateRanges = () => {
  const radioRange  = new RadioRange();
  const selectRange = new SelectRange();
  const multiCalendarRange = new MultiCalendarRange();
  const rangeDates = [];

  formDateRanges.addEventListener("change", ({ target }) => {
    const typeElemnt = target.type;

    switch (typeElemnt) {
      case "radio":
        radioRange.setRadioDate( target.id );
        break;

      case "select-one":
        selectRange.setSelectMonth( target.value);
        break;
        
      default:
        rangeDates.push(target.value);
        break;
    }

    if (rangeDates.length > 1) {
      multiCalendarRange.setMulticalendarRange( rangeDates );
      while(rangeDates.length>0){
        rangeDates.pop()
      }

      setTimeout(()=>{
        startDateInput.value = '';
        endDateInput.value = '';
      },1000)
    }
  });
};
