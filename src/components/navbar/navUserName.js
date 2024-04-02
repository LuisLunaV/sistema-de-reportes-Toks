const divUserName = document.querySelector('#cont-name-perfil')
const userNameHtml =( name )=>{
   const html = `<span id="numero-empleado">${name}</span>`;
   divUserName.innerHTML = html ;
}


 
const showUserName = () =>{
    const { User_Name } = JSON.parse( sessionStorage.getItem('user'));
    userNameHtml( User_Name );
}

export{
    showUserName
}