import { RadioRange, SelectRange, MultiCalendarRange } from '../class/dateClasses/index.js';

const startDateInput = document.querySelector('#start-date'),
      endDateInput   = document.querySelector('#end-date'),
      startDateInputResponsive = document.querySelector('#start-date-resp'),
      endDateInputResponsive   = document.querySelector('#end-date-resp');
      const rangeDates = [];

export const selectDateRanges =( typeElemnt, target )=>{

  const radioRange  = new RadioRange();
  const selectRange = new SelectRange();
  const multiCalendarRange = new MultiCalendarRange();

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
          endDateInput.value   = '';
          startDateInputResponsive.value = '';
          endDateInputResponsive.value = '';
        },1000)
      }
}