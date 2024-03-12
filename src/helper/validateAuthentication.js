const compararPasswords =()=>{
    const passwordInput       = document.getElementById("password");
    const repitePasswordInput = document.getElementById("repitePassword");

    if (passwordInput.value !== repitePasswordInput.value) {
        repitePasswordInput.classList.add('shake-horizontal');
            setTimeout(()=>{
        repitePasswordInput.classList.remove('shake-horizontal');
            }, 2000);
        return false;
        };

        return true;    
}

const  authFailure =( err )=>{
   const textBoxNumEmpleado = document.querySelector('#inputNumEmpleado'),
         textBoxPassword    = document.querySelector('#inputPassword');
         console.log(textBoxNumEmpleado)

    if( err.User_error ){
        textBoxNumEmpleado.classList.add('shake-horizontal');
        setTimeout(()=>{
        textBoxNumEmpleado.classList.remove('shake-horizontal');
        }, 4000)};

        if( err.Password_error ){
            textBoxPassword.classList.add('shake-horizontal');
            setTimeout(()=>{
            textBoxPassword.classList.remove('shake-horizontal');
            }, 4000)};
}

export{
    compararPasswords,
    authFailure
}