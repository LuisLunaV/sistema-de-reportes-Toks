import { formData } from './formData.js';
import { authFailure } from './validators/validateAuthentication.js';
import { validateSessionToken } from './validators/validateSessionToken.js';
import { detectWindow } from './detectWindow.js';
import { mainMenu } from './mainMenu.js';


export{
    detectWindow,
    formData,
    authFailure,
    validateSessionToken,
    mainMenu
}