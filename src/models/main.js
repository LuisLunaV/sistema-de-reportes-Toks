import { detectWindow } from '../helper/detectWindow.js';
import { apexChart } from '../util/apexChart.js'
import { formAuth } from '../events/index.js'
class Main{
    constructor(){
        this.window = detectWindow();
        this.auth();
        this.chart();
    }

    auth(){
        if( this.window === '/login'){
            formAuth();
        }
    }

    chart(){
        console.log(this.window)
        if( this.window === '/home'){
            apexChart();
        }
    }


}

export default Main;