import { DateRanges } from './index.js';
export class SelectRange extends DateRanges {
    constructor() {
      super();
    }
    getSelectMonth( value ){
      
      const { year } = this.getCurrentDay();
      
      let selectMonth = parseInt(value);
      let startDate, endDate;
      
      switch( selectMonth ){
        case 2:
          const isLeapYear = ( year % 4 === 0 && year % 100 !==0 )||(year%400===0);
          const dayInFebruary = (isLeapYear) ? 29:28;
      
          startDate = `${year}/${this.formatMonth( value )}/01`;
          endDate  = `${year}/${this.formatMonth( value )}/${this.formatDay( dayInFebruary )}`;
          break;
        case 4: case 6: case 9: case 11:
          startDate = `${year}/${this.formatMonth(value)}/01`;
          endDate  = `${year}/${this.formatMonth(value)}/'30'`;
          break;
        default:
          startDate = `${year}/${this.formatMonth(value)}/01`;
          endDate  = `${year}/${this.formatMonth(value)}/'31'`;
          break;
      }

  this.type = "Select_Mes";
   this.consultDay = ''; 
   if(this.rangeDate.length>0){ this.rangeDate=[]}
   this.rangeDate.push( startDate, endDate);
   this.sendInformation();
      // console.log( value)
    }
  }