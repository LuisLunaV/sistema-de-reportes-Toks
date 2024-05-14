import { formData } from './formData.js';
import { authFailure } from './validators/validateAuthentication.js';
import { validateSessionToken } from './validators/validateSessionToken.js';
import { detectWindow } from './detectWindow.js';
import { mainMenu } from './mainMenu.js';
import { dateRangeChanges } from './datesRanges/dateRangesChanges.js';


export{
    detectWindow,
    formData,
    authFailure,
    validateSessionToken,
    mainMenu,
    dateRangeChanges
}