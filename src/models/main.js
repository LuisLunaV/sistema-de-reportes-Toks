import { detectWindow } from '../helper/detectWindow.js';
import { apexChart } from '../util/apexChart.js'
class Main{
    constructor(){
        this.window = detectWindow();
        this.apexChart = apexChart();
    }

}

export default Main;