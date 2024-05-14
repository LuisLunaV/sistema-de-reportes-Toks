import { formAuth, eventDateRanges, eventDateRangesResp, eventSelectReports } from '../events/index.js'
import { showUserName, showUserNameReport } from'../components/index.js';
import { detectWindow,validateSessionToken, mainMenu } from '../helper/index.js';
import { apexChart, loadedComponents } from '../util/index.js'
class Main{
    constructor(){
        this.window = detectWindow();
        this.loadedComponents = loadedComponents();
        this.auth();
        this.home();
        this.reports();
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
            eventDateRangesResp();
            mainMenu();
        }
    }

    reports(){
        if( this.window === '/reports'){
            validateSessionToken();
            showUserNameReport();
            eventSelectReports();
            mainMenu();
        }
    }


}

export default Main;