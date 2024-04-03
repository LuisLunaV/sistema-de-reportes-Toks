import { DateRanges } from './index.js';
export class MultiCalendarRange extends DateRanges {
    constructor() {
      super();
    }
    setMulticalendarRange( array ){
      this.type='Multi_calendar';
      this.consultDay='';
   if(this.rangeDate.length>0){ this.rangeDate=[]}
   this.rangeDate.push(...array);
   this.sendInformation();

    }
  }
  