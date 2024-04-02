import { getInformation } from '../services/moduloUno/api-get.js';
import { formAuth, eventDateRanges } from '../events/index.js'
import { showUserName } from'../components/index.js';
import { detectWindow,validateSessionToken, singOff } from '../helper/index.js';
import { apexChart, loadedComponents } from '../util/index.js'
class Main{
    constructor(){
        this.window = detectWindow();
        this.loadedComponents = loadedComponents();
        this.auth();
        this.home();
    }

    auth(){
        if( this.window === '/login'){
            formAuth();
        }
    }

    home(){
        if( this.window === '/home'){
            validateSessionToken();
            showUserName();
            apexChart();
            eventDateRanges();
            getInformation()
            singOff();
        }
    }


}

export default Main;