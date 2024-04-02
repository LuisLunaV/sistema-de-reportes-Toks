import { postAuthentication } from '../../services/auth/api-post.js'
import { formData, authFailure } from '../../helper/index.js';
export const formAuth =()=>{
    const loginForm          = document.querySelector('.form-login'),
          textBoxNumEmpleado = document.querySelector('#inputNumEmpleado'),
          textBoxPassword    = document.querySelector('#inputPassword');

          loginForm.addEventListener('submit', async( event )=>{

            event.preventDefault();
    
            const data = formData( loginForm );
        
            //Enviamos la data al backend y esperamos la respuesta
            const {token, user} = await postAuthentication(data)
            .catch( authFailure );
    
            const { User_Password, createdAt, updatedAt, ...rest } = user;
    
            //Guardamos las credenciales de sesion
            sessionStorage.setItem('token', token);
            sessionStorage.setItem('user', JSON.stringify( rest ));
    
            window.location = '/home';
    
            textBoxNumEmpleado.value = '';
            textBoxPassword.value = "";
        });
    
}