export class DateRanges {
  constructor() {
    const { User_Name } = JSON.parse(sessionStorage.getItem("user"));
    this.rangeDate = [];
    this.date = new Date();
    this.name = User_Name;
    this.consultDay ='';
    this.type ='';
  }

  sendInformation() {
    const payload = {
      Name: this.name,
      Type: this.type,
      ConsultDay: this.consultDay,
      RangeDate: this.rangeDate,
    };
    console.log(payload);
  }
  getCurrentDay() {
    let day = this.date.getDate();
    let month = this.date.getMonth();
    let year = this.date.getFullYear();

    return {
      day,
      month,
      year,
    };
  }

  getWeekRange() {
    const firstDayOfWeek = new Date(this.date);

    const currentDayOfWeek = this.date.getDay();
    const diffFirstDay =
      this.date.getDate() - currentDayOfWeek + (currentDayOfWeek === 0 ? -6 : 1);

    firstDayOfWeek.setDate(diffFirstDay);
    let startDay   = firstDayOfWeek.getDate()
    let startMonth = firstDayOfWeek.getMonth()
    let startYear  = firstDayOfWeek.getFullYear()

    return{
      startDay,
      startMonth,
      startYear
    }
  }

  getFirstDayMonth(){
    
  }
}




