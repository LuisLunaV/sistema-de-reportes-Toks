import { detectWindow,validateSessionToken, singOff } from '../helper/index.js';
import { apexChart, loadedComponents } from '../util/index.js'
import { formAuth } from '../events/index.js'
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
            apexChart();
            singOff();
        }
    }


}

export default Main;