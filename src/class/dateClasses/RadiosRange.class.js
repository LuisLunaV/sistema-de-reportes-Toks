import { DateRanges } from './index.js';

export class RadioRange extends DateRanges {
  constructor() {
    super();
  }

  setRadioDate(type) {
    switch (type) {
      case "radioHoy":
        this.handleRadioHoy();
        break;
      case "radioAyer":
        this.handleRadioAyer();
        break;
      case "radioSemana":
        this.handleRadioSemana();
        break;
        case "radioMes":
          this.handleRadioMes();
          break;
      default:
        console.error("Tipo de radio no válido.");
    }
  }

  handleRadioHoy() {
    const { day, month, year } = this.getCurrentDay();
    const formattedDay = this.formatDay(day);
    const formattedMonth = this.formatMonth(month + 1);

    this.type = "Hoy";
    this.rangeDate = [];
    this.consultDay = `${year}/${formattedMonth}/${formattedDay}`;
    this.sendInformation();
  }

  handleRadioAyer() {
    const { day, month, year } = this.getCurrentDay();
    let previousDay = day - 1;
    let previousMonth = month + 1;
    let previousYear = year;

    if (previousDay === 0) {
      if (previousMonth === 0) {
        previousDay = 31;
        previousMonth = 12;
        previousYear -= 1;
      } else {
        previousMonth -= 1;
        previousDay = new Date(year, month, 0).getDate();
      }
    }

    const formattedDay = this.formatDay(previousDay);
    const formattedMonth = this.formatMonth(previousMonth);

    this.type = "Ayer";
    this.rangeDate = [];
    this.consultDay = `${previousYear}/${formattedMonth}/${formattedDay}`;
    this.sendInformation();
  }

  handleRadioSemana() {
    const { day, month, year } = this.getCurrentDay();
    const { startDay, startMonth, startYear } = this.getWeekRange();

    const formattedDay        = this.formatDay(day);
    const formattedMonth      = this.formatMonth(month + 1);
    const formattedStartDay   = this.formatDay(startDay);
    const formattedStartMonth = this.formatMonth(startMonth + 1);

    const startDate = `${startYear}/${formattedStartMonth}/${formattedStartDay}`;
    const endDate = `${year}/${formattedMonth}/${formattedDay}`;

    this.type = "Semana_Actual";
    this.consultDay = ''; 
   if(this.rangeDate.length>0){ this.rangeDate=[]}
    this.rangeDate.push(startDate, endDate);
    this.sendInformation();
  }

  handleRadioMes(){
   let { day, month, year } = this.getCurrentDay()

   const formattedDay       = this.formatDay( day );
   const formattedMonth     = this.formatMonth(month + 1);

   const startDate  = `${year}/${formattedMonth}/01`;
   const currentDay = `${year}/${formattedMonth}/${formattedDay}`;
   this.type = "Mes_Actual";
   this.consultDay = ''; 
   if(this.rangeDate.length>0){ this.rangeDate=[]}
   this.rangeDate.push( startDate, currentDay);
   this.sendInformation();
  }

}
