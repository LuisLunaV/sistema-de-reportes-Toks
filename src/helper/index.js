import { formData } from './formData.js';
import { authFailure } from './validateAuthentication.js';
import { validateSessionToken } from './validateSessionToken.js';
import { detectWindow } from './detectWindow.js';
import { singOff } from './singOff.js';


export{
    detectWindow,
    formData,
    authFailure,
    validateSessionToken,
    singOff
}